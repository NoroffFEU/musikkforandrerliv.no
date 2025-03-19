import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from "../../data/landing-page-content.json";// Importing JSON file

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

    const formatDate = (date) => date.toISOString().split('T')[0];  

    return (
        <section className="w-full max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">{data.calender.title}</h2>
  
        {/* Event List */}
        <div className="flex flex-col gap-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-red-100 px-4 py-2 rounded-md shadow-sm text-lg font-medium"
            >
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
        <div className="mt-8 flex justify-center">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date, view }) =>
              view === "month" && events.some(e => formatDate(e.date) === formatDate(date))
                ? "bg-red-200 text-red-900 rounded-md"
                : ""
            }
            className="border-2 border-red-300 p-4 rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  }

  