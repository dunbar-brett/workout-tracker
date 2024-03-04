import { useState, ChangeEvent } from 'react';
import exercises from '../../utils/defaultWorkouts.json';

interface Exercise {
  routine: string;
  bodyTarget: string;
}

const routines = exercises.filter((exercise: Exercise) => 
  exercise.routine === 'A' && exercise.bodyTarget === 'upper'
);

function WorkoutForm() {
  const [weights, setWeights] = useState<{ [key: string]: string }>({});

  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>, exercise: string) => {
    setWeights(prevWeights => ({ ...prevWeights, [exercise]: event.target.value }));
  };
  
  return (
    <form>
      {routines.map((exercise) => (
        <div key={exercise.name}>
          <label htmlFor={exercise.weight}>{exercise.name} -- Sets: {exercise.sets} Reps: {exercise.reps}</label>
          <input type="text"
            id={exercise.id.toString()}
            name={exercise.weight}
            value={weights[exercise.name] || ''}
            onChange={(event) => handleWeightChange(event, exercise.name)}
            placeholder={exercise.previousWeight}/>
        </div>
      ))}
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;