const net = require("net");
const connect = require("./client");

const conn = connect();

// Interpret incoming data as text
conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("does something");
});

console.log("Connecting ...");
