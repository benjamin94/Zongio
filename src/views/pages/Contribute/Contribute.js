import React from 'react';

export default class Contribute extends React.Component{

    constructor(){
        super();
        
        this.state = {
            hi:1,
        }
    }

    render(){

        const song = this.props.location.state.song;

        return(
            <div>
                <h1>the name of the song is: {song.songName}</h1>
                <h2>artist: {song.artist}</h2>
                <h2>made by user: {song.username}</h2>

            </div>
        );

    }
}