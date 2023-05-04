const express = require("express");
const {Todo} = require("../models");
const { Op } = require("sequelize");
const moment = require('moment');
const router = express.Router();

router.get("/todos", async(req, res)=>{
    try{
        const selectedDate = moment(req.query.date).startOf('day').format('YYYY-MM-DD HH:mm:ss');
        // const nextDay = moment(selectedDate).add(1, 'days').subtract(1, 'seconds').format('YYYY-MM-DD HH:mm:ss');
        const nextDay = moment(selectedDate).endOf('day').format('YYYY-MM-DD HH:mm:ss');
        
        const data = await Todo.findAll({
          where: {
            startdate: {
              [Op.between]: [selectedDate, nextDay]
            }
          }
        });
      console.log(data);
      res.send(data);
    } catch(err){
      console.log(err);
      res.status(500).send(err); 
    }
  });







module.exports = router;