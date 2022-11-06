import {Routes, Route} from 'react-router-dom';

import AllMeetupsPages from './pages/AllMeetup';
import FavoritesPages from './pages/Favorites';
import NewMeetupPages from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
    <Routes>
      <Route path='/' element={<AllMeetupsPages/>}/>
      <Route path='/favorites' element={<FavoritesPages/>}/>
      <Route path='/new-meetup' element={<NewMeetupPages/>}/>
    </Routes>
  </div>
  )
};

export default App;
