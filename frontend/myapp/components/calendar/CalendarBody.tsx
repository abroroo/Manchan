import { dayNames, cn } from "../../utils/cn";
import React, { useState, useMemo } from "react";
import {
  add,
  addDays,
  addHours,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isWithinInterval,
  parse,
  parseISO,
  set,
  startOfDay,
  startOfToday,
  startOfWeek,
  startOfMonth,
  getDate,
} from "date-fns";

interface CalendarBodyProps {
  days: Date[];
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
  availableTimesInThisMonth: number[];
  availableTimesInThisMonthForEachDay: Date[][];
}

const CalendarBody: React.FC<CalendarBodyProps> = ({
  days,
  selectedDay,
  setSelectedDay,
}) => {
  // display div of availables times
  const [calendarTouched, setCalendarTouched] = useState<boolean>(false);

  // handle dates
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const reservations = [
    addHours(today, 5).toString(),
    addHours(today, 6).toString(),
    addHours(today, 7).toString(),
    addHours(today, 8).toString(),
    addHours(today, 9).toString(),
    addDays(new Date(addHours(today, 4)), 3).toString(),
  ];

  // send available times for the selected day to the hours component
  let [freeTimes, setFreeTimes] = useState<Date[]>([]);
  
 // all days avaiilable times in this month until you change it 
  const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState<number[]>([])
  const [availableTimesInThisMonthForEachDay, setAvailableTimesInThisMonthForEachDay] = useState<Date[][]>([])

  // next and prev month functions
  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  // get available times for the selected day
  useMemo(() => {
    const StartOfToday = startOfDay(selectedDay);
    const endOfToday = endOfDay(selectedDay);
    // change your working hours here
    const startHour = set(StartOfToday, { hours: 10 });
    const endHour = set(endOfToday, { hours: 21, minutes: 59 });
    let hoursInDay = eachMinuteOfInterval(
      {
        start: startHour,
        end: endHour,
      },
      { step: 60 }
    );

    // filter the available hours
    let freeTimes = hoursInDay.filter(
      (hour) => !reservations.includes(parseISO(hour.toISOString()).toString())
    );
    setFreeTimes(freeTimes);
  }, [selectedDay]);

  // calculate the number of available times for each day in this month
  useMemo(() => {
    let thisMonthTimesLength: number[] = [];
    let thisMonthTimesEachDay: Date[][] = [];
    days.forEach((day, dayIdx) => {
      // get times
      const StartOfToday = startOfDay(day);
      const endOfToday = endOfDay(day);
      // change your working hours here
      const startHour = set(StartOfToday, { hours: 10 });
      const endHour = set(endOfToday, { hours: 21, minutes: 59 });
      let hoursInDay = eachMinuteOfInterval(
        {
          start: startHour,
          end: endHour,
        },
        { step: 60 }
      );
      // filter the available hours
      let freeTimes = hoursInDay.filter(
        (hour) =>
          !reservations.includes(parseISO(hour.toISOString()).toString())
      );
      thisMonthTimesLength.push(freeTimes.length);
      thisMonthTimesEachDay.push(freeTimes);
    });

    setAvailableTimesInThisMonth(thisMonthTimesLength);
    setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay);
  }, [currentMonth]);

  return (
    <div className="grid grid-cols-7 text-sm">
      {days.map((day, dayIdx) => (
        <div
          key={day.toString()}
          className={cn(
            dayIdx === 0 && colStartClasses[getDay(day) - 1],
            "h-14 justify-center flex items-center",
            (getDay(day) === 0 || getDay(day) === 6) && "bg-orange-50 rounded-lg"
          )}
        >
          <button
            onClick={() => {
              setCalendarTouched(true);
              setSelectedDay(day);
            }}
            className={cn(
              "w-12 h-12 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-50 relative group",
              isEqual(day, selectedDay) && "bg-orange-100 text-slate-900 text-lg",
              isEqual(today, day) && "text-blue-900 bg-blue-50",
              isWithinInterval(day, {
                start: startOfMonth(firstDayCurrentMonth),
                end: endOfMonth(firstDayCurrentMonth),
              }) &&
                availableTimesInThisMonth.includes(getDate(day)) &&
                availableTimesInThisMonthForEachDay
                  .find((dates) => isEqual(dates[0], day) || isEqual(dates[1], day))
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
            )}
            disabled={
              !(
                isWithinInterval(day, {
                  start: startOfMonth(firstDayCurrentMonth),
                  end: endOfMonth(firstDayCurrentMonth),
                }) &&
                availableTimesInThisMonth.includes(getDate(day)) &&
                availableTimesInThisMonthForEachDay.find((dates) =>
                  isEqual(dates[0], day) || isEqual(dates[1], day)
                )
              )
            }
          >
            {format(day, "d")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];




















// import { dayNames, cn } from "../../utils/cn";
// import React, {useState, useMemo} from "react";
// import {
//     add,
//     addDays,
//     addHours,
//     eachDayOfInterval,
//     eachMinuteOfInterval,
//     endOfDay,
//     endOfMonth,
//     endOfWeek,
//     format,
//     getDay,
  
//     isEqual,
//     isWithinInterval,
//     parse,
//     parseISO,
//     set,
//     startOfDay,
//     startOfToday,
//     startOfWeek,
//     startOfMonth,
//     getDate
   
//   } from "date-fns"

// interface CalendarBodyProps {
//     days: Date[];
//     selectedDay: Date;
//     setSelectedDay: (date: Date) => void;
//     availableTimesInThisMonth: number[];
//     availableTimesInThisMonthForEachDay: Date[][];
//   }
  
//   const CalendarBody: React.FC<CalendarBodyProps> = ({}) => {

//       // display div of availables times
//   const [calendarTouched, setCalendarTouched] = useState<Boolean>(false)

//   // handle dates
//   let today = startOfToday()
//   let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
//   let [selectedDay, setSelectedDay] = useState(today)
//   let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
//   let days = eachDayOfInterval({
//     start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
//     end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
//   })


//   const reservations = [
//     addHours(today, 5).toString(),
//     addHours(today, 6).toString(),
//     addHours(today, 7).toString(),
//     addHours(today, 8).toString(),
//     addHours(today, 9).toString(),
//     addDays(new Date(addHours(today, 4)), 3).toString(),
//   ]


//   // send available times for the selected day to the hours component
//   let [freeTimes, setFreeTimes] = useState<Date[]>([])

//   // all days avaiilable times in this month until you change it 
//   const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState<
//     number[]
//     >([])
//   const [availableTimesInThisMonthForEachDay, setAvailableTimesInThisMonthForEachDay] = useState<Date[][]>([])

//   // next and prev month functions
//   function prevMonth() {
//     let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
//     setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
//   }
//   function nextMonth() {
//     let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
//     setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
//   }



//   // get available times for the selected day
//   useMemo(() => {
//     const StartOfToday = startOfDay(selectedDay)
//     const endOfToday = endOfDay(selectedDay)
//     // change your working hours here
//     const startHour = set(StartOfToday, { hours: 10 })
//     const endHour = set(endOfToday, { hours: 21, minutes: 59 })
//     let hoursInDay = eachMinuteOfInterval(
//       {
//         start: startHour,
//         end: endHour,
//       },
//       { step: 60 }
//     )

//     // filter the available hours
//     let freeTimes = hoursInDay.filter(
//       (hour) => !reservations.includes(parseISO(hour.toISOString()).toString())
//     )
//     setFreeTimes(freeTimes)
    
//   }, [selectedDay])

//   // calculate the number of available times for each day in this month
//   useMemo(() => {
//     let thisMonthTimesLength: number[] = []
//     let thisMonthTimesEachDay: Date[][] = []
//     days.map((day, dayIdx) => {
//       // get times

//       const StartOfToday = startOfDay(day)
//       const endOfToday = endOfDay(day)
//       // change your working hours here
//       const startHour = set(StartOfToday, { hours: 10 })
//       const endHour = set(endOfToday, { hours: 21, minutes: 59 })
//       let hoursInDay = eachMinuteOfInterval(
//         {
//           start: startHour,
//           end: endHour,
//         },
//         { step: 60 }
//       )
//       // filter the available hours
//       let freeTimes = hoursInDay.filter(
//         (hour) =>
//           !reservations.includes(parseISO(hour.toISOString()).toString())
//       )
//       thisMonthTimesLength.push(freeTimes.length)
//       thisMonthTimesEachDay.push(freeTimes)
//     })

//     setAvailableTimesInThisMonth(thisMonthTimesLength)
//     setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay)

//   }, [currentMonth])




//     return (
//       <div className="grid grid-cols-7 text-sm">
//         {days.map((day, dayIdx) => (
//           <div
//             key={day.toString()}
//             className={cn(
//               dayIdx === 0 && colStartClasses[getDay(day) - 1],
//               "h-14 justify-center flex items-center",
//               (getDay(day) === 0 || getDay(day) === 6) &&
//                 "bg-orange-50 rounded-lg"
//             )}
//           >
//             <button
//               onClick={() => {
//                 setCalendarTouched(true);
//                 setSelectedDay(day);
//               }}
//               className={cn(
//                 "w-12 h-12 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-50 relative group",
//                 isEqual(day, selectedDay) &&
//                   "bg-orange-100 text-slate-900 text-lg",
//                 isEqual(today, day) && "text-blue-900 bg-blue-50",
//                 isWithinInterval(day, {
//                     start: startOfMonth(currentMonth),
//                     end: endOfMonth(currentMonth),
//                   }) &&
//                     availableTimesInThisMonth.includes(getDate(day)) && // Add this condition
//                     availableTimesInThisMonthForEachDay
//                       .find((dates) =>
//                         isEqual(dates[0], day) || isEqual(dates[1], day)
//                       )
//                       ? "cursor-pointer"
//                       : "cursor-not-allowed"
//                 )}
//                 disabled={
//                   !(
//                     isWithinInterval(day, {
//                       start: startOfMonth(currentMonth),
//                       end: endOfMonth(currentMonth),
//                     }) &&
//                     availableTimesInThisMonth.includes(getDate(day)) && // Add this condition
//                     availableTimesInThisMonthForEachDay
//                       .find((dates) =>
//                         isEqual(dates[0], day) || isEqual(dates[1], day)
//                       )
//                   )
//                 }
//               >
//                 {format(day, "d")}
//               </button>
//             </div>
//           ))}
//         </div>
//       );
//     };
    
//     export default CalendarBody;
    
//     let colStartClasses = [
//         "",
//         "col-start-2",
//         "col-start-3",
//         "col-start-4",
//         "col-start-5",
//         "col-start-6",
//         "col-start-7",
//       ]