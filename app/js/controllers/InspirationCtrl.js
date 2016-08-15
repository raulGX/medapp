/**
 * Created by raul on 8/11/2016.
 */

app.controller('InspirationCtrl',function($scope, $location, NavbarService, Request){
    var ok = false;
    NavbarService.disableNavbar();
    $scope.sources = Request.get();
    $scope.class = 'faded';
    $scope.changeClass = function(){
        if ($scope.class == 'normal')
            $scope.class = 'faded';
        else {
            $scope.class = 'normal';
        }
    };
    $scope.toggle = function(){
        ok = !ok;
    };
    $scope.getQuantity = function(){
        if (ok)
            return $scope.sources.length;
        else {
            return 8;
        }
    };
    $scope.go = function(loc){
        $location.path(loc);
    }
});
