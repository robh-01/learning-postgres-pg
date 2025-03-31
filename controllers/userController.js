import * as queries from "../db/queries.js";

export async function userListGet(req, res) {
  const usernames = await queries.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", { title: "All users", usernames: usernames });
}

export async function userAddGet(req, res) {
  res.render("addUser", { title: "Add user" });
}

export async function userAddPost(req, res) {
  const { userName } = req.body;
  await queries.insertUsername(userName);
  res.redirect("/");
}
``