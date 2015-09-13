/**
 * Created by ranwahle on 9/12/15.
 */
require.config({

 paths:{
     'angular' : '../bower_components/angular/angular.min',
     'app' : 'app',
     'cardDirective': 'directives/card/card',
     'listDirective' : 'directives/list/list',
     'listWrapperDirective' : 'directives/listWrapper/listWrapper',
     'directives' : 'directives/directives',
     'boardController' : 'controllers/boardController',
     'boardDataService' : 'services/boardDataService',
     'arrayUtils' : 'services/arrayUtils'

 },

    shim:{
        'app' : {exports: 'app' , deps: ['angular'] },
        'directives': {exports: 'directives',
            deps: ['angular', 'app', 'listDirective', 'cardDirective'
        ,'listWrapperDirective']},
        'boardDataService': {exports: 'boardDataService', deps: ['angular', 'app','arrayUtils']},
        'boardController' : {exports: 'boardController', deps: ['angular', 'app', 'boardDataService']},



    }
});

define('init', ['app','boardDataService', 'boardController','directives'], function(app, directives,boardDataService,
                                                                             boardController)
{
    console.log(boardController);
    angular.element(document).ready(function()
    {
           angular.bootstrap(document.body, [app.name])

    });
});

require(['init'], function() {});