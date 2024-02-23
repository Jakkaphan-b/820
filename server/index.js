//import http from 'http';เพื่อใช้งาน http module
const http = require('http');
//กำหนด host and  port เริ่มต้น
const host = 'localhost';
const port = 8000;

//กำหนดค่าเริ่มต้นของ server
const requireListener = function (req, res) {
    res.writeHead(200);
    res.end('scb 7692885567 \n');
};
//run server ด้วย http.createServer และกำหนดค่าเริ่มต้นของ server
const server = http.createServer(requireListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});