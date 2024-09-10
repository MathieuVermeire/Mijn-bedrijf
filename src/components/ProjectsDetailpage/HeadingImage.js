import Style from '../../css/ProjectsDetail.module.css';

const HeadingImage = ({ image }) => {
	return (
		<div className={Style.headingimageWrapper}>
            <img className={Style.headingimage} src={image} />
		</div>
	 );
}

export default HeadingImage;
