import React from 'react';
import { Video } from 'lucide-react';

interface VideoPlaceholderProps {
  videoNumber: number;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ videoNumber }) => (
  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
    <div className="text-center p-4">
      <Video className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600 mx-auto mb-3" />
      <p className="text-gray-400 text-sm">Видео {videoNumber} пока недоступно</p>
    </div>
  </div>
);