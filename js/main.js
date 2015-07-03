angular.module('app', []).controller('con', function($scope,$interval) {
    $scope.ss=Number(localStorage.ss) || 0;
    $scope.lv=Number(localStorage.lv) || 0;
    $scope.a=Number(localStorage.a) || 100;
    $scope.txt=""
    var h=["树枝","石块","石槌","石矛","铜刃","钢刃","弓箭","弩","书籍","火药弹","火绳枪","火绳炮","滑膛枪","榴弹","加农炮","半自动枪","机炮","导弹","集束导弹","核弹"];
    var m=[0,2,5,10,20,50,100,200,205,1000,2000,5000,10000,20000,50000,1e5,1e6,1e7,1e8,1e10];

    $scope.sub=function() {
    }
    $scope.h1=h[$scope.lv];
    $scope.h2=h[$scope.lv+1];
    $scope.h3=(m[$scope.lv+1])*100;
    $interval(function(){$scope.s(m[$scope.lv])},100);
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
            $scope.h3=(m[$scope.lv+1])*100;
        }else{
            $scope.txt="炼金石不足，不能升级\n"+$scope.txt
        }
    }
    $scope.t=function() {
        var r=$scope.ss%2;
        $scope.a+=($scope.ss-r)/2;
        localStorage.a=$scope.a
        $scope.ss=r;
        localStorage.ss=$scope.ss
    }
    $scope.d=function() {
        localStorage.clear();
        $scope.ss=Number(localStorage.ss) || 0;
    }
})
