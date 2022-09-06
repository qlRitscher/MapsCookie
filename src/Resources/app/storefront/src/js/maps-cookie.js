import {COOKIE_CONFIGURATION_UPDATE} from 'src/plugin/cookie/cookie-configuration.plugin';

toggleMaps();

$("[data-map-load]").click((e) => {
    setCookie("maps-cookie", 1, 7);
    toggleMaps();
    location.reload();
});

document.$emitter.subscribe(COOKIE_CONFIGURATION_UPDATE, eventCallback);

function eventCallback(updatedCookies) {
    if (typeof updatedCookies.detail['maps-cookie'] !== 'undefined') {
        location.reload();
    }
}

function toggleMaps() {
    if (getCookie("maps-cookie")) {
        $(".maps-cookie-maps").each(function(){
            $(this).html($(this).find(" .template").text());
        });
        $(".maps-cookie-no-maps").hide();
    } else {
        $(".maps-cookie-maps").html("");
        $(".maps-cookie-no-maps").show();
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
