import React, { useState } from 'react'
import { WorkoutForm } from '../components/WorkoutForm'
import { NavLink } from 'react-router-dom'
import { useWorkouts } from '../context/workoutContext'

export const HomePage = () => {


  const {dispatch} = useWorkouts()

  const addWorkout = (workout)=>{
    dispatch({type: 'ADD_WORKOUT' , payload:workout})
   
  }

  return (
    <>
     
    <h1>Health Tracker Challenge</h1>
    <WorkoutForm addWorkout = {addWorkout} />
    <button><NavLink  to="/workouts">View workouts</NavLink></button>
    </>
  )
}
