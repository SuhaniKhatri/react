import { useState } from "react";

const data = [
  "https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-preview.jpg",
  "https://wallpapers.com/images/hd/random-background-1920-x-1200-33i6p2yl62j0oet3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iBbi95cakwj5xpSLksOoBIDalMG7ENMuKg&usqp=CAU",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
];

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % 5);
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={handlePreviousClick}
        className="font-bold text-sm p-4 m-10"
      >
        Previous
      </button>
      {data.map((url, i) => (
        <img
          key={url}
          src={url}
          className={
            "w-[500px] h-[500px] object-contain " +
            (activeImageIndex === i ? "block" : "hidden")
          }
          alt="Wallpapers"
        />
      ))}
      <button onClick={handleNextClick} className="font-bold text-sm p-4 m-10">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
