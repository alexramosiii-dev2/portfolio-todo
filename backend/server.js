const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());//bodyparser alternative

mongoose.connect('mongodb://localhost:27017/portfolio-todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const noteSchema = new mongoose.Schema({
    name: String,
    description: String// fix this later
});

const Note = mongoose.model('Note', noteSchema);


// Routes
app.get('/notes', async (req, res) => {
    const items = await Note.find();
    res.json(items);
});

app.post('/notes', async (req, res) => {
    const newItem = new Note(req.body);
    await newItem.save();
    res.json(newItem);
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
