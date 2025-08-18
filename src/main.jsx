import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout } from './components/index.js'
import Contactus from "./pages/Contactus"
import Aboutus from "./components/Aboutus.jsx";
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import Login  from './pages/Login.jsx'
import EditPost from "./pages/EditPost";
import TnC from './components/TnC.jsx'
import Privacy from './components/Privacy.jsx'
import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/aboutus",
            element: (
                <AuthLayout authentication={false}>
                    <Aboutus />
                </AuthLayout>
            ),
        },
        {
            path: "/contactus",
            element: (
                <AuthLayout authentication={false}>
                    <Contactus />
                </AuthLayout>
            ),
        },
        {
            path: "/Tnc",
            element: (
                <AuthLayout authentication={false}>
                    <TnC />
                </AuthLayout>
            ),
        },{
            path: "/Privacy",
            element: (
                <AuthLayout authentication={false}>
                    <Privacy />
                </AuthLayout>
            ),
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
