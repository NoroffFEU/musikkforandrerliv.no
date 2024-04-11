import { months } from "./calendar.mjs"

const currentDate = new Date()
// Placeholder events
const events = [
  {
    date: new Date(2024, 10, 25),
    title: "Holiday Giving Campaign Kickoff",
    href: "pages/event.html",
  },
  {
    date: new Date(2024, 4, 20),
    title: "MMF Annual Charity Concert",
    href: "pages/event.html",
  },
  {
    date: new Date(2024, 5, 10),
    title: "Run for Music 5K Charity Race",
    href: "pages/event.html",
  },
  {
    date: new Date(2024, 6, 15),
    title: "MMF Culture and Arts Festival",
    href: "pages/event.html",
  },
  {
    date: new Date(2024, 7, 25),
    title: "Back-to-School Fundraiser Gala",
    href: "pages/event.html",
  },
]

// Ordered list element which will contain our events
const eventList = document.querySelector("ol.js-event-list")

// Function to sort the events by dates
function getSortedEvents(listOfEvents) {
  if (!listOfEvents?.length) return

  // Create a copy of the event-list to avoid mutating the original
  const newList = [...listOfEvents]

  // Filter out past events
  const upcomingEvents = newList.filter(event => event.date >= currentDate);

  return upcomingEvents.sort((a, b) => {
    // Compare years
    if (a.date.getFullYear() !== b.date.getFullYear()) {
      return a.date.getFullYear() - b.date.getFullYear()
    }

    // Compare months
    if (a.date.getMonth() !== b.date.getMonth()) {
      return a.date.getMonth() - b.date.getMonth()
    }

    // Compare dates
    return a.date.getDate() - b.date.getDate()
  })
}

function getEvents() {
  // If no events, return
  if (!events?.length) return

  const sortedEvents = getSortedEvents(events)

  // Variable to store the innerHTML
  let list = ""

  // Slice the array to avoid breaking UI if more than 5 events
  // then map over the sorted events and create a list of elements
  sortedEvents
    .slice(0, 5)
    .map(
      (event) =>
        (list += `<li><a href=${event.href}>${
          months[event.date.getMonth()]
        } ${event.date.getDate()}, ${event.date.getFullYear()} - ${
          event.title
        }</a></li>`)
    )

  // Update HTML of the event list
  eventList.innerHTML = list
}

getEvents()
