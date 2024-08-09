import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  // put your firebase api here if you want to use  form
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let SubmiteForm = document.getElementById("Submite");

SubmiteForm.addEventListener("click", () => {
  let user = document.getElementById("name").value;
  if (user !== "") {
    try {
      set(ref(db, "userList/" + document.getElementById("name").value), {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        messgae: document.getElementById("messgae").value,
      });
      Swal.fire("Thanku !", "i am excited to meet you!", "success");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! ples try WhatsApp or Gmail",
      });
    }

    (document.getElementById("name").value = ""),
      (document.getElementById("email").value = ""),
      (document.getElementById("subject").value = ""),
      (document.getElementById("messgae").value = "");
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Form is empty. Fill the form or try the WhatsApp or Gmail method",
    });
  }
});
