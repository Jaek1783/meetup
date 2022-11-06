import {Routes, Route} from 'react-router-dom';

import AllMeetupsPages from './pages/AllMeetup';
import FavoritesPages from './pages/Favorites';
import NewMeetupPages from './pages/NewMeetup';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<AllMeetupsPages/>}/>
      <Route path='/favorites' element={<FavoritesPages/>}/>
      <Route path='/new-meetup' element={<NewMeetupPages/>}/>
    </Routes>
  </div>
  )
};

export default App;
