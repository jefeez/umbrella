import './main.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './pages/app';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import { AuthProvider } from './contexts/auth';
import Protected from './pages/Protected';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <>
    <ToastContainer />
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
  </>
);
