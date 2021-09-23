import { useCallback, useState } from 'react';

export const Modal = () => {
  const [isShow, setIsShow] = useState(false);
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  console.log(isShow);
  return (
    <div className="left-0 w-full h-full relative bg-white">
      <button onClick={handleDisplay}>Click</button>
      {isShow ? (
        <div className="relative top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer">
          <div className="relative bg-white p-10 z-10">
            <p className="font-black">モーダルウインド</p>
            <button onClick={handleDisplay} className="bg-black text-white py-2 px-2 relative">
              Close
            </button>
          </div>
          <div
            onClick={handleDisplay}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 Scursor-pointer"
          ></div>
        </div>
      ) : null}
    </div>
  );
};
