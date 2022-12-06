let home = document.getElementById("homeCounter")
let guest = document.getElementById("guestCounter")
let homeCount = 0;
let guestCount = 0;



function homeIncrement1() {
  homeCount += 1
  home.innerText = homeCount
};
function guestIncrement1() {
  guestCount += 1
  guest.innerText = guestCount
};

function homeIncrement2() {
  homeCount += 2
  home.innerText = homeCount
};
function guestIncrement2() {
  guestCount += 2
  guest.innerText = guestCount
};

function homeIncrement3() {
  homeCount += 3
  home.innerText = homeCount
};
function guestIncrement3() {
  guestCount += 3
  guest.innerText = guestCount
};