const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
})

app.use(express.static(__dirname + "/public"));

const server = app.listen(8000);
const portNumber = server.address().port;
console.log("[+] Running server on: http://localhost:" + portNumber + "/");