var cmdLine = window.arguments[0];
cmdLine = cmdLine.QueryInterface(Components.interfaces.nsICommandLine);
var filepath = cmdLine.getArgument(0);

function changeTitle(){
	var browser = document.getElementById("browser");
	document.getElementById("main").setAttribute("title",browser.contentTitle);
}

function Init(){

	if( filepath==undefined )
		filepath = "about:blank";
	document.getElementById("browser").setAttribute("src", filepath);
}