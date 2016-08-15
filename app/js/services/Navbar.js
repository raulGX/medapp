/**
 * Created by raul on 8/11/2016.
 */
app.factory('NavbarService', function ($rootScope) {
    function disableNavbar() {
        $rootScope.showNavbar = false;
    }
    function enableNavbar(){
        $rootScope.showNavbar = true;
    }
    return {
        disableNavbar: disableNavbar,
        enableNavbar: enableNavbar
    };
})