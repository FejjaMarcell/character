
const headList = [
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
];

let headSelectedName = headList[1];

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

    ShowHeads();
    
    
};

function ShowHeads(){
    //document.getElementById();
    let headChooser = document.querySelector("#head_chooser");
    headChooser.innerHTML = "";

    let headChoosed = document.querySelector("#head_choosed");
    headChoosed.innerHTML = "";
/*
    for (let i = 0; i < headList.length; i++){
        let img = document.createElement("img");

        //img.className = "selected";

        img.src = headList[i].img;
        img.alt = headList[i].name;

        headChooser.appendChild(img);
    }
*/
    for (head of headList){
        let img = document.createElement("img");

        if(head.name == headSelectedName){
            img.className = "selected";

            let simg = document.createElement("img");
            simg.src = head.img;
            simg.alt = "SELECTED - " + head.name;
            headChoosed.appendChild(simg);
        }
        //img.className = "selected";

        img.onclick = (event) => {
            console.log("img clicked - " + img.alt);
            headSelectedName = img.alt;
            ShowHeads();
        };

        img.src = head.img;
        img.alt = head.name;
        headChooser.appendChild(img);
    }

    

    
}