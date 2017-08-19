import React from 'react';
import * as firebase from 'firebase';

import styles from "./styles.css";

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
            uploading: false,
            downloadedBlob: null,
        };

        this.captureUserMedia = this.captureUserMedia.bind(this);
        this.startRecord = this.startRecord.bind(this);    
        this.stopRecord = this.stopRecord.bind(this);            
        this.getFirstBlob = this.getFirstBlob.bind(this);    
        

    }

    render(){
            
      const song = this.props.location.state.song;
      
        return(
            <div>
              <div className="box has-text-centered main-box">
                <h1 className="title is-centred">{song.songName + ", " + song.artist}</h1>
                <h2 className="subtitle">cover by: {song.username}</h2>
              </div>

              <button onClick={this.startRecord}>start recording</button>


                {//this.state.recordVideo ? this.renderVideo() : null
                }

                {this.state.downloadedBlob ? this.renderDownloadedVideo() : null}

            </div>
        );

    }

    //{this.state.uploading ? this.renderVideo() : null}


    renderDownloadedVideo() {

      var blob = this.state.downloadedBlob;

      return (
        <video
          autoPlay
          controls
          preload="metadata"
          src={blob}
        >
          Your browser does not support the video element
        </video>
      );
    }

  renderVideo() {
    
    var blob = this.state.recordVideo.blob;

    return (
      <video
        autoPlay
        controls
        preload="metadata"
        src={blob.toURL()}
      >
        Your browser does not support the video element
      </video>
    );
  }

  componentDidMount() {

    this.getFirstBlob();
    
    if (!hasGetUserMedia) {
      alert(
        "Your browser cannot stream from your webcam. Please switch to Chrome or Firefox."
      );
      return;
    }
    //this.requestUserMedia();
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
      this.setState({
        recordVideo: RecordRTC(stream, { type: "video" }),
      })
      this.state.recordVideo.startRecording();
    });

    setTimeout(() => {
      this.stopRecord();
    }, 4000);
  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {

      const blob = this.state.recordVideo.blob;
      const song = this.props.location.state.song;      
      const songId = song.id;

      let params = {
        type: "video/webm",
        data: blob,
        id: Math.floor(Math.random() * 90000) + 10000
      };
      this.setState({ uploading: true });

      var storage = firebase.storage().ref()
      var songIdStorage = storage.child(`/songs/${songId}/1`);
      
      songIdStorage.put(blob).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      
    });
  } 

  getFirstBlob(){

    const song = this.props.location.state.song;      
    const songId = song.id;

    console.log("starting to get blob");
    
    var storage = firebase.storage().ref()
    var songIdStorage = storage.child(`/songs/${songId}/1`);

    songIdStorage.getDownloadURL().then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;
        this.setState({downloadedBlob: blob});
        console.log("aqui toy" + blob);
      };
      xhr.open('GET', url);
      xhr.send();
    
    }).catch(function(error) {
      // Handle any errors
    });
    
  }

  captureUserMedia(callback){
    var params = { audio: true, video: true };
  
    navigator.getUserMedia(params, callback, (error) => {
      alert(JSON.stringify(error));
    });
  };

}