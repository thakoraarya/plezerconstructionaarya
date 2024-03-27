"use client"
import Image from "next/image";
import { happy_homes_slides } from "@/Data/slides";
// import SliderComponent from "@/components/SliderComponent/SliderComponent";
import HTMLFlipBook from "react-pageflip";
import { useRef, useState } from "react";
const ProjectComponent = () => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(happy_homes_slides.length);
  const flipButtonStyle = "px-4 py-2 min-w-28 text-base md:text-2xl rounded-lg text-primary border-2 border-gray-200 hover:bg-gray-100";
  const updatePageCount = () => {
    const currentPageIndex = book.current.pageFlip().getCurrentPageIndex();
    if (currentPageIndex !== null && currentPageIndex !== undefined) {
      setCurrentPage(currentPageIndex);
      setTotalPages(book.current.pageFlip().getPageCount());
    }
  };

  const renderSlides = () => {
    return happy_homes_slides.map((slide, index) => (
      <div className="w-full" key={index}>
        <Image
          className="p-4 object-contain"
          src={slide.imageSrc}
          alt={slide.alt}
        />
      </div>
    ));
  };

  return (
    <section>
      {/* <SliderComponent slides={happy_homes_slides} img={true} /> */}
      <div className="w-full">
        <p className="text-4xl tracking-tight font-extrabold text-primary text-center py-8 border-b-2 border-gray-200">Check Out Happy Homes</p>
        <div className="mt-4 flex flex-col justify-center w-full overflow-hidden gap-4">
          <div className="flex justify-center items-center h-fit">
            <HTMLFlipBook ref={book} minHeight={250} minWidth={250} width={382} height={382} size="stretch" drawShadow mobileScrollSupport onFlip={updatePageCount} flippingTime={3000} className="flex justify-center items-center w-fit h-fit">
              {renderSlides()}
            </HTMLFlipBook>
          </div>
          <div className="w-full flex justify-around gap-3 items-center py-2">
            <button className={`${flipButtonStyle}`} onClick={() => book.current.pageFlip().flipPrev()}>Previous Page</button>
            <p id="downloadBrochure" className="text-base md:text-2xl">{currentPage + 1} of {totalPages}</p>
            <button className={`${flipButtonStyle}`} onClick={() => book.current.pageFlip().flipNext()}>Next Page</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
