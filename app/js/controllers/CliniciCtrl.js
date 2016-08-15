/**
 * Created by raul on 8/11/2016.
 */
app.controller('CliniciCtrl', function (NavbarService, $scope, $http, MainConf, $location) {
    NavbarService.enableNavbar();
    $http({
        method: 'GET',
        url: MainConf.url + '/api/clinici'
    }).then(function (response) {
        $scope.clinics = response.data;
    });
    $scope.goToClinic = function (clinic) {
        $location.path('/clinici/' + clinic);
    }
});