import React, { useCallback, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

const BusSearch = () => {
  const [fromlocation, setfromlocation] = useState("");
  const [tolocation, settolocation] = useState("");
  const [selectdate, setseletdate] = useState("");
  const [selectprice, setslectedprice] = useState("");
  const [searchresults, setsearchresults] = useState([]);

  const handleSearch = async () => {
    try {
      // link
      const response = await axios.get("apilink");
      setsearchresults(response.data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  useEffect(() => {}, [tolocation, selectdate, selectprice, searchresults]);

  return (
    <div className="h-[100vh] bg-slate-600 " id="bus-search">
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
                  value={fromlocation}
                  className="bg-slate-300 outline-none border-none rounded-md"
                  onChange={(e) => setfromlocation(e.target.value)}
                />
              </label>
              <label className="mt-2 md:mt-0">
                <div className="pb-0.2 pt-2 pl-1 space-x-2 flex">
                  To <FaLocationDot size={`15`} />
                </div>

                <input
                  type="text"
                  placeholder="To: Lahore"
                  value={tolocation}
                  onChange={(e) => settolocation(e.target.value)}
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
                  value={selectprice}
                  onChange={(e) => setslectedprice(e.target.value)}
                  className=" mb-4 md:mb-0 bg-slate-300 outline-none border-none rounded-md"
                />
              </label>
              <input
                type="date"
                placeholder="Availability"
                value={selectdate}
                onChange={(e) => setseletdate(e.target.value)}
                className="mt-2 mb-4 md:mb-0 md:mt-0 bg-slate-300 outline-none border-none rounded-md"
              />
              <button
                className="mt-2 md:px-4 p-2 md:mt-0 rounded-full bg-primary text-lg font-normal text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                onClick={handleSearch}
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
