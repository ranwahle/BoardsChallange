/**
 * Created by ranwahle on 9/12/15.
 */
require(['app','boardDataService'], function(app)
{
   var controller = function(boardDataService)
   {

       this.lists = boardDataService.lists;
   };

    controller.prototype.addList=function()
    {
        this.lists.push({title: this.newListTitle});
        this.newListTitle = '';
    };

    controller.prototype.onDragOver = function()
    {
        var draggedElement = arguments[0];
        console.log('You\'re in the controller');
        console.log(draggedElement);
    };


    return app.controller('boardController', ['boardDataService',controller]);


});