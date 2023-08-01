import React, { useState } from "react";



const image1 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650504.jpg?k=c20eeed3fd46cd566cafe88dd897e9d62df343edd403b3bd8ad77f099452e0ad&o=&hp=1";
const image2 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650508.jpg?k=f76278d0ebbac46333e91c4ed0b2881db1f78b90446b37ea50179e795c6decf2&o=&hp=1";
const image3 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650502.jpg?k=9c665133fbd71e758722703c894bc26fbc1d4dec5d33378f6edcf007b943c464&o=&hp=1";
const image4 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650468.jpg?k=5fd1d920cf5de383cdb5b2919fc922929b9ed3ac3fc082e6c972e6395faea1ea&o=&hp=1";
const image5 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650511.jpg?k=87ce80760e11d339a81fcefeaa44ddc21390fe58de8f0f39d4c3064318b60257&o=&hp=1";
const image6 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650514.jpg?k=47884fde7ed84c08402b41962a080f70c752e2c8fee9f2f57ba0e2733101f205&o=&hp=1";
const image7 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472650516.jpg?k=5febe5420d35bb3dce2be645389e371ce2e62cb007e261ced2761de7a5cfcc10&o=&hp=1";
const image8 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/473894230.jpg?k=4f380d378afb1cba6a8f1969bf923747abf26351dee4ec33852fb71b988b4d07&o=&hp=1";
const image9 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/473894227.jpg?k=ba2446cb907ca28b0205f23b0fbddfa17f2bb8b70183baf7a92afe5d9139ba9d&o=&hp=1";
const image10 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/473894225.jpg?k=bfce5559da7ec5b843be7e42cd5d8b5e14da6f8ca691dc11b9f89f4822fa3dca&o=&hp=1";
const image11 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/473894224.jpg?k=2f207fc71c6dedd7e929fc7e8c18ad8c67fb1e7757857728200425f083348060&o=&hp=1";
const image12 =
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477994451.jpg?k=dddce66f3f07945a8bdaa8cbd1db07d9296a5cce13b40045fb03975e8953eedc&o=&hp=1";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export default function Gallery({ title }) {
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
          {title}
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
              className='w-full h-full   object-contain  rounded-xl'
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
