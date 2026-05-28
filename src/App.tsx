import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from '@/pages/Main';
import { KaidenPage } from '@/pages/Kaiden';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kaiden" element={<KaidenPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
