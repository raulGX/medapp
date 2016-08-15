/**
 * Created by raul on 8/11/2016.
 */
'use strict';

var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'views/landing.html',
            controller: 'InspirationCtrl'
        })
        .when('/interpretare',{
            templateUrl: 'views/interpretare.html',
            controller: 'InterpretareCtrl'
        })
        .when('/invata',{
            templateUrl: 'views/invata.html',
            controller: 'InvataCtrl'
        })
        .when('/invata/:id',{
            templateUrl: 'views/invataSingle.html',
            controller: 'SingleInvataCtrl'
        })
        .when('/clinici',{
            templateUrl: 'views/clinici.html',
            controller: 'CliniciCtrl'
        })
        .when('/clinici/:id',{
            templateUrl: 'views/cliniciSingle.html',
            controller: 'SingleClinicCtrl'
        })
        .when('/contact',{
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            templateUrl: '404.html'
        });

});
