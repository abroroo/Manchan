import { ChevronLeft, ChevronRight } from "lucide-react";
import {format,isThisMonth, eachDayOfInterval, endOfMonth, endOfWeek, parse, startOfWeek, startOfToday} from "date-fns"
import React, {useState, useMemo} from "react";
import { dayNames, cn } from "../../utils/cn";


interface CalendarHeaderProps {
  currentMonth: string;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  prevMonth,
  nextMonth,
}) => {

    let today = startOfToday()
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
    let days = eachDayOfInterval({
      start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
    })

  return (
    <div className="grid grid-cols-3">
      <button
        type="button"
        onClick={prevMonth}
        disabled={isThisMonth(new Date(currentMonth))}
      >
        <ChevronLeft
          size={20}
          aria-hidden="true"
          className={cn(
            isThisMonth(new Date(currentMonth)) && "text-gray-300"
          )}
        />
      </button>
      <h2 className="font-semibold text-orange-950 justify-center flex">
        {format(firstDayCurrentMonth, " MMMM yyyy")}
      </h2>
      <button type="button" className="flex justify-end" onClick={nextMonth}>
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
};

export default CalendarHeader;
