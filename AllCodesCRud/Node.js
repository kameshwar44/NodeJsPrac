const http = require("http");
const data = require('./test2')

http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "applicationjson" });
  res.write(
    JSON.stringify(data)
  );
  res.end()
}).listen(5000)
