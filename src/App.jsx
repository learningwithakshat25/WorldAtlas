import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Country from './Pages/Country';
import Contact from './Pages/Contact';
import AppLayout from './Components/Layout/Layout'
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "About",
            element: <About/>
          },
          {
            path: "Country",
            element: <Country/>
          },
          {
            path: "Contact",
            element: <Contact/>
          },
        ]
      },
      
    ]
  );
  return (
    <div className=' bg-black'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App