const BaseController = require('../module/base.controller')
const  url = require('url')
const qs = require('qs')
class handle extends BaseController{

    async deleteStudent(req, res) {
        let ID = url.parse(req.url).query
        let sql = `DELETE FROM Students WHERE ID = '${ID}'`
        await this.querySQL(sql).then(r => {r.message});
        res.writeHead(301, {Location: '/'});
        res.end();
    }


    async addStudent(req, res) {
        let data = ""
        req.on("data", chunk => {
            data += chunk;
        })
        req.on("end", async () => {
            let student = qs.parse(data);
            console.log(student)
            let sql = `insert into students (name,class,evaluates ,theoretical_point,practice_points,describes)
            value	('${student.name}','${student.class}','${student.evoluate}','${student.theo}','${student.prac}','${student.description}')`;
            await this.querySQL(sql);
            res.writeHead(301, { Location: "/" });
            res.end();
        })
    }


}

module.exports = handle;