import React from "react";
import PropTypes from "prop-types";

import AddSongModal from "./AddSongModalStateful"
import SongTable from "./SongTable"

import 'bulma/css/bulma.css';

// const SongEntryModel = {
//   id: { type: Number },
//   username: { type: String },
//   songName: { type: String }
// };
// >

export default class SongList extends React.Component{
  constructor(props) {
    super();

    this.state = {
        isOpen: false,
      data: [
        {
          id: 0,
          username: "test",
          songName: "test"
        },
      ],

    };

    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this);


  }

  render() {
    return (
        <div>
            <table>
                {this.state.data.map((item, idx) => (
                    <tr key={idx}>
                        <th>{item.id}</th>
                        <th>{item.username}</th>
                        <th>{item.songName}</th>
                        <th>
                            <button icon="bookmark" label="Contribute" raised primary />
                        </th>
                        <th>
                            <button icon="play_arrow" floating accent mini />
                        </th>
                    </tr>
                ))}
            </table>

            <SongTable/>
            
            <AddSongModal 
                isOpen={this.state.isOpen}
                onCancel={this.handleModalCancel}
                onConfirm={this.handleModalConfirm}
                />

        <button onClick={() => this.dupa()}>the new guy</button>
      </div>
    );
  }

  handleModalCancel() {
      this.setState({isOpen: false});
  } 

  handleModalConfirm(songId,songUsername,songSongName) {
      this.setState({
        data: [
                ...this.state.data,
            {
                id: songId,
                username: songUsername,
                songName: songSongName
            }
        ],
        isOpen: false,
      })
  }

  dupa() {

      this.setState(
          {
              isOpen: !this.state.isOpen,
          }
      )
  }
}

SongList.propTypes = {
    ben: PropTypes.bool
}