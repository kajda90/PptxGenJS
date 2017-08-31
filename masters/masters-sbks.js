import {
	pxToInch
} from './utils';

import {
	IMAGES
} from './sbks-assets/images';

const SETTINGS = {
	LAYOUT: 'LAYOUT_WIDE',
	MARGIN: 0.4
}

const COLORS = {
	BACKGROUND: 'f1f1f4',
	DEFAULT_COLOR: 'ff0000',
	TITLE_COLOR: '00ff00',
	FOOTER_BACKGROUND: 'f1f1f4'
}

const FONTS = {
	DEFAULT_FONT_FACE: 'Arial',
	FOOTER_FONT_SIZE: 9,
}

const FOOTER_BAR = {
	y: '92%',
	h: '8%',
	SBKS_LOGO: {
		w: IMAGES.SBKS_LOGO.w / 3,
		h: IMAGES.SBKS_LOGO.h / 3
	}
}

let _footerBar = [{
	rect: {
		x: 0,
		y: 0,
		w: '100%',
		h: FOOTER_BAR.h,
		fill: COLORS.FOOTER_BACKGROUND
	}
}, {
	image: {
		x: SETTINGS.MARGIN,
		y: '94%',
		w: pxToInch(FOOTER_BAR.SBKS_LOGO.w),
		h: pxToInch(FOOTER_BAR.SBKS_LOGO.h),
		data: IMAGES.SBKS_LOGO.data
	}
}];

const _slideNumber = {
	x: 0,
	y: 0,
	fontSize: FONTS.FOOTER_FONT_SIZE,
	color: COLORS.DEFAULT_COLOR,
	align: 'r',
	valign: 'm',
}

const MASTER_FILE = {
	MASTER_SLIDE: {
		definitions: {
			title: 'Slide Master',
			bkgd: COLORS.BACKGROUND,
			color: COLORS.DEFAULT_COLOR,
			margin: SETTINGS.MARGIN,
			objects: [].concat(_footerBar),
		slideNumber: _slideNumber,
		},
		styles: {
			title: {
				p: {"align":"ctr","bold":true,"bullet":true,"color":"ff0000","font_face":"Impact","font_size":60,"italic":false,"inset":0,"indentLevel":1,"lineSpacing":10,"margin":10,"underline":false,"valign":"b","rtlMode":false},
				list: [{"align":"center","bold":true,"bullet":true,"color":"333333","font_face":"Impact","font_size":50,"italic":false,"inset":0,"indentLevel":1,"lineSpacing":10,"margin":10,"underline":false,"valign":"b","rtlMode":false}]
			},
			body: {
				p: {"align":"center","bold":true,"bullet":true,"color":"ff00ff","font_face":"Impact","font_size":40,"italic":false,"inset":0,"indentLevel":1,"lineSpacing":10,"margin":10,"underline":false,"valign":"b","rtlMode":false},
				list: [{"align":"center","bold":true,"bullet":true,"color":"ff00ff","font_face":"Impact","font_size":30,"italic":false,"inset":0,"indentLevel":1,"lineSpacing":10,"margin":10,"underline":false,"valign":"b","rtlMode":false}]
			},
			other: {
				p: {"align":"center","bold":true,"bullet":true,"color":"333333","font_face":"Impact","font_size":20,"italic":false,"inset":0,"indentLevel":1,"lineSpacing":10,"margin":10,"underline":false,"valign":"b","rtlMode":false},
				list: [{"align":"center","bold":true,"bullet":true,"color":"aaaaaa","font_face":"Impact","font_size":10,"italic":false,"inset":0,"indentLevel":1,"lineSpacing":10,"margin":10,"underline":false,"valign":"b","rtlMode":false}]
			}
		}
	},
	INTRO_SLIDE: {
		title: 'Intro Slide',
		placeholders: [
			{
				type: 'ctrTitle',
				text: 'Click to edit a Dashboard name (custom font Size and color from placeholder)',
				name: 'title',
				options: {
					x: 0,
					y: 0,
					w: '100%',
					h: '45%',
					font_size: 20,
					color: 'ff0000'
				}
			}
		]
	},
	TITLE_SLIDE: {
		title: 'Title only Layout',
		slideNumber: _slideNumber,
		placeholders: [
			{
				type: 'title',
				text: 'Click to edit title (styles are inherited from master slide)',
				name: 'title',
				options: {
					x: 0,
					y: '10%',
					w: '100%',
					h: '40%'
				}
			}, {
				type: 'text',
				text: 'Click to edit text (styles are inherited from master slide)',
				name: 'text',
				options: {
					x: 0,
					y: '50%',
					w: '100%',
					h: '40%'
				}
			}
		]
	},
	CHART_SLIDE: {
		title: 'Chart Slide',
		bkgd: '00FF00',
		color: COLORS.DEFAULT_COLOR,
		margin: SETTINGS.MARGIN,
		placeholders: [{
			type: 'chart',
			name: 'chart',
			options: {
				x: 2,
				y: 2,
				w: 11,
				h: 5,
			}
		}]
	}
}

/*const SLIDES = {
	MASTER_SLIDE: {
		DASHBOARD_NAME: {
			x: pxToInch(180),
			y: SETTINGS.LAYOUT.height - FOOTER_BAR.h,
			h: FOOTER_BAR.h,
			font_face: FONTS.DEFAULT_FONT_FACE,
			font_size: FONTS.FOOTER_FONT_SIZE,
			color: COLORS.DEFAULT_COLOR,
			align: 'l',
			valign: 'm',
		}
	},
	INTRO_SLIDE: {
		DASHBOARD_NAME: {
			x: 0,
			y: '30%',
			w: '100%',
			h: 1.5,
			align: 'c',
			valign: 'b',
			font_size: 24,
			color: COLORS.TITLE_COLOR,
		},
		DATERANGE: {
			x: 0,
			y: '50%',
			w: '100%',
			h: 1,
			align: 'c',
			valign: 't',
			font_size: 14,
			color: COLORS.TITLE_COLOR,
		}
	},
	TITLE_SLIDE: {
		TITLE: {
			x: 0,
			y: '30%',
			w: '100%',
			h: 1.5,
			align: 'c',
			valign: 'b',
			font_size: 24,
			color: COLORS.TITLE_COLOR,
		},
		SUB_TITLE: {
			x: 0,
			y: '50%',
			w: '100%',
			h: 1,
			align: 'c',
			valign: 't',
			font_size: 14,
			color: COLORS.TITLE_COLOR,
		}
	}
}*/

export {
	SETTINGS,
	COLORS,
	FONTS,
	MASTER_FILE
};