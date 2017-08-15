import React from 'react';

import AddSongModal from "../../components/AddSongModal"
import SongTable from "../../components/SongTable"
import dummyData from "../../../config/dummyData"

export default class MainPage extends React.Component{

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
    
    
  }

    render() {
        return (
            <div>
                <h1>Look for your fav song!</h1>
                <p>if its not there , be the one who creates it</p>

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
      this.setState({
          data: [
              ...this.state.data,
              {
                  id: song.id,
                  username: song.username,
                  artist: song.artist,
                  songName: song.songName,
              }
          ],
          modalIsOpen: false,
      });
  }

  modalOpen() {
      this.setState({modalIsOpen: true});
  }

  modalClose() {
    this.setState({modalIsOpen: false});
}

} 

