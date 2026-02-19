const express = require('express');
const cors = require('cors');
const { connectDB } = require('./utils/connect');
const User = require('./models/User');
const Note = require('./models/Note');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
connectDB();

// User routes
app.get('/api/users', async (req, res) => {
	try {
		const users = await User.find({}, '-password');
		res.json(users);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch users' });
	}
});

app.post('/api/users', async (req, res) => {
	try {
		const newUser = new User(req.body);
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (err) {
		res.status(400).json({ error: 'Failed to create user' });
	}
});

// Note routes
app.get('/api/notes', async (req, res) => {
	try {
		const notes = await Note.find({}).populate('uploadedBy', 'name email');
		res.json(notes);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch notes' });
	}
});

app.post('/api/notes', async (req, res) => {
	try {
		const newNote = new Note(req.body);
		const note = await newNote.save();
		res.status(201).json(note);
	} catch (err) {
		res.status(400).json({ error: 'Failed to create note' });
	}
});

app.get('/api/notes/:id', async (req, res) => {
	try {
		const note = await Note.findById(req.params.id).populate('uploadedBy', 'name email');
		if (!note) return res.status(404).json({ error: 'Note not found' });
		res.json(note);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch note' });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}`);
});