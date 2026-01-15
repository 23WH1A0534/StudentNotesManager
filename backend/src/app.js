const { seedDatabase } = require('./seed');
const { connectDB, disconnectDB } = require('./utils/connect');

const User = require('./models/User');
const Note = require('./models/Note');

const displayMessage = async () => {
  console.log("Database seeding completed successfully.");

  try {
    await connectDB();

    // Display Users
    console.log("\nThe users are:");
    const users = await User.find({});
    users.forEach(user => {
      console.log(
        `Name: ${user.name}, Email: ${user.email}, Role: ${user.role}`
      );
    });

    // Display Notes
    console.log("\nThe notes are:");
    const notes = await Note.find({})
      .populate('uploadedBy', 'name email role');

    notes.forEach(note => {
      console.log(
        `Title: ${note.title}, Subject: ${note.subject}, Uploaded By: ${note.uploadedBy.name}, Branch: ${note.branch}`
      );
    });

    await disconnectDB();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

const startApp = async () => {
  await seedDatabase();
  await displayMessage();
};

startApp();
