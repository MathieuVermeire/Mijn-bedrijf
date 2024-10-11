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
import bathroomstudiosTablet from '../../assets/img/projecten/bathroomstudio/bathroomstudio-tablet.png';
import bathroomstudiosSwiper from '../../assets/img/projecten/bathroomstudio/bathroomstudio-swiper.png';
import bathroomstudiosCatalogue from '../../assets/img/projecten/bathroomstudio/bathroomstudio-catalogue.png';
import bathroomstudiosHome from '../../assets/img/projecten/bathroomstudio/bathroomstudio-home.png';
import bathroomstudiosBathroom from '../../assets/img/projecten/bathroomstudio/bathroomstudio-bathroom.png';


import devinetakeoverThumbnail from '../../assets/img/projecten/devinetakeover/devinetakeover-thumbnail.png';
import devinetakeoverHeader from '../../assets/img/projecten/devinetakeover/devinetakeover-header.png';
import devinetakeoverIntro from '../../assets/img/projecten/devinetakeover/devinetakeover-intro.png';
import devinetakeoverDevelopment from '../../assets/img/projecten/devinetakeover/devinetakeover-development.png';
import devinetakeoverDesign from '../../assets/img/projecten/devinetakeover/devinetakeover-design.png';
import devinetakeoverResearch from '../../assets/img/projecten/devinetakeover/devinetakeover-research.png';
import devinetakeoverFuture from '../../assets/img/projecten/devinetakeover/devinetakeover-future.png';
import devinetakeoverIntroHeader from '../../assets/img/projecten/devinetakeover/devinetakeover-researchintro.png';

import devinetakeover2Thumbnail from '../../assets/img/projecten/devinetakeover2/Devinetakeover-thumbnail.png';
import devinetakeover2Header from '../../assets/img/projecten/devinetakeover2/devinetakeover2-header.png';
import devinetakeover2Intro from '../../assets/img/projecten/devinetakeover2/devinetakeover-intro.png';
import devinetakeover2Curriculum from '../../assets/img/projecten/devinetakeover2/devinetakeover2-curriculum.png';
import devinetakeover2Studentwork from '../../assets/img/projecten/devinetakeover2/devinetakeover2-studentwork.png';
import devinetakeover2Alumni from '../../assets/img/projecten/devinetakeover2/devinetakeover2-alumni.png';

const projects = [
	{
		thumbnail: duurzaamwonenThumbnail,
		link: 'duurzaam-wonen',
		content: {
			title: 'Duurzaam wonen',
			description: 'Een project voor Dialoog VZW om de kloof tussen niet-weten en weten over duurzaam wonen te verkleinen.',
			headerImage: duurzaamwonenHeader,
			textImageOne: {
				title: 'Duurzaam wonen',
				copy: 'Voor dit project richtte ik me op motion, 3D, branding en UX/UI-ontwerp. Alle 3D-opstellingen omvatten verlichting, modelleren en textureren, volledig vanaf de grond opgebouwd.',
				image: duurzaamwonenBoiler,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			slideshow: {
				copy:'Ontdek duurzaam wonen',
				images: [duurzaamwonenChoices, duurzaamwonenZonnepanelen, duurzaamwonenChauffage, duurzaamwonenHoutpelletkachel, duurzaamwonenStookolieketel],
			},
			textImageTwo: {
				title: 'Duurzaam wonen',
				copy: 'Daarnaast voegde ik een HUD of UI toe om potentiële gebruikers te helpen bij het navigeren door de service. Ten slotte werden de scènes en de UI geanimeerd om een samenhangend verhaal te creëren.',
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
			description: 'Matheyo een project voor een kleine zelfstandige in de voetreflexologie',
			headerImage: matheyoHeader,
			textImageOne: {
				title: 'Website',
				copy: 'Onze website biedt een uitgebreide gids over de voordelen van gezondheid, de technieken die we gebruiken en de verschillende behandelingen die we aanbieden.',
				webLink: 'www.matheyo.be',
				image: matheyoWebsite,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			slideshow: {
				copy:'Een overzicht van Matheyo',
				images: [matheyoKruidentherapie, matheyoKaartjes, matheyoVoetreflexologie, matheyoFrontback],
			},
			textImageTwo: {
				title: 'Branding',
				copy: 'De volledige branding werd gemaakt. De kleurkeuze, logo, lettertype, naamkaartje en uithangbord.',
				image: matheyoPlakaat,
				mirror: true,
			},
		},
	},
	{
		thumbnail: devinetakeoverThumbnail,
		link: 'devinetakeover',
		content: {
			title: 'Devine takeover',
			description: 'Hoewel de huidige Devine-website zijn doel heeft gediend, is het tijd om vooruit te kijken. Devine is voortdurend in verandering. En dat zou ook voor onze website moeten gelden. Jij hebt volledige controle over de nieuwe homepage van de Devine-website.',
			headerImage: devinetakeoverHeader,
			textImageOne: {
				title: 'Take it in',
				copy: 'Met een aanpasbare header kan je de Devine website overnemen. Toekomstige studenten moeten ook hun takeover op de site plaatsen.',
				image: devinetakeoverIntroHeader,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			slideshow: {
				copy:'Ontdek de visuals',
				images: [devinetakeoverIntro, devinetakeoverDesign, devinetakeoverDevelopment, devinetakeoverResearch, devinetakeoverFuture],
			},
		},
	},
	{
		thumbnail: bathroomstudiosThumbnail,
		link: 'bathroomstudios',
		content: {
			title: 'Bathroom Studios',
			description: 'Bathroom Studios een unieke manier om jouw badkamer samen te stellen.',
			headerImage: bathroomstudiosHome,
			textImageOne: {
				title: 'De opdracht',
				copy: 'Deze opdracht bestaat uit twee stukken. Creëer een online product dat dient als een voorloper voor een bezoek aan de pop-up winkel. Consumenten kunnen inspiratie opdoen, zich informeren en badkamers configureren. Conceptualiseer een idee dat kan worden gebruikt in een fysieke ruimte en de consument helpt in het koopproces van een nieuwe badkamer.',
				image: bathroomstudiosThumbnail,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			textImageTwo: {
				title: 'Maak jouw droombadkamer',
				copy: 'De badkamer-vibes-swiper laat de consument voorkeuren voor badkamers kiezen. Met de verzamelde gegevens wordt een badkamerervaring gegenereerd die op die consument is afgestemd.',
				image: bathroomstudiosSwiper,
				mirror: true,
			},

			slideshow: {
				copy:'Men kan de badkamer gaan personaliseren met verschillende catalogussen. Je kan uit verschillende vibes en meubelstukken kiezen',
				images: [bathroomstudiosBathroom, bathroomstudiosCatalogue],
			},

			textImageThree: {
				title: 'Pop-up shop',
				copy: 'Ten slotte wordt er een QR-code naar hen gemaild die de gegevens bevat van de badkamer die ze zojuist hebben gecreëerd. Deze code kan worden gebruikt in de pop-upwinkel.',
				image: bathroomstudiosTablet,
				mirror: false,
			},
		},
	},
	{
		thumbnail: devinetakeover2Thumbnail,
		link: 'devinetakover2',
		content: {
			title: 'Devine Takeover 2',
			description: 'Een persoonlijke rebranding van devine-takeover',
			headerImage: devinetakeover2Header,
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			textImageOne: {
				title: 'Take it in',
				copy: 'Met een aanpasbare header kan je de Devine website overnemen. Toekomstige studenten moeten ook hun takeover op de site plaatsen.',
				image: devinetakeover2Intro,
				mirror: false,
			},
			// copyOne:'lorem ipsum dolor sit amt, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			slideshow: {
				copy:'Ontdek de visuals',
				images: [devinetakeover2Curriculum, devinetakeover2Studentwork, devinetakeover2Alumni],
			},
		},
	},
]

export default projects;
