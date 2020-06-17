function sendRequest(msg) {
    document.getElementById("response").innerHTML = "";
    const objJSON = {
        "msg": msg
    };
    const strJSON = encodeURIComponent(JSON.stringify(objJSON));
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "process?strJSON=" + strJSON, true);

    const output = document.getElementById("response");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE
            && xmlhttp.status == 200) {
            output.innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.send(null);
}

window.addEventListener('load', function() {
    const btnHi = document.getElementById("hi");
    const btnBye = document.getElementById("bye");
    btnHi.addEventListener('click', function() {
        sendRequest(btnHi.innerHTML);
    }, false);
    btnBye.addEventListener('click', function() {
        sendRequest(btnBye.innerHTML);
    }, false);
});