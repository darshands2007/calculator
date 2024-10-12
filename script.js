var flag=0;
function buttonclick(val)
{
    
    var screen=document.getElementById("screen").value;
    if(!isNaN(val)){
        if(flag==1){
            document.getElementById("screen").value="";
            flag=0
    }
    document.getElementById("screen").value+=val;}
    else {
        if(screen!="")
        {
            document.getElementById("screen").value+=val;
            flag=0
        }
    }

}
function clr()
{
    document.getElementById("screen").value="";
}
function equalClick(){
    try {
        var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    flag=1

    } catch (error) {
        document.getElementById("screen").value="Error"
        flag=1
    }
    
}
function remove(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0, -1)
}