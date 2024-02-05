import React from "react";

function TourCarouselCard({
  placename,
  desc,
  btnTxt = "More deatils",
  imageSrc,
}) {
  return (
    <div class="w-[300px] rounded-md border">
      <img
        src={imageSrc}
        alt={placename}
        class="h-[200px] w-full rounded-md object-cover"
      />
      <div class="p-4">
        <h1 class="text-lg font-semibold">{placename}</h1>
        <p class="mt-3 text-sm text-gray-600">{desc}</p>
        <button
          type="button"
          class="mt-4 rounded-md bg-primary px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default TourCarouselCard;
