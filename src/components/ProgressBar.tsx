import React from 'react';
import { motion } from 'framer-motion';

type ProgressBarProps = {
  skill: string;
  percentage: number;
};

const ProgressBar = ({ skill, percentage }: ProgressBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;