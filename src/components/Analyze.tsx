import React, { useState } from 'react';
import { Upload, Camera, FileImage, AlertCircle, CheckCircle } from 'lucide-react';

const Analyze = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);

    setTimeout(() => {
      setAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white from-blue-50 via-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            analyze your skin
          </h1> 
          <p className="text-xl text-black max-w-2xl mx-auto">
            upload infectious photo
          </p>
        </div>

        <div className="bg-white   p-2">
          {!uploadedImage ? (
            <div
              className={` ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-white '
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-white p-4 ">
                    <Upload className="h-12 w-12 text-black" />
                  </div>
                </div>
                

                <div className="">
                  <label className="bg-white text-black px-6 py-3 font-medium ">
                    <FileImage className="h-5 w-5" />
                    <span>Browse Files</span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileInput}
                    />
                  </label>
                </div>

                <div className="text-sm text-gray-500">
                  PLEASE ONLY UPLOAD IMAGE XDDDDDDDDD
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <img
                  src={uploadedImage}
                  alt="Uploaded skin image"
                  className="max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>

              {}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyze;