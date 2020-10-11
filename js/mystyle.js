$(document).ready(function(){
    $("#button1").hide();
    $(".column1").mouseout(function(){
        $("#button1").hide();
    })
    $(".column1").mouseover(function(){
        $("#button1").show();
    })
    $("#button2").hide();
    $(".column2").mouseout(function(){
        $("#button2").hide();
    })
    $(".column2").mouseover(function(){
        $("#button2").show();
    })
    $("#button3").hide();
    $(".column3").mouseout(function(){
        $("#button3").hide();
    })
    $(".column3").mouseover(function(){
        $("#button3").show();
    })
})
document.getElementById("love1").addEventListener("click",function(){
    var twocolor="red";
    var twocolor=document.getElementById("love1").style.color;
    if (twocolor=="red"){
        document.getElementById("love1").style.removeProperty("color");
        document.getElementById("love1").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("love1").style.removeProperty("color");
        document.getElementById("love1").style.color="red";
        onecolor="red";
    }
})
document.getElementById("like1").addEventListener("click",function(){
    var twocolor="blue";
    var twocolor=document.getElementById("like1").style.color;
    if (twocolor=="blue"){
        document.getElementById("like1").style.removeProperty("color");
        document.getElementById("like1").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("like1").style.removeProperty("color");
        document.getElementById("like1").style.color="blue";
        onecolor="blue";
    }
})
document.getElementById("love2").addEventListener("click",function(){
    var twocolor="red";
    var twocolor=document.getElementById("love2").style.color;
    if (twocolor=="red"){
        document.getElementById("love2").style.removeProperty("color");
        document.getElementById("love2").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("love2").style.removeProperty("color");
        document.getElementById("love2").style.color="red";
        onecolor="red";
    }
})
document.getElementById("like2").addEventListener("click",function(){
    var twocolor="blue";
    var twocolor=document.getElementById("like2").style.color;
    if (twocolor=="blue"){
        document.getElementById("like2").style.removeProperty("color");
        document.getElementById("like2").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("like2").style.removeProperty("color");
        document.getElementById("like2").style.color="blue";
        onecolor="blue";
    }
})
document.getElementById("love3").addEventListener("click",function(){
    var twocolor="red";
    var twocolor=document.getElementById("love3").style.color;
    if (twocolor=="red"){
        document.getElementById("love3").style.removeProperty("color");
        document.getElementById("love3").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("love3").style.removeProperty("color");
        document.getElementById("love3").style.color="red";
        onecolor="red";
    }
})
document.getElementById("like3").addEventListener("click",function(){
    var twocolor="blue";
    var twocolor=document.getElementById("like3").style.color;
    if (twocolor=="blue"){
        document.getElementById("like3").style.removeProperty("color");
        document.getElementById("like3").style.color="black";
        onecolor="black";
    }
    else{
        document.getElementById("like3").style.removeProperty("color");
        document.getElementById("like3").style.color="blue";
        onecolor="blue";
    }
})