import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './Progress.css';

const Progress = () => {
    return (
        <div>
            <h2>HTML</h2>
            <ProgressBar completed={180} maxCompleted={200} />
            <h2>CSS</h2>
            <ProgressBar completed={180} maxCompleted={200} />
            <h2>JAVASCRIPT</h2>
            <ProgressBar completed={180} maxCompleted={200} />
            <h2>REACT</h2>
            <ProgressBar completed={180} maxCompleted={200} />
            <h2>MONGODB</h2>
            <ProgressBar completed={180} maxCompleted={200} />
        </div>
    );
};

export default Progress;