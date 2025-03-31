import pool from "./pool.js";

export async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

export async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export async function searchUsernames(searchQuery) {
  const { rows } = await pool.query(
    `SELECT * FROM usernames WHERE username LIKE $1`,
    [`%${searchQuery}%`]
  );
  return rows;
}
