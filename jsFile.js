var app=angular.module('app',['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
$routeProvider
.when('',{

})
.when('/',{
    template: "please find left side urls to start navigating through app"
})
.when('/calc',{ 
    templateUrl:"calcTmpl.htm",
    controller:"calcController"
}).otherwise({
    tempalte:"<strong>NO content is available here !</strong> click on of the links from left panel"
});
}]);

app.controller("calcController",["dataService","$scope","$log",function(dataService,$scope){
    $scope.a=0;
    $scope.b=0;
   

    $scope.doAdd=function(){
        dataService.add($scope.a,$scope.b).then(///you should not write {} inside then part
        function(response){
          
            $scope.result=response;

        },
        function(response){
            alert("error occured..");
        }
    );
    }
}]);

app.run(['$rootScope',function($rootScope){
    $rootScope.$on('$routeChangeStart',function(e,curr,prev){
        console.log(curr);
        console.log('in $routeChangeStart');
    });
  
    $rootScope.$on('$routeChangeSuccess',function(e,curr,prev){
        console.log('in $routeChangeSuccess');
    });
    $rootScope.$on('$locationChangeStart',function(e,currUrl,prevUrl,currState,prevState){
        console.log('in $locationChangeStart and currUrl is : '+currUrl);
    });
    $rootScope.$on('$locationChangeSuccess',function(e,currUrl,prevUrl,currState,prevState){
        console.log('in $locationChangeStart and currUrl is : '+prevUrl);
        console.log('in $locationChangeSuccess');
    });
}]);