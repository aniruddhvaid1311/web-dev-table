import React, { useState } from 'react';
import ExerciseModal from './ExerciseModal.js';
import './ExerciseTable.css';
import './ShowMoreButton.css';


const ExerciseTable = () => {
  // Dummy data for the exercise table
  const exerciseData = [
    { date: '2024-05-01', type: 'Running', duration: '30 minutes', distance: '5 km' },
    { date: '2024-05-02', type: 'Cycling', duration: '45 minutes', distance: '10 km' },
    { date: '2024-05-03', type: 'Swimming', duration: '45 minutes', distance: '1 mile' },
    { date: '2024-05-04', type: 'Yoga', duration: '60 minutes', distance: '-' },
    { date: '2024-05-05', type: 'Weightlifting', duration: '40 minutes', distance: '-' },
    { date: '2024-05-06', type: 'Running', duration: '30 minutes', distance: '3 miles' },
    { date: '2024-05-07', type: 'Cycling', duration: '60 minutes', distance: '15 miles' },
    { date: '2024-05-08', type: 'Walking', duration: '45 minutes', distance: '2 miles' },
    { date: '2024-05-09', type: 'Hiking', duration: '90 minutes', distance: '5 miles' },
    // Add more dummy data as needed
  ];

  const [showAllRows, setShowAllRows] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };
  const handleShowMore = () => {
    setShowAllRows(!showAllRows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData.slice(0, showAllRows ? exerciseData.length : 5).map((exercise, index) => (
            <tr key={index} onClick={() => handleExerciseClick(exercise)}>
              <td>{exercise.date}</td>
              <td>{exercise.type}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showAllRows && <button className='show-more-button' onClick={handleShowMore}>Show More</button>}
      {selectedExercise && <ExerciseModal exercise={selectedExercise} onClose={() => setSelectedExercise(null)} />}

    </div>
  );
};

export default ExerciseTable;