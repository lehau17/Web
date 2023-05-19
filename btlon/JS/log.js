//mang quan ly tai khoan
var dangnhap= new Boolean
var dangnhap123=""
var qlkho=[];
var arracc=
[
    {
        name:'Hau',
        email:'hau@gmail.com',
        pass: "111111"
    },
    {
        name:"Chang",
        email:"chang@gmail.com",
        pass: "111111"
    }
]


const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container1');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });

//Bien kiem soat
var kt = false
document.getElementById('email').onkeyup= function(){
    const value = document.getElementById('email').value;
    const eg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!eg.test(value)){
        document.getElementById('dese').innerHTML='Địa chỉ email không hợp lệ'
        kt=false
    }
    else{
        document.getElementById('dese').innerHTML=''
        kt=true
    }
}

document.getElementById('pass').onkeyup= function(){
    const value = document.getElementById('pass').value;
    if(value===''){
        document.getElementById('desp').innerHTML=''
    }
    const eg = /.{6,}/
    if(!eg.test(value)){
        document.getElementById('desp').innerHTML='PassWord phải chứa 6 kí tự trở lên'
        kt=false
    }
    else{
        document.getElementById('desp').innerHTML=''
        kt=true
    }
}

function signinn(){
    if(kt===true){
        const emialValue = document.getElementById('email').value
        const passValue= document.getElementById('pass').value
        for (let i = 0; i < arracc.length; i++) {
            if(arracc[i].email===emialValue){
                if(arracc[i].pass===passValue){
                    dangnhap = true
                    document.getElementById('signin').onclick= function(){
                        document.getElementById("container1").classList.toggle("xuat")
                    }
                    document.getElementById('sign').innerHTML="Hi!"+arracc[i].name+'<a>Đăng xuất</a>'      
                }
                else{
                    document.getElementById('des').innerHTML="Tên tài khoản hoặc mật khẩu không chính xác"
                }
            }else{
                document.getElementById('des').innerHTML="Tên tài khoản hoặc mật khẩu không chính xác"
            }       
        }
    }           
}


// đăng nhập
document.getElementById('signin').addEventListener('click',signinn)


function fetchData() {
    return new Promise((resolve, reject) => {
      
      const data = signinn();
  
      if (data===true) {
        // Nếu dữ liệu được trả về từ server
        resolve(data);
      } else {
        // Nếu không có dữ liệu được trả về từ server
        reject("Không có dữ liệu");
      }
    });
  }
  
  // Sử dụng Promise
fetchData()
    .then((data) => {
        window.location.href = "http://127.0.0.1:5500/HTML/main.html";   
        load()             
    })
    .catch((data)=>{
        console.log("null",+data)
    });
    
fetchData()

//form đăng ký
document.getElementById('creN').onkeyup= function(){
    kt=false;
    const value = document.getElementById('creN').value;
    const eg = /^\w{3,}\d?$/
    if(!eg.test(value)){
        document.getElementById('des-creN').innerHTML='Ten phai co 3 chu cai tro len'
        kt=false
    }
    else{
        document.getElementById('des-creN').innerHTML=''
        kt=true
    }
}

document.getElementById('creE').onkeyup=function(){
    const value = document.getElementById('creE').value;
    const eg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!eg.test(value)){
        document.getElementById('des-creE').innerHTML='Địa chỉ email không hợp lệ'
        kt=false
    }
    else{
        document.getElementById('des-creE').innerHTML=''
        kt=true
    }
}

document.getElementById('creP').onkeyup=function(){
    const value = document.getElementById('creP').value;
    const eg = /^.{6,}$/
    if(!eg.test(value)){
        document.getElementById('des-creP').innerHTML='PassWord phải chứa 6 kí tự trở lên'
        kt=false
    }
    else{
        document.getElementById('des-creP').innerHTML=''
        kt=true
    }
}

// đăng ký
document.getElementById('signup').onclick=function(){
    if(kt===true){
        const nameValue = document.getElementById('creN').value
        const emialValue = document.getElementById('creE').value
        const passValue= document.getElementById('creP').value
        for (let i = 0; i < arracc.length; i++) {
            if(emialValue===arracc[i].email){
                document.getElementById('desin').innerHTML="Email da duoc su dung"
                return;
            }
        }
        if(nameValue===""){
            document.getElementById('desin').innerHTML="Ban chua nhap du lieu"
            return;
        }
        if(passValue===""){
            document.getElementById('desin').innerHTML="Ban chua nhap du lieu"
            return;
        }
        if(emialValue===""){
            document.getElementById('desin').innerHTML="Ban chua nhap du lieu"  
            return;         
        }
        var obj={}
        obj.name=nameValue
        obj.email=emialValue
        obj.pass=passValue
        arracc.push(obj)
        alert("Tạo tài khoản thành công")
        window.location.href='http://127.0.0.1:5500/HTML/log_in_out.html'
        
    }
    else{
        document.getElementById('desin').innerHTML="Ban chua nhap du lieu"
    }  
}



function dongsign(){
    document.getElementById("sign").onclick=function(){
        document.getElementById("container1").classList.toggle("xuat")
    }
}

dongsign()

