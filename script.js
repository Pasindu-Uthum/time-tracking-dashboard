const titles = document.getElementsByClassName("data-title");
const currentTimes = document.getElementsByClassName("data-current");
const previousTimes = document.getElementsByClassName("data-previous");
const btn = document.getElementsByClassName("button");

fetch("data.json")
  .then(function (response) {
    // Getting the JSON file
    return response.json();
  })
  .then(function (obj) {
    // Craeting the titles of the boxes using a for loop
    for (let a = 0; a < titles.length; a++) {
      titles[a].innerHTML = obj.data[a].title;
    }

    // Make the button select the timeframes
    for (let i = 0; i < btn.length; i++) {
      // Showing the default values to the display scetion. Display the daily data to the preview
      for (let b = 0; b < currentTimes.length; b++) {
        currentTimes[b].innerHTML = obj.data[b].timeframes.daily.current;
      }
      for (let c = 0; c < previousTimes.length; c++) {
        previousTimes[c].innerHTML =
          "Yesterday - " + obj.data[c].timeframes.daily.previous;
      }

      // Changes the data of the preview on btn click
      btn[i].onclick = function () {
        let stage = btn[i].dataset.stage;

        // Show the values of daily data when daily btn onclick
        if (stage === "daily") {
          for (let x = 0; x < currentTimes.length; x++) {
            currentTimes[x].innerHTML = obj.data[x].timeframes.daily.current;
          }
          for (let x = 0; x < previousTimes.length; x++) {
            previousTimes[x].innerHTML =
              "Yesterday - " + obj.data[x].timeframes.daily.previous;
          }
        }
        // Show the values of weekly data when weekly btn onclick
        if (stage === "weekly") {
          for (let x = 0; x < currentTimes.length; x++) {
            currentTimes[x].innerHTML = obj.data[x].timeframes.weekly.current;
          }
          for (let x = 0; x < previousTimes.length; x++) {
            previousTimes[x].innerHTML =
              "Last Week - " + obj.data[x].timeframes.weekly.previous;
          }
        }
        // Show the values of monthly data when monthly btn onclick
        if (stage === "monthly") {
          for (let x = 0; x < currentTimes.length; x++) {
            currentTimes[x].innerHTML = obj.data[x].timeframes.monthly.current;
          }
          for (let x = 0; x < previousTimes.length; x++) {
            previousTimes[x].innerHTML =
              "Last Month - " + obj.data[x].timeframes.monthly.previous;
          }
        }
      };
    }
  })
  .catch(function (error) {
    // If there is an error with the JSON file or else
    console.log("Something went wrong with the JSON file");
    console.error(error);
  });
