import Style from '../../css/ProjectsDetail.module.css';

const Text = ({ copy, pos }) => {
	return (
		<div className={Style.text}>
            <p>{copy}</p>
		</div>
	 );
}

export default Text;
