var last_position_x,last_position_y;
color="red";
line=3;
mouseEvent="";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=screen.width;
height=screen.height;
canvas_width=screen.width-70;
canvas_height=screen.height-300;


if(width<992){
    document.getElementById("myCanvas").width=canvas_width;
    document.getElementById("myCanvas").height=canvas_height;
    document.body.style.overflow="hidden";

}



canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log(e);
    color=document.getElementById("color").value ;
    line=document.getElementById("line").value;
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    console.log(e);
    color=document.getElementById("color").value ;
    line=document.getElementById("line").value;
    mouseEvent="mouseDown";
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    console.log(e);
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;


    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line;
        console.log("current x and y positions are : "+current_position_x +" and "+current_position_y);
        console.log("last x and y positions was : "+last_position_x +" and "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();



    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
}
 canvas.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
     console.log(e);
     mouseEvent="mouseUP";
    }

 canvas.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
     console.log(e);
     mouseEvent="mouseleave";
    }


canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log(e);
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line;
    console.log("last position of x and y= "+last_position_x+" and "+last_position_y);
    console.log("current position of x and y= "+current_position_x+" and "+current_position_y);
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
    last_position_x=current_position_x;
    last_position_y=current_position_y;

}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}