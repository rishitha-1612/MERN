import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import CoursePage from './CoursePage';
import AnalyticsPanel from './AnalyticsPanel';
import './App.css';

// Route-based lazy loading
const Dashboard = lazy(() => import('./Dashboard'));
const Courses = lazy(() => import('./Courses'));
const Forum = lazy(() => import('./Forum'));
const VideoLecture = lazy(() => import('./VideoLecture'));
const AdminPanel = lazy(() => import('./AdminPanel'));

// Component-based lazy loading
const VideoPlayer = lazy(() => import('./VideoPlayer'));
const ProfileSettings = lazy(() => import('./ProfileSettings'));

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [helpWidgetLoaded, setHelpWidgetLoaded] = useState(false);

  const loadHelpWidget = () => {
    import('./HelpWidget').then(({ default: HelpWidget }) => {
      // In a real app we might render this dynamically, but for demonstration we'll just log
      console.log('HelpWidget loaded dynamically', HelpWidget);
      setHelpWidgetLoaded(true);
    });
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>EduStream Learning Platform</h1>
          <nav>
            <Link to="/">Dashboard</Link> | <Link to="/courses">Courses</Link> |{' '}
            <Link to="/forum">Forum</Link> | <Link to="/lecture/123">Lecture 123</Link> |{' '}
            <Link to="/admin">Admin</Link>
          </nav>
          <div style={{ marginTop: '10px' }}>
             <button onClick={() => setShowSettings(!showSettings)}>
               {showSettings ? 'Hide Settings' : 'Settings'}
             </button>
             <button onClick={loadHelpWidget} style={{ marginLeft: '10px' }}>
               Load Help Widget
             </button>
          </div>
        </header>
        
        <main style={{ marginTop: '20px' }}>
          {showSettings && (
            <ErrorBoundary>
              <Suspense fallback={<div>Loading settings spinner...</div>}>
                <ProfileSettings />
              </Suspense>
            </ErrorBoundary>
          )}

          {helpWidgetLoaded && <div>HelpWidget code has been dynamically loaded! Check console.</div>}

          <hr />

          <ErrorBoundary>
            <Suspense fallback={<div>Loading page...</div>}>
              <Routes>
                <Route path="/" element={
                  <div>
                    <Dashboard />
                    <AnalyticsPanel showChart={true} />
                    <Suspense fallback={<div>Loading video player...</div>}>
                      <VideoPlayer />
                    </Suspense>
                  </div>
                } />
                <Route path="/courses" element={
                  <div>
                    <Courses />
                    <CoursePage />
                  </div>
                } />
                <Route path="/forum" element={<Forum />} />
                <Route path="/lecture/:id" element={<VideoLecture />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;
