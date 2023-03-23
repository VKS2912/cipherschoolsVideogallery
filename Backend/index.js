const express = require('express')
const app = express()
const formData = require('express-form-data');
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const mongoose = require('mongoose')
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");
require('dotenv').config()

app.use(formData.parse());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
   max_file_size: 1000000000,
});
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();  // Add this line
}) 
const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 1000000000 } // Maximum file size in bytes
});
 
app.post('/upload/video', async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.file.path, {
      resource_type: 'video',
      folder: 'UTUBE', // Replace with your desired folder name
    });

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.post('/upload/thumbnail', async (req, res) => {
  console.log(req.files)
  try {
    const result = await cloudinary.uploader.upload(req.files.file.path, {
      resource_type: 'image',
      folder: 'UTUBE', // Replace with your desired folder name
    });

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
// app.post("/upload/thumbnail", upload.single('image'), async (req, res) => {
//     try {
//     const result = await cloudinary.uploader.upload(req.file.path, { folder: 'UBTUBE' });
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error uploading image' });
//   }
// });

// app.post('/upload/videos', upload.fields([{ name: 'videosrc' }, { name: 'thumbnail' },{name:'username'},{name:'channelname'},{name:'channelimage'},{name:"videoname"},{name:'subscriptions'}]), async (req, res) => {
//   try {
//     const { videosrc, thumbnail, channelname, channelimage, videoname,subscriptions,username } = req.files;
    
//     // Upload the video and thumbnail to Cloudinary
//     const videoResult = await cloudinary.uploader.upload(videosrc[0].buffer, {
//       resource_type: 'video',
//       folder: 'UBTUBE',
//     });
//     const thumbnailResult = await cloudinary.uploader.upload(thumbnail[0].buffer, {
//       resource_type: 'image',
//       folder: 'UBTUBE',
//     });

//     // Create a new video document and save it to MongoDB
//     const newVideo = new Video({
      
    
//         username: encodeURIComponent(username), 
//       videoname: encodeURIComponent(videoname),
//       channelname: encodeURIComponent(channelname),
      
//       channelimage: encodeURIComponent(channelimage),
//       videosrc: encodeURIComponent(videoResult.secure_url),
//        thumbnail: encodeURIComponent(thumbnailResult.secure_url),subscription: encodeURIComponent(subscriptions)
//     });
//     newVideo.save((err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error saving video to database');
//       } else {
//         res.status(200).send('Video uploaded successfully');
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error uploading video and/or thumbnail to Cloudinary');
//   }
// });


app.post('/upload/channelimage', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, { folder: 'UBTUBE' });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

app.put('/change/username', (req, res) => {
 const { username } = req.body;
  const { username2 } = req.body;
  console.log(username)
  console.log(channelName)
  Video.updateMany({ username: encodeURIComponent(username)}, { username2: encodeURIComponent(username2) }, { new: true })
    .then(video => {
      if (!video) {
        return res.status(404).send({ message: `Video with username ${username} not found` });
      }
      res.send(video);
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
});

app.put('/change/channelname', (req, res) => {
  const { username } = req.body;
  const { channelName } = req.body;
  console.log(username)
  console.log(channelName)
  Video.updateMany({ username: encodeURIComponent(username)}, { channelname: encodeURIComponent(channelName) }, { new: true })
    .then(video => {
      if (!video) {
        return res.status(404).send({ message: `Video with username ${username} not found` });
      }
      res.send(video);
    })
    .catch(error => {
      res.status(500).send({ message: error.message });
    });
});

app.put('/change/channelimage', async (req, res) => {
  try {
    console.log(req.body.username)
    console.log(req.body.imageId)
    const video = await Video.updateMany({ username: encodeURIComponent(req.body.username) }, { channelimage: encodeURIComponent(req.body.imageId) }, { new: true });
    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating channel image' });
  }
});
const userdetailsSchema = new mongoose.Schema({
 username:{
  type: String,
  required: true
 },
})
const channels = new mongoose.Schema({
 username:{
  type:String,required:true
 }
 ,channelname:{
   type:String,required:true
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
  username:String,
  userpass:{
  type:String,
  required:true
 },userhistory:{
  type: [String],
  required: true
 },likedvideoid: {
    type: [String],
    required: true
  }, watchlatervideoid: {
    type: [String],
    required: true
  },
  videoname: {
    type: String,
    
  },
  channelname: {
    type: String,
    
  },
  views: {
    type: String,
    
  },
  likes:{
   type: String, 
  },
  channelimage: {
    type: String,
    
  },
   channelsubs:{type:String},
   date:{type:String},
   videosrc: {
    type: String,
    
  },thumbnail:{type:String},subscriptions:[String]
});

const Video = mongoose.model('Video', videoSchema);
const Channel = mongoose.model('Channels',channels);
const Comments = mongoose.model('Comments',uservideocommentSchema)
const User = mongoose.model('Users',userdetailsSchema)
mongoose.connect('mongodb+srv://vkshastri6929:uillPOpGmu9RRmFX@cluster69.dntavsr.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  // Video.updateMany({}, { $set: { subscriptions: [] } })
  //     .then(result => {
  //       console.log(`${result.modifiedCount} documents updated`);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  console.log("Connected to MongoDB lalalalalaaaaaaaa");
}).catch((err) => {
  console.log("Failed to connect to MongoDB", err);
});

const mySchema = new mongoose.Schema({
  name: String,
  hindiLetters: String,
  link: String
});

const MyModel = mongoose.model('MyModel', mySchema);

app.post('/comments', (req, res) => {
  const myDocument = new Comments({
    videoname: encodeURIComponent(req.body.videoname),
    username: encodeURIComponent(req.body.username),
    comment: encodeURIComponent(req.body.comment),
  });
  
  myDocument.save()
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

app.post('/login', async (req, res) => {
   console.log(req.body.username)
  console.log(req.body.userpass)
  
  try {
    const user = await Video.findOne({  username: encodeURIComponent(req.body.username), 
      userpass: encodeURIComponent(req.body.userpass) });
    console.log(user)
    if (user) {
      res.send(user)
      
    } else {
      res.send({msg:"zero"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/channels/:searchInput', async (req, res) => {
  const { searchInput } = req.params;
  const channels = await Video.distinct('channelname', { channelname: { $regex: searchInput, $options: 'i' } });
  res.json(channels);
});

app.get('/videos/:searchInput', async (req, res) => {
  const { searchInput } = req.params;
  const videos = await Video.distinct('videoname', { videoname: { $regex: searchInput, $options: 'i' } });
  res.json(videos);
});

app.post('/videos', async (req, res) => {
  console.log(req.body.username)
  console.log(req.body.userpass)
  try {
    const video = new Video({
      username: encodeURIComponent(req.body.username), 
      userpass: encodeURIComponent(req.body.userpass),
      userhistory: encodeURIComponent(req.body.userhistory), 
      likedvideosid: encodeURIComponent(req.body.likedvideosid), 
      watchlatervideosid: encodeURIComponent(req.body.watchlatervideosid), 
      videoname: encodeURIComponent(req.body.videoname),
      channelname: encodeURIComponent(req.body.channelname),
      views: encodeURIComponent(req.body.views),
      likes: encodeURIComponent(req.body.likes),
      channelimage: encodeURIComponent(req.body.channelimage),
      videosrc: encodeURIComponent(req.body.videosrc),
       channelsubs: encodeURIComponent(req.body.channelsubs), 
        date: encodeURIComponent(req.body.date), thumbnail: encodeURIComponent(req.body.thumbnail)
    });

    await video.save();
    res.json({message:'Video added successfully'});
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding video');
  }
});

app.post('/channels', async (req, res) => {
  try {
   const video = new Channel({
      username: encodeURIComponent(req.body.username), 
      channelname: encodeURIComponent(req.body.channelname), 
      channelimage: encodeURIComponent(req.body.channelimage), 
      channelsubs: encodeURIComponent(req.body.channelsubs), 
      channelvideos: encodeURIComponent(req.body.channelvideos)})
    await video.save();
    res.send('Video added successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding video');
  }
});
app.get('/comments', async (req, res) => {
  try {
    const video = await Comments.find({ videoname: req.body.videoname });
    res.send(video);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error getting comments details');
  }
});
//  app.get('/channels/:name', async (req, res) => {
//   try {
//     const channel = await Channel.findOne({ name: req.params.name });
//     res.send(channel);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Error getting channel details');
//   }
// });
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
