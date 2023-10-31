const express = require('express');
const app = express();
const db = require('./connection');
const postmodule = require('./postmodule');
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/', async(req, res)=>{
    const {title,author,summary} = req.body;
    try {
        const newPost = await postmodule.create({title,author,summary});
        res.json(newPost);
    } catch (error) {
        res.status(500).send(error,)
    }
});

app.get("/",async(req,res)=>{
    try{
        const posts=await postmodule.find()
        res.json(posts);

    }catch(error){
        res.status(500).send(error)
    }
})

app.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const post=await postmodule.findById(id)
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})

app.put("/:id",async(req,res)=>{
    const{id}=req.params;
    const {title,author,summary}=req.body;
    try{
        const post=await postmodule.findByIdAndUpdate(id,{title,author,summary});
        res.json(post)
    }catch(error){
        res.status(500).send(error)
    }
})
app.delete("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const post =await postmodule.findByIdAndDelete(id)
        res.json("deleted Successfuly")
    }catch(error){
        res.status(500).send(error)
    }
     
})

app.listen(3001, ()=>{
    console.log("Listing to 3001");
})