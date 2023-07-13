"use client"

import { useState } from 'react';
import Month from '@/components/Month';
import CalendarRow from '@/components/CalendarRow';
import Maramataka from '@/components/Maramataka';

export default function Home() {
  // Use state to manage the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Month selectedDate={selectedDate} />
      <CalendarRow selectedDate={selectedDate} onDateSelect={handleDateSelect} />
      <Maramataka selectedDate={selectedDate} />
    </div>
  );
}
