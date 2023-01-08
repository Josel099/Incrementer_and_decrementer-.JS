function increment()
{
    
    var text=document.getElementById("root").innerHTML
    var result=eval(text)+1;
    document.getElementById("root").innerHTML=result
}
function decrement()
{
    var text=document.getElementById("root").innerHTML
    var result=eval(text)-1;
    document.getElementById("root").innerHTML=result
}