const links = document.querySelectorAll(".topic-sidebar #topic-sb-ul li");
const sections = document.querySelectorAll("section");
const authorBtn = document.querySelectorAll("#menu-lists li")[0];
const refBtn = document.querySelectorAll("#menu-lists li")[1];
const showDevInfoBtn = document.querySelectorAll("#menu-lists li")[2];
const menuBtn = document.querySelector("#menu-btn");
const icon = document.querySelector(".fa");
const navLists = document.querySelector("#menu-lists");
const closeModalBtn = document.querySelector("#close-modal-btn");
const modal = document.querySelector("#modal");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const authors = [
    {
        name: "Joshua Encabo",
        email: "encabojoshua0301@gmail.com",
        number: "09923529909",
        img_url: "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/332130174_869295147635436_1553797012345540329_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeECmUN_wljPwQiitVNJOS5a0aKjqYtm49_RoqOpi2bj3yhUp9alUdAz6lmF6b37U83sufyE7D1NVBcmD5lODpiZ&_nc_ohc=Z2j6Ust8YRwAX_ZDSy9&_nc_ht=scontent.fceb1-2.fna&oh=00_AfCNaPSvlbB4b45vOx8MNA3QFNentTKCH9OCyM03y_F83Q&oe=64641C90"
    },
    {
        name: "Kyle S. Ibarra",
        email: "ulysseskyleibarra@gmail.",
        number: "09514505051",
        img_url: "https://scontent.fceb1-1.fna.fbcdn.net/v/t1.15752-9/346106528_1329101451291351_3749078315365722922_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFvME-x1RcoSk-RlNl-hb-In-1cYxegwtef7VxjF6DC1wpqAZ5D-RTkTxsWrdDXxWKQPQbZ6n2QfytayMbkFO-s&_nc_ohc=-zDjPPC7L9oAX_Gbf1w&_nc_ht=scontent.fceb1-1.fna&oh=03_AdR4thdEisCu0AfFSe_9jq7gPnK6s_gyEBQfjnMNV4DG0w&oe=6486FF6C"
    }
];

let index;
window.addEventListener("DOMContentLoaded", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    index = 0;
    displayAuthor(index);
    if(screen.height > 720){
        document.getElementsByClassName('topic-sidebar')[0].style.borderRight = "2px solid #0f969c";
         document.getElementsByClassName('topic-sidebar')[0].style.paddingRight = "0";
    }
})
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        let totalHeight = Array.from(sections).reduce((acc, section, i) => {
            if(i <= index){
                    return acc + section.clientHeight;
            }else{
                return acc;
            }
        }, 0);
       document.body.scrollTop = totalHeight; // For Safari
    document.documentElement.scrollTop = totalHeight; // For Chrome, Firefox, IE and Opera
    });
})
authorBtn.addEventListener('click', () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
refBtn.addEventListener('click', () => {
        document.body.scrollTop = 8600; // For Safari
        document.documentElement.scrollTop = 80600; // For Chrome, Firefox, IE and Opera
});

menuBtn.addEventListener('click', () => {
    navLists.classList.toggle("hide");
    if(icon.classList.contains("fa-bars")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-close");
    }else{
        icon.classList.remove("fa-close");
        icon.classList.add("fa-bars");
    }
});

showDevInfoBtn.addEventListener('click', () => {
   modal.style.display = "flex";
   document.body.style.overflow = "hidden";
});
closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

const displayAuthor = (index) => {
    const author = authors[index]
    document.getElementById("author-img").src = author.img_url;
    document.getElementById("author-name").innerText = author.name;
    document.getElementById("author-email").innerText = author.email;
    document.getElementById("author-number").innerText = author.number;
}
nextBtn.addEventListener('click', () => {
    index++;
    if(index === authors.length) index = 0;
    displayAuthor(index);
});

prevBtn.addEventListener('click', () => {
    index--;
    if(index === -1) index = authors.length - 1;
    displayAuthor(index);
})
