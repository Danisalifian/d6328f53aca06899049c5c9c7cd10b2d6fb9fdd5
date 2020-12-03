import React from "react";

function card() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-6">
        <img
          className="w-full"
          src="https://www.motoris.id/wp-content/uploads/2020/02/Tom-Cruise-dok.Showbiz-Cheat-Sheet-e1581121538935.jpg"
          alt="Display"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Blessing Krofegha
          </div>
          <p className="text-gray-700 text-base">
            When i’m not coding i switch to netflix with biscuits and cold tea
            as my companion. <span></span>😜
          </p>
        </div>
      </div>
    </div>
  );
}

export default card;
