import './App.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './routes/AppRouter'


function App() {

  return (
    <div className='text-left'>
        <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
