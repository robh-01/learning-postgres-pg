import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Pool } = pg;

// this didn't work and show error with instruction to make it like as it is in above lines
// import { Pool } from "pg";

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
export default new Pool({
  host: process.env.HOST, //or wherever the db is hosted
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT, //the default port
});

// An alternative to defining the connection information is through a Connection URI. You’ll likely be using connection URIs when connecting with a hosted database service. Here’s what it would look like based on the above properties:
// export default new Pool({
//   connectionString:
//     "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
// });
