import HeadingImage from '../components/ProjectsDetailpage/HeadingImage';
import HeadingText from '../components/ProjectsDetailpage/HeadingText';
import Slideshow from '../components/ProjectsDetailpage/Slideshow';
import Text from '../components/ProjectsDetailpage/Text';
import TextImage from '../components/ProjectsDetailpage/TextImage';
import Style from '../css/ProjectsDetail.module.css';
import {useParams, useLocation} from "react-router-dom";
import projects from "../components/content/projects";
import ObjectRenderer from '../components/ObjectRenderer';


const ProjectsDetail = ({ props, slideshowTrack, onSlideshowTrack, onInSlideshow }) => {
    const {projectId} = useParams()
    return (
        <div className={`${Style.wrapper}`}>
            <ObjectRenderer slideshowTrack={slideshowTrack} onSlideshowTrack={onSlideshowTrack} onInSlideshow={onInSlideshow} data={projects} projectId={projectId} />
        </div>
        // projects.map((item, index) => (    

        //     (item.link === projectId) ?
        //         <div key={index} className={Style.wrapper}>
        //             <div className='container'>
        //                 <HeadingText Title={item.content.title} copy={item.content.description} />
        //             </div>
        //             <HeadingImage image={item.content.headerImage} />
        //             <div className='container'>
                        
        //             {item.content.textImageOne
        //                 ?
        //                 <TextImage title={item.content.textImageOne.title} copy={item.content.textImageOne.copy} image={item.content.textImageOne.image} mirror={item.content.textImageOne.mirror} />
        //                 :
        //                 ``
        //             }

        //             {item.content.copyOne
        //                 ?
        //                 <Text copy={item.copyOne}/>
        //                 :
        //                 ``
        //             }

        //             {item.content.slideshow
        //                 ?
        //                 <Slideshow copy={item.content.slideshow.copy} images={item.content.slideshow.images} />
        //                 :
        //                 ``
        //             }

        //             {item.content.textImageTwo
        //                 ?
        //                 <TextImage title={item.content.textImageTwo.title} copy={item.content.textImageTwo.copy} image={item.content.textImageTwo.image} mirror={item.content.textImageTwo.mirror} />
        //                 :
        //                 ``
        //             }
        //             </div>
        //         </div>
        //         : ''
        // ))
    );

}

export default ProjectsDetail;
