const express=require("express");
const mongoose=require("mongoose");
const router=express.router();
const coursemodel=mongoose.model.("course")
var course=new coursemodel();
course.coursename="Mongodb";
course.courseid="2"
course.coursefee="3"
course.save();


router.get("/list",(req,res)=>{
coursemodel.find(err,docs)=>{
if(!err)
{    
  res.send("course controller")
  }
  else
  {    
  res.send("error")
  }
  });
  module.exporst=router;
