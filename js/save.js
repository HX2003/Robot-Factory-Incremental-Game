function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
}
function setLocalStorage(name,value){
	localStorage.setItem(name,LZString.compressToBase64(JSON.stringify(value)));
}
function isCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return 1;
        }
    }
    return 0;	
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function deleteCookie(delcookie) {
	document.cookie = delcookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function setCookieJson(name, value) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 99999);
	 
	var cookie = [name, '=',  LZString.compressToBase64(JSON.stringify(value)),';'].join('');
	document.cookie = cookie + "expires=" + exdate + ";";
}
 
function cookietoviarble(cname){
	 newcookie = getCookie(cname);
	 eval(cname + "=" + newcookie + ";");
}

function doCookie(cname,initial) {
    thecookie = getCookie(cname);
    if (thecookie != "") {
  cookietoviarble(cname);
    } else {
     setCookie(cname, initial);
	 cookietoviarble(cname);
        }
    }
function setVar(variable,value){
	if(variable !== "undefined"){
		eval(""+variable+" = "+value+";");
	}
	
}
function deleteallcookies(){
    var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){   
            var spcook =  cookies[i].split("=");
            document.cookie = spcook[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";                                
        }
	}
function deleteallLocalStorage(){
	localStorage.clear();
}
function hardreset(){
//	if(storageAvailable("localStorage")){
		deleteallLocalStorage();
//	}else{
		deleteallcookies();
//	}
	location.reload();
}