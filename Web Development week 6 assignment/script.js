// ===== Event Handling =====
const helloBtn = document.getElementById("helloBtn");
const helloText = document.getElementById("helloText");
helloBtn.addEventListener("click", function() {
  helloText.textContent = "Hello! You clicked the button.";
});

// Mouseover & Mouseout demo
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function() {
  hoverBox.style.background = "orange";
  hoverBox.textContent = "Mouse Over!";
});
hoverBox.addEventListener("mouseout", function() {
  hoverBox.style.background = "lightblue";
  hoverBox.textContent = "Hover over me!";
});

// Light/Dark Mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});


// ===== Counter Feature =====
let num = 0;
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const countNum = document.getElementById("countNum");

plusBtn.addEventListener("click", function() {
  num++;
  countNum.textContent = num;
});
minusBtn.addEventListener("click", function() {
  num--;
  countNum.textContent = num;
});


// ===== FAQ Toggle =====
const faqBtns = document.querySelectorAll(".faq-toggle");
faqBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});


// ===== Advanced Form Validation =====
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  // reset messages
  document.querySelectorAll(".err").forEach(el => el.textContent = "");
  document.getElementById("formMsg").textContent = "";

  // get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const confirm = document.getElementById("confirm").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // name validation
  if (name.length < 3) {
    document.getElementById("nameErr").textContent = "Name must be at least 3 letters.";
    valid = false;
  }

  // email validation
  const emailCheck = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailCheck.test(email)) {
    document.getElementById("emailErr").textContent = "Enter a valid email.";
    valid = false;
  }

  // password validation (8+ chars, 1 number, 1 uppercase)
  const passCheck = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passCheck.test(pass)) {
    document.getElementById("passErr").textContent = "Password must be 8+ chars, 1 uppercase & 1 number.";
    valid = false;
  }

  // confirm password
  if (pass !== confirm) {
    document.getElementById("confirmErr").textContent = "Passwords do not match.";
    valid = false;
  }

  // phone validation (basic 10+ digits)
  const phoneCheck = /^[0-9]{10,}$/;
  if (!phoneCheck.test(phone)) {
    document.getElementById("phoneErr").textContent = "Enter a valid phone number (10+ digits).";
    valid = false;
  }

  // success message
  if (valid) {
    document.getElementById("formMsg").textContent = "✅ Form submitted successfully!";
  }
});
