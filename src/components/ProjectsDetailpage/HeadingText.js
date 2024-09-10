import Style from '../../css/ProjectsDetail.module.css';

const HeadingText = ({ Title, copy }) => {
	return (
	<div className={`container`}>
		<div className={Style.headingText}>
            <h2>{Title}</h2>
            <p>{copy}</p>
		</div>
	</div>	
	 );
}

export default HeadingText;
