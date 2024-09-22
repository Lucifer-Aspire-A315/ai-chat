import { Link } from 'react-router-dom'
import './chatList.css'
import { useQuery } from '@tanstack/react-query';

const ChatList = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['userChats'],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`,{
        credentials:"include",
      }).then((res) =>
        res.json(),
      ),
  });

  return (
    <div className='chatList'>
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create a New Chat </Link>
        <Link to="/">Explore Ai-Chat </Link>
        <Link to="/">Contacts </Link>
        <hr />
        <span className="title">RECENT CHATS</span>
        <div className="list">
            {isPending ? "Loading..." : error ? "Something went wrong!!" : data?.map((chat) =>
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>{chat.title}</Link>
            )}
            
            
        </div>
        <hr />
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span className='first'>Upgrade to Ai-Chats Pro</span>
                <span className='last'>Get Unlimited Excess to all Features</span>
            </div>
        </div>
        
    </div>
  )
}

export default ChatList