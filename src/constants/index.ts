import type {
	IBgImage,
	IContact,
	IFooterLink,
	ILink,
	IPerson,
	IPortfolio,
	IService,
	ITag,
	ITestmonial,
} from '@/types'

export const navLinks: ILink[] = [
	{
		route: 'home',
		name: 'Home',
	},
	{
		route: 'about',
		name: 'About',
	},
	{
		route: 'services',
		name: 'Services',
	},
]
export const services: IService[] = [
	{
		title: 'Web Development',
		image: '/services/service1.png',
		className:
			'col-span-1 md:col-span-2 row-span-2 max-sm:row-span-1 sm:h-[250px]',
		hoverColor: 'from-[#032054] to-transparent',
	},
	{
		title: 'Mobile Development',
		image: '/services/service2.png',
		className: 'col-span-1 md:col-span-2  sm:h-[120px]',
		hoverColor: 'from-[#4B3204] to-transparent',
	},
	{
		title: 'Graphic Design & Branding',
		image: '/services/service3.png',
		className: 'col-span-1 md:col-span-2  sm:h-[120px]',
		hoverColor: 'from-[#4B0436] to-transparent',
	},
	{
		title: 'UI UX Design',
		image: '/services/service4.png',
		className:
			'col-span-1 md:col-span-2 row-span-2 max-sm:row-span-1 sm:h-[250px]',
		hoverColor: 'from-[#043F4B] to-transparent',
	},
	{
		title: 'Business Automation Solutions',
		image: '/services/service5.png',
		className:
			'col-span-1 md:col-span-2 sm:row-span-2 row-span-1  sm:h-[250px]',
		hoverColor: 'from-[#2C2C03] to-transparent',
	},
	{
		title: 'Start-up Support Services',
		image: '/services/service6.png',
		className: 'col-span-1 sm:col-span-2 md:col-span-4 row-span-3 sm:h-[180px]',
		hoverColor: 'from-[#540320] to-transparent',
	},
]

export const team: IPerson[] = [
	{
		job: 'BackEnd<br/>Developer',
		name: 'Abdurasul Sultonov',
		img: '/team/portrait1.png',
	},
	{
		job: 'FrontEnd<br/>Developer',
		name: 'Abduvohid Karimov',
		img: '/team/portrait2.png',
	},

	{
		job: 'FrontEnd<br/>Developer',
		name: 'Jasur Sirojiddinov',
		img: '/team/portrait3.png',
	},
]

export const tags: ITag[] = [
	{
		id: 'all',
		isActive: true,
		title: 'All',
	},
	{
		id: 'web',
		isActive: false,
		title: 'Web',
	},
	{
		id: 'app',
		isActive: false,
		title: 'App',
	},
	{
		id: 'crm',
		isActive: false,
		title: 'CRM',
	},
]

export const portfolies: IPortfolio[] = [
	{
		img: '/portfolio/portfolio2.jpg',
		title: 'Possessd',
		classes: 'bg-gradient-to-t from-[rgba(255,115,0,0.5)] to-transparent',
	},
	{
		img: '/portfolio/portfolio2.jpg',
		title: 'Quptient',
		classes: 'bg-gradient-to-t from-[rgba(255,115,0,0.5)] to-transparent',
	},
	{
		img: '/portfolio/portfolio3.jpg',
		title: 'Etheulse',
		classes: 'bg-gradient-to-t from-[rgba(168,85,247,0.5)] to-transparent',
	},
	{
		img: '/portfolio/portfolio4.jpg',
		title: 'Zeus-X',
		classes: 'bg-gradient-to-t from-[rgba(59,130,246,0.4)] to-transparent',
	},
	{
		img: '/portfolio/portfolio5.jpg',
		title: 'Nuorbit',
		classes: 'bg-gradient-to-t from-[#00f0ff]/40 to-transparent text-[#e0faff]',
	},
	{
		img: '/portfolio/portfolio6.jpg',
		title: 'Crystal Tech',
		classes: 'bg-gradient-to-t from-[#1e1e2f] to-transparent text-[#cfd8dc]',
	},
	{
		img: '/portfolio/portfolio7.jpg',
		title: "The Hell's Gate",
		classes: 'bg-gradient-to-t from-[#ff5e13]/40 to-transparent text-[#fff4e6]',
	},
	{
		img: '/portfolio/portfolio8.jpg',
		title: 'Culture',
		classes: 'bg-gradient-to-t from-[#a600ff]/40 to-transparent text-[#e8e0ff]',
	},
]

export const testmonials: ITestmonial[] = [
	{
		rate: 4,
		descr:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
		profile: {
			name: 'Maxin Will',
			job: 'Product Manager',
		},
	},
	{
		rate: 4,
		descr:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
		profile: {
			name: 'Maxin Will',
			job: 'Product Manager',
		},
	},
	{
		rate: 4,
		descr:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
		profile: {
			name: 'Maxin Will',
			job: 'Product Manager',
		},
	},
	{
		rate: 4,
		descr:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
		profile: {
			name: 'Maxin Will',
			job: 'Product Manager',
		},
	},
]

export const icons: string[] = [
	'/social/instagram.svg',
	'/social/facebook.svg',
	'/social/twitter.svg',
	'/social/youtube.svg',
]

export const bgImages: IBgImage[] = [
	{
		url: '/bg/bg3.png',
		classes: 'absolute inset-0 top-[100vh] -z-0',
	},
	{
		url: '/bg/bg3.png',
		classes: 'absolute inset-0 top-[200vh] md:hidden -z-0',
	},
	{
		url: '/bg/bg2.png',
		classes: 'absolute inset-0 top-[300vh] -z-0',
	},
	{
		url: '/bg/bg2.png',
		classes: 'absolute inset-0 top-[400vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg1.png',
		classes: 'absolute inset-0 top-[500vh] -z-0',
	},
	{
		url: '/bg/bg1.png',
		classes: 'absolute inset-0 top-[600vh] md:hidden -z-0',
	},
	{
		url: '/bg/bg2.png',
		classes: 'absolute inset-0 top-[700vh] md:hidden -z-0',
	},
	{
		url: '/bg/bg3.png',
		classes: 'absolute inset-0 top-[800vh] md:hidden -z-0',
	},
	{
		url: '/bg/bg1.png',
		classes: 'absolute inset-0 top-[900vh] md:hidden -z-0',
	},
	{
		url: '/bg/bg2.png',
		classes: 'absolute inset-0 top-[1000vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg3.png',
		classes: 'absolute inset-0 top-[1100vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg1.png',
		classes: 'absolute inset-0 top-[1200vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg2.png',
		classes: 'absolute inset-0 top-[1300vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg3.png',
		classes: 'absolute inset-0 top-[1400vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg1.png',
		classes: 'absolute inset-0 top-[1500vh] sm:hidden -z-0',
	},
	{
		url: '/bg/bg2.png',
		classes: 'absolute inset-0 top-[1600vh] sm:hidden max-[550px]:hidden -z-0',
	},
]

export const footerLinks: IFooterLink[] = [
	{
		title: 'Home',
		route: 'home',
	},
	{
		title: 'About',
		route: 'about',
	},
	{
		title: 'Services',
		route: 'services',
	},
	{
		title: 'Portfolio',
		route: 'portfolio',
	},
	{
		title: 'Contact',
		route: 'contact',
	},
]

export const contacts: IContact[] = [
	{
		title: 'Contact',
		description: [
			{ icon: '/contact/phone.svg', value: '+998 99 999 99 99' },
			{ icon: '/contact/email.svg', value: 'example@gmail.com' },
		],
	},
	{
		title: 'Address',
		description: [
			{
				icon: '/contact/location.svg',
				value: 'Gulistan City Youth Center <br/>Address: 6th block',
			},
		],
	},
]

export const copyText: string = `
// Type some code ->

console.log "oO08 iIlL1 g9qCGQ ~-+="
// â é ù ï ø ç Ã Ē Æ œ

function updateGutters(cm) {
	var gutters = cm.display.gutters,
	__specs = cm.display.gutters,

	removeChildren(gutters);

	for (var i = 0; i < specs.length; ++i) {
		var guttersClass = __specs[i];
		var gElt = gutters.appendChild(
			elt(
				"div",
				null,
				"CodeMirror-gutter " + gutterClass
			)

		);

	if (gutterClass == "CodeMirror-linenumbers"){
		cm.display.lineGutter = gElt;
		gElt.style.width = (gElt.display.lineNumWidth || 1) + "px";
	}
}
gutters.style.display = i ? "" : "none";
updateGutterSpace(cm);
return false;`
