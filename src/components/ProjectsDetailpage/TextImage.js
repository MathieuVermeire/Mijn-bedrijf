import Style from '../../css/ProjectsDetail.module.css';

const TextImage = ({ title, copy, image, mirror }) => {
    
	return (
        <div className='container'>
            <div className={mirror === true ? `${Style.textImageMirror} ${Style.textImage} ` : `${Style.textImage}`}>
                <div className={`${Style.textImageCopy}`}>
                    <h2>{ title }</h2>
                    <p className={ Style.textImageP }>{ copy }</p>
                </div>
                <img className={Style.textImageImage} src={ image } />
            </div>
        </div>
	 );
}

export default TextImage;
