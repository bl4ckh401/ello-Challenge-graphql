import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './ElloPages/HomePage';
import StoryPage from './ElloPages/StoryPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route strict exact path='/' element={<HomePage />} />
          <Route strict path='/story/:pageIndex' element={<StoryPage />} />
          {/* <Route strict path='/:id' element={ } /> */}

        </Routes>
      </Router>

      {/* <CharactersList /> */}
    </div>
  );
}

export default App;
