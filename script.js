const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const box = document.getElementById("box")


function btn2(){
    if(img2.style.display == "block"){
        img2.style.display = "none"
    }else{
        img2.style.display = "block"
    }
}
function btn3(){
    if(img3.style.display == "block" ||img2.style.display == "block"  ){
        img3.style.display = "none"
    }else{
        img3.style.display = "block"
        img2.style.display = "block"
    }
}

// _-----------------------------------------------------------------
// JUSTIFY CONTENT JAVASCRIPT



function jccenter(){
    if(box.style.justifyContent == "center"){
        box.style.justifyContent = "start"
    } else{
        box.style.justifyContent = "center"
    }
}
function jcspacebtw(){
    if(box.style.justifyContent == "space-between"){
        box.style.justifyContent = "start"
    } else{
        box.style.justifyContent = "space-between"
    }
}
function jcsacearnd(){
    if(box.style.justifyContent == "space-around"){
        box.style.justifyContent = "start"
    } else{
        box.style.justifyContent = "space-around"
    }
}
function jcspaceevn(){
    if(box.style.justifyContent == "space-evenly"){
        box.style.justifyContent = "start"
    } else{
        box.style.justifyContent = "space-evenly"
    }
}
function jcstart(){
    if(box.style.justifyContent == "start"){
        box.style.justifyContent = "end"
    } else{
        box.style.justifyContent = "start"
    }
}
function jcend(){
    if(box.style.justifyContent == "end"){
        box.style.justifyContent = "start"
    } else{
        box.style.justifyContent = "end"
    }
}

// ---------------------------------------------------------------------
// ALIGN ITEM JAVASCRIPT

function aicenter(){
    if(box.style.alignItems == "center"){
        box.style.alignItems = "start"
    }else{
        box.style.alignItems = "center"
    }
}
function aistart(){
    if(box.style.alignItems == "start"){
        box.style.alignItems = "end"
    }else{
        box.style.alignItems = "start"
    }
}
function aiend(){
    if(box.style.alignItems == "end"){
        box.style.alignItems = "start"
    }else{
        box.style.alignItems = "end"
    }
}
function aibase(){
    if(box.style.alignItems == "baseline"){
        box.style.alignItems = "start"
    }else{
        box.style.alignItems = "baseline"
    }
}



// RESET BUTTON JAVASCRIPT

function resetAll(){
    box.style.alignItems = "start"
    box.style.justifyContent = "start"
    img2.style.display = "none"
    img3.style.display = "none"
}