CURR_ID = 0;
CUSTOMERS = {};

let backendAddress = "http://localhost:4002";

let apiAccess = {
  customer: (email, password) => {
    return fetch(`${backendAddress}/customer`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  login: (email, password) => {
    return fetch(`${backendAddress}/login`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  place: (name, category_id, latitude, longitude, description, customer_id) => {
    return fetch(`${backendAddress}/place`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category_id,
        latitude,
        longitude,
        description,
        customer_id,
      }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  category: (name) => {
    return fetch(`${backendAddress}/category`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  photo: (photo, place_id, review_id) => {
    return fetch(`${backendAddress}/photo`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ photo, place_id, review_id }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  review: (place_id, comment, rating) => {
    return fetch(`${backendAddress}/review`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ place_id, comment, rating }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  placePut: (place_id, name, category_id, latitude, longitude, description) => {
    return fetch(`${backendAddress}/place`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        place_id,
        name,
        category_id,
        latitude,
        longitude,
        description,
      }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  reviewPut: (review_id, comment, rating) => {
    return fetch(`${backendAddress}/review`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review_id,
        comment,
        rating,
      }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  photoPut: (photo_id, photo) => {
    return fetch(`${backendAddress}/photo`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photo_id,
        photo,
      }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  placeDel: (place_id) => {
    return fetch(`${backendAddress}/place`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ place_id }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  reviewDel: (review_id) => {
    return fetch(`${backendAddress}/review`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review_id }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },

  photoDel: (photo_id) => {
    return fetch(`${backendAddress}/photo`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ photo_id }),
    })
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        return x;
      });
  },
};

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

function goAddImg() {
  window.location = "./addImage.html";
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

function createAcc() {
  let username = document.getElementById("UserUsn2").value;
  let pwd = document.getElementById("UserPwd2").value;
  apiAccess
    .customer(username, pwd)
    .then((x) => {
      console.log(x);
      if (x.done) {
        if (username in CUSTOMERS) {
          localStorage.setItem("customer_id", CUSTOMERS[username]);
        } else {
          CUSTOMERS[username] = CURR_ID + 1;
          CURR_ID += 1;
          localStorage.setItem("customer_id", CUSTOMERS[username]);
        }
        window.location = "./index.html";
      } else {
        alert("Username already taken");
      }
    })
    .catch((e) => {
      console.log(e);
      alert("Something went wrong");
    });
}

function addPlace() {
  let name = document.getElementById("place_name_add").value;
  let cat_id = document.getElementById("cat_id_add").value;
  let lat = document.getElementById("lat_add").value;
  let long = document.getElementById("long_add").value;
  let desc = document.getElementById("desc_add").value;
  let cust_id = localStorage.getItem("customer_id");
  apiAccess.category(cat_id).then((x) => {
    if (x.done) {
      apiAccess.place(name, cat_id, lat, long, desc, cust_id).then((y) => {
        if (y.done) {
          alert("Place succesfully added");
        } else {
          alert("Place was not added due to an error");
        }
      });
    } else {
      alert("Category not added due to an error");
    }
  });
}

function addReview() {
  let place_id = document.getElementById("place_id_rev").value;
  let comment = document.getElementById("comment_rev").value;
  let rating = document.getElementById("rating_rev").value;
  apiAccess.review(place_id, comment, rating).then((x) => {
    if (x.done) {
      alert("Review added successfully");
    } else {
      alert("Place associated with review does not exist");
    }
  });
}

function deletePlace() {
  let place_id = document.getElementById("place_id_del").value;
  apiAccess.placeDel(place_id).then((X) => {
    if (X.done) {
      alert("Place deleted successfully");
    } else {
      alert("Place with given ID does not exist");
    }
  });
}

function searchPlace() {
  alert("This method is not functional yet");
}

function addPhoto() {
  var imageData;
  var fileList = document.getElementById("image_pic").files;
  var fileReader = new FileReader();
  if (fileReader && fileList && fileList.length) {
    fileReader.readAsArrayBuffer(fileList[0]);
    fileReader.onload = function () {
      imageData = fileReader.result;
      console.log(imageData);
      let place_id = document.getElementById("place_id_pic").value;
      let review_id = document.getElementById("rev_id_pic").value;
      apiAccess.photo(imageData, place_id, review_id).then((x) => {
        if (x.done) {
          alert("Photo was added successfully");
        } else {
          alert("Photo was not added due to an error");
        }
      });
    };
  }
}

function updatePlace() {
  let place_id = document.getElementById("place_id_up").value;
  let name = document.getElementById("place_name_up").value;
  let cat_id = document.getElementById("cat_id_up").value;
  let lat = document.getElementById("lat_up").value;
  let long = document.getElementById("long_up").value;
  let desc = document.getElementById("desc_up").value;
  apiAccess.category(cat_id).then((x) => {
    if (x.done) {
      apiAccess.placePut(place_id, name, cat_id, lat, long, desc).then((y) => {
        if (y.done) {
          alert("Place succesfully update");
        } else {
          alert("Place was not updated due to an error");
        }
      });
    } else {
      alert("Category not added due to an error");
    }
  });
}

function login() {
  let username = document.getElementById("UserUsn").value;
  let pwd = document.getElementById("UserPwd").value;
  apiAccess
    .login(username, pwd)
    .then((x) => {
      if (x.done) {
        if (username in CUSTOMERS) {
          localStorage.setItem("customer_id", CUSTOMERS[username]);
        } else {
          CUSTOMERS[username] = CURR_ID + 1;
          CURR_ID += 1;
          localStorage.setItem("customer_id", CUSTOMERS[username]);
        }
        window.location = "./home.html";
      } else {
        alert("Credentials invalid");
      }
    })
    .catch((e) => {
      console.log(e);
      alert("Something went wrong");
    });
}

function logout() {
  localStorage.setItem("customer_id", null);
  window.location = "./index.html";
}
