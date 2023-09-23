import fs from "fs/promises";
// contacts.js

const contactsPath = "./db/contacts.json";

// TODO: задокументувати кожну функцію
async function listContacts() {
  // #1
  const filepath = "./db/contacts.json";
  //   const buffer = await fs.readFile(filepath);
  //   console.log(buffer);
  //   const text = buffer.toString();
  //   console.log(text);
  // #2
  const text = await fs.readFile(filepath, "utf-8");
  console.log(text);
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
export default { listContacts, getContactById, removeContact, addContact };
