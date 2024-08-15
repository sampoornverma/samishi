var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var flag = 1;
var t = 0;
var imageIndex = 0;
var len = imageArray.length; // Assuming imageArray and txtArray are defined
var ok = 0;

function showImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function play() {
    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
    }
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    if (t == 0) {
        setInterval(showImage, 4500); // 2.5 seconds interval for image slideshow
    }
    t++;
}

function preshowImage() {
    document.getElementById("imgTxt").style.opacity = 0;
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function buttonFadeIn() {
    if (btnVal < 1) {
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    } else {
        clearInterval(buttonInterval);
        if (ok == 3) {
            ok += 1;
        }
    }
}

function event() {
    // Slow down the initial image preshow (e.g., 2.5 seconds)
    showImageInterval = setInterval(preshowImage, 4500); 

    imgInterval = setInterval(function () {
        if (ok == 3) {
            setTimeout(function () {
                buttonInterval = setInterval(buttonFadeIn, 50); // Button fade in every 50ms
            }, 1500); // Delay before button starts to fade in
            clearInterval(imgInterval);
        }
    }, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
