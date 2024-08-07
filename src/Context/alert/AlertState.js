import React, { useCallback, useState } from "react";
import ContextAlert from "./contextAlert";

const Alert = ({ children }) => {
  const [message, setmessage] = useState(null);
  const alertMessage = useCallback((msg) => {
    setmessage(msg);

    setTimeout(() => {
      setmessage(null);
    }, 2000);
  }, []);

  return (
    <ContextAlert.Provider value={{ alertMessage }}>
      {children}
      {message && (
        <div className="flex justify-center items-center">
          <p className=" p-4 z-10 md:top-4 md:p-5 lg:p-6 xl:px-7 xl:py-6  bg-slate-300 text-gray-800 font-semibold absolute top-1  rounded-xl shadow-lg ">
            {message}
          </p>
        </div>
      )}
    </ContextAlert.Provider>
  );
};

export default Alert;
