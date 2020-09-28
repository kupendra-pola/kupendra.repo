app.config(["dataServiceProvider",function(dataServicePro){
dataServicePro.config('http://localhost:9090/getSum');
}]);

app.provider("dataService",function(){
    var _baseUrl='';
    this.config=function(baseUrl){
        _baseUrl=baseUrl;
    };
    
    this.$get=["$http","$log",function($http,$log){
        var oDataService={};
        oDataService.add=function(a,b){
            return $http({
                url:_baseUrl + '?a=' +a +'&b=' + b,
                method:'GET'
            });
        };

        return oDataService;

    }];



});