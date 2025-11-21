document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',

    // 👇 Add your public Google Calendar ID
    googleCalendarApiKey: 'AIzaSyAbSaIX3BK5RraJ02MvQeCbLzt2N36QztE',
    events: {
      googleCalendarId: 'your_calendar_id@gmail.com'
    },

    dateClick: function(info) {
      const time = prompt(`Book a time on ${info.dateStr}? (e.g., 14:00-15:00)`);
      if (time) {
        alert(`Booking saved for ${info.dateStr} at ${time}`);
        // Here you’d send data to your backend to actually add it to Google Calendar
      }
    }
  });

  calendar.render();
});
