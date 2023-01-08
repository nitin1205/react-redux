// import { useState } from 'react'
// import CounterPage from './pages/CounterPage'
import { useDispatch, useSelector } from 'react-redux';

import { reset } from './store';
import './App.css'
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

// function App() {

//   const [initialCount, setInitialCount] = useState(10);
//   return (
//     <CounterPage initialCount={initialCount}/>
//   )
// }

// export default App


export default function App() {

  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
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