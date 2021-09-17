import { useEffect, useState } from 'react';

import ShowCard from '../components/ShowCard'

function SearchDetails() {
  const [results, setResults] = useState(null);

  //searches every "the powerpuff girls" show. I thought  I could offer the choice instead of just showing the original
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls')
        .then(response => response.json().then(res => setResults(res)));
  }, []);

  return (
    <div>
      {results ?
        results.map((data, i)=>(
          <div key={"Show" + i}>
            <ShowCard data={data}/>
          </div>
        ))
        : 
        <p>Loading...</p>
      }
    </div>
  );
}

export default SearchDetails;