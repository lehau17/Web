var c=document.getElementById('nuttat');
    c.onclick=function(){
        document.getElementById('datlich').style.display="none";
}

var d=document.getElementsByClassName('nhannut');

var arr=Array.from(d);
    arr.forEach(el=>{
        el.onclick=()=>{
            document.getElementById('datlich').style.display="block";
        }
    }
)
ariaValue

