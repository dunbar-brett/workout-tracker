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
    <form className='space-y-3 md:space-y-5 lg:w-[40rem] mx-auto'>
      {routines.map((exercise) => (
        <div key={exercise.name} className='flex-1 rounded-lg bg-gray-100 p-4 md:p-8'>
          <label htmlFor={exercise.weight} className="block text-sm font-medium text-gray-700">{exercise.name} -- Sets: {exercise.sets} Reps: {exercise.reps}</label>
          <input type="text"
            className='mt-1 p-2 w-full border rounded-md'
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