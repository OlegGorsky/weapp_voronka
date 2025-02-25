import React from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

export const ProgressSteps: React.FC = () => {
  const location = useLocation();
  const steps = [
    { path: '/', label: 'Шаг 0' },
    { path: '/video1', label: 'Шаг 1' },
    { path: '/video2', label: 'Шаг 2' },
    { path: '/video3', label: 'Шаг 3' }
  ];

  const currentStepIndex = steps.findIndex(step => step.path === location.pathname);

  return (
    <div className="mb-3 relative overflow-x-auto py-2">
      <div className="flex justify-between items-center relative min-w-[300px] px-6">
        <div className="absolute top-4 left-[calc(10%_+_16px)] right-[calc(10%_+_16px)] h-0.5">
          <div className="absolute inset-0 bg-gray-800" />
          <div 
            className="absolute left-0 h-full bg-green-500 transition-all duration-500"
            style={{ width: `${currentStepIndex * (100 / (steps.length - 1))}%` }}
          />
        </div>
        
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isUpcoming = index > currentStepIndex;
          
          return (
            <div key={step.path} className="relative flex flex-col items-center z-10">
              <div 
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center relative
                  transition-all duration-300 no-select
                  ${isCompleted ? 'bg-green-500' : ''}
                  ${isCurrent ? 'bg-blue-600 step-current' : ''}
                  ${isUpcoming ? 'bg-gray-800' : ''}
                `}
              >
                {isCompleted ? (
                  <Check className="text-white w-4 h-4" />
                ) : (
                  <span className={`${isCurrent ? 'text-white' : 'text-gray-400'} text-sm`}>
                    {index}
                  </span>
                )}
              </div>
              
              <span 
                className={`
                  mt-2 text-xs font-medium whitespace-nowrap
                  ${isCompleted ? 'text-green-400' : ''}
                  ${isCurrent ? 'text-blue-400' : ''}
                  ${isUpcoming ? 'text-gray-500' : ''}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};