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
        if (!this.newListTitle)
        {
            return;
        }
        this.lists.push({title: this.newListTitle});
        this.newListTitle = '';
    };

    return app.controller('boardController', ['boardDataService',controller]);


});