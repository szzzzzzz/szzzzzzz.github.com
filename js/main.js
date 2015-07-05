angular.module('app', []).controller('con', function($scope,$interval) {
    $scope.ss=Number(localStorage.ss) || 0;
    $scope.lv=Number(localStorage.lv) || 0;
    $scope.a=Number(localStorage.a) || 100;
    $scope.txt=""
    var h=["树枝","石块","石槌","石矛","铜刃","钢刃","弓箭","弩","书籍","火药弹","火绳枪","火绳炮","滑膛枪"
        ,"榴弹","加农炮","半自动枪","机炮","导弹","集束导弹","核弹"
        ,"电磁炮","镭射炮","光集束烧毁炮","粒子流炮","纳米云","强场电离爆弹","电浆炸弹","反物质"
        ,"重力场","微型黑洞","曲率驱动","时间漩涡","微型白洞"];
    var m=[0,2,5,10,20,50,100,200,205,1000,2000,5000,10000
        ,20000,50000,1e5,1e6,1e7,1e8,1e10
    ,1e11,1e12,1e13,1e14,1e15,1e16,1e17,1e18
        ,1e19,1e20,1e21,-1e21,-1e20];
var k=["无",,,"你成为了部落领袖",,,,"你统一了国家",,,,,"你踏平了全大陆"
    ,,,,,,,"你征服了一个星球",,,,,,,,"你主宰了物质世界",,,"你摧毁了异次元",,]
    $scope.sub=function() {
    }
    $scope.h1=h[$scope.lv];
    $scope.h2=h[$scope.lv+1];
    $scope.h3=(Math.abs(m[$scope.lv+1]))*100;
    $scope.h4=m[$scope.lv];
    $scope.h5=localStorage.h5 || "无";
    $interval(function(){$scope.ss+=m[$scope.lv]},1000);
    $scope.s=function(x) {
        if (x>0) {
            localStorage.ss = Number($scope.ss + x)
            $scope.ss = Number(localStorage.ss)
            $scope.txt = "增加 " + x + "武器文明度\n" + $scope.txt
        }
    }
    $scope.u=function(x) {
        if ($scope.a>=$scope.h3){
            $scope.a-=$scope.h3;
            $scope.lv+=1;
            localStorage.lv=$scope.lv;
            $scope.h1=h[$scope.lv];
            $scope.h2=h[$scope.lv+1];
            $scope.h3=Math.abs((m[$scope.lv+1]))*100;
            $scope.h4=m[$scope.lv];
            if (k[$scope.lv]){
                localStorage.h5=k[$scope.lv];
                $scope.h5=localStorage.h5;
                $scope.txt=k[$scope.lv]+"\n"+$scope.txt
            }
        }else{
            $scope.txt="炼金石不足，不能升级\n"+$scope.txt
        }
    }
    $scope.t=function() {
        var r=$scope.ss%2;
        $scope.a+=Math.abs(($scope.ss-r)/2);
        localStorage.a=$scope.a
        $scope.ss=r;
        localStorage.ss=$scope.ss
    }
    $scope.d=function() {
        localStorage.clear();
        $scope.ss=Number(localStorage.ss) || 0;
    }
})
