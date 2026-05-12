import NotesModel from "../models/noteModel.js";

export const createnote = async (req, res) => {
    if (!req.user?.email) {
        return res.status(400).json({
            success: false,
            message: "Unauthorized"
        })
    }

    try {

        const { title, content } = req.body

        const userId = req.user.id
        const newNote = new NotesModel({
            title,
            content,
            user: userId
        })

        await newNote.save()
        res.status(201).json({
            success: true,
            data: {
                note: {
                    title,
                    content,
                    user: userId
                }
            }
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }

}


export const getAllNotes = async (req, res) => {
    if (!req.user?.email) {
        return res.status(400).json({
            success: false,
            message: "Unauthorized"
        })
    }

    try {

        const userId = req.user.id
        const allNotes = await NotesModel.find({ user: userId })
        res.status(201).json({
            success: true,
            data: {
                notes: allNotes
            }
        })

    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }

}



export const getNote = async (req, res) => {
    if (!req.user?.email) {
        return res.status(400).json({
            success: false,
            message: "Unauthorized"
        })
    }

    try {
        const userId = req.user.id
        const noteId = req.params.id
        const note = await NotesModel.find({ _id: noteId, user: userId })

        if (note?.[0]) {
            res.status(201).json({
                success: true,
                data: {
                    notes: note
                }
            })
        } else {
            res.status(401).json({
                success: false,
                message: "Not Found"
            })
        }



    } catch (error) {
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Something went wrong!"
        })
    }

}

