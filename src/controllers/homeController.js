// const { conn, sql } = require('./controllers/connect');


//Định nghĩa route trực tiếp: Khi bạn đang làm việc với một ứng dụng nhỏ, 
//ít route, và các hàm xử lý đơn giản, cách này có thể là đủ.
const getHomePage = (req, res) => {
    res.render('sample.ejs')
}

const getTestPage = (req, res) => {
    res.send('hello');
}



module.exports = { getHomePage, getTestPage }