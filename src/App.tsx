import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from '@/pages/Main';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
