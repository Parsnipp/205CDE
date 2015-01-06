/**
* Created with 205CDE.
* User: Parsnipp
* Date: 2014-12-03
* Time: 09:06 AM
* To change this template use Tools | Templates.
*/

define(function window_onload() {
    window.addEventListener("scroll",navbar_reset_top,false);
});

define(function navbar_reset_top() {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>navbar_top&&navbar.className==="nav-move") {
        document.getElementById("navbar").className="nav-fixed";
    }
    else if(scrollTop<navbar_top&&navbar.className==="nav-fixed") {
        document.getElementById("navbar").className="nav-move";
    }
});