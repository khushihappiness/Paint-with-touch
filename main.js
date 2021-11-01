var mouseEvent= "empty";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var color="red";
var width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

 function my_mousedown(e)
 {
 mouseEvent="mouseDown";

 }

 canvas.addEventListener("mousemove",my_mousemove);

 function my_mousemove(e)
 {

    current_position_x = e.clientX - canvas.offsetLeft;
     current_position_y = e.clientY - canvas.offsetTop;

     if(mouseEvent=="mouseDown")
     {
         ctx.beginPath();
         ctx.strokeStyle= color;
         ctx.lineWidth=width_of_line;
         console.log("the last position of x and y coordinate=");
         console.log("x="+last_position_x+"y="+last_position_y);

         ctx.moveTo(last_position_x,last_position_y);

         console.log("the current position of x and y coordinate=");
         console.log("x="+current_position_x+"y="+current_position_y);

         ctx.lineTo(current_position_x,current_position_y);
         ctx.stroke();
         
     }
     last_position_x=current_position_x;
     last_position_y=current_position_y;
 }

 canvas.addEventListener("mouseup",my_mouseup);

 function my_mouseup(e)
 {
     mouseEvent="mouseup";
 }

 canvas.addEventListener("mouseleave",my_mouseleave);

 function my_mouseleave(e)
 {
mouseEvent="mouseleave";

 }
 