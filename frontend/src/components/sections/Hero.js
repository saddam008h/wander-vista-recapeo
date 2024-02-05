import React from "react";

export default function Hero() {
  return (
    <div
      id="home"
      className="h-[100vh]  mt-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-full "
    >
      <div className="w-full ">
        {" "}
        <div className="flex flex-col">
          <div className="w-full ">{/* to */}</div>
          <div className="w-full p-10 mt-20 text-black">
            <p className="text-3xl mb-2 font-bold md:text-5xl md:font-bold text-center">
              Journey With Purpose, Explore With Passion.
            </p>
            <p className="text-2xl font-bold pt-4 md:font-normal md:text-3xl text-center w-full">
              Your Travel Adventure Starts Here.
            </p>
          </div>{" "}
        </div>
      </div>

      {/* todo */}
    </div>
  );
}
