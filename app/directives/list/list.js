/**
 * Created by ranwahle on 9/12/15.
 */
require(['app'], function (app) {
    var list = function (boardDataService) {
        var controller = function ($scope) {
            var self = this;
            $scope.listController = this;
            this.list = $scope.content;

          Object.defineProperty($scope, 'content', {
              get: function () {
                  return self.list;
              },
              set: function(value)
              {
                  self.list = value;
              }
          });
        };

        controller.prototype.changeStateToAddingCard = function () {
            this.addingCard = true;
        };

        controller.prototype.addCard = function () {
            if (!this.list.cards)
                this.list.cards = [];

            this.list.cards.push({title: this.newCardTitle, belongsTo: this.list});
            this.addingCard = false;
            this.newCardTitle = '';
        };


        return {
            templateUrl: 'app/directives/list/list.html',
            scope: {
                content: '=',
                dragging: '&'
            },
            controller: controller,


            link: function ($scope, element, attrs, controller) {

                element.on('dragstart', function(evt)
                {
                    boardDataService.draggedList = controller.list;
                    evt.dataTransfer.effectAllowed = "move";

                });

                element.on('dragend', function (evt) {
                   // console.log(evt);
                });

                element.on('drop', function (evt) {
                    console.log(evt);
                });
            }

        };
    };

    app.directive('list', ['boardDataService',list]);
});