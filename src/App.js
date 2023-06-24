import React, { lazy,Suspense } from 'react';
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
// import Cart from './components/Instamart';


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
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