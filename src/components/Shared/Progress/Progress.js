import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './Progress.css';

const Progress = () => {
    return (
        <div>
            <h2>HTML</h2>
            <ProgressBar completed={90} maxCompleted={100} />
            <h2>CSS</h2>
            <ProgressBar completed={80} maxCompleted={100} />
            <h2>Bootstrap</h2>
            <ProgressBar completed={85} maxCompleted={100} />
            <h2>Javascript</h2>
            <ProgressBar completed={70} maxCompleted={100} />
            <h2>React</h2>
            <ProgressBar completed={75} maxCompleted={100} />
        </div>
    );
};

export default Progress;