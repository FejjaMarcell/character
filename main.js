//alert("müködik!")

//DOM - Document Object Model

let f_div = document.getElementById("first");

//f_div.className = "";

//f_div.innerText = "Trapista ";
f_div.innerHTML = "Trapista <a>A10</a>"; //innerText

console.log(f_div);

//let divs = document.getElementsByClassName("text"); //collection
let divs = document.getElementsByTagName("div");

console.log(divs);

//C# foreach
/*
for (let item in divs) {
    console.log("LLOOOOOPPP");
    console.log(item);  
}
*/

for (let i = 0; i < divs.length; i++){
    console.log("i:" + i);
    console.log(divs[i]);

    divs[i].innerHTML += "(i:"+ i +")";
}

console.log("FOR OF");

for (let item of divs){
    console.log(item);
    item.className += " checked"
}

console.log("FOR IN");

for (let item in divs){
    console.log(item);
}

console.log("QUERY SELECTOR");
//let tag = document.querySelector("html body div a");
let tag = document.querySelector("#second");
tag.innerHTML = "Másvalami..!";
console.log(tag);


console.log("QUERY SELECTOR ALL");
let tags = document.querySelectorAll(".checked");
console.log(tags);

/*
DOM elemek elérése
 - document.getElementById
 - document.getElementsByClassName
 - document.getElementsByTagName

 - document.querySelector[ALL]

DOM elemek módosítása
 - .innerText
 - .innerHTML
 - .className
 - .<attribute>     .setAttribute(<attribute>, <value>)
 - .style.<property>
 -

*/

let others = document.querySelectorAll(".other");
for (let other of others){
    other.style.backgroundColor = "black";
    other.style.color = "#ffaa00";
}
console.log(others);

let as = document.querySelectorAll("a");
for (let a of as){
    a.setAttribute("href", "#");
    a.setAttribute("target", "_blank");
}


let del = document.getElementById("delme");
document.body.removeChild(del);

let lista = document.querySelector(".lista");
/*
let li = document.querySelector("#delmel");
lista.removeChild(li);
*/
lista.removeChild(document.querySelector("#delmel"));

//lista.remove();

let p = document.createElement("p");
p.innerText = "Lorem ip sum dolor sit amet";

document.body.appendChild(p);

let newli = document.createElement("li");
newli.innerText = "Banán"; // <li>Banán</li>

lista.appendChild(newli); //banános li hozzáadása a listához

let newli2 = document.createElement("li");
newli2.innerText = "Barack"; // <li>Barack</li>
lista.insertBefore(newli2, newli); //barackos li hozzáadása a listához, de a banános elé!

let qlista = document.querySelector(".lista");
qlista.style.color = "lime";

let qlistas = document.querySelectorAll(".lista");
for (let list of qlistas){
    list.style.backgroundColor = "darkgray";
}