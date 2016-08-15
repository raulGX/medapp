/**
 * Created by raul on 8/11/2016.
 */
app.controller('InterpretareCtrl',function (NavbarService, $scope) {
    NavbarService.enableNavbar();
    $scope.userInfo = {gender:'male'};
    $scope.viewResults = function () {
        console.log($scope.userInfo);
    };
});