console.log("nam mo a di da phat")

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
//hien bang
var chuoi=""

function managePro(){
    var header=document.getElementsByClassName("bangsp")[0].innerHTML
    for(var i=0;i<arrobj.length;i++){
        if(i===0){
            header+="<tbody><tr><td>"+arrobj[i].ten+"</td><td>"+arrobj[i].ten+"</td><td>"+arrobj[i].giatien+"</td><td><button>Xóa</button><button>Sửa</button></td></td></tr>"
        }
        else if(i===arrobj.length-1){
            header+="<tr><td>"+arrobj[i].ten+"</td><td>"+arrobj[i].ten+"</td><td>"+arrobj[i].giatien+"</td><td><button>Xóa</button><button>Sửa</button></td></td></tr></tbody>"

        }
        else {
            header+="<tr><td>"+arrobj[i].ten+"</td><td>"+arrobj[i].ten+"</td><td>"+arrobj[i].giatien+"</td><td><button>Xóa</button><button>Sửa</button></td></td></tr>"

        }
    }
    document.getElementsByClassName('bangsp')[0].innerHTML=header
}

managePro();

//thêm nhân viên 
document.getElementsByClassName('themNV')[0].addEventListener('click', function(){
    var div= document.createElement('div');
    div.classList.add('card')
    div.classList.add('m-auto')
    div.classList.add('mb-5')
    div.style.width="400px"

    //img
    var img = document.createElement('img')
    img.classList.add('card-img-top')
    img.setAttribute('src',document.getElementsByClassName("txthinhanh")[0].value)
    img.style.width='100%'
    img.style.height='400px'
    div.appendChild(img)

    //div con
    var divcon = document.createElement('div')
    divcon.classList.add('card-body')
    div.appendChild(divcon)
    //inner of divcon
    var h4=document.createElement('h4')
    h4.classList.add('card-title')
    h4.innerHTML =document.getElementsByClassName('txtten')[0].value
    divcon.appendChild(h4)

    var p= document.createElement('p')
    p.classList.add('card-text')
    p.innerHTML =document.getElementsByClassName('txtchucvi')[0].value
    divcon.appendChild(p)
    var a=document.createElement('a')
    a.classList.add('btn')
    a.classList.add('btn-primary')
    a.setAttribute('href', "#")
    a.setAttribute('data-bs-toggle', 'modal')
    a.setAttribute('data-bs-target', '#mymodal1')
    a.innerHTML='See profile'
    divcon.appendChild(a)
    var button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.classList.add('delete-cus')
    button.classList.add('ml-2')



    button.setAttribute('type', 'button')
    button.innerHTML='Xoa'
    divcon.appendChild(button)

    //div chua
    var divchua = document.createElement('div')
    divchua.classList.add('col-xl-6')
    divchua.classList.add('col-md-12')
    divchua.classList.add('chinhpad')
    divchua.classList.add('customer')
    divchua.appendChild(div)
    //khung nv
    console.log(document.getElementsByClassName('khungnv')[0].appendChild(divchua))
})

function deleteCus(){
    const arrde = document.getElementsByClassName('customer')
    for(let i=0; i<arrde.length; i++){
        document.getElementsByClassName('delete-cus')[i].addEventListener('click',function(){
            document.getElementsByClassName('card')[i].innerHTML=""
        })
    }
}

deleteCus()

// see frofile
// function seeI4(){
//     const arrde = document.getElementsByClassName('customer')
//     for(let i=0; i<arrde.length; i++){
//         document.getElementsByClassName('seei4')[i].addEventListener('click',function(){
//             document.getElementById('myModal1')

//         })
//     }
// }

// seeI4() 

document.getElementsByClassName('luu')[0].addEventListener('click',function(){
    document.getElementsByClassName('add1')[0].innerHTML= document.getElementById('address').value
    document.getElementsByClassName('sdt1')[0].innerHTML= document.getElementById('sdt').value
    document.getElementsByClassName('tg1')[0].innerHTML= document.getElementById('timelm').value
});
function xoasp(){
    const c=document.querySelectorAll('.bangsp tbody tr td button:nth-child(1)')
    for(let i=0; i<c.length; i++){
        c[i].addEventListener('click',function(){
            const a = document.querySelectorAll('.bangsp tbody tr')[i].innerHTML=''
            arrobj[i]=null
        })
    }
}
xoasp()
const c=document.querySelectorAll('.bangsp tbody tr td button:nth-child(2)')
    for(let i=0; i<c.length; i++){
            c[i].setAttribute('data-bs-toggle','modal');
            c[i].setAttribute('data-bs-target','#myModal4');
    }

    function suasp(){
    const c=document.querySelectorAll('.bangsp tbody tr td button:nth-child(2)')
    for(let i=0; i<c.length; i++){
        c[i].addEventListener('click',function(){
            document.getElementsByClassName('sp123')[0].innerHTML = 'Sản Phẩm'
            const form =document.getElementsByClassName('phom')[1]
            form.innerHTML = ""
            const label=document.createElement('label')
            label.innerHTML="Tên sản phẩm"
            form.appendChild(label)
            const input=document.createElement('input')
            input.setAttribute('type', 'text')
            input.value=arrobj[i].ten
            form.appendChild(input)

            const label1=document.createElement('label')
            label1.innerHTML="Giá thành"
            form.appendChild(label1)
            const input1=document.createElement('input')
            input1.setAttribute('type', 'text')
            input1.value=arrobj[i].giatien
            form.appendChild(input1)

            const nut =document.createElement('button')
            nut.classList.add('btn-primary')
            nut.classList.add('btn')
            nut.classList.add('p-3')
            nut.innerHTML="sửa"
            nut.setAttribute('data-bs-dismiss','modal')
            
            nut.onclick=function(){
                const z=document.querySelectorAll('.bangsp tbody tr td:nth-child(1)')[i]
                z.innerHTML=input.value
                arrobj[i].ten=input.value
                arrobj[i].giatien=input1.value
                const z1=document.querySelectorAll('.bangsp tbody tr td:nth-child(2)')[i]
                z1.innerHTML=input1.value
                
            }
            form.appendChild(nut)

           

            
        })
    }
}
suasp()

