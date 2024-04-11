
const itemList = {
    helmet: [
        {
            name: "Chain Helmet",
            img: "assets/imgs/h_c.png",
        },
        {
            name: "Leather Helmet",
            img: "assets/imgs/h_l.png",
        },
        {
            name: "Gold Helmet",
            img: "assets/imgs/h_g.png",
        },
        {
            name: "Iron Helmet",
            img: "assets/imgs/h_i.png",
        },
        {
            name: "Diamond Helmet",
            img: "assets/imgs/h_d.png",
        },
    ],
    chestplate: [
        {
            name: "Chain Chestplate",
            img: "assets/imgs/c_c.png",
        },
        {
            name: "Leather Chestplate",
            img: "assets/imgs/c_l.png",
        },
        {
            name: "Gold Chestplate",
            img: "assets/imgs/c_g.png",
        },
        {
            name: "Iron Chestplate",
            img: "assets/imgs/c_i.png",
        },
        {
            name: "Diamond Chestplate",
            img: "assets/imgs/c_d.png",
        },
    ],
    leggings: [
        {
            name: "Chain Leggings",
            img: "assets/imgs/t_c.png",
        },
        {
            name: "Leather Leggings",
            img: "assets/imgs/t_l.png",
        },
        {
            name: "Gold Leggings",
            img: "assets/imgs/t_g.png",
        },
        {
            name: "Iron Leggings",
            img: "assets/imgs/t_i.png",
        },
        {
            name: "Diamond Leggings",
            img: "assets/imgs/t_d.png",
        },
    ],
    boots: [
        {
            name: "Chain Boots",
            img: "assets/imgs/s_c.png",
        },
        {
            name: "Leather Boots",
            img: "assets/imgs/s_l.png",
        },
        {
            name: "Gold Boots",
            img: "assets/imgs/s_g.png",
        },
        {
            name: "Iron Boots",
            img: "assets/imgs/s_i.png",
        },
        {
            name: "Diamond Boots",
            img: "assets/imgs/s_d.png",
        },
    ],
};
/*
const chestplateList = [
    {
        name: "Chain Chestplate",
        img: "assets/imgs/c_c.png",
    },
    {
        name: "Leather Chestplate",
        img: "assets/imgs/c_l.png",
    },
    {
        name: "Gold Chestplate",
        img: "assets/imgs/c_g.png",
    },
    {
        name: "Iron Chestplate",
        img: "assets/imgs/c_i.png",
    },
    {
        name: "Diamond Chestplate",
        img: "assets/imgs/c_d.png",
    },
];
*/
/*
const leggingsList = [
    {
        name: "Chain Leggings",
        img: "assets/imgs/t_c.png",
    },
    {
        name: "Leather Leggings",
        img: "assets/imgs/t_l.png",
    },
    {
        name: "Gold Leggings",
        img: "assets/imgs/t_g.png",
    },
    {
        name: "Iron Leggings",
        img: "assets/imgs/t_i.png",
    },
    {
        name: "Diamond Leggings",
        img: "assets/imgs/t_d.png",
    },
];
*/

//var helmetSelectedName = itemList[1];

let itemSelectedName = {
    helmet: itemList.helmet[0].name,
    chestplate: itemList.chestplate[0].name,
    leggings: itemList.leggings[0].name,
    boots: itemList.boots[0].name,
}

//let chestplateSelectedName = itemList[1];
//let leggingsSelectedName = leggingsList[1];


/*
    <img src="assets/imgs/h_c.png">
    <img class="selected" src="assets/imgs/h_l.png">
    <img src="assets/imgs/h_g.png">
    <img src="assets/imgs/h_c.png">
    <img src="assets/imgs/h_i.png">
*/

/*
window.addEventListener("load", (event) => {});
*/



window.onload = (event) => {
    console.log("Page loaded");

    ShowItems("helmet");
    ShowItems("chestplate")
    ShowItems("leggings")
    ShowItems("boots")
    /*
    ShowChestplate();
    ShowLeggings();
    */
    
    
};

function ShowItems(type){
    //document.getElementById();
    let itemChooser = document.querySelector("#"+type+"_chooser");
    itemChooser.innerHTML = "";
    

    let itemChoosed = document.querySelector("#"+type+"_choosed");
    itemChoosed.innerHTML = "";
    
/*
    for (let i = 0; i < headList.length; i++){
        let img = document.createElement("img");

        //img.className = "selected";

        img.src = headList[i].img;
        img.alt = headList[i].name;

        headChooser.appendChild(img);
    }
*/
    for (item of itemList[type]){
        let img = document.createElement("img");

        
        if(item.name == itemSelectedName[type]){
            img.className = "selected";

            let simg = document.createElement("img");
            simg.src = item.img;
            simg.alt = "SELECTED - " + item.name;
            itemChoosed.appendChild(simg);
        }
        //img.className = "selected";

        
        img.onclick = (event) => {
            console.log("img clicked - " + img.alt);
            itemSelectedName[type] = img.alt;
            ShowItems(type);
        };

        img.src = item.img;
        img.alt = item.name;
        itemChooser.appendChild(img);
    }

    
    

    
}
/*
function ShowChestplate(){
    let chestplateChooser = document.querySelector("#ch_chooser");
    chestplateChooser.innerHTML = "";

    let chestplateChoosed = document.querySelector("#ch_choosed");
    chestplateChoosed.innerHTML = "";

    for (ch of chestplateList){
        let img = document.createElement("img");

        if(ch.name == chestplateSelectedName){
            img.className = "selected";

            let simg = document.createElement("img");
            simg.src = ch.img;
            simg.alt = "SELECTED - " + ch.name;
            chestplateChoosed.appendChild(simg);
        }
        //img.className = "selected";

        img.onclick = (event) => {
            console.log("img clicked - " + img.alt);
            chestplateSelectedName = img.alt;
            ShowChestplate();
        };

        img.src = ch.img;
        img.alt = ch.name;
        chestplateChooser.appendChild(img);
    }
}
*/
/*
function ShowChestplate(){
    let leggingsChooser = document.querySelector("#leggings_chooser");
    leggingsChooser.innerHTML = "";

    let leggingsChoosed = document.querySelector("#leggings_choosed");
    leggingsChoosed.innerHTML = "";

    for (legging of leggingsList){
        let img = document.createElement("img");

        if(legging.name == leggingsSelectedName){
            img.className = "selected";

            let simg = document.createElement("img");
            simg.src = legging.img;
            simg.alt = "SELECTED - " + legging.name;
            leggingsChoosed.appendChild(simg);
        }
        //img.className = "selected";

        img.onclick = (event) => {
            console.log("img clicked - " + img.alt);
            leggingsSelectedName = img.alt;
            ShowLeggings();
        };

        img.src = legging.img;
        img.alt = legging.name;
        leggingsChooser.appendChild(img);
    }
}
*/