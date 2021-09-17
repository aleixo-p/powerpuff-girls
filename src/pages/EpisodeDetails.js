import { useEffect, useState } from 'react';
import Back from '../components/Back'

import EpisodeDisplay from '../components/EpisodeDisplay';

function EpisodeDetails() {
  const [episodeID, setEpisodeID] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    if (window !== undefined) {
      setEpisodeID(new URLSearchParams(window.location.search).get("id"));
    }
  }, []);

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