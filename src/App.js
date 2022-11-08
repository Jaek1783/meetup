import {Routes, Route} from 'react-router-dom';

import AllMeetupsPages from './pages/AllMeetup';
import FavoritesPages from './pages/Favorites';
import NewMeetupPages from './pages/NewMeetup';

import Layout from './components/layout/Layout';
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPages/>}/>
          <Route path='/favorites' element={<FavoritesPages/>}/>
          <Route path='/new-meetup' element={<NewMeetupPages/>}/>
        </Routes> 
      </Layout>
  </div>
  )
};

export default App;
