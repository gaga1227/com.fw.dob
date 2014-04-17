/* ------------------------------------------------------------------------------ */
/* webfonts */
/* ------------------------------------------------------------------------------ */
WebFontConfig = { 
	google: 			{ families: [ 'PT+Serif:400,700,400italic,700italic:latin',
															'Roboto:400,100,300,500,700,900,100italic,300italic,400italic,500italic,700italic,900italic:latin' ] },
	loading: 			function() { console.log('[WF] loading'); 	WebFontUtils.onWFLoading(); },
	active: 			function() { console.log('[WF] active'); 		WebFontUtils.onWFActive(); 	 WebFontUtils.onWFComplete(); },
	inactive: 		function() { console.log('[WF] inactive');	WebFontUtils.onWFInactive(); WebFontUtils.onWFComplete(); },
	fontloading:	function( familyName, fvd ) { console.log( '[WF] ' + familyName, fvd, 'loading' ); },
	fontactive: 	function( familyName, fvd ) { console.log( '[WF] ' + familyName, fvd, 'active' ); },
	fontinactive: function( familyName, fvd ) { console.log( '[WF] ' + familyName, fvd, 'inactive' ); },
	timeout: 			5000
};
WebFontUtils = {
	onWFLoading: 	function() {
									//show loader	
								},
	onWFComplete: function() {
									//hide loader
								},
	onWFActive: 	function() {},
	onWFInactive: function() {}
}
/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
var SelectNav, Slideshows, StaticAudios, StaticVideos;
function init(){
	//layout assistance
	insertFirstLastChild('#navItems, #sideNav, #sideNav ul');
	
	//interactions	
	SelectNav = new initSelectNav();
	
	//template specific functions
	if ($('body#home').length) { 
		initHome(); 
	} else {
		//media
		Slideshows = new initSlideshows();
		StaticAudios = new initStaticAudios();
		StaticVideos = new initStaticVideos();
		//form
		initDatepicker();
	}
	
	//debug
	displayDebugInfo('#debugInfo');
}
function initHome(){
}
/* DOM Ready */
$(document).ready(function(){
	console.log('DOM Ready');
	initWebFontLoader();
	Platform.addDOMClass();
	init();	
});