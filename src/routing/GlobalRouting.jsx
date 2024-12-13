/* eslint-disable */
import {createBrowserRouter} from 'react-router-dom'
import Layout from '../component/Layout'
import Landing from '../pages/Landing'
import HomePage from '../pages/HomePage'
import Electronics from '../component/Electronics'
import Medical from '../component/Medical'
import HouseHold from '../component/HouseHold'
import Grocerries from '../component/Grocerries'
import Cart from '../component/Cart'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import SignUpComponent from '../component/SignUpComponent'
import UpdateCard from '../component/UpdateCard'


export const globalRoute = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Landing/>
            },
            {
                path:"/homePage",
                element:<HomePage/>,
                children:[
                    {
                        path:"/homePage",
                        element:<Electronics/>
                    },
                    {
                        path:"/homePage/Medical",
                        element:<Medical/>,
                        // loader:async()=>{
                        //     let {data}=await axios.get("http://localhost:4500/Medical");
                        //     return data;
                        // }

                    },
                    {
                        path:"/homePage/houseHold",
                        element:<HouseHold/>
                    },
                    {
                        path:"/homePage/grocerries",
                        element: <Grocerries/>
                    },
                    {
                        path:"/homePage/cart",
                        element: <Cart/>
                    },
                    
                ]
            },
            {
                path:"/updateCard",
                element:<UpdateCard/>
            },
            {
                path: "/login",
                element:<Login/>,
                children:[
                    {
                        path:"/login",
                        element:<Login/>,
                    }

                ]   
            },
            {
                path:"/signUp",
                element:<SignUp/>,
                children: [
                    {
                        path:"/signUp",
                        element:<SignUpComponent/>,

                    }
                ]
            }
        ]
    }
])