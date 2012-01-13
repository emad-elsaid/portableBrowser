var cmdLine = window.arguments[0];
cmdLine = cmdLine.QueryInterface(Components.interfaces.nsICommandLine);
var filepath = cmdLine.getArgument(0);

function changeTitle(){
	var browser = document.getElementById("browser");
	document.getElementById("main").setAttribute("title",browser.contentTitle);
}

function Init(){

	if( filepath==undefined ) {
		filepath = "about:blank";
	} else {
		document.getElementById("addressbar").hidden = true;
		document.getElementById("browser").loadURI(filepath);
	}
	setInterval('changeTitle()',1000);
}

function gotoURL(event){

	if(event.keyCode==13){
		var addressBar = document.getElementById("addressbar");
		var browser = document.getElementById("browser");
		browser.loadURI( addressBar.value );
	}
	
}