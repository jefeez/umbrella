/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bar from '../../../layouts/bar';
import Icon from '../../../components/Icon';
import Name from '../../../components/Name';
import { useAuth } from '../../../hooks/useAuth';
import { notify } from '../../../utils/notify';

export default function Form() {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [cropData, setCropData] = useState('#');
  const [isLoading, setLoading] = useState(false);
  const [filer, setFiler] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();

  const next = async () => {
    try {
      setLoading(true);
      getCropData();
      await auth.avatar(await getFileFromUrl(cropData, 'avatar.jpg'));
      setLoading(false);
      navigate('/app');
    } catch (error) {
      setLoading(false);
      notify.error('please try again');
    }
  };

  async function getFileFromUrl(url: string, name: string, defaultType = 'image/jpeg') {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFiler('');
    }
    setFiler(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="form">
      <Bar>
        <div className="h-full flex items-center">
          <Icon awesome="fa-solid fa-camera" />
          <Name>AVATAR</Name>
        </div>
      </Bar>
      <div className="w-full p-1 ">
        <input
          type="file"
          onChange={onSelectFile}
          accept="image/png, image/jpeg"
          id="avatar"
          className="hidden"
        />
        <label
          htmlFor="avatar"
          className="block px-6 py-3 rounded-sm text-dark-800 text-sm text-center font-semibold border-none outline-none bg-gray-300 hover:bg-gray-400">
          SELECT A IMAGE
        </label>
      </div>
      <div className="w-full h-full p-10 gap-5 flex flex-col">
        <Cropper
          src={filer}
          style={{ height: '400px', width: '100%' }}
          initialAspectRatio={1}
          guides
          modal
          cropBoxResizable={false}
          responsive={false}
          dragMode="none"
          ref={cropperRef}
        />
      </div>
      <Bar>
        <div className="h-full w-full flex flex-row-reverse px-2 items-center">
          <button
            onClick={next}
            disabled={isLoading}
            className="text-xs py-2 h-8 flex items-center justify-between px-8 rounded-sm font-bold text-white bg-indigo-500 hover:bg-indigo-600"
            type="button">
            {isLoading ? <div className="dot-flashing" /> : 'SAVE'}
          </button>
        </div>
      </Bar>
    </div>
  );
}
