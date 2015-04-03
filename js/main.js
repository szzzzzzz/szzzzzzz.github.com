angular.module('app', []).controller('con', function($scope) {
        $scope.li=localStorage.li || "";
        $scope.lh=localStorage.li
        $scope.ss=localStorage.ss || 0;
        $scope.txt=""
        $scope.sub=function() {
            localStorage.li=$scope.li
            $scope.lh=localStorage.li
        }
        $scope.s=function(x) {
    localStorage.ss=Number($scope.ss+x)
    $scope.ss=Number(localStorage.ss)
    $scope.txt="增加 "+x+"元\n"+$scope.txt
        }
    $scope.d=function() {
        localStorage.clear();
    }
    })
