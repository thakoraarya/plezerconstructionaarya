"use client"
import Brochure from "@/assets/pdf/HappyHomesBrochure.pdf"
import { useState } from "react";
const BrochureComponent = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleClick = () => {
        setIsDownloading(true);
        fetch(Brochure)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "HappyHomesBrochure.pdf";
                link.click();
                setIsDownloading(false);
            });

    };
    return (

        <div className="flex justify-around items-center m-5 p-4">
            <div className="px-4 py-2 bg-primary rounded-lg hover:scale-105 transform ease-in-out duration-300 text-white text-3xl">
                <button onClick={handleClick}>Download Brochure</button>
            </div>
        </div>
        
    )
};
export default BrochureComponent;