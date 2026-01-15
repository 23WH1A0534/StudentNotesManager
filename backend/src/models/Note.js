const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    subject: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true,
      default: null
    },

    fileUrl: {
      type: String, // PDF / DOC / PPT link
      required: true
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    branch: {
      type: String,
      required: true,
      trim: true
    },

    yearOfStudy: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },

    section: {
      type: String,
      trim: true,
      default: null
    },

    tags: {
      type: [String],
      default: []
    },

    visibility: {
      type: String,
      enum: ['public', 'private', 'class'],
      default: 'class'
    },

    downloads: {
      type: Number,
      default: 0
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

module.exports = mongoose.model('Note', NoteSchema);
