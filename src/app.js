require('dotenv').config();
const express = require('express')
const app = express()//app express
const path = require('path');
const hostname = process.env.HOSTNAME;
const port = process.env.POST || 8081;// post =>hardcode
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routers/web');
//config template engine
configViewEngine(app);
//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data






//khai bao routers
/*
Sử dụng hàm riêng để xử lý route: Khi bạn đang làm việc với một ứng dụng lớn hơn, 
có nhiều route, hoặc khi bạn muốn tách biệt rõ ràng giữa định nghĩa route và logic xử lý, 
cách này sẽ giúp mã nguồn của bạn dễ quản lý và bảo trì hơn
*/
app.use('/', webRouter);



/*Bắt đầu server và lắng nghe các request trên cổng port. 
Khi server bắt đầu, nó sẽ chạy hàm callback và in ra thông báo 
cho biết ứng dụng đang lắng nghe trên cổng nào.*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// cau len install sql: npm install mssql msnodesqlv8
/*
cac cong cu can dung :npm install 
                                   + dotenv@16.4.5 :Thư viện dotenv được sử dụng để tải các biến môi trường từ một file .env vào process.env trong Node.js.
                                   + ejs@3.1.8 :EJS (Embedded JavaScript) là một engine template đơn giản cho phép bạn tạo các trang HTML động bằng cách sử dụng JavaScript.
                                   + express@4.18.2 :Express là một framework web minimalistic và linh hoạt cho Node.js, cung cấp một tập hợp mạnh mẽ các tính năng để xây dựng các ứng dụng web và API.

                      npm install --save-dev nodemon@3.1.0:nodemon là một công cụ giúp phát triển ứng dụng Node.js hiệu quả hơn bằng cách tự động khởi động lại ứng dụng khi phát hiện có thay đổi trong mã nguồn.             
*/


