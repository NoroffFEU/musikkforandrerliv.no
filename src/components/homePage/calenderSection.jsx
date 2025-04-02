import { useEffect, useState } from 'react';

// Importing JSON file

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';

const formatDate = (date) => date.toISOString().split('T')[0];

export default function CalenderSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const { t } = useTranslation();
  const eventsArray = t('screens.upcomingEventsPreview.events', {
    returnObjects: true,
  });

  useEffect(() => {
    const formattedEvents = eventsArray.map((event) => ({
      ...event,
      date: new Date(event.date),
      dateEn: new Date(event.dateEn),
    }));
    setEvents(formattedEvents);
  }, [t]);

  return (
    <section
      id="CalendarSection"
      className="w-full max-w-6xl mx-auto py-8 px-4"
    >
      <h2 className="text-4xl mb-6 [font-family:var(--font-justAnotherHand)] md:text-left text-center">
        {t('screens.upcomingEventsPreview.title')}
      </h2>

      {/* Event List */}
      <div className="w-full flex max-md:flex-col items-center">
        <div className="flex flex-col w-3/4 gap-2 max-md:hidden ">
          {eventsArray.map((event, index) => (
            <div
              key={index}
              className="bg-red-100 w-full px-4 py-2 text-lg font-normal [font-family:var(--font-sans)]"
            >
              {event.date}- {event.title}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="flex justify-center w-1/4 max-sm:w-full min-w-[280px]">
          <Calendar
            prevLabel="<"
            nextLabel=">"
            value={selectedDate}
            onChange={setSelectedDate}
            className="p-4 border-2 [border-color:var(--color-sunset-red)!important] rounded-lg shadow-lg bg-white !text-gray-900"
            tileClassName={({ date, view }) =>
              view === 'month' &&
              events.some((e) => {
                return formatDate(e.dateEn) === formatDate(date);
              })
                ? '!bg-red-300 text-white font-bold rounded-md'
                : 'px-3 py-2 text-lg !text-gray-700'
            }
            navigationLabel={({ label }) => (
              <span className="text-base font-semibold">{label}</span>
            )}
          />
        </div>
      </div>
    </section>
  );
}
