import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout.jsx'
import Home from './components/Home.jsx'
import Users from './Pages/Users.jsx'
import AddUser from './Pages/AddUser.jsx'
import Update from './Pages/Update.jsx'


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
        loader: () => fetch('http://localhost:3000/users'),
        Component:Users
      },
      {
        path:'addUser',
        Component: AddUser
      },
      {
        path:'update/:id',
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: Update
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
