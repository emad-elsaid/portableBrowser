var cmdLine = window.arguments[0];
cmdLine = cmdLine.QueryInterface(Components.interfaces.nsICommandLine);
var filepath = cmdLine.getArgument(0);

function changeTitle(){
	var browser = document.getElementById("browser");
	document.getElementById("main").setAttribute("title",browser.contentTitle);
}
window.setInterval("changeTitle()", 1000);

function setURL(){
	document.getElementById("browser").setAttribute("src", filepath);
}
window.setTimeout("setURL()", 1000);