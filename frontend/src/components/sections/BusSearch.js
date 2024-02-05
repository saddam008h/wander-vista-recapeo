import React, { useCallback, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

const BusSearch = () => {
  const [onewayAllowed, setonewayAllowed] = useState("");
  const [roadtripAllowed, setroadtripAllowed] = useState("");
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

  useEffect(() => {}, [
    roadtripAllowed,
    fromlocation,
    tolocation,
    selectdate,
    selectprice,
    searchresults,
  ]);

  return (
    <div className="h-[100vh] bg-yellow-100" id="bus-search">
      <div className="mt-60 w-full justify-center items-center">
        <div className="p-4">
          <h1 className="p-4 mt-[40px] font-bold text-3xl text-center">
            Buy Ticket
          </h1>
          <div className="flex space-x-6">
            <div>
              <input
                className="mr-2"
                type="radio"
                name=""
                id=""
                onChange={() => setroadtripAllowed(false)}
              />
              <label>One Way</label>
            </div>
            <div>
              <input
                className="mr-2"
                type="radio"
                name=""
                id=""
                onChange={() => setroadtripAllowed(true)}
              />
              <label>Road Trip</label>
            </div>
          </div>
          <div className="flex w-full justify-between bg-slate-400 items-center">
            <div className="flex">
              <label>
                From <FaLocationDot />
                <input
                  type="text"
                  placeholder="From: Karachi"
                  value={fromlocation}
                  onChange={(e) => setfromlocation(e.target.value)}
                />
              </label>
            </div>

            <div className="flex">
              <label>
                To
                <FaLocationDot />
                <input
                  type="text"
                  placeholder="To: Lahore"
                  value={tolocation}
                  onChange={(e) => settolocation(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="price">
                Price
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  min={300}
                  value={selectprice}
                  onChange={(e) => setslectedprice(e.target.value)}
                />
              </label>
            </div>

            <input
              type="date"
              placeholder="Availability"
              value={selectdate}
              onChange={(e) => setseletdate(e.target.value)}
            />
            <button
              className="rounded-full bg-orange-500 px-4 py-2 text-md font-normal text-white shadow-sm hover:bg-orange-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              onClick={handleSearch}
            >
              Search
            </button>
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
