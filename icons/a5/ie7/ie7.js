/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Razor-CSS-Icon-Library-V005\'">' + entity + '</span>' + html;
	}
	var icons = {
		'rc-a5-store': '&#xe900;',
		'rc-a5-out': '&#xe901;',
		'rc-a5-in': '&#xe902;',
		'rc-a5-in-alt': '&#xe903;',
		'rc-a5-home1': '&#xe904;',
		'rc-a5-lightbulb': '&#xe905;',
		'rc-a5-anchor': '&#xe906;',
		'rc-a5-feather': '&#xe907;',
		'rc-a5-expand': '&#xe908;',
		'rc-a5-maximize': '&#xe909;',
		'rc-a5-search1': '&#xe90a;',
		'rc-a5-zoomin': '&#xe90b;',
		'rc-a5-zoomout': '&#xe90c;',
		'rc-a5-add': '&#xe90d;',
		'rc-a5-subtract': '&#xe90e;',
		'rc-a5-exclamation': '&#xe90f;',
		'rc-a5-question1': '&#xe910;',
		'rc-a5-close': '&#xe911;',
		'rc-a5-cmd': '&#xe912;',
		'rc-a5-forbid': '&#xe913;',
		'rc-a5-book1': '&#xe914;',
		'rc-a5-spinner1': '&#xe915;',
		'rc-a5-play1': '&#xe916;',
		'rc-a5-stop1': '&#xe917;',
		'rc-a5-pause1': '&#xe918;',
		'rc-a5-forward1': '&#xe919;',
		'rc-a5-rewind': '&#xe91a;',
		'rc-a5-sound': '&#xe91b;',
		'rc-a5-sound-alt': '&#xe91c;',
		'rc-a5-soundoff': '&#xe91d;',
		'rc-a5-task': '&#xe91e;',
		'rc-a5-inbox': '&#xe91f;',
		'rc-a5-inbox-alt': '&#xe920;',
		'rc-a5-envelope': '&#xe921;',
		'rc-a5-compose': '&#xe922;',
		'rc-a5-newspaper1': '&#xe923;',
		'rc-a5-newspaper-alt': '&#xe924;',
		'rc-a5-clipboard1': '&#xe925;',
		'rc-a5-calendar1': '&#xe926;',
		'rc-a5-hyperlink': '&#xe927;',
		'rc-a5-trash': '&#xe928;',
		'rc-a5-trash-alt': '&#xe929;',
		'rc-a5-grid': '&#xe92a;',
		'rc-a5-grid-alt': '&#xe92b;',
		'rc-a5-menu1': '&#xe92c;',
		'rc-a5-list1': '&#xe92d;',
		'rc-a5-gallery': '&#xe92e;',
		'rc-a5-calculator1': '&#xe92f;',
		'rc-a5-windows1': '&#xe930;',
		'rc-a5-browser': '&#xe931;',
		'rc-a5-alarm1': '&#xe932;',
		'rc-a5-clock1': '&#xe933;',
		'rc-a5-attachment1': '&#xe934;',
		'rc-a5-settings': '&#xe935;',
		'rc-a5-portfolio': '&#xe936;',
		'rc-a5-user1': '&#xe937;',
		'rc-a5-users1': '&#xe938;',
		'rc-a5-heart1': '&#xe939;',
		'rc-a5-chat': '&#xe93a;',
		'rc-a5-comments': '&#xe93b;',
		'rc-a5-screen': '&#xe93c;',
		'rc-a5-iphone': '&#xe93d;',
		'rc-a5-ipad': '&#xe93e;',
		'rc-a5-forkandspoon': '&#xe93f;',
		'rc-a5-forkandknife': '&#xe940;',
		'rc-a5-instagram1': '&#xe941;',
		'rc-a5-facebook1': '&#xe942;',
		'rc-a5-delicious1': '&#xe943;',
		'rc-a5-googleplus': '&#xe944;',
		'rc-a5-dribbble1': '&#xe945;',
		'rc-a5-pin': '&#xe946;',
		'rc-a5-pin-alt': '&#xe947;',
		'rc-a5-camera1': '&#xe948;',
		'rc-a5-brightness': '&#xe949;',
		'rc-a5-brightness-half': '&#xe94a;',
		'rc-a5-moon': '&#xe94b;',
		'rc-a5-cloud1': '&#xe94c;',
		'rc-a5-circle-full': '&#xe94d;',
		'rc-a5-circle-half': '&#xe94e;',
		'rc-a5-globe': '&#xe94f;',
		'rc-a5-sunrise': '&#xe950;',
		'rc-a5-sun1': '&#xe951;',
		'rc-a5-moon1': '&#xe952;',
		'rc-a5-sun2': '&#xe953;',
		'rc-a5-windy': '&#xe954;',
		'rc-a5-wind': '&#xe955;',
		'rc-a5-snowflake': '&#xe956;',
		'rc-a5-cloudy': '&#xe957;',
		'rc-a5-cloud2': '&#xe958;',
		'rc-a5-weather': '&#xe959;',
		'rc-a5-weather1': '&#xe95a;',
		'rc-a5-weather2': '&#xe95b;',
		'rc-a5-lines': '&#xe95c;',
		'rc-a5-cloud3': '&#xe95d;',
		'rc-a5-lightning': '&#xe95e;',
		'rc-a5-lightning1': '&#xe95f;',
		'rc-a5-rainy': '&#xe960;',
		'rc-a5-rainy1': '&#xe961;',
		'rc-a5-windy1': '&#xe962;',
		'rc-a5-windy2': '&#xe963;',
		'rc-a5-snowy': '&#xe964;',
		'rc-a5-snowy1': '&#xe965;',
		'rc-a5-snowy2': '&#xe966;',
		'rc-a5-weather3': '&#xe967;',
		'rc-a5-cloudy1': '&#xe968;',
		'rc-a5-cloud4': '&#xe969;',
		'rc-a5-lightning2': '&#xe96a;',
		'rc-a5-sun3': '&#xe96b;',
		'rc-a5-moon2': '&#xe96c;',
		'rc-a5-cloudy2': '&#xe96d;',
		'rc-a5-cloud5': '&#xe96e;',
		'rc-a5-cloud6': '&#xe96f;',
		'rc-a5-lightning3': '&#xe970;',
		'rc-a5-rainy2': '&#xe971;',
		'rc-a5-rainy3': '&#xe972;',
		'rc-a5-windy3': '&#xe973;',
		'rc-a5-windy4': '&#xe974;',
		'rc-a5-snowy3': '&#xe975;',
		'rc-a5-snowy4': '&#xe976;',
		'rc-a5-weather4': '&#xe977;',
		'rc-a5-cloudy3': '&#xe978;',
		'rc-a5-lightning4': '&#xe979;',
		'rc-a5-thermometer': '&#xe97a;',
		'rc-a5-compass1': '&#xe97b;',
		'rc-a5-none': '&#xe97c;',
		'rc-a5-Celsius': '&#xe97d;',
		'rc-a5-Fahrenheit': '&#xe97e;',
		'rc-a5-home': '&#xe97f;',
		'rc-a5-home2': '&#xe980;',
		'rc-a5-home3': '&#xe981;',
		'rc-a5-office': '&#xe982;',
		'rc-a5-newspaper': '&#xe983;',
		'rc-a5-pencil': '&#xe984;',
		'rc-a5-pencil2': '&#xe985;',
		'rc-a5-quill': '&#xe986;',
		'rc-a5-pen': '&#xe987;',
		'rc-a5-blog': '&#xe988;',
		'rc-a5-eyedropper': '&#xe989;',
		'rc-a5-droplet': '&#xe98a;',
		'rc-a5-paint-format': '&#xe98b;',
		'rc-a5-image': '&#xe98c;',
		'rc-a5-images': '&#xe98d;',
		'rc-a5-camera': '&#xe98e;',
		'rc-a5-headphones': '&#xe98f;',
		'rc-a5-music': '&#xe990;',
		'rc-a5-play': '&#xe991;',
		'rc-a5-film': '&#xe992;',
		'rc-a5-video-camera': '&#xe993;',
		'rc-a5-dice': '&#xe994;',
		'rc-a5-pacman': '&#xe995;',
		'rc-a5-spades': '&#xe996;',
		'rc-a5-clubs': '&#xe997;',
		'rc-a5-diamonds': '&#xe998;',
		'rc-a5-bullhorn': '&#xe999;',
		'rc-a5-connection': '&#xe99a;',
		'rc-a5-podcast': '&#xe99b;',
		'rc-a5-feed': '&#xe99c;',
		'rc-a5-mic': '&#xe99d;',
		'rc-a5-book': '&#xe99e;',
		'rc-a5-books': '&#xe99f;',
		'rc-a5-library': '&#xe9a0;',
		'rc-a5-file-text': '&#xe9a1;',
		'rc-a5-profile': '&#xe9a2;',
		'rc-a5-file-empty': '&#xe9a3;',
		'rc-a5-files-empty': '&#xe9a4;',
		'rc-a5-file-text2': '&#xe9a5;',
		'rc-a5-file-picture': '&#xe9a6;',
		'rc-a5-file-music': '&#xe9a7;',
		'rc-a5-file-play': '&#xe9a8;',
		'rc-a5-file-video': '&#xe9a9;',
		'rc-a5-file-zip': '&#xe9aa;',
		'rc-a5-copy': '&#xe9ab;',
		'rc-a5-paste': '&#xe9ac;',
		'rc-a5-stack': '&#xe9ad;',
		'rc-a5-folder': '&#xe9ae;',
		'rc-a5-folder-open': '&#xe9af;',
		'rc-a5-folder-plus': '&#xe9b0;',
		'rc-a5-folder-minus': '&#xe9b1;',
		'rc-a5-folder-download': '&#xe9b2;',
		'rc-a5-folder-upload': '&#xe9b3;',
		'rc-a5-price-tag': '&#xe9b4;',
		'rc-a5-price-tags': '&#xe9b5;',
		'rc-a5-barcode': '&#xe9b6;',
		'rc-a5-qrcode': '&#xe9b7;',
		'rc-a5-ticket': '&#xe9b8;',
		'rc-a5-cart': '&#xe9b9;',
		'rc-a5-coin-dollar': '&#xe9ba;',
		'rc-a5-coin-euro': '&#xe9bb;',
		'rc-a5-coin-pound': '&#xe9bc;',
		'rc-a5-coin-yen': '&#xe9bd;',
		'rc-a5-credit-card': '&#xe9be;',
		'rc-a5-calculator': '&#xe9bf;',
		'rc-a5-lifebuoy': '&#xe9c0;',
		'rc-a5-phone': '&#xe9c1;',
		'rc-a5-phone-hang-up': '&#xe9c2;',
		'rc-a5-address-book': '&#xe9c3;',
		'rc-a5-envelop': '&#xe9c4;',
		'rc-a5-pushpin': '&#xe9c5;',
		'rc-a5-location': '&#xe9c6;',
		'rc-a5-location2': '&#xe9c7;',
		'rc-a5-compass': '&#xe9c8;',
		'rc-a5-compass2': '&#xe9c9;',
		'rc-a5-map': '&#xe9ca;',
		'rc-a5-map2': '&#xe9cb;',
		'rc-a5-history': '&#xe9cc;',
		'rc-a5-clock': '&#xe9cd;',
		'rc-a5-clock2': '&#xe9ce;',
		'rc-a5-alarm': '&#xe9cf;',
		'rc-a5-bell': '&#xe9d0;',
		'rc-a5-stopwatch': '&#xe9d1;',
		'rc-a5-calendar': '&#xe9d2;',
		'rc-a5-printer': '&#xe9d3;',
		'rc-a5-keyboard': '&#xe9d4;',
		'rc-a5-display': '&#xe9d5;',
		'rc-a5-laptop': '&#xe9d6;',
		'rc-a5-mobile': '&#xe9d7;',
		'rc-a5-mobile2': '&#xe9d8;',
		'rc-a5-tablet': '&#xe9d9;',
		'rc-a5-tv': '&#xe9da;',
		'rc-a5-drawer': '&#xe9db;',
		'rc-a5-drawer2': '&#xe9dc;',
		'rc-a5-box-add': '&#xe9dd;',
		'rc-a5-box-remove': '&#xe9de;',
		'rc-a5-download': '&#xe9df;',
		'rc-a5-upload': '&#xe9e0;',
		'rc-a5-floppy-disk': '&#xe9e1;',
		'rc-a5-drive': '&#xe9e2;',
		'rc-a5-database': '&#xe9e3;',
		'rc-a5-undo': '&#xe9e4;',
		'rc-a5-redo': '&#xe9e5;',
		'rc-a5-undo2': '&#xe9e6;',
		'rc-a5-redo2': '&#xe9e7;',
		'rc-a5-forward': '&#xe9e8;',
		'rc-a5-reply': '&#xe9e9;',
		'rc-a5-bubble': '&#xe9ea;',
		'rc-a5-bubbles': '&#xe9eb;',
		'rc-a5-bubbles2': '&#xe9ec;',
		'rc-a5-bubble2': '&#xe9ed;',
		'rc-a5-bubbles3': '&#xe9ee;',
		'rc-a5-bubbles4': '&#xe9ef;',
		'rc-a5-user': '&#xe9f0;',
		'rc-a5-users': '&#xe9f1;',
		'rc-a5-user-plus': '&#xe9f2;',
		'rc-a5-user-minus': '&#xe9f3;',
		'rc-a5-user-check': '&#xe9f4;',
		'rc-a5-user-tie': '&#xe9f5;',
		'rc-a5-quotes-left': '&#xe9f6;',
		'rc-a5-quotes-right': '&#xe9f7;',
		'rc-a5-hour-glass': '&#xe9f8;',
		'rc-a5-spinner': '&#xe9f9;',
		'rc-a5-spinner2': '&#xe9fa;',
		'rc-a5-spinner3': '&#xe9fb;',
		'rc-a5-spinner4': '&#xe9fc;',
		'rc-a5-spinner5': '&#xe9fd;',
		'rc-a5-spinner6': '&#xe9fe;',
		'rc-a5-spinner7': '&#xe9ff;',
		'rc-a5-spinner8': '&#xea00;',
		'rc-a5-spinner9': '&#xea01;',
		'rc-a5-spinner10': '&#xea02;',
		'rc-a5-spinner11': '&#xea03;',
		'rc-a5-binoculars': '&#xea04;',
		'rc-a5-search': '&#xea05;',
		'rc-a5-zoom-in': '&#xea06;',
		'rc-a5-zoom-out': '&#xea07;',
		'rc-a5-enlarge': '&#xea08;',
		'rc-a5-shrink': '&#xea09;',
		'rc-a5-enlarge2': '&#xea0a;',
		'rc-a5-shrink2': '&#xea0b;',
		'rc-a5-key': '&#xea0c;',
		'rc-a5-key2': '&#xea0d;',
		'rc-a5-lock': '&#xea0e;',
		'rc-a5-unlocked': '&#xea0f;',
		'rc-a5-wrench': '&#xea10;',
		'rc-a5-equalizer': '&#xea11;',
		'rc-a5-equalizer2': '&#xea12;',
		'rc-a5-cog': '&#xea13;',
		'rc-a5-cogs': '&#xea14;',
		'rc-a5-hammer': '&#xea15;',
		'rc-a5-magic-wand': '&#xea16;',
		'rc-a5-aid-kit': '&#xea17;',
		'rc-a5-bug': '&#xea18;',
		'rc-a5-pie-chart': '&#xea19;',
		'rc-a5-stats-dots': '&#xea1a;',
		'rc-a5-stats-bars': '&#xea1b;',
		'rc-a5-stats-bars2': '&#xea1c;',
		'rc-a5-trophy': '&#xea1d;',
		'rc-a5-gift': '&#xea1e;',
		'rc-a5-glass': '&#xea1f;',
		'rc-a5-glass2': '&#xea20;',
		'rc-a5-mug': '&#xea21;',
		'rc-a5-spoon-knife': '&#xea22;',
		'rc-a5-leaf': '&#xea23;',
		'rc-a5-rocket': '&#xea24;',
		'rc-a5-meter': '&#xea25;',
		'rc-a5-meter2': '&#xea26;',
		'rc-a5-hammer2': '&#xea27;',
		'rc-a5-fire': '&#xea28;',
		'rc-a5-lab': '&#xea29;',
		'rc-a5-magnet': '&#xea2a;',
		'rc-a5-bin': '&#xea2b;',
		'rc-a5-bin2': '&#xea2c;',
		'rc-a5-briefcase': '&#xea2d;',
		'rc-a5-airplane': '&#xea2e;',
		'rc-a5-truck': '&#xea2f;',
		'rc-a5-road': '&#xea30;',
		'rc-a5-accessibility': '&#xea31;',
		'rc-a5-target': '&#xea32;',
		'rc-a5-shield': '&#xea33;',
		'rc-a5-power': '&#xea34;',
		'rc-a5-switch': '&#xea35;',
		'rc-a5-power-cord': '&#xea36;',
		'rc-a5-clipboard': '&#xea37;',
		'rc-a5-list-numbered': '&#xea38;',
		'rc-a5-list': '&#xea39;',
		'rc-a5-list2': '&#xea3a;',
		'rc-a5-tree': '&#xea3b;',
		'rc-a5-menu': '&#xea3c;',
		'rc-a5-menu2': '&#xea3d;',
		'rc-a5-menu3': '&#xea3e;',
		'rc-a5-menu4': '&#xea3f;',
		'rc-a5-cloud': '&#xea40;',
		'rc-a5-cloud-download': '&#xea41;',
		'rc-a5-cloud-upload': '&#xea42;',
		'rc-a5-cloud-check': '&#xea43;',
		'rc-a5-download2': '&#xea44;',
		'rc-a5-upload2': '&#xea45;',
		'rc-a5-download3': '&#xea46;',
		'rc-a5-upload3': '&#xea47;',
		'rc-a5-sphere': '&#xea48;',
		'rc-a5-earth': '&#xea49;',
		'rc-a5-link': '&#xea4a;',
		'rc-a5-flag': '&#xea4b;',
		'rc-a5-attachment': '&#xea4c;',
		'rc-a5-eye': '&#xea4d;',
		'rc-a5-eye-plus': '&#xea4e;',
		'rc-a5-eye-minus': '&#xea4f;',
		'rc-a5-eye-blocked': '&#xea50;',
		'rc-a5-bookmark': '&#xea51;',
		'rc-a5-bookmarks': '&#xea52;',
		'rc-a5-sun': '&#xea53;',
		'rc-a5-contrast': '&#xea54;',
		'rc-a5-brightness-contrast': '&#xea55;',
		'rc-a5-star-empty': '&#xea56;',
		'rc-a5-star-half': '&#xea57;',
		'rc-a5-star-full': '&#xea58;',
		'rc-a5-heart': '&#xea59;',
		'rc-a5-heart-broken': '&#xea5a;',
		'rc-a5-man': '&#xea5b;',
		'rc-a5-woman': '&#xea5c;',
		'rc-a5-man-woman': '&#xea5d;',
		'rc-a5-happy': '&#xea5e;',
		'rc-a5-happy2': '&#xea5f;',
		'rc-a5-smile': '&#xea60;',
		'rc-a5-smile2': '&#xea61;',
		'rc-a5-tongue': '&#xea62;',
		'rc-a5-tongue2': '&#xea63;',
		'rc-a5-sad': '&#xea64;',
		'rc-a5-sad2': '&#xea65;',
		'rc-a5-wink': '&#xea66;',
		'rc-a5-wink2': '&#xea67;',
		'rc-a5-grin': '&#xea68;',
		'rc-a5-grin2': '&#xea69;',
		'rc-a5-cool': '&#xea6a;',
		'rc-a5-cool2': '&#xea6b;',
		'rc-a5-angry': '&#xea6c;',
		'rc-a5-angry2': '&#xea6d;',
		'rc-a5-evil': '&#xea6e;',
		'rc-a5-evil2': '&#xea6f;',
		'rc-a5-shocked': '&#xea70;',
		'rc-a5-shocked2': '&#xea71;',
		'rc-a5-baffled': '&#xea72;',
		'rc-a5-baffled2': '&#xea73;',
		'rc-a5-confused': '&#xea74;',
		'rc-a5-confused2': '&#xea75;',
		'rc-a5-neutral': '&#xea76;',
		'rc-a5-neutral2': '&#xea77;',
		'rc-a5-hipster': '&#xea78;',
		'rc-a5-hipster2': '&#xea79;',
		'rc-a5-wondering': '&#xea7a;',
		'rc-a5-wondering2': '&#xea7b;',
		'rc-a5-sleepy': '&#xea7c;',
		'rc-a5-sleepy2': '&#xea7d;',
		'rc-a5-frustrated': '&#xea7e;',
		'rc-a5-frustrated2': '&#xea7f;',
		'rc-a5-crying': '&#xea80;',
		'rc-a5-crying2': '&#xea81;',
		'rc-a5-point-up': '&#xea82;',
		'rc-a5-point-right': '&#xea83;',
		'rc-a5-point-down': '&#xea84;',
		'rc-a5-point-left': '&#xea85;',
		'rc-a5-warning': '&#xea86;',
		'rc-a5-notification': '&#xea87;',
		'rc-a5-question': '&#xea88;',
		'rc-a5-plus': '&#xea89;',
		'rc-a5-minus': '&#xea8a;',
		'rc-a5-info': '&#xea8b;',
		'rc-a5-cancel-circle': '&#xea8c;',
		'rc-a5-blocked': '&#xea8d;',
		'rc-a5-cross': '&#xea8e;',
		'rc-a5-checkmark': '&#xea8f;',
		'rc-a5-checkmark2': '&#xea90;',
		'rc-a5-spell-check': '&#xea91;',
		'rc-a5-enter': '&#xea92;',
		'rc-a5-exit': '&#xea93;',
		'rc-a5-play2': '&#xea94;',
		'rc-a5-pause': '&#xea95;',
		'rc-a5-stop': '&#xea96;',
		'rc-a5-previous': '&#xea97;',
		'rc-a5-next': '&#xea98;',
		'rc-a5-backward': '&#xea99;',
		'rc-a5-forward2': '&#xea9a;',
		'rc-a5-play3': '&#xea9b;',
		'rc-a5-pause2': '&#xea9c;',
		'rc-a5-stop2': '&#xea9d;',
		'rc-a5-backward2': '&#xea9e;',
		'rc-a5-forward3': '&#xea9f;',
		'rc-a5-first': '&#xeaa0;',
		'rc-a5-last': '&#xeaa1;',
		'rc-a5-previous2': '&#xeaa2;',
		'rc-a5-next2': '&#xeaa3;',
		'rc-a5-eject': '&#xeaa4;',
		'rc-a5-volume-high': '&#xeaa5;',
		'rc-a5-volume-medium': '&#xeaa6;',
		'rc-a5-volume-low': '&#xeaa7;',
		'rc-a5-volume-mute': '&#xeaa8;',
		'rc-a5-volume-mute2': '&#xeaa9;',
		'rc-a5-volume-increase': '&#xeaaa;',
		'rc-a5-volume-decrease': '&#xeaab;',
		'rc-a5-loop': '&#xeaac;',
		'rc-a5-loop2': '&#xeaad;',
		'rc-a5-infinite': '&#xeaae;',
		'rc-a5-shuffle': '&#xeaaf;',
		'rc-a5-arrow-up-left': '&#xeab0;',
		'rc-a5-arrow-up': '&#xeab1;',
		'rc-a5-arrow-up-right': '&#xeab2;',
		'rc-a5-arrow-right': '&#xeab3;',
		'rc-a5-arrow-down-right': '&#xeab4;',
		'rc-a5-arrow-down': '&#xeab5;',
		'rc-a5-arrow-down-left': '&#xeab6;',
		'rc-a5-arrow-left': '&#xeab7;',
		'rc-a5-arrow-up-left2': '&#xeab8;',
		'rc-a5-arrow-up2': '&#xeab9;',
		'rc-a5-arrow-up-right2': '&#xeaba;',
		'rc-a5-arrow-right2': '&#xeabb;',
		'rc-a5-arrow-down-right2': '&#xeabc;',
		'rc-a5-arrow-down2': '&#xeabd;',
		'rc-a5-arrow-down-left2': '&#xeabe;',
		'rc-a5-arrow-left2': '&#xeabf;',
		'rc-a5-circle-up': '&#xeac0;',
		'rc-a5-circle-right': '&#xeac1;',
		'rc-a5-circle-down': '&#xeac2;',
		'rc-a5-circle-left': '&#xeac3;',
		'rc-a5-tab': '&#xeac4;',
		'rc-a5-move-up': '&#xeac5;',
		'rc-a5-move-down': '&#xeac6;',
		'rc-a5-sort-alpha-asc': '&#xeac7;',
		'rc-a5-sort-alpha-desc': '&#xeac8;',
		'rc-a5-sort-numeric-asc': '&#xeac9;',
		'rc-a5-sort-numberic-desc': '&#xeaca;',
		'rc-a5-sort-amount-asc': '&#xeacb;',
		'rc-a5-sort-amount-desc': '&#xeacc;',
		'rc-a5-command': '&#xeacd;',
		'rc-a5-shift': '&#xeace;',
		'rc-a5-ctrl': '&#xeacf;',
		'rc-a5-opt': '&#xead0;',
		'rc-a5-checkbox-checked': '&#xead1;',
		'rc-a5-checkbox-unchecked': '&#xead2;',
		'rc-a5-radio-checked': '&#xead3;',
		'rc-a5-radio-checked2': '&#xead4;',
		'rc-a5-radio-unchecked': '&#xead5;',
		'rc-a5-crop': '&#xead6;',
		'rc-a5-make-group': '&#xead7;',
		'rc-a5-ungroup': '&#xead8;',
		'rc-a5-scissors': '&#xead9;',
		'rc-a5-filter': '&#xeada;',
		'rc-a5-font': '&#xeadb;',
		'rc-a5-ligature': '&#xeadc;',
		'rc-a5-ligature2': '&#xeadd;',
		'rc-a5-text-height': '&#xeade;',
		'rc-a5-text-width': '&#xeadf;',
		'rc-a5-font-size': '&#xeae0;',
		'rc-a5-bold': '&#xeae1;',
		'rc-a5-underline': '&#xeae2;',
		'rc-a5-italic': '&#xeae3;',
		'rc-a5-strikethrough': '&#xeae4;',
		'rc-a5-omega': '&#xeae5;',
		'rc-a5-sigma': '&#xeae6;',
		'rc-a5-page-break': '&#xeae7;',
		'rc-a5-superscript': '&#xeae8;',
		'rc-a5-subscript': '&#xeae9;',
		'rc-a5-superscript2': '&#xeaea;',
		'rc-a5-subscript2': '&#xeaeb;',
		'rc-a5-text-color': '&#xeaec;',
		'rc-a5-pagebreak': '&#xeaed;',
		'rc-a5-clear-formatting': '&#xeaee;',
		'rc-a5-table': '&#xeaef;',
		'rc-a5-table2': '&#xeaf0;',
		'rc-a5-insert-template': '&#xeaf1;',
		'rc-a5-pilcrow': '&#xeaf2;',
		'rc-a5-ltr': '&#xeaf3;',
		'rc-a5-rtl': '&#xeaf4;',
		'rc-a5-section': '&#xeaf5;',
		'rc-a5-paragraph-left': '&#xeaf6;',
		'rc-a5-paragraph-center': '&#xeaf7;',
		'rc-a5-paragraph-right': '&#xeaf8;',
		'rc-a5-paragraph-justify': '&#xeaf9;',
		'rc-a5-indent-increase': '&#xeafa;',
		'rc-a5-indent-decrease': '&#xeafb;',
		'rc-a5-share': '&#xeafc;',
		'rc-a5-new-tab': '&#xeafd;',
		'rc-a5-embed': '&#xeafe;',
		'rc-a5-embed2': '&#xeaff;',
		'rc-a5-terminal': '&#xeb00;',
		'rc-a5-share2': '&#xeb01;',
		'rc-a5-mail': '&#xeb02;',
		'rc-a5-mail2': '&#xeb03;',
		'rc-a5-mail3': '&#xeb04;',
		'rc-a5-mail4': '&#xeb05;',
		'rc-a5-amazon': '&#xeb06;',
		'rc-a5-google': '&#xeb07;',
		'rc-a5-google2': '&#xeb08;',
		'rc-a5-google3': '&#xeb09;',
		'rc-a5-google-plus': '&#xeb0a;',
		'rc-a5-google-plus2': '&#xeb0b;',
		'rc-a5-google-plus3': '&#xeb0c;',
		'rc-a5-hangouts': '&#xeb0d;',
		'rc-a5-google-drive': '&#xeb0e;',
		'rc-a5-facebook': '&#xeb0f;',
		'rc-a5-facebook2': '&#xeb10;',
		'rc-a5-instagram': '&#xeb11;',
		'rc-a5-whatsapp': '&#xeb12;',
		'rc-a5-spotify': '&#xeb13;',
		'rc-a5-telegram': '&#xeb14;',
		'rc-a5-twitter': '&#xeb15;',
		'rc-a5-vine': '&#xeb16;',
		'rc-a5-vk': '&#xeb17;',
		'rc-a5-renren': '&#xeb18;',
		'rc-a5-sina-weibo': '&#xeb19;',
		'rc-a5-rss': '&#xeb1a;',
		'rc-a5-rss2': '&#xeb1b;',
		'rc-a5-youtube': '&#xeb1c;',
		'rc-a5-youtube2': '&#xeb1d;',
		'rc-a5-twitch': '&#xeb1e;',
		'rc-a5-vimeo': '&#xeb1f;',
		'rc-a5-vimeo2': '&#xeb20;',
		'rc-a5-lanyrd': '&#xeb21;',
		'rc-a5-flickr': '&#xeb22;',
		'rc-a5-flickr2': '&#xeb23;',
		'rc-a5-flickr3': '&#xeb24;',
		'rc-a5-flickr4': '&#xeb25;',
		'rc-a5-dribbble': '&#xeb26;',
		'rc-a5-behance': '&#xeb27;',
		'rc-a5-behance2': '&#xeb28;',
		'rc-a5-deviantart': '&#xeb29;',
		'rc-a5-500px': '&#xeb2a;',
		'rc-a5-steam': '&#xeb2b;',
		'rc-a5-steam2': '&#xeb2c;',
		'rc-a5-dropbox': '&#xeb2d;',
		'rc-a5-onedrive': '&#xeb2e;',
		'rc-a5-github': '&#xeb2f;',
		'rc-a5-npm': '&#xeb30;',
		'rc-a5-basecamp': '&#xeb31;',
		'rc-a5-trello': '&#xeb32;',
		'rc-a5-wordpress': '&#xeb33;',
		'rc-a5-joomla': '&#xeb34;',
		'rc-a5-ello': '&#xeb35;',
		'rc-a5-blogger': '&#xeb36;',
		'rc-a5-blogger2': '&#xeb37;',
		'rc-a5-tumblr': '&#xeb38;',
		'rc-a5-tumblr2': '&#xeb39;',
		'rc-a5-yahoo': '&#xeb3a;',
		'rc-a5-yahoo2': '&#xeb3b;',
		'rc-a5-tux': '&#xeb3c;',
		'rc-a5-appleinc': '&#xeb3d;',
		'rc-a5-finder': '&#xeb3e;',
		'rc-a5-android': '&#xeb3f;',
		'rc-a5-windows': '&#xeb40;',
		'rc-a5-windows8': '&#xeb41;',
		'rc-a5-soundcloud': '&#xeb42;',
		'rc-a5-soundcloud2': '&#xeb43;',
		'rc-a5-skype': '&#xeb44;',
		'rc-a5-reddit': '&#xeb45;',
		'rc-a5-hackernews': '&#xeb46;',
		'rc-a5-wikipedia': '&#xeb47;',
		'rc-a5-linkedin': '&#xeb48;',
		'rc-a5-linkedin2': '&#xeb49;',
		'rc-a5-lastfm': '&#xeb4a;',
		'rc-a5-lastfm2': '&#xeb4b;',
		'rc-a5-delicious': '&#xeb4c;',
		'rc-a5-stumbleupon': '&#xeb4d;',
		'rc-a5-stumbleupon2': '&#xeb4e;',
		'rc-a5-stackoverflow': '&#xeb4f;',
		'rc-a5-pinterest': '&#xeb50;',
		'rc-a5-pinterest2': '&#xeb51;',
		'rc-a5-xing': '&#xeb52;',
		'rc-a5-xing2': '&#xeb53;',
		'rc-a5-flattr': '&#xeb54;',
		'rc-a5-foursquare': '&#xeb55;',
		'rc-a5-yelp': '&#xeb56;',
		'rc-a5-paypal': '&#xeb57;',
		'rc-a5-chrome': '&#xeb58;',
		'rc-a5-firefox': '&#xeb59;',
		'rc-a5-IE': '&#xeb5a;',
		'rc-a5-edge': '&#xeb5b;',
		'rc-a5-safari': '&#xeb5c;',
		'rc-a5-opera': '&#xeb5d;',
		'rc-a5-file-pdf': '&#xeb5e;',
		'rc-a5-file-openoffice': '&#xeb5f;',
		'rc-a5-file-word': '&#xeb60;',
		'rc-a5-file-excel': '&#xeb61;',
		'rc-a5-libreoffice': '&#xeb62;',
		'rc-a5-html-five': '&#xeb63;',
		'rc-a5-html-five2': '&#xeb64;',
		'rc-a5-css3': '&#xeb65;',
		'rc-a5-git': '&#xeb66;',
		'rc-a5-codepen': '&#xeb67;',
		'rc-a5-svg': '&#xeb68;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/rc-a5-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
