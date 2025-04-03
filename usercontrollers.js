const Task = require ('./Schema');

const read = async(req,res) =>{
    try{
        const display = await tasks.find()
        if(!display){
            res.status(400).json({
                message: "No tasks present"
            })
         
        }                                                                             
        res.status(200).json(display)

    }
    catch(error){
        console.log(`Internal server error${err}`)
    }
}



const kalsu = async(req,res)=>{
    try{
        const {title,director,genre,releaseYear,availableCopies} = req.body;
        if(!title || !director || !genre || !releaseYear || !availableCopies){
            return res.status(400).json({
                message: "all feilds are required"
            })
        }

        const newTask = await tasks.create({
            title,
            director,
            genre,
            releaseYear,
            availableCopies
        })

        res.status(201).json({
            message: "created new task"
        })


    }
    catch(err){
        console.log(`internal server error`)
    }
}




const Delete = async(req,res) => {
  try{
     const id = req.params.id;

     const Del = await tasks.findByIdAndDelete(id)

     if(!Del){
        return res.status(404).json({message:'Items does not exist'});
     }

     res.json({message : "Task deleted successfully"})
  }catch(err){
    res.status(500).json({ error: "Server error",err });
  }
}


const update = async(req,res) => {
    try{
        const id = req.params.id;
        const {title,director,genre,releaseYear,availableCopies} = req.body;
        
        const Task = await tasks.findById(id);

        if(!Task){
            return res.status(404).json({message : `no task with id :${id}`})
        }

        if(title){
            Task.title = title
        }

        if(director){
            Task.director = director;
        }

        if(genre){
            Task.genre = genre;
        }
        if (releaseYear) {
            Task.releaseYear = releaseYear;
        }
        if (availableCopies) {
            Task.availableCopies = availableCopies;
        }

        await Task.save();
        res.status(201).json({message : "Updated",Task});

    }catch(err){
        res.status(500).json({message : "Server err",err})
    }
}


module.exports = {kalsu,read,update,Delete}