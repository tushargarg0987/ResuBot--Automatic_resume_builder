console.log("ON");

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let weAddButtonOb = document.getElementById("toAddWE");
    let weOb = document.getElementById("we");

    weOb.insertBefore(newNode, weAddButtonOb.nextElementSibling);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let aqAddButtonOb = document.getElementById("toAddAQ");
    let aqOb = document.getElementById("aq");

    aqOb.insertBefore(newNode, aqAddButtonOb.nextElementSibling);
}

function addNewSkillField() {
    console.log("add skill")
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let aqAddButtonOb = document.getElementById("toAddSkill");
    let aqOb = document.getElementById("skill");

    aqOb.insertBefore(newNode, aqAddButtonOb.nextElementSibling);
}

function addNewCCAField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("CCAfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let aqAddButtonOb = document.getElementById("toAddCCA");
    let aqOb = document.getElementById("cca");

    aqOb.insertBefore(newNode, aqAddButtonOb.nextElementSibling);
}

// Generating CV

function generateCV() {
    let FnameField = document.getElementById("FnameField").value;
    let LnameField = document.getElementById("LnameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = (FnameField + LnameField);
    // console.log(nameField);
    document.getElementById("nameT2").innerHTML = (FnameField + LnameField);
    document.getElementById("nameT22").innerHTML = (FnameField + LnameField);
    document.getElementById("contactT").innerHTML = `+91 ${document.getElementById("contactField").value
        }`;
    document.getElementById("contactT2").innerHTML = `+91 ${document.getElementById("contactField").value
        }`;
    document.getElementById("addressT").innerHTML =
        document.getElementById("addressField").value;
    document.getElementById("addressT2").innerHTML =
        document.getElementById("addressField").value;
    document.getElementById("objectiveT").innerHTML =
        document.getElementById("objectiveField").value;
    document.getElementById("objectiveT2").innerHTML =
        document.getElementById("objectiveField").value;
    document.getElementById("link1").innerHTML =
        document.getElementById("linkedField").value;
    document.getElementById("link1T2").innerHTML =
        document.getElementById("linkedField").value;
    document.getElementById("link2").innerHTML =
        document.getElementById("gitField").value;
    document.getElementById("link2T2").innerHTML =
        document.getElementById("gitField").value;

    let wes = document.getElementsByClassName("wefield");

    let str = "";
    for (let e of wes) {
        if (e.textLength > 0) {
            str = str + `<li> ${e.value} </li>`;
        }
    }
    document.getElementById("weT").innerHTML = str;
    document.getElementById("weT2").innerHTML = str;

    let skills = document.getElementsByClassName("skillField");

    let str2 = "";
    for (let e of skills) {
        if (e.textLength > 0) {
            str2 = str2 + `<li> ${e.value} </li>`;
        }
    }
    document.getElementById("skillT").innerHTML = str2;
    document.getElementById("skillT2").innerHTML = str2;

    let aqs = document.getElementsByClassName("aqField");

    let str3 = "";
    for (let e of aqs) {
        if (e.textLength > 0) {
            str3 = str3 + `<li> ${e.value} </li>`;
        }
    }
    document.getElementById("aqT").innerHTML = str3;
    document.getElementById("aqT2").innerHTML = str3;

    document.getElementById("cv-form").classList.add("hide");
    document.getElementById("selectTemp").classList.remove("hide");
}

function temp1() {
    document.getElementById("selectTemp").classList.add("hide");
    document.getElementById("cv-template").classList.remove("hide");
}

function temp2() {
    document.getElementById("selectTemp").classList.add("hide");
    document.getElementById("cv-template2").classList.remove("hide");
}

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
