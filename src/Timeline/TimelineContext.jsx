import React, { createContext, useState, useContext } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (personName, type) => {
    const icons = { Call: "📞", Text: "💬", Video: "🎥" };
    
    const newEntry = {
      id: Date.now(),
      type: type,
      person: personName,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      icon: icons[type] || "⚡"
    };
    setActivities((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ activities, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);