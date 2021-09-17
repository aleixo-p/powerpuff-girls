import { useEffect, useState } from 'react';
import Back from '../components/Back'

import EpisodeDisplay from '../components/EpisodeDisplay';

function EpisodeDetails() {
  const [episodeID, setEpisodeID] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);

  //get the episode id from the url
  useEffect(() => {
    if (window !== undefined) {
      setEpisodeID(new URLSearchParams(window.location.search).get("id"));
    }
  }, []);

  //uses the id to get the episode data
  useEffect(() => {
    if (episodeID !== null) {
      fetch('https://api.tvmaze.com/episodes/' + episodeID)
        .then(response => response.json().then(res => setEpisodeData(res)));
    }
  }, [episodeID]);

  return (
    <div>
      {episodeData ? 
        <EpisodeDisplay data={episodeData}/>
        :
        <p>No Episode ID</p>
      }
      <Back/>
    </div>
  );
}

export default EpisodeDetails;