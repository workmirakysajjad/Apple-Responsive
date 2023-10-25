var childItem = document.getElementById("items").children;
function show(data) {
    for (let i = 0;i < childItem.length; i++)
        childItem[i].classList.remove("showm")
        var active = data.dataset.toggle;
        childItem[Number(active)-1].classList.add("showm")
}

function hide(){
    for(let h = 0; h < childItem.length; h++)
    childItem[h].classList.remove("showm")  
}
