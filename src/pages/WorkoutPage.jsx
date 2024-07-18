
import React, {  useState } from 'react'
import { WorkoutSearch } from '../components/WorkoutSearch'
import { WorkoutFilter } from '../components/WorkoutFilter'
import { WorkoutPagination } from '../components/WorkoutPagination'
import WorkoutsList from '../components/WorkoutsList'

import { useWorkouts } from '../context/workoutContext'
import { Link } from 'react-router-dom';

export const WorkoutPage = () => {
  const { state: workouts } = useWorkouts();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [workoutsPerPage, setWorkoutsPerPage] = useState(5);

  const {dispatch} = useWorkouts()

  

  const handleDelete = (name) =>{
     dispatch({type:'DELETE_WORKOUT', payload:name})
  }
  const filteredWorkouts = workouts
    .filter(workout => 
      workout.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === '' || workout.workoutType.toLowerCase() === filterType.toLowerCase())
    );

 
  const groupedWorkouts = filteredWorkouts.reduce((acc, workout) => {
    if (!acc[workout.name]) {
      acc[workout.name] = {
        name: workout.name,
        workoutTypes: [],
        totalWorkouts: 0,
        totalMinutes: 0,
      };
    }

    if (!acc[workout.name].workoutTypes.includes(workout.workoutType)) {
      acc[workout.name].workoutTypes.push(workout.workoutType);
    }
    acc[workout.name].totalWorkouts += 1;
    acc[workout.name].totalMinutes += parseInt(workout.minutes, 10);

    return acc;
  }, {});

Object.values(groupedWorkouts).forEach((workout)=>{
  workout.totalWorkouts = workout.workoutTypes.length
})

  const groupedWorkoutsArray = Object.values(groupedWorkouts);

  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = groupedWorkoutsArray.slice(indexOfFirstWorkout, indexOfLastWorkout);

  return (
    <div>
      <h1>Workout List</h1>
      <WorkoutSearch setSearchTerm={setSearchTerm} />
      <WorkoutFilter setFilterType={setFilterType} />
      <WorkoutsList handleDelete={ handleDelete}  workouts={currentWorkouts} />
      <WorkoutPagination 
        totalWorkouts={groupedWorkoutsArray.length} 
        workoutsPerPage={workoutsPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setWorkoutsPerPage = {setWorkoutsPerPage}
      />
      <button><Link to="/">Add New Workout</Link></button>
    </div>
  );
};

export default WorkoutPage;


