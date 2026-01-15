const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      immutable: true
    },

    role: {
      type: String,
      enum: ['student', 'faculty'],
      required: true,
      immutable: true
    },

    id: {
      type: String, // Roll No / Faculty ID
      required: true,
      unique: true,
      trim: true,
      immutable: true
    },

    yearOfStudy: {
      type: Number,
      min: 1,
      max: 5,
      default: null
    },

    section: {
      type: String,
      trim: true,
      default: null
    },

    branch: {
      type: String,
      trim: true,
      default: null
    },

    profilePic: {
      type: String,
      default: null
    },

    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true
    },

    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: false
  }
);

module.exports = mongoose.model('User', UserSchema);
