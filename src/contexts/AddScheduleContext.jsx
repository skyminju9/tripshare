import React, { createContext, useContext, useState } from 'react';
import { dummySchedules } from '../dummyData';

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedules, setSchedules] = useState(dummySchedules);

  const addSchedule = (date, newSchedule) => {
    const updateSchedules = schedules.map(schedule => {
      if (schedule.date === date) {
        return {
          ...schedule,
          schedule: [...schedule.schedule, newSchedule],
        };
      }
      return schedule;
    });
    setSchedules(updateSchedules);
  };

  return (
    <ScheduleContext.Provider value={{ schedules, addSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => {
  return useContext(ScheduleContext);
};
