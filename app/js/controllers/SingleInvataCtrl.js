/**
 * Created by raul on 8/15/2016.
 */
app.controller('SingleInvataCtrl',function ($scope, NavbarService, $http, MainConf, $routeParams) {
    NavbarService.enableNavbar();
    var id = $routeParams.id;
    $http({
        method: 'GET',
        url: MainConf.url + '/api/invata/' + id
    }).then(function (res) {
        $scope.subject = res.data;
        $scope.subject.name = id.charAt(0).toUpperCase() + id.substring(1,id.length);
    }).catch(function (err) {
        console.log(err);
    });
});