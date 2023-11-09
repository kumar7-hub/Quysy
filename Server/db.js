const { MongoClient } = require ('mongodb')
let dbConnection
let uri = 'mongodb+srv://smelserbraden:Clutchstick9@cluster0.lrb4dlx.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}
