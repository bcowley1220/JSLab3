"use strict";

// Scripts below from other file
// class AddressBook {
//   constructor() {
//     this.contacts = [];
//   }
//   add(name, email, phone, relation) {
//     let newContact = new Contact(name, email, phone, relation);
//     this.contacts.push(newContact);
//   }
//   delete(name) {
//     let index = this.contacts.findIndex(contact => {
//       return contact.name === name;
//     });
//     if (index >= 0) {
//       this.contacts.splice(index, 1);
//     }
//   }
//   print() {
//     let contact = this.contacts;
//     for (let i = 0; i < contact.length; i++) {
//       console.log(this.contacts[i]);
//     }
//   }
// }
// class Contact {
//   constructor(name, email, phone, relation) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     this.relation = relation;
//   }
// }
// Scripts above from other file

// Scripts from exercise with Adam
let newContacts = [];
function handleSubmit(event) {
  event.preventDefault();
  newContacts.push({
    Name: event.target[0].value,
    Email: event.target[1].value,
    Phone: event.target[2].value,
    Relation: event.target[3].value
  });
  displayContacts();
}
function displayContacts() {
  document.querySelector(".infoContainer").innerHTML = "";
  newContacts.forEach((contact, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <p>Name: ${contact.Name}</p>
    <p>Email: ${contact.Email}</p>
    <p>Phone: ${contact.Phone}</p>
    <p>Relation: ${contact.Relation}</p>
    <button index=${index} class="deleteButton">DELETE</button>
    `;
    document.querySelector(".infoContainer").append(div);
  });
}
document.querySelector("form").addEventListener("submit", handleSubmit);
// <button index=${index} class="deleteButton">DELETE</button>

function handleDelete(event) {
  console.log("Delete button was clicked!");
  console.dir(event.target.attributes[0].value);
  newContacts.splice(Number(event.target.attributes[0].value), 1);
  displayContacts();
}
document
  .querySelector(".infoContainer")
  .addEventListener("click", handleDelete);

// TODO List:
// Add display method; must update the DOM to reflect all the contacts
// TODO call display when the page first loads
// create contact card class in JS and css
// TODO make trash can button out of what is there now
// Create form page
// TODO when form is submitted, call add method on addressBook, call DOM for update
// TODO wrap functions into a method
// TODO create a method that will reset the form to default
