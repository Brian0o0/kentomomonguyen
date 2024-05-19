const express = require('express');
const { getHomePage, getTestPage, form, getdata } = require('../controllers/homeController')
const router = express.Router();
const { pool } = require('../config/database');

//router.Method('/route', handler)
router.get('/', getHomePage);

router.get('/test1', getTestPage);

// console.log(process.env);//ham in ra cac thông so cau hinh cua env


//test read date from databased
router.get('/test2', async (req, res) => {
    try {
        await pool.connect();
        var sqlString = "SELECT * FROM Inventory";
        const result = await pool.request().query(sqlString);
        const test = result.recordset;
        console.log(test);
        res.json(test);

    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/form', form);
router.post('/dataform', getdata);

module.exports = router;