const http = require("http")

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World')
})
server.listen(port, host, () => {
    console.log('Server is running')
})