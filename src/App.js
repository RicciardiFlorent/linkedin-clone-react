import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import Widgets from './Widgets';
import { auth } from './firebase';
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
           photoURL: userAuth.user.photoURL
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
     <Header/>

      { !user ?(<Login/>) : (
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
      )}

    </div>
  );
}

export default App;
