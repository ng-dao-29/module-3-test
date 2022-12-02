const BaseController = require('../module/base.controller')
const fs = require("fs");
const url = require("url")

class ShowLHtml extends BaseController {

    async showLise(req, res) {
        let sql = `SELECT* from students`;
        let student = await this.querySQL(sql);
        console.log(student)
        let listData = ''
        student.forEach((student, index) => {
            listData += `<tr>`
            listData += `<td>${index+1}</td>`
            listData += `<td><a href="/information/?${student.ID}" >${student.name}</a></td>`
            listData += `<td>${student.class}</td>`
            listData += `<td>${student. evaluates}</td>`
            listData += `<td><a href="/form-edit/?${student.ID}"><button>sửa</button></a>
            <a href="/delete/?${student.ID}"><button>xóa</button></a></td>`
            listData += `</td>`
        })
        fs.readFile('./views/showStudent.html','utf8', (err, data) => {
            data = data.replace(`{list}`,listData)
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        })

    }

    async showInformation(req, res) {
        let id = url.parse(req.url).query
        console.log(id)
        let sql = `SELECT * FROM students where ID = ${id}`;
        let student = await this.querySQL(sql);
        console.log(student)
        fs.readFile('./views/showInformation.html' , 'utf8', (err, data) => {
            data = data.replace('{name}', student[0].name)
            data = data.replace('{class}', student[0].class)
            data = data.replace('{dlt}', student[0].theoretical_point)
            data = data.replace('{dth}',student[0].practice_points)
            data = data.replace('{dg}', student[0].evaluates)
            data = data.replace('{mt}', student[0].describes)
            res.writeHead(200, {"content-type": "text/html"})
            res.end(data);

        })

    }
    async showAdd(req, res) {
        let data = await this.getTemplate("./views/addStudent.html");
        res.writeHead(200, {"content-type": "text/html"})
        res.end(data);
    }

    async formEdit(req, res) {
        let ID = url.parse(req.url).query;
        console.log(ID);
        let sql = `SELECT * FROM students WHERE ID = ${ID}`;
        let student = await this.querySQL(sql);

        fs.writeFile('./views/editStudent.html', 'utf8', (err, data) => {
            data = data.replace("{name}", student[0].name)
            data = data.replace("{class}",student[0].class)
            data = data.replace("{theo-mark}",student[0].theoretical_point)
            data = data.replace("{pract-mark}", student[0].practice_points)
            data = data.replace("{eval}", student[0]. evaluates)
            data = data.replace("{descript}",student[0].describes)
            res.writeHead(200 , {"content-type": "text/html"});
            res.end(data);
        })
    }
}

module.exports = ShowLHtml;