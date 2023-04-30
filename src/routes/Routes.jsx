import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/pages/Home";
import Category from "../layouts/pages/shared/Category";
import News from "../layouts/pages/shared/News";
import NewsLayout from "../layouts/pages/shared/NewsLayout";
import LoginLayout from "../layouts/pages/shared/LoginLayout";
import Login from "../layouts/pages/shared/Login";
import Register from "../layouts/pages/shared/Register";
import PrivateRoute from "../layouts/pages/shared/PrivateRoute";
import Terms from "../layouts/pages/shared/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0" />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <Terms />
            },
        ]
    },
    {
        path: 'category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)          
            }
        ]
    }
])

export default router;