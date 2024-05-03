("use Strict");

let offsetLeftValue = $(".btn-icon").offset().left;
// console.log(offsetLeftValue);
$(".content-sidebar").animate({ left: -offsetLeftValue }, 500);

// Closing Sidebar
$(".fa-xmark").click(function () {
  // console.log("close");
  $(".content-sidebar").animate({ left: -offsetLeftValue }, 1000);
});

// Opening Sidebar
$(".fa-bars").click(function () {
  // console.log("open");
  $(".content-sidebar").animate({ left: "0px" }, 1000);
});

$(".content-sidebar a[href^='#']").click(function (e) {
  // console.log(e.target);
  let getSectionAttr = $(e.target).attr("href");
  // console.log(getSectionAttr);
  let val = $(getSectionAttr).offset().top;
  // console.log(val);

  $("html").animate({ scrollTop: val }, 1500);
});

// Toggle To Open And Close Slider Down/up
$(".content-slider p").not(".first").slideUp(500);

$(".content-slider h3").click(function (e) {
  $(e.target).next().slideToggle(1000);
});

// Calculate Time Remaining
function calcTimeRemining() {
  let targetDate = new Date("2024, 5, 10").getTime();
  let myData = new Date().getTime();
  let timeDifference = targetDate - myData;
  // console.log(timeDifference);

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // console.log(days, hours, minutes, seconds);

  if (timeDifference == 0) {
    clearInerVal(counter);
  }

  return (reminingTime = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });
}

function countDowmTime() {
  let countTime = calcTimeRemining();
  let container = `
            <div class="col">
            <div class="p-5 border content-day">${countTime.days} Days left</div>
          </div>
          <div class="col">
            <div class="p-5 border content-hour">${countTime.hours} Hours</div>
          </div>
          <div class="col">
            <div class="p-5 border content-minute">${countTime.minutes} Min</div>
          </div>
          <div class="col">
            <div class="p-5 border content-second">${countTime.seconds} Sec</div>
          </div>
  `;
  $(".count-down").html(container);
}

let counter = setInterval(countDowmTime, 1000);
