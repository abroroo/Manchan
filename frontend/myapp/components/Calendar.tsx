import CalendarHeader from "./calendar/CalendarHeader";
import CalendarDays from "./calendar/CalendarDays";
import CalendarBody from "./calendar/CalendarBody";

interface CalendarProps {
  currentMonth: string;
  prevMonth: () => void;
  nextMonth: () => void;
  days: Date[];
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
  availableTimesInThisMonth: number[];
  availableTimesInThisMonthForEachDay: Date[][];
}

const Calendar: React.FC<CalendarProps> = ({
  currentMonth,
  prevMonth,
  nextMonth,
  days,
  selectedDay,
  setSelectedDay,
  availableTimesInThisMonth,
  availableTimesInThisMonthForEachDay,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <CalendarHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarDays />
      <CalendarBody
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        availableTimesInThisMonth={availableTimesInThisMonth}
        availableTimesInThisMonthForEachDay={
          availableTimesInThisMonthForEachDay
        }
      />
    </div>
  );
};

export default Calendar;
