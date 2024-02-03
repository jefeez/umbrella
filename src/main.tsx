import './main.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/app';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import { AuthProvider } from './contexts/auth';
import Protected from './pages/Protected';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route
          path="/app"
          element={
            <Protected>
              <App />
            </Protected>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
