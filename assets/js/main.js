let x;
let parent;
let obj = document.getElementById("ball-container");
let message = document.getElementById("message");

function checkSeq() {
  let obj = document.getElementById("main_circle");
  let count;
  let first;
  let last;
  let firstobj = document.getElementById(obj.children[0].id);
  let lastobj = document.getElementById(obj.children[9].id);

  if (firstobj.hasChildNodes()) {
    first = Number(firstobj.children[0].id.substr(4));
  }

  if (lastobj.hasChildNodes()) {
    last = Number(lastobj.children[0].id.substr(4));
  }

  for (let i = 1; i < 10; i++) {
    let cobj = document.getElementById(obj.children[i].id);
    if (cobj.hasChildNodes()) {
      count = Number(cobj.children[0].id.substr(4));
      let flag = Math.abs(first - count);
      if (flag > 1 && flag < 9) {
        message.innerHTML = "Unordered arrangement";
        return;
      }
      first = count;
    } else {
      message.innerHTML = "Incomplete arrangement";
      return;
    }
  }
  first = Number(firstobj.children[0].id.substr(4));
  message.innerHTML = "Clockwise arrangement";
  if (first - last > 0) {
    message.innerHTML = "Anti-clockwise arrangement";
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function dragStart(ev) {
  parent = document.getElementById(ev.target.id).parentNode.id;
}

function drag(ev) {
  x = ev.target.id;
}

function exchangeBalls(ball1, ball2, cont1, cont2) {
  let obj1 = document.getElementById(cont1);
  let obj2 = document.getElementById(cont2);

  obj1.appendChild(document.getElementById(ball2));
  obj2.appendChild(document.getElementById(ball1));
}

function drop(ev) {
  ev.preventDefault();
  var data = x;
  if (ev.target.hasChildNodes()) {
    let seleted = x;
    let target = document.getElementById(ev.target.id).id;
    let seletedContainer = parent;
    let targetContianer = document.getElementById(ev.target.id).parentElement
      .id;
    exchangeBalls(seleted, target, seletedContainer, targetContianer);
  } else {
    ev.target.appendChild(document.getElementById(data));
  }
}

function allowContainerDrop(ev) {
  ev.preventDefault();
  var data = x;
  obj.appendChild(document.getElementById(data));
}

function dropOnBall(ev) {
  ev.preventDefault();
  console.log(ev.target.id);
}
