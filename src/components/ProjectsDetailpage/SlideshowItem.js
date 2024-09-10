import { useContext, useEffect, useRef, useState } from "react";
import Style from '../../css/ProjectsDetail.module.css';


function SlideshowItem({ image, slideshowContext }) {
    
    useEffect(() => {
     
    }, []);
  
  
    return (
        <div className={Style.slideshow}>
            <img className={Style.slideshowImage} src={image} />
        </div>
    );
  }

  export default SlideshowItem;
