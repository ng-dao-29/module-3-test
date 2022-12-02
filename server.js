const http = require('http');
const url = require('url');
const host = 8080;
const ShowHtml = require('./src/controllers/showLHtml');
const Handle = require('./src/controllers/handle.controllers');
const handle = new Handle();
let showLHtml = new ShowHtml

const server = http.createServer((req, res) => {
    let urlPathname = url.parse(req.url).pathname
    console.log(urlPathname)

    switch (urlPathname) {
        case '/':
            showLHtml.showLise(req, res)
            break;
        case '/information/':
            showLHtml.showInformation(req, res)
            break;
        case '/delete/':
            handle.deleteStudent(req, res);
            break;
        case '/add':
            if (req.method === 'GET') {
                showLHtml.showAdd(req, res)
            }
            else {
                handle.addStudent(req, res);
            }
            break;
        case '/form-edit/':
            if (req.method === 'GET') {
                showLHtml.formEdit(req, res);
            }
            else {
            }
                break;
        default: res.end()
    }

})

server.listen(host, "localhost" , () => {
    console.log(`server listening on ${host}`);
})