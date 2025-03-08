import React from 'react'
import { Upload } from 'lucide-react';
const Uploads = () => {
  return (
    <div className=''>
         {/* CTA Section */}
      <h2 className="mt-16 text-3xl  flex justify-center items-center sm:text-4xl font-bold text-gray-800">
        See the magic. Try now
      </h2>

      <div className='mt-16 flex justify-center items-center mb-10'>
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
  )
}

export default Uploads