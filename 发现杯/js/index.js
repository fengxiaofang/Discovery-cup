function showdiv(s){
    if(s=="1"){
        document.getElementById("content1").className="contentin contentfirst";//显示标题1的内容 下面代码类似不在添加注释
        document.getElementById("content2").className="contentfirst";//隐藏标题2的内容 下面代码类似不在添加注释


        document.getElementById("li2").className=null;//使标题2与正文内容相离  下面代码类似 不在添加注释
        document.getElementById("li1").className="tabin";//使标题一与正文内容相连接  下面代码类似 不在添加注释

    }else if(s=="2"){
        document.getElementById("content1").className="contentfirst";
        document.getElementById("content2").className="contentin contentfirst";


        document.getElementById("li1").className=null;
        document.getElementById("li2").className="tabin";

    }else{
        document.getElementById("content1").className="contentfirst";
        document.getElementById("content3").className="contentin contentfirst";

        document.getElementById("li1").className=null
        document.getElementById("li3").className="tabin";
    }
}