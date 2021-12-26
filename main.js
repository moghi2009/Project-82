var mouse_event = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var color = "black";
var lineWidth = 5;
var radius = 2;

canvas.addEventListener("mousedown", mymouse_down);
function mymouse_down(e){
    color = getElementById("color_input").value;
    lineWidth = getElementById("width_input").value;
    radius = getElementById("radius_input").value;
    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", mymouse_up);
function mymouse_up(e){
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mymouse_leave);
function mymouse_leave(e){
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", mymouse_move);
function mymouse_move(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;

    if (mouse_event == "mousedown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}