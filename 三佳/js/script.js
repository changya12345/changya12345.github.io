//返回顶部
var top1=document.querySelector("#top");
console.log(top1)
if(top1 !=null){
    top1.addEventListener("click",function(){
        var t =setInterval(function(){
            document.body.scrollTop=document.body.scrollTop-30;
            document.documentElement.scrollTop=document.documentElement.scrollTop-30;
            if(document.body.scrollTop==0){
                clearInterval(t)
            }
        },10)

    })
    window.onscroll=function(){
        if(top1 !=null){
            if(document.body.scrollTop>1000){
                top1.style.display="inline-block"
            }else{
                top1.style.display="none"

            }
        }
    }
}
//分类页  家用电器
var shopj=document.querySelector(".sort #shop-J");
if(shopj !=null){
    new Vue({
        el:"#shop-J",
        data:{
            jiayongdianqi:[
                {name:"锅具",img:"sort-img/chufangdianqi/01.png",},
                {name:"容器餐具",img:"sort-img/chufangdianqi/02.png",},
                {name:"刀具",img:"sort-img/chufangdianqi/03.png",},
                {name:"其他",img:"sort-img/chufangdianqi/04.png",},
                {name:"榨汁/搅拌",img:"sort-img/chufangdianqi/05.png",},
                {name:"电磁炉",img:"sort-img/chufangdianqi/06.png",},
                {name:"豆浆机",img:"sort-img/chufangdianqi/07.png",},
                {name:"电饭煲",img:"sort-img/chufangdianqi/08.png",}
            ]
        }
    })
}
var shopjB=document.querySelector(".sort #shop-JB");
if(shopjB !=null){
    new Vue({
        el:"#shop-JB",
        data:{
            jiayongdianqi1:[
                {name:"电压力锅",img:"sort-img/chufangdianqi/09.png",},
                {name:"电炖/电蒸锅",img:"sort-img/chufangdianqi/10.png",},
                {name:"微波炉/烤箱",img:"sort-img/chufangdianqi/12.png",},
                {name:"电水壶",img:"sort-img/chufangdianqi/13.png",},
                {name:"电饼铛",img:"sort-img/chufangdianqi/14.png",},
                {name:"烟机灶具",img:"sort-img/chufangdianqi/15.png",},
                {name:"其他电器",img:"sort-img/chufangdianqi/16.png",}
            ]
        }
    })
}
var shopG=document.querySelector(".sort #shop-G");
if(shopG !=null){
    new Vue({
        el:"#shop-G",
        data:{
            jiagujiashi:[
                {name:"收纳用品",img:"sort-img/jiajvjiashi/01.png",},
                {name:"晾衣架",img:"sort-img/jiajvjiashi/02.png",},
                {name:"纸制品",img:"sort-img/jiajvjiashi/03.png",},
                {name:"其他",img:"sort-img/jiajvjiashi/04.png",},
                {name:"婴幼用品",img:"sort-img/jiajvjiashi/05.png",},
                {name:"拖把",img:"sort-img/jiajvjiashi/06.png",},
                {name:"清洁洗剂",img:"sort-img/jiajvjiashi/07.png",},
                {name:"清洁其他",img:"sort-img/jiajvjiashi/08.png",}
            ]
        }
    })
}
var shopGB=document.querySelector(".sort #shop-GB");
if(shopGB !=null){
    new Vue({
        el:"#shop-GB",
        data:{
            jiagujiashi1:[
                {name:"套件",img:"sort-img/jiajvjiashi/09.png",},
                {name:"被子",img:"sort-img/jiajvjiashi/10.png",},
                {name:"凉席",img:"sort-img/jiajvjiashi/11.png",},
                {name:"其他",img:"sort-img/jiajvjiashi/12.png",},
                {name:"床垫",img:"sort-img/jiajvjiashi/13.png",},
                {name:"床/床垫",img:"sort-img/jiajvjiashi/14.png",},
                {name:"餐桌/书桌",img:"sort-img/jiajvjiashi/15.png",},
                {name:"组合家具",img:"sort-img/jiajvjiashi/16.png",},
                {name:"卫浴用品",img:"sort-img/jiajvjiashi/18.png",}
            ]
        }
    })
}
var shopS=document.querySelector(".sort #shop-S");
if(shopS !=null){
    new Vue({
        el:"#shop-S",
        data:{
            jiagujiashi:[
                {name:"电视机",img:"sort-img/jiadianshuma/01.png",},
                {name:"空调",img:"sort-img/jiadianshuma/02.png",},
                {name:"冰箱",img:"sort-img/jiadianshuma/03.png",},
                {name:"洗衣机",img:"sort-img/jiadianshuma/04.png",},
                {name:"挂烫机/熨斗",img:"sort-img/jiadianshuma/05.png",},
                {name:"净化器",img:"sort-img/jiadianshuma/06.png",},
                {name:"其他生活家电",img:"sort-img/jiadianshuma/07.png",},
                {name:"吸尘器",img:"sort-img/jiadianshuma/08.png",}
            ]
        }
    })
}
var shopSB=document.querySelector(".sort #shop-SB");
if(shopSB !=null){
    new Vue({
        el:"#shop-SB",
        data:{
            jiagujiashi1:[
                {name:"热水器",img:"sort-img/jiadianshuma/09.png",},
                {name:"取暖器",img:"sort-img/jiadianshuma/10.png",},
                {name:"其他生活电器",img:"sort-img/jiadianshuma/11.png",},
                {name:"净水器",img:"sort-img/jiadianshuma/12.png",},
                {name:"手机产品",img:"sort-img/jiadianshuma/13.png",},
                {name:"相机",img:"sort-img/jiadianshuma/14.png",},
                {name:"其他数码",img:"sort-img/jiadianshuma/15.png",},
                {name:"镜头",img:"sort-img/jiadianshuma/16.png",},
                {name:"电脑产品",img:"sort-img/jiadianshuma/17.png",}
            ]
        }
    })
}
var shopP=document.querySelector(".sort #shop-P");
if(shopP !=null){
    new Vue({
        el:"#shop-P",
        data:{
            shipinyinliao:[
                {name:"粮油米面",img:"sort-img/shipinyinliao/01.png",},
                {name:"零食",img:"sort-img/shipinyinliao/02.png",},
                {name:"熟食罐头",img:"sort-img/shipinyinliao/03.png",},
                {name:"其他",img:"sort-img/shipinyinliao/04.png",},
                {name:"宠物食品",img:"sort-img/shipinyinliao/05.png",},
                {name:"食品生鲜",img:"sort-img/shipinyinliao/06.png",},
                {name:"保健品",img:"sort-img/shipinyinliao/07.png",},
                {name:"酒类",img:"sort-img/shipinyinliao/08.png",}
            ]
        }
    })
}
var shopF=document.querySelector(".sort #shop-F");
if(shopF !=null){
    new Vue({
        el:"#shop-F",
        data:{
            fushixiebao:[
                {name:"男士外套",img:"sort-img/fushixiebao/300102.png",},
                {name:"男士棉服",img:"sort-img/fushixiebao/300105.png",},
                {name:"女式外套",img:"sort-img/fushixiebao/300401.png",},
                {name:"女士棉服",img:"sort-img/fushixiebao/300402.png",},
                {name:"内衣",img:"sort-img/fushixiebao/300103.png",},
                {name:"其他服饰",img:"sort-img/fushixiebao/300104.png",},
                {name:"男鞋",img:"sort-img/fushixiebao/300201.png",},
                {name:"女鞋",img:"sort-img/fushixiebao/300202.png",}
            ]
        }
    })
}
var shopFB=document.querySelector(".sort #shop-FB");
if(shopFB !=null){
    new Vue({
        el:"#shop-FB",
        data:{
            fushixiebao1:[
                {name:"其他",img:"sort-img/fushixiebao/300203.png",},
                {name:"背包",img:"sort-img/fushixiebao/300301.png",},
                {name:"旅行箱",img:"sort-img/fushixiebao/11.png",},
                {name:"其他包",img:"sort-img/fushixiebao/12.png",},
                {name:"配件",img:"sort-img/fushixiebao/13.png",}
            ]
        }
    })
}
var shopZ=document.querySelector(".sort #shop-Z");
if(shopZ !=null){
    new Vue({
        el:"#shop-Z",
        data:{
            zhubaopeishi:[
                {name:"玉石装饰",img:"sort-img/zhubaopeishi/350111.png",},
                {name:"金银饰品",img:"sort-img/zhubaopeishi/350112.png",},
                {name:"钻石饰品",img:"sort-img/zhubaopeishi/350113.png",},
                {name:"琥珀饰品",img:"sort-img/zhubaopeishi/350116.png",},
                {name:"仿真饰品",img:"sort-img/zhubaopeishi/350117.png",},
                {name:"其他饰品",img:"sort-img/zhubaopeishi/350199.png",},
                {name:"手表",img:"sort-img/zhubaopeishi/350201.png",},
                {name:"眼镜",img:"sort-img/zhubaopeishi/350301.png",}
            ]
        }
    })
}
var shopH=document.querySelector(".sort #shop-H");
if(shopH !=null){
    new Vue({
        el:"#shop-H",
        data:{
            hufuxihu:[
                {name:"玉石装饰",img:"sort-img/zhubaopeishi/350111.png",},
                {name:"金银饰品",img:"sort-img/zhubaopeishi/350112.png",},
                {name:"钻石饰品",img:"sort-img/zhubaopeishi/350113.png",},
                {name:"琥珀饰品",img:"sort-img/zhubaopeishi/350116.png",},
                {name:"仿真饰品",img:"sort-img/zhubaopeishi/350117.png",},
                {name:"其他饰品",img:"sort-img/zhubaopeishi/350199.png",},
                {name:"手表",img:"sort-img/zhubaopeishi/350201.png",},
                {name:"眼镜",img:"sort-img/zhubaopeishi/350301.png",}
            ]
        }
    })
}
var shopC=document.querySelector(".sort #shop-C");
if(shopC !=null){
    new Vue({
        el:"#shop-C",
        data:{
            shoucanglvyou:[
                {name:"玉石装饰",img:"sort-img/shoucanglvyou/450101.png",},
                {name:"金银饰品",img:"sort-img/shoucanglvyou/450103.png",},
                {name:"钻石饰品",img:"sort-img/shoucanglvyou/450201.png",},
                {name:"琥珀饰品",img:"sort-img/shoucanglvyou/450202_2.png",},
                {name:"仿真饰品",img:"sort-img/shoucanglvyou/450203.png",},
                {name:"其他饰品",img:"sort-img/shoucanglvyou/450301_2.png",},
                {name:"手表",img:"sort-img/shoucanglvyou/450302_2.png",}
            ]
        }
    })
}
var btn1=document.querySelector(".sort .button1");
var btn2=document.querySelector(".sort .button2");
var shopjB=document.querySelector(".sort #shop-JB");
var shopgB=document.querySelector(".sort #shop-GB");
console.log(btn1);
btn1.onclick=function(){
    if(shopjB.style.display="none"){
        shopjB.style.display="block";
    }
    else if(shopjB.style.display="block"){
        shopjB.style.display="none";
    }
}
btn2.onclick=function(){
    if(shopgB.style.display="none"){
        shopgB.style.display="block";
    }
    else if(shopgB.style.display="block"){
        shopgB.style.display="none";
    }
}




//猜你喜欢
var shopp=document.querySelector("#shop");
if(shopp !=null){
    new Vue({
        el:"#shop",
        data:{
            arrs:[
                {name:"艾可露抑菌除味宝（梦幻COCO）衣物专用260ml",price:"￥39",img:"img/cainixihuan/01.jpg",},
                {name:"格力绿嘉园2匹家用分体冷暖空调",price:"￥4999",img:"img/cainixihuan/02.jpg",},
                {name:"SUGAR 5.5英寸美颜全网通双卡双待智能手机（直降300）",price:"￥999",img:"img/cainixihuan/03.jpg",},
                {name:"豪格家用电解水机健康套组",price:"￥3980",img:"img/cainixihuan/04.jpg",},
                {name:"法国恺瑞3D印花御品缎上衣",price:"￥398",img:"img/cainixihuan/05.jpg",},
                {name:"荣事达好帅小宝智能机机器人",price:"￥1480",img:"img/cainixihuan/06.jpg",},
                {name:"多功能购物车套组",price:"￥199",img:"img/cainixihuan/07.jpg",},
                {name:"韩国LG睿嫣润膏舒盈滋养洗发水经典套组",price:"￥298",img:"img/cainixihuan/08.jpg",},
                {name:"美国苹果全透气飞织鱼网透气运动鞋",price:"￥298",img:"img/cainixihuan/09.jpg",},
                {name:"JANCYBONY男士真丝POLO衫两件组",price:"￥498",img:"img/cainixihuan/10.jpg",},
                {name:"国银通宝银汇利圆形银章（1KG）（6.18特供组）",price:"￥5500",img:"img/cainixihuan/11.jpg",},
                {name:"飞天经典“老粗布”四季床单三件套",price:"￥299",img:"img/cainixihuan/12.jpg",},
                {name:"鼎匠轻奢简约一族锅具套组 ",price:"￥999",img:"img/cainixihuan/13.jpg",},
                {name:"海鸥牌镂空机械表",price:"￥2980",img:"img/cainixihuan/14.jpg",},
                {name:"LONKOOM朗金繁花巴黎爱恋香氛组",price:"￥199",img:"img/cainixihuan/15.jpg",},
                {name:"茶园世家茉莉飘香258g/罐*6罐",price:"￥298",img:"img/cainixihuan/16.jpg",},
                {name:"ARNY鳄鱼纹头层牛皮铂金包（直降200元爆款）",price:"￥298",img:"img/cainixihuan/17.jpg",},
                {name:"华帝智尚高端自清洁烟灶套组（钢化玻璃）",price:"￥2999",img:"img/cainixihuan/18.jpg",},
                {name:"华帝智尚高端自清洁烟灶套组（不锈钢）",price:"￥2999",img:"img/cainixihuan/19.jpg",},
                {name:"丝享冰丝凉席3+3+3+1劲爆组",price:"￥349",img:"img/cainixihuan/20.jpg",}
            ]
        }
    })
}