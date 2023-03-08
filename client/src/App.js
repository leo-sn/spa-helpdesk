import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import FindARep from "./pages/FindARep/FindARep"
import BookARoom from "./pages/BookARoom/BookARoom"
import TakeANote from "./pages/TakeANote/TakeANote";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ConfigurationPage from './pages/ConfigurationPage/ConfigurationPage';


//icons:
import homeIcon from './assets/icons/home.png';
import findARepIcon from './assets/icons/user.png';
import takeANoteIcon from './assets/icons/pencil.png';
import bookARoomIcon from './assets/icons/meeting.png';
import settingIcon from './assets/icons/setting-icon.png'


function App() {

  const [user, setUser] = useState(null);

  const getUser = async() => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url,{ withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser()
  },[]);


  const services = [
    {title:'HOME', iconPath: homeIcon}, 
    {title:'FIND-A-REP', iconPath:findARepIcon},
    {title:'TAKE-A-NOTE', iconPath:takeANoteIcon},
    {title:'BOOK-A-ROOM', iconPath:bookARoomIcon},
    {title:'CONFIGURATION',iconPath:settingIcon}];


  return (
    <div className="App">
      <Routes>
        <Route 
          exact
          path="/"
          element={user ? <Home userDetails={user} services={services}/> : <Navigate to="/login"/>}>
        </Route>

        <Route 
          exact
          path="/find-a-rep"
          element={user ? <FindARep userDetails={user} services={services}/> : <Navigate to="/login"/>}>
        </Route>

        <Route 
          exact
          path="/take-a-note"
          element={user ? <TakeANote userDetails={user} services={services}/> : <Navigate to="/login"/>}>
        </Route>

        <Route 
          exact
          path="/book-a-room"
          element={user ? <BookARoom userDetails={user} services={services}/> : <Navigate to="/login"/>}>
        </Route>

        <Route 
          exact
          path="/configuration"
          element={user ? <ConfigurationPage userDetails={user} services={services}/> : <Navigate to="/login"/>}>
        </Route>

        <Route 
          exact
          path="/login"
          element={user ? <Navigate to="/"/> : <Login/>}>
        </Route>

        <Route 
          exact
          path="/signup"
          element={user ? <Navigate to="/"/> : <Signup/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
