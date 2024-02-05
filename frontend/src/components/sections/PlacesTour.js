import React from "react";

import TourCarouselCard from "../TourCarouselCard";

function PlacesTour() {
  return (
    <div className="h-[100vh] ">
      <div className="">
        <h2 className="text-center text-3xl font-bold">
          Choose Your Next Tour
        </h2>
        <div className="flex">
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
            imageSrc="https://images.unsplash.com/photo-1649968929888-c1c64040b841?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}

export default PlacesTour;
