const darkSwitch = document.getElementById("darkSwitch");
const darkSwitchXXL = document.getElementById("darkSwitchXXL");

const bgCollapse = document.querySelector(".bg-light");
const navbar = document.querySelector(".navbar");

const linkCadastrar = document.querySelector(".h1");
const linkCadastrarMd = document.querySelector(".link-md");

const buttonSearch = document.querySelector(".btn");

const textLogo = document.querySelector(".text-logo");



darkSwitch.addEventListener("change", ()=>{
    
    document.body.classList.toggle("dark-mode")

    bgCollapse.classList.toggle("bg-dark");
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-dark");
    linkCadastrar.classList.toggle("text-white");
    linkCadastrarMd.classList.toggle("text-white");
    buttonSearch.classList.toggle("btn-outline-light");
    

})

darkSwitchXXL.addEventListener("change", ()=>{
    
    document.body.classList.toggle("dark-mode")

    bgCollapse.classList.toggle("bg-dark");
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-dark");
    linkCadastrar.classList.toggle("text-white");
    linkCadastrarMd.classList.toggle("text-white");
    buttonSearch.classList.toggle("btn-outline-light");
    textLogo.classList.toggle("text-white");
    

})




