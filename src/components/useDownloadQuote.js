import {useRef} from "react";
import html2canvas from "html2canvas";

const useDownloadQuote = () => {
    const quoteRef = useRef(null);
  
    const generateQuoteImage = async () => {
        const quoteElement = quoteRef.current;
        const canvas = await html2canvas(quoteElement);
        
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        
        const link = document.createElement('a');
        link.download = "quote-of-the-day.png";
        link.href = image;
        link.click();
    };
  
    return { quoteRef, generateQuoteImage }
  }

export {useDownloadQuote};