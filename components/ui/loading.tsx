import * as React from "react";

const Loading = () => {
  const circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Centered loader */}
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

Loading.displayName = "Loading";

export { Loading };
