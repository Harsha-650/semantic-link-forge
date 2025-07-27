import { useEffect, useState } from 'react';

interface StatsCounterProps {
  target: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export const StatsCounter = ({ target, label, suffix = '', duration = 2000 }: StatsCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold bg-gradient-to-r from-neural to-intelligence bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};