import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from '@/pages/Main';

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
