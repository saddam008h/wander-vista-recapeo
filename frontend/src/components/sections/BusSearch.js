import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

function BusSearch() {
  const [search, Setsearch] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/buses")
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        Setsearch(data);
      });
  }, []);
  return (
    <div className="h-full md:h-full bg-white " id="bus-search">
      <div className="md:mt-60 nt-20 bg-yell justify-center items-center">
        <div className="flex flex-col p-4">
          <h1 className="p-4 mt-[50px] font-bold text-3xl text-center">
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
              <button className="mt-2 md:px-4 p-2 md:mt-0 rounded-full bg-primary text-lg font-normal text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className=" items-center w-full md:py-6 justify-center p-2">
          <div className="flex justify-between md:justify-evenly items-center text-primary   font-semibold text-lg">
            {" "}
            <p className="text-sm font-bold  md:text-xl md:font-semibold">
              {" "}
              Service Provider
            </p>
            <p className="text-sm font-bold md:text-xl md:font-semibold">
              {" "}
              Dep Time
            </p>
            <p className="text-sm font-bold md:text-xl md:font-semibold">
              Arr Time
            </p>
            <p className="text-sm font-bold md:text-xl md:font-semibold">
              {" "}
              Price
            </p>
          </div>
          {/*  search results here */}
          {/* {search.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))} */}
          {search.map((item) => (
            <div className="flex md:w-[80vw]  md:mx-40 justify-between md:p-7 md:rounded-3xl rounded-lg text-gray-900  bg-slate-300 my-6 p-2">
              <div className=" space-y-2 ml-30 md:px-5">
                {" "}
                <h3
                  className="text-gray-900 md:text-[22px] md:font-semibold"
                  key={item.id}
                >
                  {" "}
                  {item.name}
                </h3>
                <p className="text-xs font-medium md:text-[15px] md:font-medium">
                  {" "}
                  DP: {item.departCity}
                </p>
                <p className="text-xs font-medium md:text-[15px] md:font-medium">
                  DS: {item.destCity}{" "}
                </p>
                <p className="text-xs font-medium  md:text-[15px] md:font-medium">
                  dep data: {item.departDate}
                </p>
                <p className="text-xs font-medium  md:text-[15px] md:font-medium">
                  arr date: {item.arrivDate}
                </p>
              </div>
              <div className="flex mr-5 md:justify-  justify-between md:w-[32vw]   w-48">
                <p className="text-xs font-medium md:ml-16  md:text-[18px] md:font-medium ">
                  {item.departTime}
                </p>
                <p className="text-xs mr-6 font-medium md:mr-14 md:text-[18px] md:font-medium ">
                  {item.arrivTime}
                </p>
              </div>
              <div className="  ">
                {/* <p className="text-xs font-[2px]">Price :</p> */}
                <p className="text-sm  font-medium md:mr-4 md:pr-16 md:text-[20px] md:font-bold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusSearch;
