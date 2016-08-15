/**
 * Created by raul on 8/15/2016.
 */
app.controller('SingleClinicCtrl',function ($scope, NavbarService, $http, MainConf, $routeParams) {
    NavbarService.enableNavbar();
    var id = $routeParams.id;
    $http({
        method: 'GET',
        url: MainConf.url + '/api/clinici/' + id
    }).then(function (res) {
        $scope.clinic = res.data;
        $scope.clinic.name = id.charAt(0).toUpperCase() + id.substring(1,id.length);
    }).catch(function (err) {
        console.log(err);
    });
});