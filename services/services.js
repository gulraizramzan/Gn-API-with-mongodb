import mongoose from 'mongoose';
const dbUrl = 'mongodb://127.0.0.1:27017/db_student';
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
const schema={
    name:String,
    email:String,
    class:String,
    id:Number,
}

export const monmodel=mongoose.model("coll_students",schema)