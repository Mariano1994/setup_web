import { generateDatesFromYearBegnning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBegnning();

const minimumSummaryDatesSize = 20 * 7;
const amountofDatesToFill = minimumSummaryDatesSize - summaryDates.length;

console.log(summaryDates);
export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className=" grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}- ${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className=" grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return <HabitDay key={date.toDateString()} />;
        })}

        {amountofDatesToFill > 0 &&
          Array.from({ length: amountofDatesToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className=" w-9 h-9 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
