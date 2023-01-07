// import { useState } from 'react'
// import CounterPage from './pages/CounterPage'
import './App.css'

// function App() {

//   const [initialCount, setInitialCount] = useState(10);
//   return (
//     <CounterPage initialCount={initialCount}/>
//   )
// }

// export default App

import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}