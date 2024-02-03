/* eslint-disable jsx-a11y/label-has-associated-control */
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { notify } from '../../../utils/notify';

export default function Form() {
  const [filer, setFiler] = useState('');
  const cropperRef = useRef<ReactCropperElement>(null);
  const [loading, setUploading] = useState(false);
  const [cropData, setCropData] = useState('#');

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
  };

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFiler('');
    }
    setFiler(URL.createObjectURL(e.target.files[0]));
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  async function getFileFromUrl(url: string, name: string, defaultType = 'image/jpeg') {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  const { avatar } = useAuth();
  const nav = useNavigate();

  const next = async () => {
    try {
      setUploading(true);
      getCropData();
      const payload = await getFileFromUrl(cropData, 'avatar.jpg');
      await avatar(payload);
      setUploading(false);
      nav('/app');
    } catch (error) {
      notify.error('error saving image, try again');
      setUploading(false);
    }
  };

  return (
    <div className="form flex">
      <div className="">
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={onSelectFile}
          id="avatar"
          className="hidden"
        />
        <label
          htmlFor="avatar"
          className="block px-6 py-3  rounded-sm text-dark-800 text-sm text-center font-semibold border-none outline-none bg-gray-300 hover:bg-gray-400">
          SELECT A IMAGE
        </label>
      </div>
      <Cropper
        src={filer}
        style={{ height: 300, width: '100%' }}
        // Cropper.js options
        initialAspectRatio={1}
        guides
        modal
        cropBoxResizable={false}
        responsive={false}
        dragMode="none"
        ref={cropperRef}
      />
      <button
        type="button"
        disabled={loading}
        onClick={next}
        className="bg-indigo-500 h-12 hover:bg-indigo-600 flex justify-center items-center px-6 rounded-sm text-white font-bold text-xs">
        {loading ? <div className="dot-flashing" /> : 'SAVE'}
      </button>
    </div>
  );
}
