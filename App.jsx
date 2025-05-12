import React, { useContext } from 'react';

import Sidebar from './components/Sidebar.jsx';
import Player from './components/Player.jsx';
import Display from './components/Display.jsx';
import { PlayerContext } from './PlayerContext.jsx';  // ✅ Fix import

const App = () => {
  const { audioRef,track } = useContext(PlayerContext);  // ✅ Ensure it's inside provider

  return (
    <div className='h-screen bg-gray-900'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'> </audio>
      </div>
    </div>
  );
};

export default App;
