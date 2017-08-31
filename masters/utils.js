let pxToInch = function(px) {
	return Math.round(px / 96 * 100) / 100; // 1 in = 96 Pixel
};

export {
	pxToInch,
}