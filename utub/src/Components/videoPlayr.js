import React, { useState, useRef } from 'react';
import {Modal} from 'react-bootstrap'
import Forward30Icon from '@mui/icons-material/Forward30';import Replay30Icon from '@mui/icons-material/Replay30';
function VideoPlayer() {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // The URL of the video to play
  const [playing, setPlaying] = useState(false); // Whether the video is currently playing or not
  const playerRef = useRef(null); // A reference to the player component
  const [seekTime, setSeekTime] = useState(10); // The number of seconds to seek forward or backward when the user clicks the seek buttons
  const [showModal,setShowModal] = useState(false)
  // Functions to handle button clicks
  const handlePlay = () => setPlaying(!playing);
  const handleRewind = () => playerRef.current.seekTo(playerRef.current.getCurrentTime() - seekTime);
  const handleForward = () => playerRef.current.seekTo(playerRef.current.getCurrentTime() + seekTime);
  const handleOptions = () => console.log('Options button clicked');
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div>
     <button onClick={handleShow}>dabaooo</button>
     <Modal show={showModal} onHide={handleClose} size='lg'>
      <Modal.Header>
            <Modal.Title>ccccc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div>
          <video  src="https://res.cloudinary.com/dolqnpgye/video/upload/v1678630540/UBTUBE/Khatta_Meetha___E01_-_Doctor_Vs_Engineer___Apoorva_Arora_NV_Sir_Kota_k8cwtl.mp4" width="100%"
          
          controls />
      
        <button onClick={handlePlay}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={handleRewind} style={{position:'relative',left:"60%"}}><Replay30Icon /></button>
        <button onClick={handleForward} style={{position:'relative',left:"50%"}}><Forward30Icon /></button>
        <button onClick={handleOptions}>Options</button>
      </div>
      </Modal.Body>
    </Modal>
        
    </div>
  );
}

export default VideoPlayer;
