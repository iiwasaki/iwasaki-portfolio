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
import TowerSong from './components/TowerSong'
import Portraits from "./components/Portraits"
import SFSabotage from './components/SFSabotage'
import Publications from './components/Publications'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<Root />}
        path="/"
        errorElement={<ErrorPage />}
      >
        <Route
          index={true}
          element={<Home />}
        >
        </Route>
        <Route
          path="towersong"
          element={<TowerSong/>}
        ></Route>
        <Route
          path="potr"
          element={<Portraits/>}
        ></Route>
        <Route
          path="sfsabotage"
          element={<SFSabotage/>}
        ></Route>
        <Route
          path="publications"
          element={<Publications/>}
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
