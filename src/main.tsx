import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './components/App/App';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import store from './store';
import { DEFAULT_PATH, ERROR_PATH, PROFILE_PATH } from './utils/consts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={DEFAULT_PATH} element={<App />}>
              <Route index element={<HomePage />} />
              <Route path={PROFILE_PATH} element={<ProfilePage />} />
              <Route path={ERROR_PATH} element={<ErrorPage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);