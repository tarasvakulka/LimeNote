import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteShema = new Schema({
    title: { type: String },
    text: { type: String, required: true },
    color: { type: String},
    createdAt: { type: Date}
});

const Note = mongoose.model('Note', NoteShema);
