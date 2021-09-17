import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import SearchDetails from './pages/SearchDetails';
import ShowDetails from './pages/ShowDetails';
import EpisodeDetails from './pages/EpisodeDetails';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact><SearchDetails/></Route>
        <Route path='/show-details' exact><ShowDetails/></Route>
        <Route path='/episode-details' exact><EpisodeDetails/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
