import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'dance monkey', id: 2 },
    { title: 'perl', id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'dodi candra', id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>add songs</button>
    </div>
  );
};

export default SongList;
