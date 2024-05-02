const furnaceList = {
     item: [
        {
            name: "Potato",
            img: "assets/imgs/Potato.webp",
        },
        {
            name: "Raw Beef",
            img: "assets/imgs/Raw_Beef.webp",
        },
        {
            name: "Raw Chicken",
            img: "assets/imgs/Raw_Chicken.webp",
        },
        {
            name: "Raw Cod",
            img: "assets/imgs/Raw_Cod.webp",
        },
        {
            name: "Raw Mutton",
            img: "assets/imgs/Raw_Mutton.webp",
        },
        {
            name: "Raw Porkchop",
            img: "assets/imgs/Raw_Porkchop.webp",
        },
        {
            name: "Raw Rabbit",
            img: "assets/imgs/Raw_Rabbit.webp",
        },
        {
            name: "Raw Salmon",
            img: "assets/imgs/Raw_Salmon.webp",
        },
    ],

    fuel: [
        {
            name: "Charcoal",
            img: "assets/imgs/Charcoal.webp",
        },
        {
            name: "Coal",
            img: "assets/imgs/Coal.webp",
        },
        {
            name: "Lava Bucket",
            img: "assets/imgs/Lava_Bucket.webp",
        },
    ],

    cooked: [
        {
            name: "Baked Potato",
            img: "assets/imgs/Baked_Potato.webp",
        },
        {
            name: "Cooked Beef",
            img: "assets/imgs/Cooked_Stake.webp",
        },
        {
            name: "Cooked Chicken",
            img: "assets/imgs/Cooked_Chicken.webp",
        },
        {
            name: "Cooked Cod",
            img: "assets/imgs/Cooked_Cod.webp",
        },
        {
            name: "Cooked Mutton",
            img: "assets/imgs/Cooked_Mutton.webp",
        },
        {
            name: "Cooked Porkchop",
            img: "assets/imgs/Cooked_Porkchop.webp",
        },
        {
            name: "Cooked Rabbit",
            img: "assets/imgs/Cooked_Rabbit.webp",
        },
        {
            name: "Cooked Salmon",
            img: "assets/imgs/Cooked_Salmon.webp",
        },
    ],
};

let furnaceItemSelectedName = {
    item: furnaceList.item[0].name,
    fuel: furnaceList.fuel[0].name,
    cooked: furnaceList.cooked[0].name,
}

const itemDialog = document.querySelector("#item_dialog");
const itemEquip = document.querySelector("#item_equip");

const fuelDialog = document.querySelector("#fuel_dialog");
const fuelEquip = document.querySelector("#fuel_equip");

const cookedDialog = document.querySelector("#cooked_dialog");
const cookedEquip = document.querySelector("#cooked_equip");

window.onload = (event) => {
    console.log("Page loaded");

    let itemChooser = document.querySelector("#item_choosed");
    itemChooser.onclick = (event) => {
        console.log("OPEN - item dialog");
        itemDialog.showModal();
    };
    itemEquip.addEventListener("click", function(){
        let data = new FormData(itemDialog.firstElementChild);
        furnaceItemSelectedName["item"] = data.get("item");
        console.log("Item")
        ShowItems();
    });

    let fuelChooser = document.querySelector("#fuel_choosed");
    fuelChooser.onclick = (event) => {
        console.log("OPEN - fuel dialog");
        fuelDialog.showModal();
    };
    fuelEquip.addEventListener("click", function(){
        let data = new FormData(fuelDialog.firstElementChild);
        furnaceItemSelectedName["fuel"] = data.get("fuel");
        console.log("good")
        ShowFuels();
    });

    ShowItems();
    ShowFuels();
    //ShowDone();
};

function ShowItems() {
    
    let itemSection = document.querySelector("#item_section")
    itemSection.innerHTML = "";

    let itemChoosed = document.querySelector("#item_choosed");
    itemChoosed.innerHTML = "";

    for(item of furnaceList["item"]){
        CreateToolInput(itemSection, item.name, item.img);

        if(item.name == furnaceItemSelectedName["item"]){
            let simg = document.createElement("img");
            simg.src = item.img;
            simg.alt = "SELECTED - " + item.name;
            itemChoosed.appendChild(simg);
        }
    }
}

function CreateToolInput(section, name, path) {
    let input = document.createElement("input");
    input.id = "item_" + name;
    input.name = "item";
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


function ShowFuels() {

    let fuelSection = document.querySelector("#fuel_section")
    fuelSection.innerHTML = "";

    let fuelChoosed = document.querySelector("#fuel_choosed");
    fuelChoosed.innerHTML = "";

    for(fuel of furnaceList["fuel"]){
        CreateShieldInput(fuelSection, fuel.name, fuel.img);

        if(fuel.name == furnaceItemSelectedName["fuel"]){
            let simg = document.createElement("img");
            simg.src = fuel.img;
            simg.alt = "SELECTED - " + fuel.name;
            fuelChoosed.appendChild(simg);
        }
    }
}

function CreateShieldInput(section, name, path) {
    let input = document.createElement("input");
    input.id = "item_" + name;
    input.name = "fuel";
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

function ShowDone() {
    switch (itemChoosed.img.alt) {
        case "Baked_Potato":
            let fuelSection = document.querySelector("#cooked_section")
            fuelSection.innerHTML = "";

            let fuelChoosed = document.querySelector("#cooked_choosed");
            fuelChoosed.innerHTML = "";

            for(cooked of furnaceList["cooked"]){
                if(cooked.name == "assets/img/Baked_Potato"){
                    let simg = document.createElement("img");
                    simg.src = cooked.img;
                    simg.alt = "SELECTED - " + cooked.name;
                    cookedChoosed.appendChild(simg);
                }
            }
            break;
        
        default:
            break;
    } 
}
