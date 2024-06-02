const skillTitlePentesting = document.getElementById("skill-penetrationtesting");
const skillTitlePentestingPlus = document.getElementById("skill-penetrationtesting-plus");
const skillPentestingDesc = document.getElementById("skill-penetrationtesting-desc");
let skillPentestingOpen = false;


let skillPentesting = function() {
    if (skillPentestingOpen) {
        skillPentestingOpen = false;
        skillTitlePentesting.classList.remove("is-open");
        skillTitlePentestingPlus.innerHTML = "+";
        skillPentestingDesc.style.display = "none";
    } else {
        skillPentestingOpen = true;
        skillTitlePentesting.classList.add("is-open");
        skillTitlePentestingPlus.innerHTML = "-";
        skillPentestingDesc.style.display = "flex";
    }
}

skillTitlePentesting.addEventListener("click", skillPentesting);


const skillTitleProgramming = document.getElementById("skill-programming");
const skillTitleProgrammingPlus = document.getElementById("skill-programming-plus");
const skillProgrammingDesc = document.getElementById("skill-programming-desc");
let skillProgrammingOpen = false;


let skillProgramming = function() {
    if (skillProgrammingOpen) {
        skillProgrammingOpen = false;
        skillTitleProgramming.classList.remove("is-open");
        skillTitleProgrammingPlus.innerHTML = "+";
        skillProgrammingDesc.style.display = "none";
    } else {
        skillProgrammingOpen = true;
        skillTitleProgramming.classList.add("is-open");
        skillTitleProgrammingPlus.innerHTML = "-";
        skillProgrammingDesc.style.display = "flex";
    }
}

skillTitleProgramming.addEventListener("click", skillProgramming);


const skillTitleLinux = document.getElementById("skill-linux");
const skillTitleLinuxPlus = document.getElementById("skill-linux-plus");
const skillLinuxDesc = document.getElementById("skill-linux-desc");
let skillLinuxOpen = false;


let skillLinux = function() {
    if (skillLinuxOpen) {
        skillLinuxOpen = false;
        skillTitleLinux.classList.remove("is-open");
        skillTitleLinuxPlus.innerHTML = "+";
        skillLinuxDesc.style.display = "none";
    } else {
        skillLinuxOpen = true;
        skillTitleLinux.classList.add("is-open");
        skillTitleLinuxPlus.innerHTML = "-";
        skillLinuxDesc.style.display = "flex";
    }
}

skillTitleLinux.addEventListener("click", skillLinux);


const skillTitleWindows = document.getElementById("skill-windows");
const skillTitleWindowsPlus = document.getElementById("skill-windows-plus");
const skillWindowsDesc = document.getElementById("skill-windows-desc");
let skillWindowsOpen = false;


let skillWindows = function() {
    if (skillWindowsOpen) {
        skillWindowsOpen = false;
        skillTitleWindows.classList.remove("is-open");
        skillTitleWindowsPlus.innerHTML = "+";
        skillWindowsDesc.style.display = "none";
    } else {
        skillWindowsOpen = true;
        skillTitleWindows.classList.add("is-open");
        skillTitleWindowsPlus.innerHTML = "-";
        skillWindowsDesc.style.display = "flex";
    }
}

skillTitleWindows.addEventListener("click", skillWindows);

const skillTitleAd = document.getElementById("skill-ad");
const skillTitleAdPlus = document.getElementById("skill-ad-plus");
const skillAdDesc = document.getElementById("skill-ad-desc");
let skillAdOpen = false;


let skillAd = function() {
    if (skillAdOpen) {
        skillAdOpen = false;
        skillTitleAd.classList.remove("is-open");
        skillTitleAdPlus.innerHTML = "+";
        skillAdDesc.style.display = "none";
    } else {
        skillAdOpen = true;
        skillTitleAd.classList.add("is-open");
        skillTitleAdPlus.innerHTML = "-";
        skillAdDesc.style.display = "flex";
    }
}

skillTitleAd.addEventListener("click", skillAd);


const skillTitleMac = document.getElementById("skill-mac");
const skillTitleMacPlus = document.getElementById("skill-mac-plus");
const skillMacDesc = document.getElementById("skill-mac-desc");
let skillMacOpen = false;


let skillMac = function() {
    if (skillMacOpen) {
        skillMacOpen = false;
        skillTitleMac.classList.remove("is-open");
        skillTitleMacPlus.innerHTML = "+";
        skillMacDesc.style.display = "none";
    } else {
        skillMacOpen = true;
        skillTitleMac.classList.add("is-open");
        skillTitleMacPlus.innerHTML = "-";
        skillMacDesc.style.display = "flex";
    }
}

skillTitleMac.addEventListener("click", skillMac);


const skillTitleNetwork = document.getElementById("skill-network");
const skillTitleNetworkPlus = document.getElementById("skill-network-plus");
const skillNetworkDesc = document.getElementById("skill-network-desc");
let skillNetworkOpen = false;


let skillNetwork = function() {
    if (skillNetworkOpen) {
        skillNetworkOpen = false;
        skillTitleNetwork.classList.remove("is-open");
        skillTitleNetworkPlus.innerHTML = "+";
        skillNetworkDesc.style.display = "none";
    } else {
        skillNetworkOpen = true;
        skillTitleNetwork.classList.add("is-open");
        skillTitleNetworkPlus.innerHTML = "-";
        skillNetworkDesc.style.display = "flex";
    }
}

skillTitleNetwork.addEventListener("click", skillNetwork);


const skillButton = document.getElementById("close-skills");
let closeAllSkills = function() {
    skillPentestingOpen = true;
    skillPentesting();

    skillProgrammingOpen = true;
    skillProgramming();

    skillLinuxOpen = true;
    skillLinux();

    skillWindowsOpen = true;
    skillWindows();

    skillAdOpen = true;
    skillAd();

    skillMacOpen = true;
    skillMac();

    skillNetworkOpen = true;
    skillNetwork();
}

skillButton.addEventListener("click", closeAllSkills);

const email = document.getElementById("email");


let copyEmail = function() {
    const textToCopy = "lucas@lucas-pettersson.eu";

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Copied the value: " + textToCopy);
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    } else {
        // Fallback method using a temporary input element
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
            document.execCommand("copy");
            alert("Copied the value: " + textToCopy);
        } catch (err) {
            console.error("Failed to copy text using fallback: ", err);
        }
        document.body.removeChild(tempInput);
    }
}


email.addEventListener("click", copyEmail);
