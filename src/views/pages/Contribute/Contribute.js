import React from 'react';
import * as firebase from 'firebase';

import RecordRTC from "recordrtc";

const hasGetUserMedia = !!(navigator.getUserMedia || 
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

export default class Contribute extends React.Component{

    constructor() {
        super();

        this.state = {
            recordVideo: null,
            src: null,
            uploadSuccess: null,
            uploading: false
        };

        this.captureUserMedia = this.captureUserMedia.bind(this);
        this.startRecord = this.startRecord.bind(this);
        
        

    }

    componentDidMount(){

    }

    render(){
        //firebase
        const databaseRef = firebase.database().ref().child('data');
        const speedRef = databaseRef.child('speed');
        speedRef.set(25);

        const song = this.props.location.state.song;
        
        return(
            <div>
                <h1>the name of the song is: {song.songName}</h1>
                <h2>artist: {song.artist}</h2>
                <h2>made by user: {song.username}</h2>
                <button onClick={this.startRecord}>start recording</button>

                {this.state.uploading ? this.renderVideo() : null}

            </div>
        );

    }


  renderVideo() {
    
    var blob = this.state.recordVideo.blob;

    return (
      <video
        autoPlay
        controls
        preload="metadata"
        src={this.state.recordVideo.toURL()}
      >
        Your browser does not support the video element
      </video>
    );
  }

  componentDidMount() {
    if (!hasGetUserMedia) {
      alert(
        "Your browser cannot stream from your webcam. Please switch to Chrome or Firefox."
      );
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    console.log("requestUserMedia");
    this.captureUserMedia(stream => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log("setting state", this.state);
    });
  }

  startRecord() {
    this.captureUserMedia(stream => {
      this.state.recordVideo = RecordRTC(stream, { type: "video" });
      this.state.recordVideo.startRecording();
    });

    setTimeout(() => {
      this.stopRecord();
    }, 4000);
  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      let params = {
        type: "video/webm",
        data: this.state.recordVideo.blob,
        id: Math.floor(Math.random() * 90000) + 10000
      };
      this.setState({ uploading: true });

    });
  } 

  captureUserMedia(callback){
    var params = { audio: false, video: true };
  
    navigator.getUserMedia(params, callback, (error) => {
      alert(JSON.stringify(error));
    });
  };

}