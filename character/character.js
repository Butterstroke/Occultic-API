const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/MongoDB');

var characterSchema = new mongoose.Schema({  
  DBid: String,
  name: {
    first: String, 
    surname: String,
    ja: String
  },
  gender: String,
  age: Number,
  height: Number,
  weight: Number,
  voice: {
    ja: String,
    en: String
  },
  description: String,
  episodes: [],
  manga_chapters: [],
  novel_chapters: []
});

module.exports = mongoose.model('character', characterSchema);