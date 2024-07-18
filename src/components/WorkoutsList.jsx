import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const WorkoutList = ({ workouts, handleDelete }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Workout Types</th>
            <th>Total Workouts</th>
            <th>Total Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.length >0 ? (
            workouts.map((workout, index) => (
              <tr key={index}>
                <td><Link to={`/charts/${workout.name}`}>{workout.name}</Link></td>
                <td>{workout.workoutTypes.join(', ')}</td>
                <td>{workout.totalWorkouts}</td>
                <td>{workout.totalMinutes} min</td>
                <td>
                  <button onClick={() => handleDelete(workout.name)}><FaTrashAlt /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No workouts</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default WorkoutList;
