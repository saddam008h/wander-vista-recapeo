import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const BusSearch = () => {
  const [workouts, Setworkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:8000/api/buses");
      const json = await response.json();
      console.log("test");
      if (response.ok) {
        Setworkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="h-[100vh] bg-blue-100 " id="bus-search">
      <div className="mt-60 w-full justify-center items-center">
        <div className="flex flex-col p-4">
          <h1 className="p-4 mt-[40px] font-bold text-3xl text-center">
            Buy Ticket
          </h1>
          <div className="flex md:ml-24 space-x-6">
            <div>
              <input className="mr-2" type="radio" name="route" id="one-way" />
              <label htmlFor="one-way">One Way</label>
            </div>
            <div>
              <input
                className="mr-2 "
                type="radio"
                name="route"
                id="road-trip"
              />
              <label htmlFor="road-trip">Road Trip</label>
            </div>
          </div>
          <div className=" ">
            <div className="flex flex-col md:flex-row md:space-x-4 md:justify-center md:items-end">
              <label className="mt-2 pt-2 md:mt-0">
                <div className="pb-0.2 pt-2 pl-1 space-x-2 flex">
                  From
                  <FaLocationDot size={`15`} className="" />
                </div>{" "}
                <input
                  type="text"
                  placeholder="From: Karachi"
                  className="bg-slate-300 outline-none border-none rounded-md"
                />
              </label>
              <label className="mt-2 md:mt-0">
                <div className="pb-0.2 pt-2 pl-1 space-x-2 flex">
                  To <FaLocationDot size={`15`} />
                </div>

                <input
                  type="text"
                  placeholder="To: Lahore"
                  className="bg-slate-300 outline-none border-none rounded-md"
                />
              </label>
              <label htmlFor="price" className="mt-2 md:mt-0">
                <div className="pb-0.2 pt-2 pl-1 space-x-2 flex text-md">
                  Price
                </div>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  min={300}
                  className=" mb-4 md:mb-0 bg-slate-300 outline-none border-none rounded-md"
                />
              </label>
              <input
                type="date"
                placeholder="Availability"
                className="mt-2 mb-4 md:mb-0 md:mt-0 bg-slate-300 outline-none border-none rounded-md"
              />
              <button
                className="mt-2 md:px-4 p-2 md:mt-0 rounded-full bg-primary text-lg font-normal text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                onClick={(e) => {
                  search;
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1>Result</h1>
          {/*  search results here */}
        </div>
      </div>
    </div>
  );
};

export default BusSearch;
