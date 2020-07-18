//吸顶
//当滚动条发生变化时触发
onscroll = function(){
    //获取当前滚动条的位置
    let scr = document.documentElement.scrollTop || document.body.scrollTop;
    //获取导航
    let navR = document.getElementsByClassName("nav-box")[0];
    //获取导航栏框
    let navRs = document.getElementsByClassName("nav-box-n")[0]
    //获取搜索栏
    let searchR = document.querySelector(".form-box")
    // 获取购物袋
    let gwd = document.querySelector(".gwd")
    // console.log(searchR);
    
    //当滚动条大于150的时候完成吸顶效果
    if(scr>=150){
        navR.style = `position:fixed;border: #000 solid;border-width: 0px 0 2px 0;`;
        navR.style.top = "0px";
        searchR.style="margin:5px 20px 0 20px;float:left";
        gwd.style.display="block";
        // 导航栏框
        navRs.style.border="none"
        // console.log(navRs);
        
    }else if(scr<150){
        navR.style = `position:relative ;  border:none;border-width: 1px 0 ;`;
        searchR.style="margin:5px 0 0 0px;float:right";
        navRs.style = `border: #efeded solid;
                        border-width: 1px 0 ;`
        
        gwd.style.display="none";
    }

    // 返回顶部
    //获取返回顶部的栏
    let topTit = document.querySelector(".gotop");
    //获取返回顶部
    let topBtn = document.querySelector(".ffdb");
    if(scr>=800){
        topTit.style.display = "block";
    }else if(scr<800){
        topTit.style.display = "none";
    }
    //定义定时器名
    let MyTime = null

    topBtn.onclick = function(){
       MyTime = setInterval(function(){
            // scr = Math.floor(scr/=10)
            scr-=100
            if(scr<=0){
                clearInterval(MyTime)
            }
            window.scrollTo(0,scr)
       },5)
    }
}


//导航显示和隐藏
// let xlBox = document.getElementsByClassName("xl-box")
// let navList = document.querySelectorAll(".nav-list li")
// for(let i = 0;i<xlBox.length;i++){
//     navList[i].onmouseenter=function(event){
//         let e = event || window.event
//         xlBox[i].style.zIndex=99
//         xlBox[i].style.opacity=1
//         e.stopPropagation()
//         e.cancelBubble = true

//     }
//     navList[i].onmouseleave=function(event){
//         let e = event || window.event
//         e.stopPropagation()
//         xlBox[i].style.zIndex=-2
//         xlBox[i].style.opacity=0
//         e.cancelBubble = true
//     }
// }