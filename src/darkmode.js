// darkmode // new
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
// 
// 
const userTheme = localStorage.getItem("Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// icon 
console.log(systemTheme)
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};
// 
const themeCheck = () => {
    if (userTheme == "dark") {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
    } else {
        sunIcon.classList.add("display-none");
    }
};
// 
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("Theme", "light");
        iconToggle();
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("Theme", "dark");
        iconToggle();
    }
};
themeCheck();
// 
sunIcon.addEventListener("click", () => {

    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();

});
//

themeCheck();