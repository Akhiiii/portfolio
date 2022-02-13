
import profile from './profile.png';
import { faAppStore, faFacebook, faGithub, faGooglePlay, faInstagram, faLinkedinIn, faMailchimp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faVoicemail } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Akhilesh",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Akhilesh",
	description: "Indian Institute of Technology, Hyderabad",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1E-Mq-xpd5NzUfWPjA9HyvDyv26RYVOXw/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from Indian Institute of Technology, Hyderabad (IITH) in 2018 with a degree in B.Tech. I kick started my professional career as a Full Stack application developer for a startup. I am having with 3+ years experience in developing and managing Web and Mobile application. Expertise in the JavaScript libraries React/React Native. l love writing cleaner and efficient code.",

		"When I’m not programming, I focus on my hobbies which are: Travelling and meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Andriod apps using React Native.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive websites using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "TapTap",
			description: "Single handedly developed the mobile app for IOS and android from the scratch. App for contactless payment system for wristband.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com",
				},
			]
		},
		{
			title: "LetsTransport Partner App",
			description: "LetsTransport is a techno-logistics solution provider, precisely working on Intra City logistics. Developed the client facing android app in React Native.",
			icons: [
				// {
				// 	icon: faAppStore,
				// 	link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				// },
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=in.letstransport.supply&hl=en&utm_source=website&utm_campaign=for_drivers_page_banner&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
				},
			]
		},
		{
			title: "Saving Circle App",
			description: "A chit fund is a type of rotating savings and credit association system practiced in India. Developed Android App Saving Circle based on chit fund savings scheme",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Akhiiii/Savings-Circle",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com",
				},
			]
		},
		{
			title: "Machnet",
			description: "Machnet is an All-in-one programmable API for cross-border payments and banking. Developed machnet payment gateway Web app.",
			icons: [
				{
					icon: faGlobe,
					link: "https://app.highgear.io/",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out to me on social media.",
	buttons: [
		{
			title: "Email Me",
			icon: faEnvelope,
			link: "mailto:akhileshk.iith@gmail.com",
			isPrimary: false,
		},
		{
			title: "LinkedIn",
			icon: faLinkedinIn,
			link: "https://www.linkedin.com/in/akhilesh-kumar-a18721b3/",
			isPrimary: false,
		},
		{
			title: "Twitter",
			icon: faTwitter,
			link: "https://twitter.com/Akhiles22487534",
			isPrimary: false,
		},
		{
			title: "GitHub",
			icon: faGithub,
			link: "https://github.com/Akhiiii",
			isPrimary: false,
		},
		{
			title: "Facebook",
			icon: faFacebook,
			link: "https://www.facebook.com/akhileshverma23/",
			isPrimary: false,
		},
		{
			title: "Instagram",
			icon: faInstagram,
			link: "https://www.instagram.com/iitian.akhilesh/",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Akhilesh Kumar | Software Engineer | Reactjs developer",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@akhi",
	description: "Software Engineer | Frontend | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://akhiiii.github.io/akhilesh/",
		},
		{
			title: "TapTap App",
			link: "https://play.google.com",
		},
		{
			title: "LetsTransport App",
			link: "https://play.google.com/store/apps/details?id=in.letstransport.supply&hl=en&utm_source=website&utm_campaign=for_drivers_page_banner&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
		},
		{
			title: "Machnet",
			link: "https://app.highgear.io/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/Akhiiii",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/akhilesh-kumar-a18721b3/",
		},
	]
}