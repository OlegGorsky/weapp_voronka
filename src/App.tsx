import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import { SplashScreen } from './components/SplashScreen';
import { MainPage } from './pages/MainPage';
import { VideoPage } from './pages/VideoPage';
import { AdminContext } from './contexts/AdminContext';
import { VideoConfig } from './types';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [videoConfigs, setVideoConfigs] = useState<VideoConfig[]>([]);
  const isAdmin = window.location.search.includes('startapp=admin');

  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready();
    WebApp.expand();
    
    // Set theme colors from Telegram WebApp
    const setThemeColors = () => {
      document.documentElement.style.setProperty('--tg-theme-bg-color', WebApp.backgroundColor || '#111827');
      document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', WebApp.secondaryBackgroundColor || '#1f2937');
      document.documentElement.style.setProperty('--tg-theme-text-color', WebApp.textColor || '#ffffff');
      document.documentElement.style.setProperty('--tg-theme-hint-color', WebApp.hintColor || '#9ca3af');
      document.documentElement.style.setProperty('--tg-theme-link-color', WebApp.linkColor || '#3b82f6');
      document.documentElement.style.setProperty('--tg-theme-button-color', WebApp.buttonColor || '#3b82f6');
      document.documentElement.style.setProperty('--tg-theme-button-text-color', WebApp.buttonTextColor || '#ffffff');
    };

    setThemeColors();
    WebApp.onEvent('themeChanged', setThemeColors);

    return () => {
      WebApp.offEvent('themeChanged', setThemeColors);
    };
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, videoConfigs, setVideoConfigs }}>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/video1" element={<VideoPage videoNumber={1} nextRoute="/video2" />} />
            <Route path="/video2" element={<VideoPage videoNumber={2} nextRoute="/video3" />} />
            <Route path="/video3" element={<VideoPage videoNumber={3} nextRoute="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </AdminContext.Provider>
  );
};

export default App