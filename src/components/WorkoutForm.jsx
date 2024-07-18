import React, { useState } from 'react'

export const WorkoutForm = ({addWorkout}) => {

    const [name, setName] = useState('');
    const [workoutType, setWorkoutType] = useState('');
    const [minutes, setMinutes] = useState('');
    
    const handleSubmit = (e)=>{
      e.preventDefault()
    
      addWorkout({name, workoutType, minutes})
      setName('')
      setWorkoutType('')
      setMinutes('')
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='User Name' value={name} onChange={(e)=>setName(e.target.value)} required />

        <input type='text' placeholder='Workout Type' value={workoutType} onChange={(e)=>setWorkoutType(e.target.value)} required />

        <input type='number' placeholder='Workout minutes' value={minutes} onChange={(e)=>setMinutes(e.target.value)} required />
        
        <button type='submit'>Add Workout</button>
    </form>
    </>
  )
}
