import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'

function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>Loading..</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
