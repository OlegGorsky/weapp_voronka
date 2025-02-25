import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Clock, Rocket } from 'lucide-react';
import { Header } from '../components/Header';
import { ProgressSteps } from '../components/ProgressSteps';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="telegram-webapp">
      <Header />
      <ProgressSteps />
      
      <div className="rounded-lg overflow-hidden mb-6 relative">
        <img 
          src="https://files.salebot.pro/uploads/file_item/file/44501/photo_2024-11-27_00-36-56.jpg" 
          alt="Banner" 
          className="w-full h-48 sm:h-64 object-cover"
          style={{
            objectPosition: '50% 30%'
          }}
        />
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Video className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">
                Видео 1
              </h3>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 5 минут
              </span>
            </div>
            <p className="text-gray-400 text-sm">→ Техника 5 шагов или лёгкие продажи на автомате</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Video className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">
                Видео 2
              </h3>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 5 минут
              </span>
            </div>
            <p className="text-gray-400 text-sm">→ Стратегии автопрогрева или как попасть клиенту в самое "сердце"</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Video className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">
                Видео 3
              </h3>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> 5 минут
              </span>
            </div>
            <p className="text-gray-400 text-sm">→ Игровая механика в чат-боте для Моментального вовлечения холодной аудитории</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/video1')}
        className="btn-glow w-full text-white rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 no-select text-sm"
        style={{
          background: 'var(--tg-theme-button-color)',
          color: 'var(--tg-theme-button-text-color)'
        }}
      >
        <Rocket size={16} />
        Начать
      </button>
    </div>
  );
};