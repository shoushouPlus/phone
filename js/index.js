var countDown=60;
function setTime(val) {
    if (countDown == 0) {
        val.removeAttribute("disabled");
        val.value="获取验证码";
        countDown = 60;
        return;
    } else {
        val.setAttribute("disabled", true);
        val.value="重新发送(" + countDown + ")";
        countDown--;
    }
    setTimeout(function() {
        setTime(val)
    },1000)
}

document.addEventListener('DOMContentLoaded',function () {
    
    //点击注册显示注册框
    var oP=document.querySelector('#p2');
    oP.addEventListener('touchstart',function () {
        $('#sign-box').hide();
        $('#registered-box').show();
    });
    //点击返回登陆显示登陆框
    var oReturn=document.querySelector('#return');
    oReturn.addEventListener('touchstart',function () {
        $('#registered-box').hide();
        $('#sign-box').show();
    })
},false);

