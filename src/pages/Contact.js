import Style from '../css/Contact.module.css';
import instagram from '../assets/img/logo/logo-instagram.svg';
import facebook from '../assets/img/logo/logo-facebook.svg';
import linkedin from '../assets/img/logo/logo-linkedin.svg';
import { Link } from 'react-router-dom';


const Contact = () => {
	return (
		<>
			<style>
			{`body{background-color: #111111;}`}
			</style>
			<div className='container'>
				<div className={Style.contact}>
					<h1 className={`titleAnimation ${Style.title}`}>
						Contact
					</h1>

					<div className={Style.contactWrapper}>
						<article className={Style.contactInfo}>
							<div className={Style.contactInfoWrapper}>
								<p className=''>Mathieu Vermeire</p>
								<p className=''>0485 67 84 55</p>
								<p className=''>mathieuvermeire2@gmail.com</p>
							</div>
							<div className={Style.contactSocialMedia}>
								<Link target='_blank' to={'https://www.instagram.com'} className={Style.socialMediaIcon}>
									<img className={Style.image} src={instagram} />
								</Link>
								<Link target='_blank' to={'https://www.instagram.com'} className={Style.socialMediaIcon}>
									<img className={Style.image} src={facebook} />
								</Link>
								<Link target='_blank' to={'https://www.instagram.com'} className={Style.socialMediaIcon}>
									<img className={Style.image} src={linkedin} />
								</Link>
							</div>
						</article>
						<form className={Style.form}>
							<label className={Style.label}>Name</label>
							<input className={Style.input} placeholder='Name'/>
							<label className={Style.label}>Tel</label>
							<input className={Style.input} placeholder='Tel'/>
							<label className={Style.label}>Email</label>
							<input className={Style.input} placeholder='Email'/>
							<label className={Style.label}>Bericht</label>
							<textarea className={Style.text}></textarea>
							<button className={Style.submit} type='submit'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	 );
}

export default Contact;
