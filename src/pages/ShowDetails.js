import { useEffect, useState } from 'react';
import Back from '../components/Back'

import ShowDisplay from '../components/ShowDisplay'

function ShowDetails() {
  const [showID, setShowID] = useState(null);
  const [showData, setShowData] = useState(null);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    if (window !== undefined) {
      setShowID(new URLSearchParams(window.location.search).get("id"));
    }
  }, []);

  useEffect(() => {
    if (showID !== null) {
      fetch('https://api.tvmaze.com/shows/' + showID)
        .then(response => response.json().then(res => setShowData(res)));
    }
  }, [showID]);

  useEffect(() => {
    if (showData !== null) {
      fetch('https://api.tvmaze.com/shows/' + showData.id + "/episodes")
        .then(response => response.json().then(res => setEpisodes(res)));
    }
  }, [showData]);

  return (
    <div style={{width: "100%"}}>
      {showData ? 
        <ShowDisplay data={showData} episodes={episodes}/>
       : 
        <p>{showData===null ? 'No Show Selected' : 'Loading'}</p>
      }
      <Back/>
    </div>
  );
}

export default ShowDetails;