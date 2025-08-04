export interface ILink {
	name: string
	route: string
}

export interface IHeroStats {
	title: string
	descr: string
}

export interface IService {
	title: string
	image: string
	className: string
	hoverColor: string
}

export interface ITag {
	id: string
	isActive: boolean
	title: string
}
export interface IPortfolio {
	title: string
	img: string
	classes: string
}

export interface IPerson {
	name: string
	job: string
	img: string
}

export interface ITestmonial {
	rate: number
	descr: string
	profile: {
		name: string
		job: string
	}
}

export interface IFooterLink {
	title: string
	route: string
}

export interface IDescription {
	icon: string
	value: string
}

export interface IContact {
	title: string
	description: IDescription[]
}

export interface IActiveBarIcon {
	url: string
	isActive: 'blur' | false | true
	title: string
	id: number
}

export interface IFile {
	id: string
	name: string
	icon: string
	classes: string
}
export interface ICode {
	lineNum: number
	lineCode: string
}
export interface IEditorFile {
	name: string
	id: string
	codes: ICode[]
	isActive: boolean
}

export interface IBgImage {
	url: string
	classes: string
}
