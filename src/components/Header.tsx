import React from 'react';
import WebApp from '@twa-dev/sdk';
import { Send } from 'lucide-react';

export const Header: React.FC = () => {
  const webAppUser = WebApp.initDataUnsafe.user;
  const firstName = webAppUser?.first_name?.split(' ')[0] || 'Гость';
  
  return (
    <div className="bg-gray-800/50 rounded-lg p-3 mb-4 flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <img 
          src={webAppUser?.photo_url || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400'} 
          alt="Profile" 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-500"
        />
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Привет, {firstName}!
        </h2>
      </div>
      <a 
        href="https://t.me/your_channel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 flex items-center gap-2 transition-colors no-select shadow-lg text-sm"
        style={{
          background: 'var(--tg-theme-button-color)',
          color: 'var(--tg-theme-button-text-color)'
        }}
      >
        <Send size={16} />
        <span>Наш канал</span>
      </a>
    </div>
  );
};