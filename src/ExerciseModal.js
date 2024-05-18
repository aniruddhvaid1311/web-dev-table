import React from 'react';
import './ExerciseModal.css';


const ExerciseModal = ({ exercise, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Exercise Details</h2>
        <p>Date: {exercise.date}</p>
        <p>Type: {exercise.type}</p>
        <p>Duration: {exercise.duration}</p>
        <p>Distance: {exercise.distance}</p>
      </div>
    </div>
  );
};

export default ExerciseModal;
