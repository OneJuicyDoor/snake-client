const net = require("net");
const connect = require("./client");

const conn = connect();

// Interpret incoming data as text
conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("does something");
});

console.log("Connecting ...");

stdin.on("data", handleUserInput);

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};