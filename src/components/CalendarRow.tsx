export default function CalendarRow({ selectedDate, onDateSelect }: { selectedDate: Date; onDateSelect: (date: Date) => void }) {
    // Get the current date
    const currentDate = new Date();
  
    // Create an array of 7 dates, with the selected date in the middle
    const dates = [];
    const startOffset = Math.floor(7 / 2);
    for (let i = -startOffset; i <= startOffset; i++) {
      const date = selectedDate ? new Date(selectedDate.getTime()) : new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
  
    // Function to format the date as a two-digit number
    function formatDay(date: Date) {
      return date.getDate().toString().padStart(2, '0');
    }
  
    return (
      <div className="calendar flex flex-row items-center justify-between lg:max-w-[40%]">
        {dates.map((date, index) => (
          <button
            key={index}
            disabled={date.getMonth() !== selectedDate.getMonth()}
            onClick={() => onDateSelect(date)}
            className="calendar-button"
          >
            {formatDay(date)}
          </button>
        ))}
      </div>
    );
  }
