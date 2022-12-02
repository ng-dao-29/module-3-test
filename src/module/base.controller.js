const fs = require("fs");
const connection = require("../../database/database.model");

class BaseController {

    getTemplate(pathFile) {
        return new Promise((resolve, reject) => {
            fs.readFile(pathFile, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }

    querySQL(sql){
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}
module.exports = BaseController;