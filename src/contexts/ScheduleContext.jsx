import React, { createContext, useState, useContext } from 'react';

const ScheduleContext = createContext();

export const ScheduleProvider2 = ({ children }) => {
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
    console.log('Adding new schedule:', newSchedule);
    setSchedules(prevSchedules => [...prevSchedules, newSchedule]);
    resetCurrentSchedule();
  };

  const resetCurrentSchedule = () => {
    console.log('Resetting current schedule');
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
    <ScheduleContext.Provider
      value={{
        schedules,
        currentSchedule,
        setCurrentSchedule,
        addSchedule,
        resetCurrentSchedule,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
