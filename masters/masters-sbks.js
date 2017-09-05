import {
	pxToInch
} from './utils';

import {
	IMAGES,
	BACKGROUNDS
} from './sbks-assets/images';

const PPTX_COLORS = {
	TEXT1: 'tx1',
	TEXT2: 'tx2',
	BACKGROUND1: 'bg1',
	BACKGROUND2: 'bg2',
	ACCENT1: 'accent1',
	ACCENT2: 'accent2',
	ACCENT3: 'accent3',
	ACCENT4: 'accent4',
	ACCENT5: 'accent5',
	ACCENT6: 'accent6',
}

const SETTINGS = {
	LAYOUT: 'LAYOUT_WIDE',
	MARGIN: 0.3
}

const COLORS = {
	BACKGROUND: 'f1f1f4',
	DEFAULT_COLOR: 'ff0000',
	TITLE_COLOR: '00ff00',
	FOOTER_BACKGROUND: 'f1f1f4',
	SCHEME: {
		dk1: '2F3744',
		dk2: 'F3F3F5',
		lt1: '6B7883',
		lt2: 'FFFFFF',
		accent1: '1A3A82',
		accent2: '38C0C0',
		accent3: '3B922B',
		accent4: 'FFCC00',
		accent5: 'A22323',
		accent6: '66245F'
	}
}

const FONTS = {
	DEFAULT_FONT_FACE: 'Arial',
	FOOTER_FONT_SIZE: 9,
}

const FOOTER_BAR = {
	y: '91%',
	h: '9%',
	SBKS_LOGO: {
		w: IMAGES.SBKS_LOGO.w / 2.8,
		h: IMAGES.SBKS_LOGO.h / 2.8
	}
}

let _footerBar = [{
	rect: {
		x: 0,
		y: FOOTER_BAR.y,
		w: '100%',
		h: FOOTER_BAR.h,
		fill: COLORS.FOOTER_BACKGROUND
	}
}, {
	image: {
		x: '3%',
		y: '93%',
		w: pxToInch(FOOTER_BAR.SBKS_LOGO.w),
		h: pxToInch(FOOTER_BAR.SBKS_LOGO.h),
		data: IMAGES.SBKS_LOGO.data
	}
}];

const MASTER_FILE = {
	MASTER_SLIDE: {
		definitions: {
			title: 'Socialbakers Slide Master',
			bkgd: COLORS.BACKGROUND,
			color: COLORS.DEFAULT_COLOR,
			margin: SETTINGS.MARGIN,
			objects: [].concat(_footerBar),
			placeholders: [
				{
					type: 'title',
					text: 'Click to edit title',
					name: 'title',
					options: {
						x: '3%',
						y: '3.5%',
						w: '94%',
						h: '7.5%'
					}
				}, {
					type: 'footer',
					text: 'Click to edit footer',
					name: 'footer',
					options: {
						x: '15%',
						y: '93%',
						w: '50%',
						h: '4%',
						font_size: 9
					}
				}
			]
		},
		styles: {
			title: {
				list: [{"align":"left","color":PPTX_COLORS.TEXT1,"font_face":FONTS.DEFAULT_FONT_FACE,"font_size":24,"valign":"center"}]
			},
			body: {
				list: [{"align":"left","color":PPTX_COLORS.TEXT1,"font_face":FONTS.DEFAULT_FONT_FACE,"font_size":16,"valign":"top"}]
			},
			other: {
				list: [{"align":"left","color":PPTX_COLORS.TEXT1,"font_face":FONTS.DEFAULT_FONT_FACE,"font_size":16,"valign":"t"}]
			}
		}
	},
	INTRO_SLIDE: {
		title: 'Socialbakers Title Slide',
		objects: [{
			image: {
				x: 0,
				y: 0,
				w: '100%',
				h: '100%',
				data: BACKGROUNDS.TITLE_SLIDE.data
			}
		}].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Dashboard Name',
				name: 'title',
				options: {
					x: '3%',
					y: '10%',
					w: '94%',
					h: '35%',
					font_size: 48,
					color: COLORS.SCHEME.dk2,
					align: 'center',
					valign: 'bottom'
				}
			}, {
				type: 'subTitle',
				text: 'Data Range of the Report',
				name: 'subTitle',
				options: {
					x: '3%',
					y: '47%',
					w: '94%',
					h: '23%',
					font_size: 20,
					color: COLORS.SCHEME.dk2,
					align: 'center',
					valign: 'top'
				}
			}
		]
	},
	TITLE_ONLY: {
		title: 'Socialbakers Section Header',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to edit title',
				name: 'title',
				options: {
					x: '3%',
					y: '11%',
					w: '94%',
					h: '37%',
					font_size: 32,
					align: 'center',
					valign: 'bottom'
				}
			}
		]
	},
	TITLE_AND_CONTENT: {
		title: 'Socialbakers Title and Content',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'content',
				text: 'Content',
				name: 'content',
				options: {
					x: '3%',
					y: '13%',
					w: '94%',
					h: '75%',
					valign: 't'
				}
			}
		]
	}
}

export {
	SETTINGS,
	COLORS,
	FONTS,
	MASTER_FILE
};