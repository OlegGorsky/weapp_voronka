import React from 'react';
import { VideoConfig } from '../types';

interface AdminContextType {
  isAdmin: boolean;
  videoConfigs: VideoConfig[];
  setVideoConfigs: (configs: VideoConfig[]) => void;
}

export const AdminContext = React.createContext<AdminContextType>({
  isAdmin: false,
  videoConfigs: [],
  setVideoConfigs: () => {},
});