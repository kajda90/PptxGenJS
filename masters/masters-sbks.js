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
	HLINK: 'hlink',
	FOLHLINK: 'folHlink'
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
		dk2: '6B7883',
		lt1: 'F3F3F5',
		lt2: 'FFFFFF',
		accent1: '1A3A82',
		accent2: '38C0C0',
		accent3: '3B922B',
		accent4: 'FFCC00',
		accent5: 'A22323',
		accent6: '66245F',
		hlink: '1869B7',
		folHlink: '1869B7'
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
		fill: PPTX_COLORS.BACKGROUND1,
		preserve: true
	}
}, {
	image: {
		x: '3%',
		y: '93%',
		w: pxToInch(FOOTER_BAR.SBKS_LOGO.w),
		h: pxToInch(FOOTER_BAR.SBKS_LOGO.h),
		data: IMAGES.SBKS_LOGO.data,
		preserve: true
	}
}];

const MASTER_FILE = {
	MASTER_SLIDE: {
		definitions: {
			title: 'Slide Master',
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
				}, {
					type: 'sldNum',
					name: 'slideNumber',
					options: {
						x: '93%',
						y: '93%',
						w: '6%',
						h: '4%',
						align:'right',
						font_size: 9,
					},
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
	TITLE_SLIDE: {
		title: 'Title Slide',
		type: 'title',
		hasSlideNumber: false,
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '10%',
					w: '94%',
					h: '35%',
					font_size: 48,
					align: 'center',
					valign: 'bottom'
				}
			}, {
				type: 'subTitle',
				text: 'Click to add subtitle',
				name: 'subTitle',
				options: {
					x: '3%',
					y: '47%',
					w: '94%',
					h: '23%',
					font_size: 20,
					align: 'center',
					valign: 'top'
				}
			}
		]
	},
	TITLE_AND_CONTENT: {
		title: 'Title and Content',
		type: 'obj',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '3.5%',
					w: '94%',
					h: '7.5%'
				}
			}, {
				type: 'content',
				text: 'Click to add text',
				name: 'content',
				options: {
					x: '3%',
					y: '12%',
					w: '94%',
					h: '76.5%',
					valign: 'top',
				}
			}
		]
	},
	SECOND_HEADER: {
		title: 'Section Header',
		type: 'secHead',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '10%',
					w: '94%',
					h: '35%',
					align: 'center',
					valign: 'bottom'
				}
			}, {
				type: 'text',
				text: 'Click to edit text',
				name: 'text',
				options: {
					x: '3%',
					y: '47%',
					w: '94%',
					h: '23%',
					align: 'center',
					valign: 'top'
				}
			}
		]
	},
	TWO_CONTENT: {
		title: 'Two Content',
		type: 'twoObj',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '3.5%',
					w: '94%',
					h: '7.5%'
				}
			}, {
				type: 'content',
				text: 'Click to add text',
				name: 'content_one',
				options: {
					x: '3%',
					y: '12%',
					w: '46%',
					h: '76.5%',
					valign: 'top',
				}
			}, {
				type: 'content',
				text: 'Click to add text',
				name: 'content_two',
				options: {
					x: '51%',
					y: '12%',
					w: '46%',
					h: '76.5%',
					valign: 'top',
				}
			}
		]
	},
	COMPARISON: {
		title: 'Comparison',
		type: 'twoTxTwoObj',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '3.5%',
					w: '94%',
					h: '7.5%'
				}
			}, {
				type: 'text',
				text: 'Click to edit text',
				name: 'text_one',
				options: {
					x: '3%',
					y: '12%',
					w: '46%',
					h: '4%',
					valign: 'top',
				}
			}, {
				type: 'text',
				text: 'Click to edit text',
				name: 'text_two',
				options: {
					x: '51%',
					y: '12%',
					w: '46%',
					h: '4%',
					valign: 'top',
				}
			}, {
				type: 'content',
				text: 'Click to add text',
				name: 'content_one',
				options: {
					x: '3%',
					y: '20%',
					w: '46%',
					h: '68.5%',
					valign: 'top',
				}
			}, {
				type: 'content',
				text: 'Click to add text',
				name: 'content_two',
				options: {
					x: '51%',
					y: '20%',
					w: '46%',
					h: '68ß.5%',
					valign: 'top',
				}
			}
		]
	},
	TITLE_ONLY: {
		title: 'Title Only',
		type: 'titleOnly',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
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
	BLANK: {
		title: 'Blank',
		type: 'blank',
		objects: [].concat(_footerBar),
	},
	CONTENT_WITH_CAPTION: {
		title: 'Content with Caption',
		type: 'objTx',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '3.5%',
					w: '46%',
					h: '7.5%'
				}
			}, {
				type: 'text',
				text: 'Click to add text',
				name: 'text',
				options: {
					x: '3%',
					y: '12%',
					w: '46%',
					h: '76.5%',
					valign: 'top',
				}
			}, {
				type: 'content',
				text: 'Click to add text',
				name: 'content',
				options: {
					x: '51%',
					y: '3.5%',
					w: '46%',
					h: '85%',
					valign: 'top',
				}
			}
		]
	},
	PICTURE_WITH_CAPTION: {
		title: 'Picture with Caption',
		type: 'picTx',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '3.5%',
					w: '46%',
					h: '7.5%'
				}
			}, {
				type: 'text',
				text: 'Click to add text',
				name: 'text',
				options: {
					x: '3%',
					y: '12%',
					w: '46%',
					h: '76.5%',
					valign: 'top',
				}
			}, {
				type: 'image',
				text: 'Click to add image',
				name: 'image',
				options: {
					x: '51%',
					y: '3.5%',
					w: '46%',
					h: '85%'
				}
			}
		]
	},
	TITLE_AND_VERTICAL_TEXT: {
		title: 'Title and Vertical Text',
		type: 'vertTx',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '3%',
					y: '3.5%',
					w: '94%',
					h: '7.5%'
				}
			}, {
				type: 'text',
				text: 'Click to edit text',
				name: 'text',
				options: {
					x: '29%',
					y: '-33%',
					w: '42%',
					h: '167%',
					valign: 'top',
					rotate: '90'
				}
			}
		]
	},
	VERTICAL_TITLE_AND_TEXT: {
		title: 'Vertical Title and Text',
		type: 'vertTitleAndTx',
		objects: [].concat(_footerBar),
		placeholders: [
			{
				type: 'title',
				text: 'Click to add title',
				name: 'title',
				options: {
					x: '72%',
					y: '42%',
					w: '47%',
					h: '7.5%',
					valign: 'top',
					rotate: '90'
				}
			}, {
				type: 'text',
				text: 'Click to edit text',
				name: 'text',
				options: {
					x: '24%',
					y: '-34%',
					w: '47%',
					h: '160%',
					valign: 'top',
					rotate: '90'
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