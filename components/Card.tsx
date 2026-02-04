
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", noPadding = false }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-orange-50 ${noPadding ? '' : 'p-4'} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
