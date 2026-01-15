const { connectDB, disconnectDB } = require('./utils/connect');
const User = require('./models/User');
const Note = require('./models/Note');

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log('Connected to the database');

    // Clear existing data
    await User.deleteMany({});
    await Note.deleteMany({});

    // Seed Users
    const users = await User.create([
      {
        name: 'Alice Student',
        email: 'alice@student.edu',
        role: 'student',
        id: 'STU001',
        yearOfStudy: 3,
        branch: 'CSE',
        section: 'A'
      },
      {
        name: 'Bob Student',
        email: 'bob@student.edu',
        role: 'student',
        id: 'STU002',
        yearOfStudy: 4,
        branch: 'ECE',
        section: 'B'
      },
      {
        name: 'Dr. Smith',
        email: 'smith@faculty.edu',
        role: 'faculty',
        id: 'FAC001'
      }
    ]);

    // Seed Notes
    await Note.create([
      {
        title: 'DBMS Unit-1 Notes',
        subject: 'DBMS',
        description: 'Introduction to databases and ER models',
        fileUrl: 'https://example.com/dbms-unit1.pdf',
        uploadedBy: users[0]._id,
        branch: 'CSE',
        yearOfStudy: 3,
        section: 'A',
        tags: ['dbms', 'sql'],
        visibility: 'class'
      },
      {
        title: 'Operating Systems Notes',
        subject: 'OS',
        description: 'Process scheduling and memory management',
        fileUrl: 'https://example.com/os-notes.pdf',
        uploadedBy: users[1]._id,
        branch: 'ECE',
        yearOfStudy: 4,
        section: 'B',
        tags: ['os', 'cpu'],
        visibility: 'class'
      },
      {
        title: 'Computer Networks Overview',
        subject: 'CN',
        description: 'Basics of computer networks',
        fileUrl: 'https://example.com/cn-notes.pdf',
        uploadedBy: users[2]._id,
        branch: 'CSE',
        yearOfStudy: 3,
        tags: ['networks'],
        visibility: 'public'
      }
    ]);

    console.log('Database seeded successfully');
    await disconnectDB();
  } catch (err) {
    console.error('Database seeding error:', err);
    process.exit(1);
  }
};

module.exports = { seedDatabase };
