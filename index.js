import fs from "fs/promises";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./db/contacts.js";

console.log(listContacts);
// const func = async () => {
//   // #1
//   const filepath = "./db/contacts.json";
//   //   const buffer = await fs.readFile(filepath);
//   //   console.log(buffer);
//   //   const text = buffer.toString();
//   //   console.log(text);
//   // #2
//   const text = await fs.readFile(filepath, "utf-8");
//   console.log(text);
// };

// func();
