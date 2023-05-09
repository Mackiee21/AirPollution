const infos = [
    {
        title: "What is Air Pollution",
        content: "Air pollution is a type of environmental pollution that affects the air and is usually caused by smoke or other harmful gases, mainly oxides of carbon, Sulphur and nitrogen. In other words, air pollution is the contamination of air due to the presence or introduction of a substance which has a poisonous effect.",
        img_src: "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/08/28/USATODAY/usatsports/247WallSt.com-247WS-489035-tangshan-china.jpg?width=3200&height=1680&fit=crop"
    },
    {
        title: "Air Pollution",
        content: "Air pollution is a type of environmental pollution that affects the air and is usually caused by smoke or other harmful gases, mainly oxides of carbon, Sulphur and nitrogen. In other words, air pollution is the contamination of air due to the presence or introduction of a substance which has a poisonous effect.",
        img_src: "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/08/28/USATODAY/usatsports/247WallSt.com-247WS-489035-tangshan-china.jpg?width=3200&height=1680&fit=crop"
    },
    {
        title: "Sources of Air Pollution",
        content: [
            "Primary pollutants : Primary pollutants are directly emitted to the atmosphere. Air pollutants may have a natural, anthropogenic or mixed origin, depending on their sources or the sources of their precursors. Key primary air pollutants include particulate matter (PM), black carbon (BC), sulphur oxides (SO2), nitrogen oxides (NOX) (including nitrogen monoxide and nitrogen dioxide, NO2), ammonia (NH), carbon monoxide (CO), methane (CH4), non-methane volatile organic compounds (NMVOCs), including benzene, and certain metals and polycyclic aromatic hydrocarbons, including benzo[a]pyrene (BaP).",
            "Secondary pollutants : secondary pollutants are formed in the atmosphere from precursor gases through chemical reactions and microphysical processes. Key secondary air pollutants are particulate matter(PM), ozone (O3), NO2and several oxidized volatile organic compounds (VOCs). Key precursor gases for secondary PM are Sulphur dioxide (SO2), NOX, NH3and VOCs. These pollutants and their precursor gases can be of both natural and anthropogenic origin including:",
            [
                "burning of fossil fuels in electricity generation, transport, industry and households",
                "industrial processes and solvent use, for example in the chemical and mining industries",
                "agriculture",
                "waste treatment",
                "natural sources, including volcanic eruptions, windblown dust, sea-salt spray and emissions of volatile organic compounds from plants."
            ]
        ]
    }
];

const contentPage = document.querySelector("#main-content");
const title = document.querySelector("#content-title");
const text = document.querySelector("#content");
const topic_img = document.querySelector("#img");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let count = 0;
window.addEventListener('DOMContentLoaded', () => {
    ProvideInfo(count);
});

const ProvideInfo = (index) => {
    document.documentElement.scrollTop = 0;
    const topic = infos[index];
    if(Array.isArray(topic.content)){
       topic.content.forEach(cont => {
        const para = document.createElement("p");
        para.innerText = cont;
        text.appendChild(para);
       })
        
    }else{
        title.innerText = topic.title;
        topic_img.src = topic.img_src;
        text.innerText = topic.content;
    }
   
}

nextBtn.addEventListener('click', () => {
    if((count + 1) === infos.length) count = - 1;
    ProvideInfo(++count);
});

prevBtn.addEventListener('click', () => {
    if((count - 1) === 0) count = infos.length;
    ProvideInfo(--count);
})