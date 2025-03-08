import { Upload } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-4 p-8 sm:p-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
      {/* Left Side Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700">
          Remove the <br className="max-md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600 text-white px-2 rounded-md">background</span>{' '}
          from <br /> images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <div>
          <input type="file" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-blue-600 hover:scale-105 transition-transform"
          >
            <Upload className="text-white" />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full max-w-md relative">
        <img
          src="https://bg-remover-gs.vercel.app/assets/header_img-mdrOD-tk.png"
          alt="Background remover preview"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;
