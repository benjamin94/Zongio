import React from "react";

import 'bulma/css/bulma.css';

export default class SongTable extends React.Component {

    goToContribute(song) {
        this.props.history.push(`/contribute/${song.id}`, {song});    
      }

    renderTableBody(data) {
        return data.map((song, index) => {
            return (
                <tr key={index} data-item={song} onClick={() => this.goToContribute(song)}>
                    <th data-title="Index">{index}</th>
                    <td data-title="Creator">{song.username}</td>
                    <td data-title="Artist">{song.artist}</td>
                    <td data-title="SongName">{song.songName}</td>
                    <td>
                        <span className="icon">
                            <i className="fa fa-play-circle-o"></i>
                        </span>
                    </td>
                </tr>
            );
        }
        );
    }

    render() {
        const data = this.props.data;
        return (
            <div>
                <table className="table is-fullwdth">
                    <thead>
                        <tr>
                            <th><abbr title="Id">Id</abbr></th>
                            <th><abbr title="Creator">Creator</abbr></th>
                            <th><abbr title="Artist">Artist</abbr></th>
                            <th><abbr title="SongName">Song Name</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody(data)}
                    </tbody>
                </table>
            </div>
        );
    }
}