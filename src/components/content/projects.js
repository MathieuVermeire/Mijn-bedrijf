import duurzaamwonenThumbnail from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-thumbnail.png';
import duurzaamwonenHeader from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-header.png';
import duurzaamwonenBoiler from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-boiler.png';
import duurzaamwonenChoices from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-choices.png';
import duurzaamwonenZonnepanelen from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-zonnepanelen.png';
import duurzaamwonenChauffage from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-chauffage.png';
import duurzaamwonenHoutpelletkachel from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-houtpellet.png';
import duurzaamwonenStookolieketel from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-stookolieketel.png';
import duurzaamwonenExample from '../../assets/img/projecten/duurzaamwonen/duurzaamwonen-example.png';
import matheyoThumbnail from '../../assets/img/projecten/matheyo/matheyo-thumbnail.png';
import matheyoHeader from '../../assets/img/projecten/matheyo/matheyo-header.png';
import matheyoWebsite from '../../assets/img/projecten/matheyo/matheyo-website.png';
import matheyoPlaceholder from '../../assets/img/projecten/matheyo/matheyo-placeholder.png';
import matheyoKruidentherapie from '../../assets/img/projecten/matheyo/matheyo-kruidentherapie.png';
import matheyoVoetreflexologie from '../../assets/img/projecten/matheyo/matheyo-voetreflexologie.png';
import matheyoKaartjes from '../../assets/img/projecten/matheyo/matheyo-kaartjes.png';
import matheyoFrontback from '../../assets/img/projecten/matheyo/matheyo-frontback.png';
import matheyoPlakaat from '../../assets/img/projecten/matheyo/matheyo-plakaat.png';

import matheyoLogo from '../../assets/img/projecten/matheyo/matheyo-logo.png';
import bathroomstudiosThumbnail from '../../assets/img/projecten/bathroomstudio/bathroomstudio-thumbnail.png';

const projects = [
	{
		thumbnail: duurzaamwonenThumbnail,
		link: 'duurzaam-wonen',
		content: {
			title: 'Duurzaam wonen',
			description: 'Kies uit 1 van 5 voorgebouwde websites met elk hun eigen feeling om jouw bedrijf te representeren. ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			headerImage: duurzaamwonenHeader,
			textImageOne: {
				title: 'Duurzaam wonen',
				copy: 'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				image: duurzaamwonenBoiler,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			slideshow: {
				copy:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				images: [duurzaamwonenChoices, duurzaamwonenZonnepanelen, duurzaamwonenChauffage, duurzaamwonenHoutpelletkachel, duurzaamwonenStookolieketel],
			},
			textImageTwo: {
				title: 'Duurzaam wonen',
				copy: 'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				image: duurzaamwonenExample,
				mirror: true,
			},
		}
	},
	{
		thumbnail: matheyoThumbnail,
		link: 'matheyo',
		content: {
			title: 'Matheyo',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			headerImage: matheyoHeader,
			textImageOne: {
				title: 'Website',
				copy: 'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				image: matheyoWebsite,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			textImageTwo: {
				title: 'Branding',
				copy: 'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				image: matheyoPlakaat,
				mirror: true,
			},
			slideshow: {
				copy:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				images: [matheyoKruidentherapie, matheyoKaartjes, matheyoVoetreflexologie, matheyoFrontback],
			},
		},
	},
	{
		thumbnail: bathroomstudiosThumbnail,
		link: 'bathroomstudios',
		content: {
			title: 'Bathroom Studios',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			headerImage: duurzaamwonenHeader,
			textImageOne: {
				title: 'Bathroom Studios',
				copy: 'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				image: duurzaamwonenHeader,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			// slideshow: {
			// 	copy:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			// 	images: [duurzaamwonenHeader],
			// },
			textImageTwo: {
				title: 'Bathroom Studios',
				copy: 'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
				image: duurzaamwonenHeader,
				mirror: true,
			},
		},
	}
]

export default projects;
