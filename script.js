const eventTypeSelect = document.getElementById('event-type');
const locationContainer = document.getElementById('location-container');
const webinarLinkContainer = document.getElementById('webinar-link-container');

eventTypeSelect.addEventListener('change', () => {
  if (eventTypeSelect.value === 'online') {
    locationContainer.style.display = 'none';
    webinarLinkContainer.style.display = 'block';
  } else {
    locationContainer.style.display = 'block';
    webinarLinkContainer.style.display = 'none';
  }
});

$(document).ready(function() {
    $.ajax({
      url: "http://localhost:5000/events",
      type: "GET",
      dataType: "json",
      success: function(data) {
        var events = data.events;
        var tableRows = "";

        $.each(events, function(index, event) {
          tableRows += "<tr>";
          tableRows += "<td>" + event.event_name + "</td>";
          tableRows += "<td>" + event.description + "</td>";
          tableRows += "<td>" + event.event_date + "</td>";
          tableRows += "<td>" + event.event_time + "</td>";
          tableRows += "<td>" + event.organizer_phone + "</td>";
          tableRows += "<td>" + event.organizer_email + "</td>";
          tableRows += "<td>" + event.seating_capacity + "</td>";
          tableRows += "<td>" + event.event_type + "</td>";
          tableRows += "<td>" + event.location + "</td>";
          tableRows += "<td>" + event.webinar_link + "</td>";
          tableRows += "<td>" + event.attachment + "</td>";
          tableRows += "</tr>";
        });

        $("#events-table tbody").html(tableRows);
      }
    });
  });
