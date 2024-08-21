let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OIP.jpg") {
    myImage.setAttribute("src", "images/OIP-C.jpg");
  } else {
    myImage.setAttribute("src", "images/OIP.jpg");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setmissName() {
  let missName = prompt("你想起了？");
  if (!missName) {
    setmissName();
  } else {
    localStorage.setItem("name", missName);
    myHeading.textContent = "落霞诶" + missName;
  }
}


  if (!localStorage.getItem("name")) {
    setmissName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "长江与落日，" + missName;
  }

  myButton.onclick = function () {
    setmissName();
  }

  
  
  
  
  
  
