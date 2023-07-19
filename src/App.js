import React, { lazy,Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , RouterProvider ,Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantDetails from './components/RestaurantDetails';
import Shimmer from './components/Shimmer';
import UserContext from './helper/UserContext';
import { Provider } from 'react-redux';
import store from './helper/store';
import Cart from './components/Cart';


const AppLayout = () => {

    const [user ,setuser]=useState({name : "Suryansh",email:"suryansh@gmail.com"})
    return (
        <>
        <Provider store={store}>
        <UserContext.Provider value={{user:user}}>
            <Header />
            <Outlet/>
            <Footer />
            </UserContext.Provider>
            </Provider>
        </>
    );
};

const Instamart = lazy(()=>import("./components/Instamart"))

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
               element:<Contact/>
            },
            {
                path:'/cart',
               element:<Cart/>
            },
            {
                path:'/instamart',
               element:
               <Suspense fallback={<Shimmer/>}>
                   <Instamart/>
               </Suspense>
            },
            {
                path:'/restaurant/:resId',
               element:<RestaurantDetails/>
            },
        ]
        
    },
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>)