import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/home';
import './App.css';
import { Explore } from './pages/Explore/Explore';
import { Startup } from './pages/Startup/Startup';
import { Bookmarks } from './pages/Bookmarks/Booksmarks';
import { Profile } from './pages/Profile/Profile';
import { SignIn } from './pages/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmarks />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
