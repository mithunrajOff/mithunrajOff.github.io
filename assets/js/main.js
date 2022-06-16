/*function toggleSidebar() {
    document.getElementById("sidebar").style.display = "block";
    console.log(document.getElementsByClassName('sidebar'));
}
function toggleClose(){
    document.getElementById("sidebar").style.display = "none";
}
if(display = "none"){
    display = "block";
}
else{
    display = "none";
}*/

function toggleSidebar(){
    var sidebar = document.getElementsByClassName('sidebar');
    console.log(document.getElementsByClassName('sidebar'));
    sidebar.style.display = "block";

    if (sidebar.style.display == "block"){
        sidebar.style.display = "none";
    }
    else {
        sidebar.style.display = "block";
    }
}   

/*function toggleSidebar(){
    document.getElementsByClassName('sidebar');
    sidebar.style.display = "none";
}
sidebar.onclick="toggleSidebar()"
    if (sidebar.style.display = "none"){
        sidebar.style.display = "block";
    }
    else {
        sidebar.style.display = "none";
    }*/