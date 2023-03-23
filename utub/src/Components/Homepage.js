import React,{useState,useEffect} from "react";
import axios from 'axios';
import './homepage.css'
import { Modal, Button, Form } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'; 
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';import DiamondIcon from '@mui/icons-material/Diamond';import MenuIcon from '@mui/icons-material/Menu';
const HomePage = () =>{
  
  const explore = ['Trending','Shopping','Music','Films','Live','Gaming','News','Sports','Learning','Fashion & Beauty']
 const iconsExplore = [<TrendingUpOutlinedIcon /> ,<ShoppingBagOutlinedIcon />,<MusicNoteOutlinedIcon />,<MovieOutlinedIcon />,<LiveTvOutlinedIcon />,<SportsEsportsOutlinedIcon />,<NewspaperOutlinedIcon />,<EmojiEventsOutlinedIcon/>,<SchoolOutlinedIcon />,<DiamondIcon />]
 const subscriptions = ['Sadhguru']
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 const [innerHeight, setInnerHeight] = useState(window.innerHeight);
 const [showLogin, setShowLogin] = useState(false);
 const [showSignup, setShowSignup] = useState(false);
 const [username, setUsername] = useState('');
  const [userpass, setUserPass] = useState('');
 const [userDetails,setUserDetails] = useState([])
 const [isPlaying, setIsPlaying] = useState(false);
 const [sign,setSign] = useState(false)
 const [log,setLog] = useState(false)
 const [l,setL] = useState(1)
 
 const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => {setShowLogin(false);setL(1);}
  
  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  useEffect(()=>{console.log(username)},[username])
  const handlePasswordChange = (event) => {
    setUserPass(event.target.value);
  };

  const handleSubmitSignin = async(event) => {
    console.log(username)
    console.log(userpass)
    event.preventDefault();
     try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username , userpass })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    // handle login logic here
  };
   const handleSubmitLogin = async(event) => {
    console.log(username)
    console.log(userpass)
    event.preventDefault();
     try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username , userpass })
      });
      const data = await response.json();

      console.log(data);
       setUserDetails(data)
       console.log(userDetails)
      if(data.msg!== "zero")

      {setL(1);setShowLogin(false);
        setLog(true)}
      else{setL(0)}
    } catch (error) {
      console.error(error);
    }
    // handle login logic here
  };
  useEffect(()=>{
   console.log(userDetails)
  },[userDetails])
  function handleVideoClick() {
    setIsPlaying(true);
  }
  

const [videos,setVideos] = useState([])
 useEffect(()=>{
   fetch("http://localhost:3000/videos").then(response => response.json())
    .then(data => {
      
      
      setVideos(data)
      console.log(videos,"kk")
    });
 },[])
 useEffect(()=>{
  console.log(videos)
 },[videos])
  useEffect(() => {
    function handleResize() {
      setInnerHeight(window.innerHeight);
      console.log(innerHeight)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
   const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };
  const [c,setC] = useState(1)
  const [showUser,setShowUser] = useState(false)
  const [showChannel,setShowChannel] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [username2, setUsername2] = useState("");
  const [channelName, setChannelName] = useState("");
  const [channelImage, setChannelImage] = useState("");
  const [videoName, setVideoName] = useState("");
  const [video, setVideo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const handleChannelNameSubmit = async e => {
     e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:3000/change/channelname`, { username, channelName });
      if (res.status === 404) {
        alert('Channel not found');
      } else {
        alert('Channel updated');
        
        setUserDetails(prevState => ({ ...prevState, channelname: channelName }));
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update channel');
    }
  };
  const handleusernameSubmit = async e => {
     e.preventDefault();
     
    try {
      const res = await axios.put(`http://localhost:3000/change/username`, { username,username2 });
      if (res.status === 404) {
        alert('Channel not found');
      } else {
        alert('Channel updated');
         
         setUsername(username2)
         console.log(username2)
         console.log(userDetails[0].username,"kk")
         setUserDetails(prevState => ({ ...prevState, username: username2 }));
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update channel');
    }
  };
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUsername2Change = (event) => setUsername2(event.target.value);
  const handleChannelNameChange = (event) =>
    setChannelName(event.target.value);
  const handleChannelImageChange = (event) =>
  {  setChannelImage(event.target.files[0]);
      console.log(channelImage)}
  const handleVideoNameChange = (event) => {setVideoName(event.target.value);console.log(videoName);}
  const handleVideoFileChange = (event) => {setVideo(event.target.files[0]);console.log(video)}
  const handleThumbnailFileChange = (event) =>
    {setThumbnail(event.target.files[0]);
    console.log(thumbnail)}
   useEffect(()=>{
    console.log(videoName)
   },[videoName])
   useEffect(()=>{
    console.log(video)
   },[video])
   useEffect(()=>{
    console.log(thumbnail)
   },[thumbnail])
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("username", username2);
    formData.append("channelName", channelName);
    formData.append("channelImage", channelImage);
    // send data to backend using fetch or axios
    // clear input fields
    setUsername2("");
    setChannelName("");
    setChannelImage("");
  };
  const [searchInput,setSearchInput] = useState("")
  const [searchInputResultVideos,setSearchInputResultVideos] = useState([])
  const [searchInputResultChannels,setSearchInputResultChannels] = useState([])
  const [showResults,setShowResults] = useState([])
  const [uploadedVideo,setUploadedVideo] = useState("")
  const [uploadedThumbnail,setUploadedThumbnail] = useState("")
 
  const handleInputChange = async (e) => {
     setSearchInput(e.target.value);
     console.log(e.target.value,"infunc")
     var ss = [];
  try {
      const response = await axios.get(`http://localhost:3000/videos/${e.target.value}`);
      console.log(response,"in2");
       response.data.map((item,index)=>{
        ss[index]=item
       })
      
       // do something with response data
    } catch (error) {
      console.error(error);
    }
   try {
      const response = await axios.get(`http://localhost:3000/channels/${e.target.value}`);
      console.log(response,"in3");
      const r = ss.length

       response.data.map((item,index)=>{
        ss[index+r]=item
       })
       console.log(ss)
       setShowResults(ss)

       // do something with response data
    } catch (error) {
      console.error(error);
    }
   
    // addTORESULT()
  }
  // const addTORESULT = () =>{
  //   console.log("jjj")
  //   setShowResults([...searchInputResultVideos,...searchInputResultChannels])
  // }
   useEffect(()=>{console.log(searchInput,"searchInput")},[searchInput])
   useEffect(()=>{console.log(showResults,"45632ss")},[showResults])
  const handleUploadVideo = async (e) => {
     e.preventDefault();
     
  console.log(video,thumbnail)
    try {
      const formData = new FormData();
      formData.append('file', video);
      formData.append('upload_preset', 'UTUBE'); // Replace with your upload preset name

      const response = await axios.post('http://localhost:3000/upload/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
                        console.log(response)
      setUploadedVideo(response.data.secure_url);
      console.log(uploadedVideo)
    } catch (error) {
      console.error(error);
    }

    
     const formData1 = new FormData();
    formData1.append('file', thumbnail);
     formData1.append('upload_preset', 'UTUBE');
    console.log(formData1)
    try {
      const response = await axios.post('http://localhost:3000/upload/thumbnail', formData1, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
      setUploadedThumbnail(response.data.secure_url)
      console.log(uploadedThumbnail)
    } catch (error) {
      console.error(error);
    }
    setUserDetails(prevState => ({ ...prevState, videoname: videoName, videosrc: uploadedVideo, thumbnail: uploadedThumbnail  }));
    try {
      const response = await axios.post('http://localhost:3000/videos', userDetails);
      console.log(response)
      setVideoName('');
      setThumbnail('');
      setVideo('')
    } catch (error) {
      console.error(error);
    }

};

  
  const handleSubmitChannelImage = async (event) => {
    event.preventDefault();
    console.log(channelImage)
    const formData = new FormData();
    formData.append('image', channelImage);
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:3000/upload/channelimage', formData);
      console.log(response)
      console.log(username)
      const videoData = { username, imageId: response.data.public_id };
      await axios.put('http://localhost:3000/change/channelimage', videoData);
      console.log('Channel image updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };
 return(
  <>
 
  <div style={{width:'100%',height:'auto',backgroundColor:"black",display:'flex'}}>
    <div style={{width:'8%',float:'left',padding:6}}>
     <MenuIcon style={{color:'white',width:'95%',fontSize:'2.4rem'}} />
    </div>
    <div style={{float:'left',width:"20%",color:'white',fontWeight:"bold",fontStyle:'italic',fontSize:"2.1rem",textAlign:'left'}}>
       Utube
      </div>
      <div style={{display:'flex',width:'40%'}}>
        {}
        <SearchIcon style={{color:'white',float:'left',position:'relative',left:windowWidth>950?'7%':windowWidth>600?"11%":windowWidth>400?"13%":"14%",top:12}} />
       <input type="text" value={searchInput} onChange={(e)=>{handleInputChange(e)}} style={{width:'100%',paddingLeft:windowWidth>950?'7%':windowWidth>600?"11%":windowWidth>400?"13%":"14%",border:'2px solid white',borderRadius:'20px',paddingRight:"7%",backgroundColor:"black",color:'white',height:"2.1rem",marginTop:7}} />
       <CancelIcon style={{position:'relative',left:windowWidth>'1100'?"-8%":windowWidth>800?"-10%":windowWidth>620?'-12%':'-14%',marginTop:13,backgroundColor:'black',color:'white'}}/>
      </div>
      {
        sign==true || log==true ? <>
        <div style={{float:'left',display:'flex',width:'20%',marginLeft:windowWidth>'1100'?"8%":windowWidth>800?"9%":windowWidth>620?'6%':'2%'}}>
            <CircleNotificationsIcon style={{width:40,height:40,borderRadius:"50%",backgroundColor:'black',marginRight:20,marginTop:8,color:'white'}} />
            <div style={{width:40,height:40,marginTop:8,position:'relative'}}><AccountCircleIcon onClick={()=>{if(c%2!==0){setShowUser(true);console.log(showUser);setC(c+1)}else{setShowUser(false);setC(c+1)}}} style={{width:40,height:40,borderRadius:"50%",cursor:"pointer",backgroundColor:'black',color:'white'}} />
          {showUser===true?<><div style={{width:'200px',height:'auto',padding:20,borderRadius:20,backgroundColor:"black",zIndex:"43434",position:'absolute',top:40,left:-80}}>
            <div style={{height:'auto',width:"100%",backgroundColor:'black',color:'white',fontSize:"1.3rem",marginTop:5,marginBottom:5}}>{decodeURIComponent(userDetails.username)}</div>
            {userDetails.channelname!="undefined"?<>
             <div onClick={()=>{setShowChannel(true)}} style={{height:'auto',color:'white',width:"100%",backgroundColor:'black',marginBottom:5,fontSize:"1.3rem",}}>
                  {decodeURIComponent(userDetails.channelname)}
             </div>
             </>:<> <div onClick={()=>{setShowChannel(true)}} style={{height:'auto',marginBottom:5,marginTop:5,color:'white',width:"100%",backgroundColor:'black',cursor:"pointer",fontSize:"1.3rem",}}>
                 Create Channel
             </div></>}
             <button style={{height:'auto',width:"100%",backgroundColor:'black',color:'red',fontWeight:'bold',border:0,marginTop:5}}>LOG OUT</button>
             </div></>:<></>}</div>
             
            
        </div>
        </> : <><div style={{float:'left',display:'flex',width:'20%',marginLeft:windowWidth>'1100'?"8%":windowWidth>800?"9%":windowWidth>620?'6%':'2%'}}>
        <button onClick={handleShowLogin} style={{backgroundColor:'black',color:'white',height:'auto',fontSize:'1rem',margin:10,border:'none'}}>Login</button>
        <button onClick={handleShowSignup} style={{backgroundColor:'black',color:'white',height:'auto',fontSize:'1rem',margin:10,border:'none'}}>Signup</button>
      </div></>
      }
    </div>
    
     <Button variant="primary" onClick={handleShow}>
        User Details Modal
      </Button>
    <Modal show={showModal} onHide={handleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label style={{margin:5}}>Username</Form.Label>
              <Form.Control
                style={{margin:5}}
                type="text"
                placeholder={username}
                value={username2}
                onChange={handleUsername2Change}
              />
              <Button style={{margin:5}} onClick={(e)=>{handleusernameSubmit(e)}}>Save Changes</Button>
            </Form.Group>
            <Form.Group controlId="channelName">
              <Form.Label style={{margin:5}}>Channel Name</Form.Label>
              <Form.Control
                style={{margin:5}}
                type="text"
                placeholder={
  userDetails.channelname !== "undefined"
    ?  `${decodeURIComponent(userDetails.channelname)}`
    : "create Channel"
}
              value={channelName}
                onChange={handleChannelNameChange}
              />
              <Button style={{margin:5}} onClick={(e)=>handleChannelNameSubmit(e)}>Save Changes</Button>
            </Form.Group>
            <Form.Group controlId="channelImage">
              <Form.Label style={{margin:5}}>Upload Channel Image</Form.Label>
              <Form.Control style={{margin:5}}
                type="file"
                accept="image/*"
                onChange={handleChannelImageChange}
              />
              <Button style={{margin:5}} onClick={(e)=>{handleSubmitChannelImage(e)}}>Save Changes</Button>
            </Form.Group>
            <Form.Group controlId="channelImage">
              <Form.Label style={{margin:5}}>Subscriptions</Form.Label>
              {userDetails.length>0 && (userDetails.subscriptions.length==0?<><div>No Channels Subscribed</div></>:<>{userDetails.subscriptions.map((item,index)=>{return(<div>{item}</div>)})}</>)}
              
            </Form.Group>
            <hr />
            {
            userDetails.channelname!=="undefined"?
            <>
            <Form.Group controlId="videoName" method="post" enctype="multipart/form-data">
              <Form.Label>Add Videos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter video name"
                value={videoName}
                onChange={handleVideoNameChange}
              />
  <Form.Label>ADD Thumbnail</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    onChange={handleThumbnailFileChange}
  />
  <Form.Label>ADD Video</Form.Label>
  <Form.Control
    type="file" accept="video/*"
    onChange={handleVideoFileChange}
  />
   <Button style={{margin:5}} onClick={(e)=>{handleUploadVideo(e)}}>Save Changes</Button>
</Form.Group>
            </> 
:<> <div>dsds</div></>}</Form></Modal.Body></Modal>
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitLogin}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={userpass} onChange={handlePasswordChange} />
          </Form.Group>

          <Button variant="primary"  style={{margin:8}}type="submit">Submit</Button>
        </Form>
         { l === 0 && 
  
      <div className="alert alert-warning" role="alert">
        Account Not Found, Signup instead
      </div>
  
  }
      </Modal.Body>
      <Modal.Footer>
        <p>Don't have an account?</p>
        <Button variant="secondary" onClick={handleSwitchToSignup}>Signup</Button>
      </Modal.Footer>
    </Modal>
    <Modal show={showSignup} onHide={handleCloseSignup}>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitSignin}>
          <Form.Group controlId="formUsername">
            <Form.Label> Create a Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Create a Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={userpass} onChange={handlePasswordChange} />
          </Form.Group>

          <Button variant="primary" style={{margin:8}}type="submit">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>Already have an account?</p>
        <Button variant="secondary" onClick={handleSwitchToLogin}>Login</Button>
      </Modal.Footer>
    </Modal>

  { windowWidth > 1190?<><div style={{display:'flex'}}>
   <div style={{float:'left',height:`${innerHeight}px`,overflow:'scroll',overflowX: 'hidden',width:'290px', backgroundColor:'black',padding:15}}>
    <div style={{height:'100%',width:'100%'}}>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}><svg style={{backgroundColor:"white",width:29,padding:3,borderRadius:9}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg> Home</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}>Shorts</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}><svg style={{backgroundColor:"white",width:29,padding:3,borderRadius:9}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"/></svg> Subscriptions</button>
     <div style={{width:"88%",maginLeft:'6%',marginRight:'6%',height:1,backgroundColor:'lightgrey',margin:10}}></div>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}><VideoLibraryIcon />    Library</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}><HistoryIcon />     History</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}><OndemandVideoSharpIcon />         Your videos</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}><WatchLaterOutlinedIcon /> Watch Later</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}> <ThumbUpOutlinedIcon /> Liked videos</button>
     <div style={{width:"88%",maginLeft:'6%',marginRight:'6%',margin:10,height:1,backgroundColor:'lightgrey',}}></div>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'20px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}>Subscriptions</button>
     {subscriptions.map((item,index)=>{
      return(
       <button key={index} style={{height:'auto',width:'90%',marginLeft:'9%',marginRight:'1%',fontSize:'17px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}>
       {item}
       </button>
      )
     })}
     <div style={{width:"88%",maginLeft:'6%',marginRight:'6%',height:1,margin:10,backgroundColor:'lightgrey'}}></div>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'20px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}>Explore</button>
     {
      explore.map((item,index)=>{
       return(
        <button key={index} style={{height:'auto',width:'90%',marginLeft:'9%',marginRight:'1%',fontSize:'17px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins'}}>{iconsExplore[index] }    {item}</button>
       )
      })
     }
     <div style={{width:"88%",maginLeft:'6%',marginRight:'6%',height:1,margin:10,backgroundColor:'lightgrey'}}></div>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins',cursor:'pointer'}}>Settings</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins',cursor:'pointer'}}>Report history</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins',cursor:'pointer'}}>Help</button>
     <button style={{height:'auto',width:'90%',marginLeft:'5%',marginRight:'5%',fontSize:'18px',textAlign:'left',backgroundColor:'black',color:'white',border:'3px solid black',borderRadius:'6px',padding:5,fontFamily:'poppins',cursor:'pointer'}}>Send feedback</button>
     <div></div>
    </div>
   </div>
   <div style={{float:'left',padding:10,width:"100%", backgroundColor:'black',height:`${innerHeight}px`,overflow:'scroll',overflowX: 'hidden' }}>
  
    {videos.map((item,index)=>{
      var d = decodeURIComponent(item.views)
      function getMagnitude(d) {
  if (Math.abs(d) >= 1000000) {
    return (d / 1000000).toFixed(2) + " million";
  } else if (Math.abs(d) >= 100000) {
    return (d / 100000).toFixed(2) + " lakh";
  } else if (Math.abs(d) >= 1000) {
    return (d / 1000).toFixed(2) + " thousand";
  } else {
    return d.toString();
  }
} 

const d2 = getMagnitude(d)

      return(
          
        <div style={{float: index+1 % 3 === 0 ? 'none' : 'left',
      clear: index+1 % 3 === 0 ? 'both' : 'none',height:"auto",border:"7px solid black"}} lg={3} md={6} xs={12}>
        <div onClick={handleVideoClick}>
      {isPlaying ? (
        <video
          src={decodeURIComponent(item.videosrc)}
          width="426"
          height="240"
          controls
        />
      ) : (<>
         <div style={{borderRadius:"21px",border:"1px solid white",height:'292px'}}>
        <div
          style={{
            width: "353px",
            height: "199px",
            background:`url(${decodeURIComponent(item.thumbnail)})`,backgroundSize: 'cover',
            display: "flex",
            justifyContent: "center",borderRadius:"21px",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
        </div>
        <div style={{height:"60px",width:'353px',backgroundColor:"black",borderRadius:"21px",display:'flex'}}>
          <div style={{ background:`url(${decodeURIComponent(item.channelimage)})`,marginTop:10,marginLeft:12,border:"2px solid black",float:'left',backgroundSize: 'cover',borderRadius:"50%",width:"40px",height:"40px"}}></div>  
          <div style={{float:'left',height:'auto',width:280}}>
             <div  className="sentence-text" style={{width:"auto",height:'22px',fontFamily:'serif',whiteSpace: 'nowrap',fontSize:18,fontWeight:"400px",color:'white',textAlign:'left',paddingLeft:15}}>{decodeURIComponent(item.videoname)}</div>
             <div style={{width:"100%",height:'auto',fontFamily:"serif",fontSize:15,color:'white',textAlign:'left',paddingLeft:15}}>{decodeURIComponent(item.channelname)}</div>
             <div style={{width:"100%",height:'auto',fontFamily:"serif",fontSize:13,color:'white',textAlign:'left',paddingLeft:15}}>{d2}  .  {decodeURIComponent(item.date)}</div>
             
          </div>
        </div>

        </div>
        
        </>
      )}
    </div>
        </div>
      )
    })}
     
   </div>
  </div></>:<>
    <div style={{display:'flex',backgroundColor:"black"}}>
      <div style={{height:`${innerHeight}px`,overflow:'scroll',overflowX: 'hidden',width:'69px',backgroundColor:"black"}}>
          <div style={{width:'100%',height:"auto",marginBottom:"12px"}}>
             <div style={{width:'100%',height:"auto"}}>
              <HomeIcon style={{color:"white"}} />
             </div>
             <div style={{fontSize:"11px",fontFamily:"poppins",color:"white",fontWeight:"light"}}>
              Home
             </div>
            </div>
            <div style={{width:'100%',height:"auto",marginBottom:"12px"}}>
              <div style={{width:'100%',height:"auto"}}>
              <ExploreIcon style={{color:"white"}} />
             </div>
             <div style={{fontSize:"11px",fontFamily:"poppins",color:"white",fontWeight:"light"}}>
              Explore
             </div>
            </div>
            <div style={{width:'100%',height:"auto",marginBottom:"12px"}}>
              <div style={{width:'100%',height:"auto"}}>
              <SubscriptionsIcon style={{color:"white"}} />
             </div>
             <div style={{fontSize:"11px",fontFamily:"poppins",color:"white",fontWeight:"light"}}>
              Subscription
             </div>
            </div>
            <div style={{width:'100%',height:"auto",marginBottom:"12px"}}>
              <div style={{width:'100%',height:"auto"}}>
              <VideoLibraryIcon style={{color:"white"}} />
             </div>
             <div style={{fontSize:"11px",fontFamily:"poppins",color:"white",fontWeight:"light"}}>
              Library
             </div>
            </div>
      </div>
      <div style={{height:`${innerHeight}px`,overflow:'scroll',overflowX: 'hidden',backgroundColor:"black"}}>
        {videos.map((item,index)=>{
          return(
             <div onClick={handleVideoClick}>
      {isPlaying ? (
        <video
          src={decodeURIComponent(item.videosrc)}
          width="426"
          height="240"
          controls
        />
      ) : (<>
        <div
          style={{
            width: "353px",
            height: "199px",
            background:`url(${decodeURIComponent(item.thumbnail)})`,backgroundSize: 'cover',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
        </div>
        
        </>
      )}
    </div>
          )
        })}
       
    </div>
        
      
        
    </div>
  
  </>}</>
  
 )
}

export default HomePage;