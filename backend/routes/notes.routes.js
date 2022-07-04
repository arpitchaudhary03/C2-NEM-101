const { Router } = require('express');
const NotesModel = require('../models/Notes');
const notesRouter = Router();


notesRouter.get("/:userId/notes", async (req, res) => {
    const userId = req.params.userId;
    const notes = await NotesModel.find({ userId });
    res.send(notes);
});


notesRouter.post("/:userId/notes", async (req, res) => {
    const userId = req.params.userId;
    let payload = {
        ...req.body,
        userId
    }
    const note = await new NotesModel(payload);
    note.save((err, data) => {
        if (err) {
            return res.status(500).send({ message: "Something went wrong !!" });
        }
        return res.status(201).send(data);
    });
});

notesRouter.put("/:userId/notes", async (req, res) => {
    let id = req.params.userId;
    const {
        title,
        note,
        label,
    } = req.body;
    const note1 = await NotesModel.findByIdAndUpdate(id, {
        title,
        note,
        label,
    });
    res.status(200).send("Notes Updated");
});

notesRouter.delete("/:userId/notes", async (req, res) => {
    let id = req.params.userId;
    const note = await NotesModel.findByIdAndDelete(id, req.body);
    res.send(note);
});

module.exports = notesRouter;