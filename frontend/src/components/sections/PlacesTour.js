import React from "react";

import TourCarouselCard from "../TourCarouselCard";

function PlacesTour() {
  return (
    <div className="md:h-[20vh] h-[64vh] ">
      <div className="">
        <h2 className="text-center p-2 my-3 md:text-3xl text-lg font-bold">
          Choose Your Next Tour
        </h2>
        <div className="md:flex pb-2 mb-10 my-3 grid space-x-4 w-full justify-between items-center space-y-2 grid-cols-2">
          <TourCarouselCard
            placename="Naran Kagan"
            desc="Premium tour pakage"
            btnTxt="More details"
            imageSrc="https://images.unsplash.com/photo-1605447609768-080cf92e09c5?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TourCarouselCard
            placename="Hunza Valley"
            desc="Premium tour pakage"
            btnTxt="More details"
            imageSrc="https://images.unsplash.com/photo-1514558427911-8e293bebf18c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TourCarouselCard
            placename="Skardu Valley"
            desc="Premium tour pakage"
            btnTxt="More details"
            imageSrc="https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TourCarouselCard
            placename="Murree Hills"
            desc="Premium tour pakage"
            btnTxt="More details"
            imageSrc="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}

export default PlacesTour;
