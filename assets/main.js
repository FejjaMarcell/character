
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
    tools: [
        {
            name: "Sword",
            img: "assets/imgs/Minecraft Sword-595b40b75ba036ed117d8664.svg"
        },
        {
            name: "Pickaxe",
            img: "assets/imgs/Minecraft Pickaxe-595b40b75ba036ed117d8661.svg"
        },
        {
            name: "Axe",
            img: "assets/imgs/Minecraft Axe-595b40b75ba036ed117d865d.svg"
        },
        {
            name: "Hoe",
            img: "assets/imgs/hoe.webp"
        },
        {
            name: "Shovel",
            img: "assets/imgs/Minecraft Shovel-595b40b75ba036ed117d8662.svg"
        },
        {
            name: "Stick",
            img: "assets/imgs/stick.webp"
        },
        {
            name: "Wrench",
            img: "assets/imgs/Wrench.webp"
        },
    ],
    shields: [
        {
            name: "Shield",
            img: "assets/imgs/Shield_JE2_BE1.webp"
        },
        {
            name: "Torch",
            img: "assets/imgs/Torch.webp"
        },
        {
            name: "Totem of Undying",
            img: "assets/imgs/Totem_of_Undying_JE2_BE2.webp"
        },
        {
            name: "Lucy Axolotl",
            img: "assets/imgs/axolotl.webp"
        },
    ]
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

    tool: itemList.tools[0].name,
    shield: itemList.shields[0].name,

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

const weaponDialog = document.querySelector("#weapon_dialog");
const weaponEquip = document.querySelector("#weapon_equip");

const shieldDialog = document.querySelector("#shield_dialog");
const shieldEquip = document.querySelector("#shield_equip");

window.onload = (event) => {
    console.log("Page loaded");

    let weaponChooser = document.querySelector("#weapon_choosed");
    weaponChooser.onclick = (event) => {
        console.log("OPEN - weapon dialog");
        weaponDialog.showModal();
    };
    weaponEquip.addEventListener("click", function(){
        let data = new FormData(weaponDialog.firstElementChild);
        itemSelectedName["tool"] = data.get("weapon");
        console.log("asd")
        ShowTools();
    });

    let shieldChooser = document.querySelector("#shield_choosed");
    shieldChooser.onclick = (event) => {
        console.log("OPEN - shield dialog");
        shieldDialog.showModal();
    };
    shieldEquip.addEventListener("click", function(){
        let data = new FormData(shieldDialog.firstElementChild);
        itemSelectedName["shield"] = data.get("shield");
        console.log("good")
        ShowShields();
    });

    ShowItems("helmet");
    ShowItems("chestplate");
    ShowItems("leggings");
    ShowItems("boots");

    ShowTools();
    ShowShields();
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

function ShowTools() {
    
    let weaponSection = document.querySelector("#weapon_section")
    weaponSection.innerHTML = "";

    let weaponChoosed = document.querySelector("#weapon_choosed");
    weaponChoosed.innerHTML = "";

    for(tool of itemList["tools"]){
        CreateToolInput(weaponSection, tool.name, tool.img);

        if(tool.name == itemSelectedName["tool"]){
            let simg = document.createElement("img");
            simg.src = tool.img;
            simg.alt = "SELECTED - " + tool.name;
            weaponChoosed.appendChild(simg);
        }
    }
}

function ShowShields() {

    let shieldSection = document.querySelector("#shield_section")
    shieldSection.innerHTML = "";

    let shieldChoosed = document.querySelector("#shield_choosed");
    shieldChoosed.innerHTML = "";

    for(shield of itemList["shields"]){
        CreateShieldInput(shieldSection, shield.name, shield.img);

        if(shield.name == itemSelectedName["shield"]){
            let simg = document.createElement("img");
            simg.src = shield.img;
            simg.alt = "SELECTED - " + shield.name;
            shieldChoosed.appendChild(simg);
        }
    }
}


function CreateToolInput(section, name, path) {
    let input = document.createElement("input");
    input.id = "item_" + name;
    input.name = "weapon";
    input.value = name;
    input.type = "radio";

    let img = document.createElement("img");
    img.src = path;
    img.alt = name;

    let label = document.createElement("label");
    label.setAttribute("for", "item_" + name);
    label.appendChild(img);

    section.appendChild(input);
    section.appendChild(label);
}

function CreateShieldInput(section, name, path) {
    let input = document.createElement("input");
    input.id = "item_" + name;
    input.name = "shield";
    input.value = name;
    input.type = "radio";

    let img = document.createElement("img");
    img.src = path;
    img.alt = name;

    let label = document.createElement("label");
    label.setAttribute("for", "item_" + name);
    label.appendChild(img);

    section.appendChild(input);
    section.appendChild(label);
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


