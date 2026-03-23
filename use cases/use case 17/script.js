const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const eventList = document.getElementById("eventList");
const selectedDateEl = document.getElementById("selectedDate");


let currentDate = new Date();


// Sample events
const events = {
  "2026-03-20": ["Meeting with team", "Project deadline"],
  "2026-03-25": ["Doctor appointment"],
  "2026-04-20": ["Birthday party", "Gym session"],
};


// Render calendar for current month
function renderCalendar(date) {
  calendarGrid.innerHTML = "";


  const year = date.getFullYear();
  const month = date.getMonth();


  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();


  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });


  // Empty slots for first day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarGrid.appendChild(emptyCell);
  }


  // Create day cells
  for (let day = 1; day <= lastDate; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;


    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;


    // Highlight today
    const today = new Date();
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayCell.classList.add("today");
    }


    // Highlight event dates
    if (events[fullDate]) {
      dayCell.classList.add("event-date");
    }


    dayCell.addEventListener("click", () => showEvents(fullDate));
    calendarGrid.appendChild(dayCell);
  }
}


// Show events on selected date
function showEvents(date) {
  selectedDateEl.textContent = date;
  eventList.innerHTML = "";


  if (events[date]) {
    events[date].forEach(ev => {
      const li = document.createElement("li");
      li.textContent = ev;
      eventList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No events.";
    eventList.appendChild(li);
  }
}


// Navigate months
prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});


nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});


// Initial render
renderCalendar(currentDate);



