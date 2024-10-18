let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

// Events will have to be fetched and mapped over and set to the const "events"
const events = [
 new Date(2024, 3, 15),
 new Date(2024, 3, 20),
 new Date(2024, 3, 25),
];

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation span");

// Array of month names
export const months = [
 "January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December",
];

// Function to generate the calendar
const manipulate = () => {
 let dayone = new Date(year, month, 1).getDay() - 1;
 if (dayone < 0) dayone = 6;

 // Get the last date of the month
 let lastdate = new Date(year, month + 1, 0).getDate();

 // Get the day of the last date of the month (adjusted for Monday start)
 let dayend = new Date(year, month, lastdate).getDay() - 1;
 if (dayend < 0) dayend = 6;

 // Get the last date of the previous month
 let monthlastdate = new Date(year, month, 0).getDate();

 // Variable to store the generated calendar HTML
 let lit = "";

 // Loop to add the last dates of the previous month
 for (let i = dayone; i > 0; i--) {
  lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
 }

 // Loop to add the dates of the current month
 for (let i = 1; i <= lastdate; i++) {
  let isToday =
   i === date.getDate() &&
   month === new Date().getMonth() &&
   year === new Date().getFullYear()
    ? "active"
    : "";

  let isEvent = events.some((event) => {
   return (
    i === event.getDate() &&
    month === event.getMonth() &&
    year === event.getFullYear()
   );
  })
   ? "event"
   : "";

  lit += `<li class="${isToday} ${isEvent}">${i}</li>`;
 }

 // Loop to add the first dates of the next month
 for (let i = dayend; i < 6; i++) {
  lit += `<li class="inactive">${i - dayend + 1}</li>`;
 }

 // Update the text of the current date element
 currdate.innerText = `${months[month]} ${year}`;

 // Update the HTML of the dates element
 day.innerHTML = lit;
};

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach((icon) => {
 icon.addEventListener("click", () => {
  month = icon.id === "calendar-prev" ? month - 1 : month + 1;

  if (month < 0 || month > 11) {
   date = new Date(year, month, new Date().getDate());
   year = date.getFullYear();
   month = date.getMonth();
  } else {
   date = new Date();
  }

  manipulate();
 });
});
