import Style from '../../css/ProjectsDetail.module.css';

const HeadingText = ({ Title, copy }) => {
	return (
	<div className={`container`}>
		<div className={Style.headingText}>
			<h2 className='titleAnimation'>{Title}</h2>
			<p className='textAnimation'>{copy}</p>
		</div>
	</div>
	);
}

export default HeadingText;
