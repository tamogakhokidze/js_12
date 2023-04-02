let formElement = document.getElementById("registration-form");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let form = event.target;

  let username = document.getElementById("username-field").value;
  // let username= document.querySelector("[name = username]").value;

  if (username == "" || username.length < 5) {
    errors.username =
      " Username can not be empty and must be more than 5 charachters ";
  }

  username.addEventListener("keyup", function () {
    let usernamepattern = /^[a-zA-Z0-9]+$/;
    if (username.match(usernamepattern)) {
      username.style.border = "2px solid green";
    } else {
      errors.username = "Username is invalid";
      username.style.border = "2px solid red";
    }
  });

  let password1 = document.getElementById("password-field1").value;
  let password2 = document.getElementById("password-field2").value;

  if (password1 == "") {
    errors.password = "password can not be empty";
  }

  if (password1 != password2) {
    errors.password2 = "passwords do not match";
  }

  // show hide passwords

  let agreeTerm = document.getElementById("agree").Checked;

  if (!agreeTerm) {
    errors.agree = "You must agree terms and conditions";
  }

  //radio
  let age = false;

  form.querySelectorAll('[name = "age"]').forEach((element) => {
    if (element.Checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = " Please select your age";
  }
  console.log(errors);

  document.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  //errors object

  for (const item in errors) {
    console.log(item); //item == errors keys
    let errorText = document.getElementById("error -" + item);

    if (errorText) {
      errorText.textContent = errors[item]; // bracket notation რადგან დინამიურია
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

// let errors= {
// age:" Please select your age"
// agree: "You must agree terms and conditions"
// password: "password can not be empty"
// username: " Username can not be empty and must be more than 5 charachters "
// }

// errors key = input name attribute values

//თუ ერორს ობიექტი არის ცარიელი, მაშნ ჩვენი ფორმა უნდა დავასაბმითოთ - საბმით ფორმის ფუნქციონალის ამუშავება
//ობიექტი ცარიელია თუ არა, ლენგზს ვერ გამოიყენებ. მეთოდი, რომლითაც მასიცავ გვიბრუნებს ობიექტის key,
//თუ length = 0, form დასაბმითდეს

let passwordField = document.getElementById("password-field1");
let toggleIcon = document.getElementById("toggle-icon");
toggleIcon.addEventListener("click", function () {
  if (passwordField.type == "password") {
    passwordField.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

//email validation

let emailField = document.getElementById("emailfield");
emailField.addEventListener("keyup", function () {
  let emailFieldValue = document.getElementById("emailfield").value;

  let perrortext = document.getElementById("error - email");
  let emailpattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  if (emailFieldValue.match(emailpattern)) {
    emailField.style.border = "2px solid green";
    emailField.style.outline = "none";
    perrortext.innerHTML = "your email is valid";
    perrortext.style.color = "green";
  } else {
    emailField.style.border = "2px solid red";
    perrortext.innerHTML = "your email is invalid";
    perrortext.style.color = "red";
  }
  if (emailFieldValue == " ") {
    perrortext.innerHTML = " ";
    perrortext.style.color = "black";
  }
});

//თუ რაიმეს შემოწმება გვინდა საბმითის გარეშეც, უნდა გავიტანოთ ამ ფუნქციის გარეთ, მაგ show hide password, email validation, თუ გინდა საბმითის დროს შემოწმდეს, ამშინ კოდს ჩავსვამთ საბმითის ფუნქციის შიგნით

// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//

// უსერნეიმის სტანდარტი
