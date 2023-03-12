import React,{useState,useEffect} from "react";
import './homepage.css'
import { Container, Row, Col } from 'react-bootstrap';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'; 
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';import DiamondIcon from '@mui/icons-material/Diamond';
const HomePage = () =>{
 const videos =[]
 const explore = ['Trending','Shopping','Music','Films','Live','Gaming','News','Sports','Learning','Fashion & Beauty']
 const iconsExplore = [<TrendingUpOutlinedIcon /> ,<ShoppingBagOutlinedIcon />,<MusicNoteOutlinedIcon />,<MovieOutlinedIcon />,<LiveTvOutlinedIcon />,<SportsEsportsOutlinedIcon />,<NewspaperOutlinedIcon />,<EmojiEventsOutlinedIcon/>,<SchoolOutlinedIcon />,<DiamondIcon />]
 const subscriptions = ['Sadhguru']
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 const [innerHeight, setInnerHeight] = useState(window.innerHeight);

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
 return(
  <>
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
    <Container  style={{height:'auto'}}>
      <Row>
        <Col  style={{heigth:"auto",border:"2px solid black"}} lg={3} md={6} xs={12}>
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%', height: '222px', backgroundColor: 'orange' }}></div>
      <div style={{ backgroundColor: 'pink',width: '100%', height: '40%' }}>
        <Container style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col xs={2} style={{ width: '40px', height: '40px', borderRadius: '50%',backgroundColor:"green" }}>
              
            </Col>
            <Col xs={10} style={{ height: '100%',backgroundColor:'violet' }}>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span style={{ wordWrap: 'break-word',overflow: 'hidden', width:'100%'}}>Some texthdsjfkhfgasjhfgag fuagfekgheuegfaufhaefhgaykjshgsghgsjfhhfgf here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div></div>
 
        </Col>
        <Col  style={{backgroundColor:"white",height:272,border:"2px solid black"}} lg={3} md={6} xs={12}>
          <div style={{ width: '90%' }}>
      <div style={{ width: '100%', height: '60%', backgroundImage: 'url(your-image-url)', backgroundSize: 'cover' }}></div>
      <div style={{ width: '100%', height: '40%' }}>
        <Container style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col xs={2} style={{ height: '100%' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'red' }}></div>
            </Col>
            <Col xs={10} style={{ height: '100%' }}>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div></div>
        </Col>
          <Col  style={{backgroundColor:"blue",heigth:"auto",border:"2px solid black"}} lg={3} md={6} xs={12}>
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%', height: '222px', backgroundColor: 'orange' }}></div>
      <div style={{ backgroundColor: 'pink',width: '100%', height: '40%' }}>
        <Container style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col xs={2} style={{ width: '40px', height: '40px', borderRadius: '50%',backgroundColor:"green" }}>
              
            </Col>
            <Col xs={10} style={{ height: '100%',backgroundColor:'violet' }}>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span style={{ wordWrap: 'break-word',overflow: 'hidden', width:'100%'}}>Some texthdsjfkhfgasjhfgag fuagfekgheuegfaufhaefhgaykjshgsghgsjfhhfgf here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div></div>
 
        </Col>
        <Col  style={{backgroundColor:"white",height:129,border:"2px solid black"}} lg={3} md={6} xs={12}>
         <div style={{ width: '90%' }}>
      <div style={{ width: '100%', height: '60%', backgroundImage: 'url(your-image-url)', backgroundSize: 'cover' }}></div>
      <div style={{ width: '100%', height: '40%' }}>
        <Container style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col xs={2} style={{ height: '100%' }}>
              <div style={{ width: '40%', height: '40%', borderRadius: '50%', backgroundColor: 'red' }}></div>
            </Col>
            <Col xs={10} style={{ height: '100%' }}>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
              <Row style={{ height: 'auto' }}>
                <Col xs={12} style={{ height: 'auto' }}>
                  <span>Some text here</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div></div>
        </Col>
      </Row>
    </Container>
   </div>
  </div></>:<>
    <div style={{display:'flex'}}>
      <div style={{height:`${innerHeight}px`,overflow:'scroll',overflowX: 'hidden',width:'88px'}}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
      </div>

    </div>
  
  </>}</>
  
 )
}

export default HomePage;