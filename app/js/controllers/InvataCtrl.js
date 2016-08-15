/**
 * Created by raul on 8/11/2016.
 */
app.controller('InvataCtrl', function (NavbarService, $scope, $http, MainConf, $location) {
    NavbarService.enableNavbar();
    $http({
        method: 'GET',
        url: MainConf.url + '/api/invata'
    }).then(function (response) {
        $scope.subjects = response.data;
    });
    $scope.goToSubject = function (clinic) {
        $location.path('/invata/' + clinic);
    }
});