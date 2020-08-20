import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="container">
  <h1 class="header">Create Form</h1>
  <div>
    <form id="form" class="form">
      <div class="form-control">
        UserName: <input id="username" type="text" placeholder="user123">
        <small></small>
      </div>
      
      <div class="form-control">
        Email: <input id="email" type="email" placeholder="user123@">
        <small></small>
      </div>
      
      <div class="form-control">
        Password: <input id="password" type="password" placeholder="*****">
        <small></small>
      </div>
      
      <div class="form-control">
        Confirm Password: <input id="password2" type="password" placeholder="******">
        <small></small>
      </div>

      <div class="form-control">
        Contact: <input id="contact" type="text" placeholder="Contact">
        <small></small>
      </div>
      
      <div class="form-control">
        Address:
        <textarea id="address"></textarea><br/>
        <small></small>
      </div>
      <button onSubmit="checkInput()">Submit</button>
    </form>
  </div>
</div>
`;

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const address = document.getElementById("address");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const user = username.value.trim();
  const pas1 = password.value.trim();
  const pas2 = password2.value.trim();
  const em = email.value.trim();
  const cont = contact.value.trim();
  const addr = address.value;
  if (user === "") {
    setError(username, "Username can't be black!");
  } else {
    setClass(username);
  }

  if (em === "") {
    setError(email, "email can't be black!");
  } else {
    setClass(email);
  }

  if (pas1 === "") {
    setError(password, "Can't go without password!!");
  } else {
    setClass(password);
  }

  if (pas2 === "") {
    setError(password2, "Can't go without password!!");
  } else if (pas1 !== pas2) {
    setError(pas2, "Passwords doesn't match!");
  } else {
    setClass(password2);
  }

  if (cont === "") {
    setError(contact, "Please enter your phone number");
  } else if (cont.length < 10) {
    setError(contact, "Contact is not valid!");
  } else {
    setClass(contact);
  }

  if (addr === "") {
    setError(address, "fill your address please.");
  } else {
    setClass(address);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = message;
  formControl.className = "form-control error";
}

function setClass(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = "";
  formControl.className = "form-control success";
}
