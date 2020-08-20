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
        Address:<br/>
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
  let toss = 1;
  const user = username.value.trim();
  const pas1 = password.value.trim();
  const pas2 = password2.value.trim();
  const em = email.value.trim();
  const cont = contact.value.trim();
  const addr = address.value;
  if (user === "") {
    setError(username, "Username can't be black!");
    toss = 0;
  } else {
    setClass(username);
    toss = 1;
  }

  if (em === "") {
    setError(email, "email can't be black!");
    toss = 0;
  } else {
    setClass(email);
    toss = 1;
  }

  if (pas1 === "") {
    setError(password, "Can't go without password!!");
    toss = 0;
  } else {
    setClass(password);
    toss = 1;
  }

  if (pas2 === "") {
    setError(password2, "Can't go without password!!");
    toss = 0;
  } else if (pas1 !== pas2) {
    setError(pas2, "Passwords doesn't match!");
    toss = 0;
  } else {
    setClass(password2);
    toss = 1;
  }

  if (cont === "") {
    setError(contact, "Please enter your phone number");
    toss = 0;
  } else if (cont.length < 10) {
    setError(contact, "Contact is not valid!");
    toss = 0;
  } else {
    setClass(contact);
    toss = 1;
  }

  if (addr === "") {
    setError(address, "Address is must.");
    toss = 0;
  } else {
    setClass(address);
    toss = 1;
  }

  // success
  if (toss) {
    // window.location.href = "https://giphy.com/gifs/gilmoregirls-netflix-gilmore-girls-xUySTJTRyiGgMGduSY/fullscreen";
    const gif = document.getElementById("app");
    gif.innerHTML =
      '<div id="gif" style="width:100%;height:0;margin-top:-300px;"><iframe src="https://giphy.com/embed/llsgth6glyrYzJ1Ik3" width="500px" height="500px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/recordingacademy-grammys-2020-llsgth6glyrYzJ1Ik3"></a></p>';
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
