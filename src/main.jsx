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
import App from './App'
import Projects from './components/Projects'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        errorElement={<ErrorPage />}
      >
        <Route
          path="/"
          element={<App />}
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
