import { Suspense } from 'react';
import './App.scss';
import { Header } from './widgets/Header';
import { Outlet } from 'react-router-dom';
import './i18';

function App() {
  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
