import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../services/authService';
import './App.css';
import HomePage from '../HomePage/HomePage';
import PostListPage from '../PostListPage/PostListPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import NavBar from '../../components/NavBar/NavBar';
import NewDestinationPage from '../NewDestinationPage/NewDestinationPage';
import DestinationListPage from '../DestinationListPage/DestinationListPage';
import DestinationDetailsPage from '../DestinationDetailsPage/DestinationDetailPage';
import DestinationForm from '../../components/DestinationForm/DestinationForm';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<DestinationListPage />} />
            <Route path="/destination/new" element={<NewDestinationPage />} />
            <Route path='/destination/details/:id' element={<DestinationDetailsPage/>}/>
            <Route path='/destination/:id' element={<DestinationDetailsPage/>}/>
           
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
          </Routes>
        )}
      </section>
    </main>
  );
}
