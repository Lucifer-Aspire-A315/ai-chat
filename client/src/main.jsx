import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage/HomePage.jsx'
import DashboardPage from './routes/DashboardPage/DashboardPage.jsx'
import ChatPage from './routes/ChatPage/ChatPage.jsx'
import RootLayout from './layouts/RootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout.jsx'
import SignInPage from './routes/SignInPage/SignInPage.jsx'
import SignUpPage from './routes/SignUpPage/SignUpPage.jsx'



const router = createBrowserRouter([
  
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/", element:<HomePage/>
      },
      {
        path:"/sign-in/*", element:<SignInPage/>
      },
      {
        path:"/sign-up/*", element:<SignUpPage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)