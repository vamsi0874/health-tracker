import { createContext, useContext, useReducer, useEffect } from "react";

const WorkoutContext = createContext();

let initialWorkouts = JSON.parse(localStorage.getItem('workouts'));

if (!initialWorkouts || initialWorkouts.length === 0) {
  initialWorkouts = [
    { name: 'vamsi', workoutType: 'cycling', minutes: 60 },
    { name: 'rocky', workoutType: 'running', minutes: 50 },
    { name: 'riya', workoutType: 'swimming', minutes: 50 }
  ];
}

const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      const updatedState = [...state, action.payload];
      localStorage.setItem('workouts', JSON.stringify(updatedState));
      return updatedState;

    case 'SET_WORKOUTS':
      localStorage.setItem('workouts', JSON.stringify(action.payload));
      return action.payload;

    case 'DELETE_WORKOUT':
      const newState = state.filter(workout => workout.name !== action.payload);
      localStorage.setItem('workouts', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export const WorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initialWorkouts);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(state));
  }, [state]);

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkouts = () => {
  return useContext(WorkoutContext);
};
