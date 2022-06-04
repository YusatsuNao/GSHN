var time;
var color;
switch (new Date().getHours()) {
	case 0:
		time = "It's already midnight, go sleep already!";
		break;
	case 1:
		time = "Really?";
		break;
	case 2:
		time = "it's 2 am";
		color = "blue;"
		break;
	case 3:
		time = "it's 3 am";
		color = "red";
		break;
	case 4:
		time = "it's 4 am";
		break;
	case 5:
		time = "it's 5 am";
		break;
	case 6:
		time = "it's 6 am";
		break;
	case 7:
		time = "it's 7 am";
		break;
	case 8:
		time = "it's 8 am";
		break;
	case 9:
		time = "it's 9 am";
		break;
	case 10:
		time = "it's 10 am";
		break;
	case 11:
		time = "it's 11 am";
		break;
	case 12:
		time = "it's already 12 pm, let's go eat then";
		break;
	case 13:
		time = "it's 1 pm, is there any a problem?";
		break;
	case 14:
		time = "it's 2 pm";
		break;
	case 15:
		time = "it's 3 pm";
		break;
	case 16:
		time = "it's 4 pm";
		break;
	case 17:
		time = "it's 5 pm";
		break;
	case 18:
		time = "it's 6 pm";
		break;
	case 19:
		time = "it's 7 pm, also it's a looooong text, just ignore it. okay? way too lang that the space is not fit anymore";
		document.write('<style type="text/css">.character_message { font-size: 14px; }</style>');
		break;
	case 20:
		time = "it's 8 pm";
		break;
	case 21:
		time = "it's 9 pm";
		break;
	case 22:
		time = "it's 10 pm, go sleep";
		break;
	case 23:
		time = "you done already?";
		break;
}
document.getElementById("waifu_message").innerHTML = time;
document.getElementById("waifu_message").style.color = color;