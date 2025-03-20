import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "../../data/landing-page-content.json"; // Importing JSON file

export default function CalenderSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const formattedEvents = data.calender.events.map((event) => ({
      ...event,
      date: new Date(event.date),
    }));
    setEvents(formattedEvents);
  }, []);

  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <section id="CalendarSection" className="w-full max-w-6xl mx-auto p-8">
      <h2 className="text-4xl mb-6 [font-family:var(--font-justAnotherHand)]">
        {data.calender.title}
      </h2>

      {/* Event List */}
      <div className="w-full flex max-md:flex-col items-center">
        <div className="flex flex-col gap-2 max-md:hidden ">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-red-100 w-[100%] px-4 py-2 text-lg font-normal">
              {event.date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              - {event.title}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="flex justify-center">
          <Calendar  prevLabel="<" nextLabel=">" 
            onChange={setSelectedDate}
            value={selectedDate}
            // tileClassName={({ date, view }) =>
            //   view === "month" &&
            //   events.some((e) => formatDate(e.date) === formatDate(date))
            //     ? "bg-red-200 text-red-900 rounded-md"
            //     : ""
            // }
            
            
            className=" p-4 border-1 border-red-400 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
