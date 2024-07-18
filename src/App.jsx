import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { WorkoutPage } from './pages/WorkoutPage'
import { WorkoutProvider } from './context/workoutContext'
import ChartPage from './pages/ChartPage';
function App() {
  

  return (
    <>
    <WorkoutProvider>
      <Router>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/workouts' element = {<WorkoutPage/>}/>
          <Route path="/charts/:name" element={<ChartPage />} />
        </Routes>
      </Router>
    </WorkoutProvider>
    </>
  )
}

export default App
