import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout.jsx'
import Home from './components/Home.jsx'
import Users from './Pages/Users.jsx'
import AddUser from './Pages/AddUser.jsx'


const Router = createBrowserRouter([
  {
    path: '/',
    Component:MainLayout,
    children: [
      {
        index:true,
        Component:Home
      },
      {
        path: 'users',
        Component:Users
      },
      {
        path:'addUser',
        Component: AddUser
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
