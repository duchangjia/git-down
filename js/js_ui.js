var DocumentInit = {
	
	//基础初始化
	BasicInit : function() {
		DocumentInit.mainMenuSwitch();
	},
	
	mainMenuSwitch:function() {
		$("#header_menu .main_menu_switch").click( function(){$("#main_menu").slideToggle("fast"); return false; });
	}

	
};

$(document).ready(function() {
	DocumentInit.BasicInit();
});
