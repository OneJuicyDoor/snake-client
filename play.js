const connect = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const conn = connect();

// Interpret incoming data as text
conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("Connected to the server");
});

setupInput(conn);
