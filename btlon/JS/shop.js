var arrobj=[
    {
        img:'../ASSETS/img/anh-4k-chu-meo-dang-yeu-dang-tron-chu-cua-no_085125587.jpg',
        ten:"Mèo Anh Lông Dài",
        giatien:"199$",
    },
    {
        img:'../ASSETS/img/channgan.jpg',
        ten:"Mèo Chân Ngắn",
        giatien:"199$",
    },
    {
        img:'../ASSETS/img/nga.jpg',
        ten:"Mèo Nga",
        giatien:"299$",
    },
    {
        img:'../ASSETS/img/tanmthe.jpg',
        ten:"Mèo Tam Thể Đực",
        giatien:"199.090.090$",
    },
    {
        img:'../ASSETS/img/meo-ragdoll-vuong-4621.png',
        ten:"Mèo RABOLL Màu Blue",
        giatien:"199.090.090$",
    },
    {
        img:'../ASSETS/img/meo-ragdoll-vuong-4634.png',
        ten:"Mèo Ragdoll màu Bicolor",
        giatien:"199.090.090$",
    },
    {
        img:'../ASSETS/img/batu.jpg',
        ten:"Mèo Ba Tư",
        giatien:"199.090.090$",
    },
    {
        img:'../ASSETS/img/brerus.jpg',
        ten:"Mèo Sphynx",
        giatien:"199.090.090$",
    },
    {    
        img:'../ASSETS/img/xiem.jpg',
        ten:"Mèo Xiêm",
        giatien:"199.090.090$",
    },
    {    
        img:'../ASSETS/img/vanthonhiki.jpg',
        ten:"Mèo Vam Thổ Nhĩ Kì ",
        giatien:"199.090.090$",
    }

];

function reder(){
    for(var i=0;i<arrobj.length;i++){
        var khungbanhang= document.createElement('div')
        khungbanhang.classList.add("col-md-4")
        khungbanhang.classList.add("col-sm-6")
        khungbanhang.classList.add("col-lg-3")
        khungbanhang.classList.add("khungbanhang")

        //img
        var khunghinh = document.createElement('div')
        khunghinh.classList.add('flexing1')
        var hinhanh = document.createElement('img')
        hinhanh.setAttribute('src',arrobj[i].img)
        hinhanh.style.width="97%"
        hinhanh.style.height="150px"
        khunghinh.appendChild(hinhanh)

        //tieude
        var tieude= document.createElement('h1')
        tieude.classList.add('tieude')
        tieude.innerHTML=arrobj[i].ten
        //giatien
        var giatien = document.createElement('h2')
        giatien.classList.add('giatien')
        giatien.innerHTML=arrobj[i].giatien
        //nut
        var nut = document.createElement('button')
        nut.classList.add('btn')
        nut.classList.add('btn-primary')
        nut.classList.add('p-3')
        nut.classList.add('center')
        nut.setAttribute('type','button ')
        nut.setAttribute("data-bs-toggle", "modal")
        nut.setAttribute("data-bs-target", "#myModal")

        nut.innerHTML='Thêm vao gio hang'




        
        khungbanhang.appendChild(khunghinh)
        khungbanhang.appendChild(tieude)
        khungbanhang.appendChild(giatien)
        khungbanhang.appendChild(nut)

        document.getElementById('khungchinh').appendChild(khungbanhang)
    }
}

reder();

function redermodel(){
    const arr= document.getElementsByClassName('khungbanhang');
    for(let i=0;i<arr.length;i++){
    document.getElementsByClassName("giatri")[0].innerHTML="1"
        const name= arr[i].getElementsByClassName('tieude')[0].innerHTML
        arr[i].getElementsByClassName('center')[0].addEventListener('click', function(){
            document.getElementsByClassName('modal-title')[0].innerHTML=name    
            document.querySelector('.modal-body img').setAttribute('src', arrobj[i-1].img)
            document.getElementsByClassName('ten')[0].innerHTML="<b>Tên:"+name+"</b>"
            document.getElementsByClassName('gioitinh')[0].innerHTML="<b>Giới tính: Nam</b>"
            document.getElementsByClassName('ten')[0].innerHTML="<b>Tên:"+name+"</b>"
            document.getElementsByClassName('thangtuoi')[0].innerHTML="<b>Thang tuoi: 30 tháng tuổi</b>"

        })      
    }
}
redermodel()

document.getElementsByClassName('giam')[0].addEventListener('click',function(){
    var c = parseInt(document.getElementsByClassName("giatri")[0].innerHTML)
    if(c>0){
        document.getElementsByClassName("giatri")[0].innerHTML=--c+""
    }
    else{
        return;
    }
})

document.getElementsByClassName('tang')[0].addEventListener('click',function(){
    var c = parseInt(document.getElementsByClassName("giatri")[0].innerHTML)
    if(c>0){
        document.getElementsByClassName("giatri")[0].innerHTML=++c+""
    }
    else{
        return;
    }
})

var shop=[
    
    "<tr><th>Ten</th><th>So Luong</th><th>Tuy chon</th></tr>",""
]

function dathang(){
    document.getElementsByClassName('dathang')[0].addEventListener('click',function(){
        const gia= ""
        const name=document.getElementsByClassName('ten')[0].textContent
        const sl = parseInt(document.getElementsByClassName('giatri')[0].textContent)
        const chuoi = "<tr><td>"+name+"</td><td>"+sl+"</td><td><button>Huy</button></td></tr>"
        shop.push(chuoi)
        noichuoi()
    })
    huuysp()
}

var chuoi=""

function noichuoi(){
    chuoi=""
    for(let i=0;i<shop.length;i++){
        chuoi+=shop[i]
    }
    document.getElementById('bangne').innerHTML=chuoi
}

noichuoi()

dathang();


function huuysp(){
    const c=document.querySelectorAll("#bangne tr")
    console.log(c)
    for(let i=0;i<c.length;i++){
        c[i].addEventListener("click", function(){
        })
    }
}

function duachuot(){
    const ch=document.getElementsByClassName('fa-cart-shopping ')[0]
    console.log(ch)
    ch.addEventListener("mouseover", function(){
        const c=document.querySelectorAll("#bangne tr td button")
        for(let i=0;i<c.length;i++){
            c[i].setAttribute("type", "button")
            c[i].addEventListener("click", function(){
                const d=document.querySelectorAll("#bangne tr")[i+1]
                d.innerHTML=""
            })
        }
    })
}

duachuot()


