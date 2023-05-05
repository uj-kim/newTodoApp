const express = require("express");
const {Todo} = require("../models");
const { Op } = require("sequelize");
const moment = require('moment');
const router = express.Router();


// todoList 불러오기(get todo)
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
    //   console.log(data);
      res.send(data);
    } catch(err){
      console.log(err);
      res.status(500).send(err); 
    }
  });
  router.get("/alltodos", async(req, res)=>{
    try{
    const data = await Todo.findAll();
    res.send(data);
    } catch(err){
        res.status(500).send(err);
    }
  })

//새 todo 추가하기(add new Todo)
router.post("/todo", async(req, res)=>{
    console.log(req.body.newItem);
    try{
        const newTodo = await Todo.create({
            username:"TEST1",
            title: req.body.newItem.title,
            startdate: req.body.newItem.date,
            enddate:req.body.newItem.date,
        });
        res.send(newTodo);
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
})


//todo 수정하기(edit todo)
router.patch("/todo/:todoId", async(req,res)=>{
    try{
        const [editTodo] = await Todo.update({
            title:req.body.title,
            done: req.body.done,
        },{
            where:{
                id:req.params.todoId,
            },
        });
        if(!editTodo){
            return res.send(false);
        }
        res.send(true);
    }catch(err){res.status(500).send(err)}
});

//todo 삭제(delete todo)
router.delete("/todo/:todoId", async(req, res)=>{
    try{
        const delTodo = await Todo.destroy({
            where: {
                id: req.params.todoId,
              },
        });
        if(!delTodo){
            return res.send(false);
        }
        res.send(true);
    }catch(err){
        res.status(500).send(err);
    }
})





module.exports = router;