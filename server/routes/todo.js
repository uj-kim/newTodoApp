const express = require("express");
const {Todo} = require("../models");
const router = express.Router();

router.get("/todos", async(req, res)=>{
   try{
    let data = await Todo.findAll({
        where: {
          startdate: req.date // 선택한 날짜와 일치하는 startdate를 갖는 todo를 찾음
        }
      });
      console.log(req.date);
      res.send(data);
    } catch(err){
      res.send(err); // 찾은 todo 목록을 JSON 형태로 반환
    }
    });







module.exports = router;