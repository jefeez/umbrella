import './main.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
