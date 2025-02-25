import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, FileText, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressSteps } from '../components/ProgressSteps';
import { VideoPlayer } from '../components/VideoPlayer';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { ApplicationForm } from '../components/ApplicationForm';
import { AdminContext } from '../contexts/AdminContext';

interface VideoPageProps {
  videoNumber: number;
  nextRoute: string;
}

export const VideoPage: React.FC<VideoPageProps> = ({ videoNumber, nextRoute }) => {
  const navigate = useNavigate();
  const { videoConfigs } = React.useContext(AdminContext);
  const [showForm, setShowForm] = useState(false);
  
  const videoConfig = videoConfigs.find(config => config.id === videoNumber);

  const videoTitles = {
    1: 'Техника 5 шагов или лёгкие продажи на автомате',
    2: 'Стратегии автопрогрева или как попасть клиенту в самое "сердце"',
    3: 'Игровая механика в чат-боте для Моментального вовлечения холодной аудитории'
  };
  
  return (
    <div className="telegram-webapp">
      <div className="header-section mb-4">
        <Header />
        <ProgressSteps />
      </div>
      
      <div className="content-section flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="back-button text-white hover:text-blue-400 transition-colors flex items-center gap-2 no-select p-2"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline text-sm">Назад</span>
          </button>
          <h1 className="text-base sm:text-lg font-bold text-white">
            Видео №{videoNumber}
          </h1>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-transparent p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
          <h2 className="video-title text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
            {videoTitles[videoNumber as keyof typeof videoTitles]}
          </h2>
          <div className="flex items-center gap-2 text-blue-400">
            <Clock size={14} />
            <span className="text-xs">5 минут</span>
          </div>
        </div>
        
        {videoConfig?.videoUrl ? (
          <VideoPlayer 
            videoUrl={videoConfig.videoUrl} 
            thumbnailUrl={videoConfig.thumbnailUrl}
          />
        ) : (
          <VideoPlaceholder videoNumber={videoNumber} />
        )}

        <p className="video-description text-gray-300 text-sm mb-4">
          Это видео {videoNumber} из нашей серии. Внимательно посмотрите и переходите к следующему,
          когда будете готовы.
        </p>

        <button
          onClick={() => videoNumber === 3 ? setShowForm(true) : navigate(nextRoute)}
          className="btn-glow w-full text-white rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 no-select text-sm"
          style={{
            background: 'var(--tg-theme-button-color)',
            color: 'var(--tg-theme-button-text-color)'
          }}
        >
          {videoNumber === 3 ? <FileText size={16} /> : <Play size={16} />}
          {videoNumber === 3 ? 'Заполнить заявку' : `Смотреть ${videoNumber + 1}-е видео`}
        </button>
      </div>

      <ApplicationForm 
        isOpen={showForm} 
        onClose={() => setShowForm(false)} 
      />
    </div>
  );
};