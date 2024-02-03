import { Slide, toast } from 'react-toastify';

const payload: any = {
  position: 'top-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  transition: Slide,
};

export const notify = {
  warn: (text: string) => toast.warn(text, payload),
  error: (text: string) => toast.error(text, payload),
  success: (text: string) => toast.success(text, payload),
};
