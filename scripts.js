const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center  = document.querySelector(".center");
// console.log(window.getComputedStyle(red).backgroundColor);
const BGcolor = (selectedcolor)=>{
    return window.getComputedStyle(selectedcolor).backgroundColor;
}
// var color = BGcolor(red);
// red.addEventListener("click",()=>{
//     center.style.background = color;
// });


const fillcolor = (element,color)=>{
   return element.addEventListener("mouseenter",()=>{
    center.style.background = color;
});
};

fillcolor(red,BGcolor(red));
fillcolor(cyan,BGcolor(cyan));
fillcolor(violet,BGcolor(violet));   
fillcolor(orange,BGcolor(orange));
fillcolor(pink,BGcolor(pink));



