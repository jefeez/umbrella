import './main.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app';
import Sign from './pages/sign';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  </BrowserRouter>
);
