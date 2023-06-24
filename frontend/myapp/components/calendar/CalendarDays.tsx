import { dayNames, cn } from "../../utils/cn";

const CalendarDays: React.FC = () => {
  return (
    <div className="grid grid-cols-7 mt-4">
      {dayNames.map((day, i) => (
        <div
          key={i}
          className={cn(
            "flex justify-center items-center text-sm text-blue-500 w-full py-2",
            (day === "Sun" || day === "Sat") &&
              "text-orange-400 bg-orange-50 rounded-t-lg"
          )}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
