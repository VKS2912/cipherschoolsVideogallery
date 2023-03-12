const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();  // Add this line
}) 

const userdetailsSchema = new mongoose.Schema({
 username:{
  type: String,
  required: true
 },userHistory:{
  type: [String],
  required: true
 },userpass:{
  type:String,
  required:true
 },likedvideoname: {
    type: [String],
    required: true
  }, watchlatervideoname: {
    type: [String],
    required: true
  }
})
const channels = new mongoose.Schema({
 username:{
  type:String,required:true
 }
 ,channelname:{
   type:[String],required:true
  },channelimage:{
   type:String
  },channelsubs:{
   type:String,required:true
  },
  channelvideos:{
   type:[String],required:true
  },
})

const uservideocommentSchema = new mongoose.Schema({
  videoname: {
    type: String,
    required: true
  },username:{
   type: String,
   required: true
  },comment:{
   type: String,
   required: true
  }
})
const videoSchema = new mongoose.Schema({
  videoname: {
    type: String,
    required: true
  },
  channelname: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
  likes:{
   type: String, required: true
  },
  channelimage: {
    type: String,
    required: true
  },

   videosrc: {
    type: String,
    required: true
  },
});

const Video = mongoose.model('Video', videoSchema);
const Channel = mongoose.model('Channels',channels);
const Comments = mongoose.model('Comments',uservideocommentSchema)
const User = mongoose.model('Users',userdetailsSchema)
mongoose.connect('mongodb+srv://tvinayakshastri:CYNZuzd16ins6DQb@cluster0.fb8r7ke.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB lalalalalaaaaaaaa");
}).catch((err) => {
  console.log("Failed to connect to MongoDB", err);
});
app.post('/videos/:videoname/:channelname/:views/:likes/:channelimage/:videosrc', async (req, res) => {
  try {
   const { videoname, channelname, views, likes, channelimage, videosrc } = req.params;
   const video = new Video({ videoname: encodeURIComponent(videoname), 
      channelname: encodeURIComponent(channelname), 
      views: encodeURIComponent(views), 
      likes: encodedURIComponent(likes), 
      channelimage: encodeURIComponent(channelimage), 
      videosrc: encodeURIComponent(videosrc)});
    
    await video.save();
    res.send('Video added successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding video');
  }
});
app.post('/channels/:username/:channelname/:channelimage/:channelsubs/:channelvideos', async (req, res) => {
  try {
   const { username, channelname, channelsubs, channelvideos } = req.params;
   const video = new Channel({ username: encodeURIComponent(username), 
      channelname: encodeURIComponent(channelname), 
      channelimage: encodeURIComponent(channelsubs), 
      channelsubs: encodedURIComponent(channelsubs), 
      channelvideos: encodeURIComponent(channelvideos)})
    await video.save();
    res.send('Video added successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding video');
  }
});
app.get('/comments/:videoname', async (req, res) => {
  try {
    const video = await Comments.findOne({ videoname: req.params.videoname });
    res.send(video.comments);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting comments details');
  }
});
 app.get('/channels/:name', async (req, res) => {
  try {
    const channel = await Channel.findOne({ name: req.params.name });
    res.send(channel);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting channel details');
  }
});
app.get('/videos/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.send(video);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting video details');
  }
});

app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find({});
    res.send(videos);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting videos');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
