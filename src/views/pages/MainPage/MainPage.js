import React from 'react';

import AddSongModal from "../../components/AddSongModal";
import SongTable from "../../components/SongTable";
import dummyData from "../../../config/dummyData";

import styles from "./styles.css";

import * as firebase from 'firebase';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            //Main State
            data: dummyData,

            //Modal State
            modalIsOpen: false,

        };

        //Modal Handlers
        this.handleModalConfirm = this.handleModalConfirm.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);

        //Firebase Methods
        this.dbSongAdded = this.dbSongAdded.bind(this);
        this.dbSongDeleted = this.dbSongDeleted.bind(this);
        this.deSongUpdated = this.deSongUpdated.bind(this);
        this.firebasePushSong = this.firebasePushSong.bind(this);

    }

    componentDidMount() {

        this.setState({
            data: []
        });

        const databaseRef = firebase.database().ref();

        var songsRef = databaseRef.child('songs/');
        songsRef.on('child_added', (song) => {
            this.dbSongAdded(song);
        });

        songsRef.on('child_changed', function (data) {
            //TODO
        });

        songsRef.on('child_removed', function (data) {
            //TODO
        });

    }

    //Firebase Methods
    dbSongAdded(song) {
        this.setState({
            data: [
                ...this.state.data,
                {
                    ...song.val(),
                    id: song.key,
                }
            ],
        });
    }

    dbSongDeleted(postElement, key, value, author){
    }

    deSongUpdated(postElement, key){
    }


    render() {

        return (
            <div>
                <h1 className="title has-text-centered">Music with friends, family and the world.</h1>

                <SongTable
                    data={this.state.data}
                    history={this.props.history}
                />

                <AddSongModal
                    isOpen={this.state.modalIsOpen}
                    onConfirm={this.handleModalConfirm}
                    onCancel={this.modalClose}
                />

                <a className="button is-primary is-outlined" onClick={() => this.modalOpen()}>Click Me</a>

            </div>
        );
    }

    handleModalConfirm(song) {
        this.firebasePushSong(song)
        this.setState({
            modalIsOpen: false,
        });
    }

    modalOpen() {
        this.setState({ modalIsOpen: true });
    }

    modalClose() {
        this.setState({ modalIsOpen: false });
    }

    firebasePushSong(song){
        const databaseRef = firebase.database().ref();        
        var songsRef = databaseRef.child('songs/');
        songsRef.push(song); 
    }

}

