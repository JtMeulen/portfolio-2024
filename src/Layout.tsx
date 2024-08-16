import { Navigate, Route, Link as RouterLink, Routes } from 'react-router-dom';

import { MainPage } from '@/pages/Main';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <RouterLink to="#about">About</RouterLink>
          <RouterLink to="#experience">Experience</RouterLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
};
