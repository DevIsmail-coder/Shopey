
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Menpage from './pages/menpage'
import Women from './pages/women'
import Baby from './pages/baby'
import Details from './pages/details'
import Login from './pages/login'
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import Cart from './pages/cart'
import Contact from './pages/contact'
import HomeLayout from './routes/HomeLayout'
import Home from './pages/home'
import Email from './pages/emailVerification'
import Password from './pages/forgetpassword'
import Reset from './pages/resetpassword'




function App() {
  
    const routes = createBrowserRouter([
      {
        path: "/",
        element: <HomeLayout />,
        children:[
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/cart",
            element: <Women />
          },
          {
            path: "/babypage",
            element: <Baby/>
          },
          {
            path: "/detailspage",
            element: <Details />
          },
          {
            path: "/menpage",
            element: <Menpage />
          },
          {
            path: "/checkout",
            element: <Checkout />
          },
          {
            path: "/cart",
            element: <Cart />
          },
          {
            path: "/contact",
            element: <Contact />
          }
        ]
        
      },
      
      {
        path: "/loginpage",
        element: <Login />
      },
      {
        path: "/signuppage",
        element: <Signup />
      },
      {
        path: "/emailverification/:token",
        element: <Email />
      },
      {
        path: "/forgetpassword",
        element: <Password/>
      },
      {
        path: "/resetpassword/:token",
        element: <Reset />
      }

    ])
  return <div className='Appbody'>
    <RouterProvider router={routes} />
  </div>
}

export default App
