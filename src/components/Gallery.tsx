import React, { useState } from "react";

const image1 =
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const image2 =
  "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const image3 =
  "https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80";
const image4 =
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80";
const image5 =
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80";
const image6 =
  "https://images.unsplash.com/photo-1500694216671-a4e54fc4b513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2092&q=80";

const images = [image1, image2, image3, image4, image5, image6];

export default function Gallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const imageCards = images.map((image) => (
    <img
      className='max-w-30vw max-h-30vw w-full h-full object-cover cursor-pointer rounded-2xl'
      onClick={() => showImage(image)}
      src={image}
      alt='Thumbnail'
    />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
    document.body.classList.add("overflow-hidden");
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
    document.body.classList.remove("overflow-hidden");
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let prevImage = images[currentIndex - 1];
      setImageToShow(prevImage);
    }
  };

  return (
    <>
      <div className='container mx-auto px-4  py-10 lg:py-20' id='gallery'>
        <h2 className=' text-center text-4xl 2xl:text-6xl text-blue-500 mb-10 uppercase'>
          {" "}
          Gallery
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {imageCards}{" "}
        </div>
      </div>

      {lightboxDisplay && (
        <div
          id='lightbox'
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center p-4 lg:p-20'
          onClick={hideLightBox}
        >
          <button
            className='text-white border-2  border-blue-500 bg-blue-500 text-xl rounded-full p-2.5 -mr-10 lg:-mr-5 relative z-20 hover:opacity-90'
            onClick={showPrev}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 01.707 1.707L7.414 9H17a1 1 0 110 2H7.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5A1 1 0 0110 3z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div className='relative w-full h-full'>
            <img
              id='lightbox-img'
              className='max-h-80vh w-full h-full  max-w-90vw object-contain md:object-cover rounded-xl'
              src={imageToShow}
              alt='Lightbox'
            />
            <button
              className='text-white border-2 border-blue-500 bg-blue-500 text-xl rounded-full p-2 absolute -top-2.5 -right-2.5 z-20'
              onClick={hideLightBox}
            >
              {/* Close button with "x" icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M14.95 14.95a1 1 0 01-1.414 0L10 11.414l-3.536 3.536a1 1 0 01-1.414-1.414L8.586 10 5.05 6.464a1 1 0 111.414-1.414L10 8.586l3.536-3.536a1 1 0 111.414 1.414L11.414 10l3.536 3.536a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <button
            className='text-white border-2 border-blue-500 bg-blue-500 text-xl rounded-full p-2.5 -ml-10 lg:-ml-5 relative z-20 hover:opacity-90'
            onClick={showNext}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 rotate-180'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 01.707 1.707L7.414 9H17a1 1 0 110 2H7.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5A1 1 0 0110 3z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
