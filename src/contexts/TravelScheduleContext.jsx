import React, { createContext, useState, useContext } from 'react';

const TravelScheduleContext = createContext();

export const TravelScheduleProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState({
    name: '',
    date: { start: '', end: '' },
    location: '',
    companions: [],
    image: null,
    hashtags: [],
  });

  const addSchedule = newSchedule => {
    console.log('Adding new travel schedule:', newSchedule);
    setSchedules(prevSchedules => [...prevSchedules, newSchedule]);
    resetCurrentSchedule();
  };

  const resetCurrentSchedule = () => {
    console.log('Resetting current travel schedule');
    setCurrentSchedule({
      name: '',
      date: { start: '', end: '' },
      location: '',
      companions: [],
      image: null,
      hashtags: [],
    });
  };

  return (
    <TravelScheduleContext.Provider
      value={{
        schedules,
        currentSchedule,
        setCurrentSchedule,
        addSchedule,
        resetCurrentSchedule,
      }}>
      {children}
    </TravelScheduleContext.Provider>
  );
};

export const useTravelSchedule = () => useContext(TravelScheduleContext);
