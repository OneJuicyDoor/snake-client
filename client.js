const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here
    port: 50541 // PORT number here
  });

  conn.on("connect", () => {
    conn.write("Name: CAM"); 
    conn.write("Move: up");
    setTimeout(() => {
        conn.write("Move: up")}); 
    }, 50); 
  
return conn;

};

module.exports = connect;
