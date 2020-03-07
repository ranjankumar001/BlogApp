const express=require('express')
const app=express()
const router = express.Router();
const model=require('./Posts.model')

router.get('/', async(req, res) => {
    try
    {
        const posts=await  model.find()
         res.json(posts);
    }
    catch(err)
    {
         res.json({message:err});
    }
});

router.get('/:id', async(req, res) => {
    
   try {
     const post=await model.findById(req.params.id)
     res.json(post);
    }
    catch(err)
    {
         res.json(err);
    }
});

router.post('/add', async(req, res) => {
    const post=new model({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    })
    try
    {
        const savedPost=await post.save()
         res.json(savedPost);
         
    }
    catch(err)
    {
         res.json({message:err});
    }
});

router.put('/update/:id', async(req, res) => {
    try
    {
        const updatedPost=await model.findByIdAndUpdate(req.params.id)
        updatedPost.title=req.body.title
        updatedPost.author=req.body.author
        updatedPost.description=req.body.description
            
        const savedPost=await updatedPost.save()
         res.json(savedPost)
             
            
    }
    catch(err)
    {
         res.json({message:err});
    }
});

router.delete('/:id', async(req, res) => {
    try
    {
        const post=await model.findByIdAndDelete(req.params.id)
         res.json({message:"data is deleted"});
    }
    catch(err)
    {
         res.json(err);
    }
});

module.exports=router