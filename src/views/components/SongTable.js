import React from "react";
import PropTypes from "prop-types";

import 'bulma/css/bulma.css';

export default class SongTable extends React.Component {

    render() {

        const data = this.props.data;

        return (
            <div>
                <table class="table is-bordered is-fullwdth is-striped">
                    <thead>
                        <tr>
                            <th><abbr title="Id">Id</abbr></th>
                            <th><abbr title="Username">Username</abbr></th>
                            <th><abbr title="SongName">Song Name</abbr></th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th><abbr title="Id">Id</abbr></th>
                            <th><abbr title="Username">Username</abbr></th>
                            <th><abbr title="SongName">Song Name</abbr></th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr>
                                <th>{idx}</th>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.songName}</td>
                                <td>{item.id}</td>
                                <td>
                                    <button icon="play_arrow" floating accent mini />
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

