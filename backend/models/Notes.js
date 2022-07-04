const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title: { type: String, require: true },
    note: { type: String, require: true },
    label: { type: String, require: true }
});

const NotesModel = mongoose.model("note", notesSchema)

module.exports = NotesModel;