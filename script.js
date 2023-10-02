import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/db_student",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const schema={
    name:String,
    email:String,
    class:String,
    id:Number,
}

const monmodel=mongoose.model("coll_student",schema)

app.post('/api', async (req,res)=>{
console.log("test for body hit",req.body)
    try {
        const data=new monmodel({
            name:req.body.name,
            email:req.body.email,
            class:req.body.class,
            id:req.body.id,
        });
        await data.save();
        res.status(200).json({data})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


const port =4000;
const host="localhost"
app.listen(port, host, () => {
  console.log(`Server is running on port ${port} ${host}`);
});