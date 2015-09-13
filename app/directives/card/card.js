/**
 * Created by ranwahle on 9/12/15.
 */
require(['app','boardDataService'], function(app)
{
    var card = function(boardDataService)
    {
        var controller = function ($scope) {
            var self = this;
            $scope.listController = this;
            this.card = $scope.content;

            Object.defineProperty($scope, 'content', {
                get: function () {
                    return self.card;
                },
                set: function(value)
                {
                    self.card = value;
                }
            });
        };

        return{
            templateUrl: 'app/directives/card/card.html',
            scope: {
                content: '='
            },
            controller: controller,
            link: function(scope, element, attributes, controller)
            {
                element.on('dragstart', function()
                {
                   boardDataService.draggedCard =  controller.card;
                });
            }
        };
    };

   app.directive('card', ['boardDataService',card]);
});