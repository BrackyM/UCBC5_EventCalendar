// Constant that determines the current date / time of the user
const currentDay = moment().format("MMMM Do YYYY,");
const container = $(".container");

// Variable for the site to coorelate the current time block with the time displayed from their computer
const currentHour = moment().hours();

$("#currentDay").text(currentDay);

// Save Events

for (let i = 8; i < 18; i++) {
  let storageText = "";
  let localStorageKey = "hour-" + i;

  console.log(localStorageKey);
  console.log(localStorage.getItem(localStorageKey));

  if (localStorage.getItem(localStorageKey)) {
    storageText = localStorage.getItem(localStorageKey);
  }

  // Displays Past, Present, and Future time block with colored labels

  var hourClass;
  if (i < currentHour) {
    hourClass = "past";
  } else if (i === currentHour) {
    hourClass = "current-event";
  } else {
    hourClass = "future-event";
  }

  // If Else statement identifies if 12 shows AM or PM time. Allows the events to be stored / saved / changed in the containers

  if (i < 13) {
    container.append(`
    <div id="hour-${i}" class="row time-block"><div class="col-md-1 hour">
    ${i}${i === 12 ? "PM" : "AM"}  
    </div>
    <textarea class="col-md-10 description ${hourClass}">${storageText}                                              
    </textarea>
    <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>             
    </div>                                                                                                    
    `);
  } else {
    container.append(`
    <div id="hour-${i}" class="row time-block"><div class="col-md-1 hour">
    ${i - 12}PM
    </div>
    <textarea class="col-md-10 description ${hourClass}">${storageText}                                              
    </textarea>
    <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>             
    </div>
    `);
  }
}

// Save button functionality (locally stores events)

const saveBtn = $(".saveBtn");

$(".saveBtn").on("click", function () {
  // finding nearby values
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});
