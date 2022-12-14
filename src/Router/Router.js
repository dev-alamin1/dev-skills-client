import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error';
import Home from '../Components/Pages/Home';
import Main from '../Layout/Main';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Courses from '../Components/Pages/Courses';
import CourseDetails from '../Components/Pages/CourseDetails';
import Checkout from '../Components/Pages/Checkout';
import PrivateRoute from './PrivateRoute';
import Blog from '../Components/Pages/Blog';
import Faq from '../Components/Pages/Faq';


/*
|---------------------------
| Website Router And Element 
|---------------------------
*/
const router = createBrowserRouter([

    {
      path:'/',
      loader:()=>fetch('https://dev-skill-server-alaminmondalcse-gmailcom.vercel.app/courses'),
      element:<Main/>,
      errorElement: <Error/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/courses',
          element:<Courses/>
        },

        {
            path:'/course/:id',
            loader:({params})=>{
              return fetch(`https://dev-skill-server-alaminmondalcse-gmailcom.vercel.app/course/${params.id}`);
            },
            element:<CourseDetails/>
        },

        {
            path:'/checkout/course/:id',
            loader:({params})=>{
              return fetch(`https://dev-skill-server-alaminmondalcse-gmailcom.vercel.app/course/${params.id}`);
            },
            element:<PrivateRoute><Checkout/></PrivateRoute>
        },

        {
            path:'/blog',
            element:<Blog/>
        },

        {
            path:'/faq',
            element:<Faq/>
        },

        {
          path:'/login',
          element:<Login/>
        },

        {
          path:'/register',
          element:<Register/>

        }
      ]
    }
  ]);

 export default router;
