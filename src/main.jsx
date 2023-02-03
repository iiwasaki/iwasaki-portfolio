import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

/* Pages */
import Root from "./components/Root"
import Home from "./components/Home"
import Projects from './components/Projects'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<Root />}
        errorElement={<ErrorPage />}
      >
        <Route
          path="/"
          element={<Home />}
        >
        </Route>
        <Route
          path="projects"
          element={<Projects/>}
        ></Route>
      </Route>


    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
