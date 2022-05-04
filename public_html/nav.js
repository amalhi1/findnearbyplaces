CURR_ID = 0;
CUSTOMERS = {};

function goCreateAcc() {
  window.location = "./createAcc.html";
}

function createAcc() {
  window.location = "./index.html";
}

function goAddRev() {
  window.location = "./addReview.html";
}

function goAddPlace() {
  window.location = "./addPlace.html";
}

function goUpdatePlace() {
  window.location = "./updatePlace.html";
}

function goSearchPlace() {
  window.location = "./searchPlace.html";
}

function goIndex() {
  window.location = "./index.html";
}

function goDeletePlace() {
  window.location = "./deletePlace.html";
}

function goHome() {
  window.location = "./home.html";
}

function createAcc() {}

function addPlace() {}

function addReview() {}

function deletePlace() {}

function searchPlace() {}

function updatePlace() {}

function login() {
  if (usn in CUSTOMERS) {
    localStorage.setItem("customer_id", CUSTOMERS[usn]);
  } else {
    CUSTOMERS[usn] = CURR_ID + 1;
    CURR_ID += 1;
    localStorage.setItem("customer_id", CUSTOMERS[usn]);
  }
  window.location = "./home.html";
}

function logout() {
  localStorage.setItem("customer_id", null);
  window.location = "./index.html";
}
