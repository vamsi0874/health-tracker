import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWorkouts } from '../context/workoutContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export const ChartPage = () => {
  const { name } = useParams();
  const { state: workouts } = useWorkouts();
  
  const userWorkouts = workouts.filter(workout => workout.name === name);

  if (userWorkouts.length === 0) {
    return (
      <div>
        <h1>No workouts found for {name}</h1>
        <Link to="/workouts">Back to Workouts</Link>
      </div>
    );
  }

  const workoutTypes = [...new Set(userWorkouts.map(workout => workout.workoutType))];
  

  const data = {
    labels: workoutTypes,
    datasets: [
      {
        label: 'Minutes',
        data: workoutTypes.map(type =>
          userWorkouts.filter(workout => workout.workoutType === type).reduce((total, workout) => total + parseInt(workout.minutes), 0)
        ),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const totalMinutes = userWorkouts.reduce((total, workout) => total + parseInt(workout.minutes), 0);

  return (
    <div>
      <h1>{name}'s Workouts</h1>
      <Bar data={data} />
      <p>Total time: {totalMinutes} minutes</p>
      <button><Link to="/workouts">Back to Workouts</Link></button>
    </div>
  );
};

export default ChartPage;

