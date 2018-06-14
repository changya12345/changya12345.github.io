//banner部分轮播事件
var mySwiper = new Swiper ('.banner .swiper-container', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})


//京东新闻轮播事件
function x(){
	$(".JDnews .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
}
function c(){
	$(".JDnews .center .text").eq(0).appendTo(".JDnews .center");
}
function v(){
	$(".JDnews .center .text").css({"transform":"translateY(0px)","transition":"0s"});
}
setInterval(function(){
	x();
},3000);
setInterval(function(){
	c();
	v();
},3500);


//首页京东秒杀倒计时
//function run(){
//          var span1 =document.querySelector(".h");
//          var span2 =document.querySelector(".m");
//          var span3 =document.querySelector(".s");
//          var date1=new Date("2018-5-31 15:10:00");//目标时间
//          var date2=new Date();//当前时间
//          var date1time=date1.getTime();//目标时间时间戳
//          var date2time=date2.getTime();//当前时间时间戳
//          var time=date1time-date2time;//时间戳差值
//          var days=Math.floor(time/(1000*60*60*24));//天数
//          var daysyu=time%(1000*60*60*24);//余下毫秒数
//          var hours=Math.floor(daysyu/(1000*60*60));
//          var hoursyu=daysyu%(1000*60*60);
//          var minutes=Math.floor(hoursyu/(1000*60));
//          var minutesyu=hoursyu%(1000*60);
//          var sdconds=Math.floor(minutesyu/(1000));
//          span1.innerHTML=hours;
//          span2.innerHTML=minutes;
//          span3.innerHTML=sdconds;
//      }
//console.log(span1);
//      run();
//      t=setInterval(function(){
//          run();
//      },1000);
//      if(span1.innerHTML=0,span2.innerHTML=0,span3.innerHTML=0){
//      	clearInterval(t);
//      }

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 5, 1, 18),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());




//京东直播滑动事件
var swiper = new Swiper('.jingdongzhibo .swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }
});


//为你推荐部分
var shopp=document.querySelector("#shop");
if(shopp !=null){
    new Vue({
        el:"#shop",
        data:{
            arrs:[
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/001.jpg",ico:"ziying"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/002.jpg"},
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/003.jpg"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/004.jpg"},
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/005.jpg"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/006.jpg"},
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/007.jpg"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/008.jpg"},
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/009.jpg"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/010.jpg"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/012.jpg"},
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/013.jpg"},
                {name:"安昕 良选男士船袜5双装 中筒棉袜上午男娃子子涵透气短袜 船",price:"￥21.80",img:"img/weinituijian/014.jpg"},
                {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45cm",price:"￥21.80",img:"img/weinituijian/015.jpg"}
            ]
        }
    })
}

//sort 的v-for
var shou=document.querySelector("#shou");
if(shou !=null){
    new Vue({
        el:"#shou",
        data:{
            ars1:[
                {name:"电风扇",img:"sotr/rementuijian/01.png",link:""},
                {name:"手机",img:"sotr/rementuijian/02.jpg",link:""},
                {name:"空调",img:"sotr/rementuijian/03.png",link:""},
                {name:"充电宝",img:"sotr/rementuijian/04.png",link:""},
                {name:"蓝牙耳机",img:"sotr/rementuijian/05.jpg",link:""},
                {name:"蚊帐",img:"sotr/rementuijian/06.png",link:""},
                {name:"凉席",img:"sotr/rementuijian/07.png",link:""},
                {name:"耳机",img:"sotr/rementuijian/08.png",link:""},
                {name:"电饭煲",img:"sotr/rementuijian/09.jpg",link:""},
                {name:"空调挂机",img:"sotr/rementuijian/10.png",link:""},
                {name:"路由器",img:"sotr/rementuijian/11.png",link:""},
                {name:"空调扇",img:"sotr/rementuijian/12.png",link:""},
                {name:"男鞋",img:"sotr/rementuijian/13.png",link:""},
                {name:"热水器",img:"sotr/rementuijian/14.png",link:""},
                {name:"防晒",img:"sotr/rementuijian/15.jpg",link:""}

            ],
            ars11:[
                {name:"冰箱",img:"sotr/rementuijian/16.png",link:""},
                {name:"洗衣机",img:"sotr/rementuijian/17.png",link:""},
                {name:"电视",img:"sotr/rementuijian/18.png",link:""}

            ],
            ars111:[
                {name:"华为手机",img:"sotr/rementuijian/19.png",link:""},
                {name:"小米手机",img:"sotr/rementuijian/20.png",link:""},
                {name:"苹果",img:"sotr/rementuijian/21.png",link:""}

            ],
            shoujishuma:[
                {name:"小米",img:"sotr/main/1.png",link:""},
                {name:"华为",img:"sotr/main/2.jpg",link:""},
                {name:"荣耀",img:"sotr/main/3.jpg",link:""},
                {name:"iPhone",img:"sotr/main/4.jpg",link:""},
                {name:"vivo",img:"sotr/main/5.png",link:""},
                {name:"oppo",img:"sotr/main/6.png",link:""},
                {name:"魅族",img:"sotr/main/7.jpg",link:""},
                {name:"三星",img:"sotr/main/8.png",link:""},
                {name:"一加",img:"sotr/main/9.jpg",link:""},
                {name:"360手机",img:"sotr/main/10.jpg",link:""},
                {name:"锤子手机",img:"sotr/main/11.jpg",link:""},
                {name:"努比亚",img:"sotr/main/12.jpg",link:""}
            ],
            shoujishuma1:[
                {name:"老人机",img:"sotr/main/13.jpg",link:""},
                {name:"手机",img:"sotr/main/14.jpg",link:""},
                {name:"全面屏手机",img:"sotr/main/15.jpg",link:""},
                {name:"游戏手机",img:"sotr/main/16.jpg",link:""},
                {name:"拍照手机",img:"sotr/main/17.jpg",link:""},
                {name:"对讲机",img:"sotr/main/18.jpg",link:""},
                {name:"京东回收",img:"sotr/main/19.jpg",link:""},
                {name:"女性手机",img:"sotr/main/20.jpg",link:""},
                {name:"京东维修",img:"sotr/main/21.jpg",link:""},
            ],
            shoujishuma2:[
                {name:"老人机",img:"sotr/main/22.png",link:""},
                {name:"手机",img:"sotr/main/23.png",link:""},
                {name:"全面屏手机",img:"sotr/main/24.jpg",link:""},
                {name:"游戏手机",img:"sotr/main/25.jpg",link:""}
            ],
            shoujishuma3:[
                {name:"数据线",img:"sotr/main/26.jpg",link:""},
                {name:"手机储存卡",img:"sotr/main/27.jpg",link:""},
                {name:"充电宝",img:"sotr/main/28.jpg",link:""},
                {name:"手机贴膜",img:"sotr/main/29.jpg",link:""},
                {name:"手机耳机",img:"sotr/main/30.jpg",link:""},
                {name:"蓝牙耳机",img:"sotr/main/31.jpg",link:""},
                {name:"手机支架",img:"sotr/main/32.jpg",link:""},
                {name:"手机饰品",img:"sotr/main/33.jpg",link:""},
                {name:"车在配件",img:"sotr/main/34.jpg",link:""},
                {name:"充电器",img:"sotr/main/35.jpg",link:""},
                {name:"手机电池",img:"sotr/main/36.jpg",link:""},
                {name:"创意配件",img:"sotr/main/37.jpg",link:""},
                {name:"拍照配件",img:"sotr/main/38.jpg",link:""},
                {name:"苹果周边",img:"sotr/main/39.jpg",link:""},
                {name:"手机壳保护套",img:"sotr/main/40.jpg",link:""},
                {name:"无线充电器",img:"sotr/main/41.jpg",link:""},
                {name:"背夹充电宝",img:"sotr/main/42.jpg",link:""},
                {name:"手机转接",img:"sotr/main/43.jpg",link:""},
            ],
            shoujishuma4:[
                {name:"单反相机",img:"sotr/main/44.jpg",link:""},
                {name:"数码相机",img:"sotr/main/45.jpg",link:""},
                {name:"拍立得",img:"sotr/main/46.jpg",link:""},
                {name:"户外器材",img:"sotr/main/47.jpg",link:""},
                {name:"单电/微单相机",img:"sotr/main/48.jpg",link:""},
                {name:"摄像机",img:"sotr/main/49.jpg",link:""},
                {name:"运动相机",img:"sotr/main/50.jpg",link:""},
                {name:"镜头",img:"sotr/main/51.jpg",link:""},
                {name:"影棚器材",img:"sotr/main/52.jpg",link:""},
                {name:"冲印服务",img:"sotr/main/53.png",link:""}
            ],
            shoujishuma5:[
                {name:"便携/无线音箱",img:"sotr/main/54.jpg",link:""},
                {name:"音箱/音响",img:"sotr/main/55.jpg",link:""},
                {name:"拍立得",img:"sotr/main/56.jpg",link:""},
                {name:"户外器材",img:"sotr/main/57.jpg",link:""},
                {name:"单电/微单相机",img:"sotr/main/58.jpg",link:""},
                {name:"摄像机",img:"sotr/main/59.jpg",link:""},
                {name:"运动相机",img:"sotr/main/60.jpg",link:""}
            ],
            jiayongdianqi1:[
                {name:"电水壶/热水瓶",img:"sotr/jiayongdianqi/01.jpg",link:""},
                {name:"电压力锅",img:"sotr/jiayongdianqi/02.jpg",link:""},
                {name:"电饭煲",img:"sotr/jiayongdianqi/03.jpg",link:""},
                {name:"电磁炉",img:"sotr/jiayongdianqi/04.jpg",link:""},
                {name:"微波炉",img:"sotr/jiayongdianqi/05.jpg",link:""},
                {name:"电饼铛",img:"sotr/jiayongdianqi/06.jpg",link:""},
                {name:"豆浆机",img:"sotr/jiayongdianqi/07.jpg",link:""},
                {name:"多用途锅",img:"sotr/jiayongdianqi/08.jpg",link:""},
                {name:"料理机",img:"sotr/jiayongdianqi/09.jpg",link:""},
                {name:"榨汁机/原汁机",img:"sotr/jiayongdianqi/10.jpg",link:""},
                {name:"电烤箱",img:"sotr/jiayongdianqi/11.jpg",link:""},
                {name:"养生壶/煎药壶",img:"sotr/jiayongdianqi/12.jpg",link:""},
                {name:"电炖锅",img:"sotr/jiayongdianqi/13.jpg",link:""},
                {name:"电烧烤炉",img:"sotr/jiayongdianqi/14.jpg",link:""},
                {name:"面包机",img:"sotr/jiayongdianqi/15.jpg",link:""},
                {name:"咖啡机",img:"sotr/jiayongdianqi/16.jpg",link:""},
                {name:"煮蛋器",img:"sotr/jiayongdianqi/17.jpg",link:""},
                {name:"电热饭盒",img:"sotr/jiayongdianqi/18.jpg",link:""},
                {name:"其他厨房电器",img:"sotr/jiayongdianqi/19.jpg",link:""},
                {name:"面条机",img:"sotr/jiayongdianqi/20.jpg",link:""},
                {name:"酸奶机",img:"sotr/jiayongdianqi/21.jpg",link:""},
                {name:"空气炸锅",img:"sotr/jiayongdianqi/22.jpg",link:""},
                {name:"蔬果解毒机",img:"sotr/jiayongdianqi/23.jpg",link:""},

            ],
            jiayongdianqi2:[
                {name:"电吹风",img:"sotr/jiayongdianqi/01.jpg",link:""},
                {name:"剃须刀",img:"sotr/jiayongdianqi/02.jpg",link:""},
                {name:"理发器",img:"sotr/jiayongdianqi/03.jpg",link:""},
                {name:"足浴盆",img:"sotr/jiayongdianqi/04.jpg",link:""},
                {name:"剃/脱毛器",img:"sotr/jiayongdianqi/05.jpg",link:""},
                {name:"按摩器",img:"sotr/jiayongdianqi/06.jpg",link:""},
                {name:"卷/直发器",img:"sotr/jiayongdianqi/07.jpg",link:""},
                {name:"按摩椅",img:"sotr/jiayongdianqi/08.jpg",link:""},
                {name:"口腔护理",img:"sotr/jiayongdianqi/09.jpg",link:""},
                {name:"电子秤",img:"sotr/jiayongdianqi/10.jpg",link:""},
                {name:"美容仪",img:"sotr/jiayongdianqi/11.jpg",link:""},
                {name:"其他健康电器",img:"sotr/jiayongdianqi/12.jpg",link:""}
            ],
            jiayongdianqi3:[
                {name:"全部",img:"sotr/jiayongdianqi/01.jpg",link:""},
                {name:"双门冰箱",img:"sotr/jiayongdianqi/02.jpg",link:""},
                {name:"对开门冰箱",img:"sotr/jiayongdianqi/03.jpg",link:""},
                {name:"十字对开门",img:"sotr/jiayongdianqi/04.jpg",link:""},
                {name:"三门冰箱",img:"sotr/jiayongdianqi/05.jpg",link:""},
                {name:"单门冰箱",img:"sotr/jiayongdianqi/06.jpg",link:""},
                {name:"多门冰箱",img:"sotr/jiayongdianqi/07.jpg",link:""},
                {name:"冷柜/冰吧",img:"sotr/jiayongdianqi/08.jpg",link:""},
                {name:"冰箱配件",img:"sotr/jiayongdianqi/09.jpg",link:""},
                {name:"红酒柜",img:"sotr/jiayongdianqi/10.jpg",link:""},
            ],
            jiayongdianqi4:[
                {name:"波轮洗衣机",img:"sotr/jiayongdianqi/01.jpg",link:""},
                {name:"滚筒洗衣机",img:"sotr/jiayongdianqi/02.jpg",link:""},
                {name:"全部",img:"sotr/jiayongdianqi/03.jpg",link:""},
                {name:"洗烘一体机",img:"sotr/jiayongdianqi/04.jpg",link:""},
                {name:"迷你洗衣机",img:"sotr/jiayongdianqi/05.jpg",link:""},
                {name:"洗衣机配件",img:"sotr/jiayongdianqi/06.jpg",link:""},
                {name:"烘干机",img:"sotr/jiayongdianqi/07.jpg",link:""},
            ]
        }
    })
}


//返回顶部
var top1=document.querySelector("#top");
if(top1 !=null){
    top1.addEventListener("click",function(){
        var t =setInterval(function(){
            document.body.scrollTop=document.body.scrollTop-20;
            document.documentElement.scrollTop=document.documentElement.scrollTop-20;
            if(document.body.scrollTop==0){
                clearInterval(t)
            }
        },10)

    })
    window.onscroll=function(){
        if(top1 !=null){
            if(document.body.scrollTop>300){
                top1.style.display="inline-block"
            }else{
                top1.style.display="none"

            }
        }
    }
}


//顶部搜索条滚动变色事件
var search=document.querySelector(".search");
window.onscroll=function(){
    if(search !=null){
        if(document.body.scrollTop>115){
            search.style.backgroundColor="red";
            search.style.top="0";
        }else{
            search.style.background="none";
            search.style.top="auto";

        }
    }
}



//分类页选项卡部分
var sortnav=document.querySelectorAll(".sort .main .sort-nav>li");
var sortlist=document.querySelectorAll(".sort .main .sort-list>div");


for(var i=0;i<sortnav.length;i++){
    sortnav[i].index=i;
    sortnav[i].onclick=function(){
        for(var i=0;i<sortlist.length;i++){
            sortnav[i].classList.remove("active");
            sortlist[i].classList.remove("active");

        }
        sortnav[this.index].classList.add("active");
        sortlist[this.index].classList.add("active");

    }
}

//广告条点击消失
var ad=document.querySelector(".ad");
var span=document.querySelector(".ad span");
if(span !=null){
    span.onclick=function(){
        ad.style.display="none";
    }
}






//当前页面的高度
var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;


var asd9 = document.querySelector(".sort .main .col-xs-9")
var asd3 = document.querySelector(".sort .main .col-xs-3")
if(asd9 !=null){
    asd9.style.height = pageHeight-50-50+"px";
    asd3.style.height = pageHeight-50-50+"px";
}






