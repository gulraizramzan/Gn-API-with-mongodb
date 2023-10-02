import { monmodel } from "../services/services.js";

export const getAllUsers = async (req,res)=>{
    console.log("test for body hit",req.url)
        try {
          const students= await  monmodel.find();
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

export const updateUsers = async (req,res)=>{
    console.log("test for body hit",req.body)
        try {
            const updateSTudent = await monmodel.findOneAndUpdate(
                { _id: req.params.id },
                { $set: { name: req.body.name } },
                { new: true }
              );
            res.json(updateSTudent);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating student' });
        }
    }

    export const addUser =  async (req,res)=>{
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
        }

        export const deleteUser = async (req,res)=>{
            console.log("test for body hit",req.url)
                try {
                    const deletedStudent = await monmodel.findOneAndDelete({ _id: req.params.id });
                    res.json(deletedStudent);
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error deleting student' });
                }
            }