import React from "react";

export default function SongPlaylist() {
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button className="button is-link">+ Add Song to Playlist</button>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}
