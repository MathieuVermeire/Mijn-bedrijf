import React from 'react';
import HeadingText from './ProjectsDetailpage/HeadingText';
import Slideshow from './ProjectsDetailpage/Slideshow';
import HeadingImage from './ProjectsDetailpage/HeadingImage';
import TextImage from './ProjectsDetailpage/TextImage';

const ObjectRenderer = ({ data, projectId, slideshowTrack, onSlideshowTrack, onInSlideshow }) => {

  let pageItem;
  // const pageItem = data.map((item, i) => {
  //   if(item.link === projectId) {
  //     return item;
  //   }
  //   });

    data.some(function(d) {
      if (d.link === projectId) {
          pageItem = d;
          return true;
      }
    });

    // console.log(pageItem);

    if (typeof data === 'object' && data !== null) {
        return (
          <ul>
            {Object.entries(pageItem.content).map(([key, value]) => (

                <li key={key}>
                  {key == 'title'
                  ?
                  <HeadingText Title={pageItem.content.title} copy={pageItem.content.description} />
                  :
                  ''
                  }

                  {key == 'slideshow'
                  ?
                  // <div>{pageItem.content.slideshow.images}</div>
                  <Slideshow copy={pageItem.content.slideshow.copy} images={pageItem.content.slideshow.images} slideshowTrack={slideshowTrack} onSlideshowTrack={onSlideshowTrack} onInSlideshow={onInSlideshow} />
                  :
                  ''
                  }

                  {key == 'headerImage'
                  ?
                  // <div>{pageItem.content.slideshow.images}</div>
                  <HeadingImage image={pageItem.content.headerImage} />
                  :
                  ''
                  }

                  {key == 'textImageOne'
                  ?
                  <TextImage title={pageItem.content.textImageOne.title} copy={pageItem.content.textImageOne.copy} image={pageItem.content.textImageOne.image} mirror={pageItem.content.textImageOne.mirror} />
                  :
                  ''
                  }

                  {key == 'textImageTwo'
                  ?
                  <TextImage title={pageItem.content.textImageTwo.title} copy={pageItem.content.textImageTwo.copy} image={pageItem.content.textImageTwo.image} mirror={pageItem.content.textImageTwo.mirror} />
                  :
                  ''
                  }


                {/* <strong>{key}: </strong>
                {value.toString()} */}

                </li>
            ))}
          </ul>
        );
      } else {
        return <span>{data.toString()}</span>;
      }

    //   Object.keys(pageItem.content).map((key) => (

    //     const value = pageItem.content[key];
    //     // console.log(key);
    //     if(key === 'title') {
    //             <div key={key}>
    //                 <strong>{value}:</strong>
    //                     {/* <div>{renderObject(value)}</div> */}
    //             </div>
    //         console.log(value);
    //     }
    //     if(key === 'copy') {
    //         console.log(value);
    //             <div key={key}>
    //                 <strong>hello</strong>
    //                     {/* <div>{renderObject(value)}</div> */}
    //             </div>
    //     }
    // ))
}
export default ObjectRenderer;
