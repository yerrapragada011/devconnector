import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <section className='container'>
          <Alert />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route
              path='/dashboard'
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path='/create-profile'
              element={<PrivateRoute component={CreateProfile} />}
            />
            <Route
              path='/edit-profile'
              element={<PrivateRoute component={EditProfile} />}
            />
            <Route
              path='/add-experience'
              element={<PrivateRoute component={AddExperience} />}
            />
            <Route
              path='/add-education'
              element={<PrivateRoute component={AddEducation} />}
            />
          </Routes>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
