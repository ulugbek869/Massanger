const inp = document.getElementById("inp");
const send = document.getElementById("send");
const clear = document.getElementById("clear");
const list = document.getElementById("list");

send.addEventListener("click", () => {
  const sends = inp.value.trim();
  let li = document.createElement("li");
  li.textContent = sends;
  inp.value = "";
  list.append(li);

  let btnDel = document.createElement("button");

  btnDel.addEventListener("click", () => {
    let con2 = confirm("Are you sure??");
    if (con2 === true) {
      li.remove();
    } else {
      alert("Its alright");
    }
  });
  li.append(btnDel);
  btnDel.textContent = "Delete";

  let btnEdit = document.createElement("button");
  btnEdit.addEventListener("click", () => {
    let edit = prompt("Edit");
    li.textContent = edit;
  });
  li.append(btnEdit);
  btnEdit.textContent = "Edit";
});

clear.addEventListener("click", () => {
  let con = confirm("Hammasi Ochiriladi!!");
  if (con === true) {
    list.innerHTML = "";
  } else {
    alert("Ochirilmadi...");
  }
});

let night = document.getElementById("NightMode");
let light = document.getElementById("LightMode");

inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    send.click();
  }
});
