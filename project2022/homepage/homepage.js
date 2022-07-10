
function exit_btn(){
    window.location.href="E:/work/project2022/index/index.html";
}
function road_info_btn(){
    document.getElementById("my-h2").style.display="none"
    document.getElementById("road-info").style.display="inline"
    document.getElementById("road-inspection").style.display="none"
    document.getElementById("sunhai-manage").style.display="none"
    document.getElementById("box-item1").style.backgroundColor=""
    document.getElementById("box-item2").style.backgroundColor=""
    document.getElementById("box-item3").style.backgroundColor=""
    document.getElementById("box-item4").style.backgroundColor=""
    document.getElementById("box-item1").style.backgroundColor="40A9FF"
}
function road_check_btn(){
    document.getElementById("my-h2").style.display="none"
    document.getElementById("road-info").style.display="none"
    document.getElementById("road-inspection").style.display="flex"
    document.getElementById("sunhai-manage").style.display="none"
    document.getElementById("box-item1").style.backgroundColor=""
    document.getElementById("box-item2").style.backgroundColor=""
    document.getElementById("box-item3").style.backgroundColor=""
    document.getElementById("box-item4").style.backgroundColor=""
    document.getElementById("box-item2").style.backgroundColor="40A9FF"
}
function damage_management_btn(){
    document.getElementById("my-h2").style.display="none"
    document.getElementById("road-info").style.display="none"
    document.getElementById("road-inspection").style.display="none"
    document.getElementById("sunhuai-sel-box").style.display="inline"
    document.getElementById("sunhai-manage").style.display="flex"
    document.getElementById("box-item1").style.backgroundColor=""
    document.getElementById("box-item2").style.backgroundColor=""
    document.getElementById("box-item3").style.backgroundColor=""
    document.getElementById("box-item4").style.backgroundColor=""
    document.getElementById("box-item3").style.backgroundColor="40A9FF"
}
function statement_btn(){
    window.location.href="E:/work/project2022/baogao.html";
}
function daily_btn(){
    document.getElementById("item-daily").style.backgroundColor="40A9FF"
    document.getElementById("daily-inspection").style.display="flex"
    plan_que_btn()
}
function in_colse_btn(){
    document.getElementById("xincha-window").style.display="none"
}
function sunhuai_que_btn(){
    document.getElementById("item-sunque").style.backgroundColor="40A9FF"
    document.getElementById("sunhuai-window").style.display="flex"
}
function sunhuai_type_btn(){
    window.location.href="http://www.jianbiaoku.com/webarbs/book/10656/4747122.shtml";
}