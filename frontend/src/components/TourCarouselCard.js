import React from "react";

function TourCarouselCard({
  placename,
  desc,
  btnTxt = "More deatils",
  imageSrc,
}) {
  return (
    <div className="md:w-full border-none md:flex md:flex-col md:justify-between md:items-center rounded-md ">
      <div className="md:px-2 flex flex-col md:flex-row">
        <img
          src={imageSrc}
          alt={placename}
          className="md:h-[200px] h-[100px] md:w-full md:rounded-md md:object-cover mb-4 md:mb-0"
        />
      </div>
      <div className="p-2 text-left items-start">
        <h1 className="md:text-lg text-left text-sm font-semibold">
          {placename}
        </h1>
        <p className="md:mt-3 md:text-sm text-xs text-gray-600">{desc}</p>
        <button
          type="button"
          className="mt-4 rounded-md text-xs font-normal p-2 bg-primary md:px-2.5 py-1 md:text-[12px] md:font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default TourCarouselCard;
