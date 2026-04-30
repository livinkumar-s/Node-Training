import ActorModel from "../model/ActorModel.js";


export const getAllActors = async (req, res) => {
    try {

        const allActors = await ActorModel.find(
            {name:"Vijay"}
        ).limit(2).sort({name:-1}).skip(1);
        res.status(201).json({
            success: true,
            data: {
                actors: allActors
            }
        })

    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!" })
        console.log(error);
    }
}

export const getActorWithId = async (req,res)=>{
    const actorId=req.params.actorId
    try {

        const actor = await ActorModel.findById(actorId);
        res.status(201).json({
            success: true,
            data: {
                actor
            }
        })
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!" })
        console.log(error);
    }
}

export const addActor = async (req, res) => {

    const { name, age, noOfMovies } = req.body

    if (!name || !age || !noOfMovies) {
        return res.ststus(401).json({ success: false, message: "Name and Age is Must" })
    }

    try {
        const newActor = new ActorModel({
            name:name,
            age:age,
            noOfMovies:noOfMovies
        })

        await newActor.save()

        res.status(201).json({
            success: true,
            message: "Actor is added...!"
        })
        

    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!" })
        console.log(error);
    }
}

export const deleteActor= async (req,res)=>{
    const actorId=req.params.id
    try {

        await ActorModel.findByIdAndDelete(actorId)
        res.status(201).json({
            success: true,
            message: "Actor is deleted...!"
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong!" })
        console.log(error);
    }
}