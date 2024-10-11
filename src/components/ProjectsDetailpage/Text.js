import Style from '../../css/ProjectsDetail.module.css';

const Text = ({ copy, pos }) => {
	return (
		<div className={Style.text}>
            <p className='textAnimation'>{copy}</p>
		</div>
	 );
}

export default Text;
