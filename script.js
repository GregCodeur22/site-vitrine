let arr = [];
let initArray = () => {
  arr.push("xbox");
  arr.push("ps5");
  arr.push("ordi");
};

initArray();

let removeChild = () => {
  let ul = document.querySelector(".nav");
  let lis = document.querySelectorAll("li");

  for (let i = 0; i < lis.length; i++) {
    let list = lis[i];
    ul.removeChild(list);
  }
};

let bouclArr = () => {
  for (let i = 0; i < arr.length; i++) {
    let list = arr[i];
    addItem(list);
  }
};

let addItem = (name) => {
  let ul = document.querySelector(".nav");
  let lis = document.createElement("li");
  let a = document.createElement("a");
  a.textContent = name;
  lis.appendChild(a);
  ul.appendChild(lis);
};

let resetAndAdd = () => {
  removeChild();
  bouclArr();
};

resetAndAdd();

let btn = document.querySelector(".add");
btn.addEventListener("click", () => {
  let val = document.getElementById("input").value;
  if (doublon(val)) {
    alert("le produit existe déja ");
  } else {
    arr.push(val);
  }
  // console.log(arr);
  resetAndAdd();
});

let doublon = (produitTest) => {
  let doublon = false;
  for (let i = 0; i < arr.length; i++) {
    let prod = arr[i];
    if (prod == produitTest) {
      doublon = true;
    }
  }
  return doublon;
};

let deleteBtn = () => {
  let btn = document.querySelector(".delete");
  btn.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    for (let i = 0; i < arr.length; i++) {
      let prod = arr[i];
      if (prod === input) {
        arr.splice(i, 1);
        console.log(arr);
      }
    }
    resetAndAdd();
  });
};

deleteBtn();

let arr2 = [...arr];
console.log(arr2);
let lis = document.querySelectorAll("li");
lis.addEventListener("click", () => {
  for (let i = 0; i < lis.length; i++) {
    console.log(i);
  }
});
