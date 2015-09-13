/**
 * Created by ranwahle on 9/12/15.
 */
require(['app'], function(app)
{
   var directive = function(boardDataService)
   {
       return {
            restrict: 'A',
           scope:{
               onDragOver: '&',
               onDrop: '&'
           },
           link: function(scope, element)
           {
               var currentElement = element[0],
                   currentList = element.scope().list;

               element.on('drop',  function (evt) {

                   currentList.isOver = false;
                   if (boardDataService.draggedList &&
                       currentList !== boardDataService.draggedList)
                   {
                       var index = boardDataService.lists.indexOf(boardDataService.draggedList),
                           currentIndex = boardDataService.lists.indexOf(currentList);

                       if (index < 0 || currentIndex < 0)
                       {
                           boardDataService.draggedList = null;
                           return;
                       }

                       if (index < currentIndex)
                       {
                           for (;index < currentIndex; index++)
                           {
                               boardDataService.lists[index] =  angular.copy( boardDataService.lists[index + 1]);
                               boardDataService.lists[index + 1] = undefined;
                           }
                       }
                       else{
                           for (;index > currentIndex; index--)
                           {
                               boardDataService.lists[index] =  angular.copy( boardDataService.lists[index - 1]);
                               boardDataService.lists[index - 1] = undefined;
                           }
                       }
                      // boardDataService.lists[index] = currentList;
                       boardDataService.lists[currentIndex] = boardDataService.draggedList;
                       boardDataService.draggedList = null;
                       scope.$applyAsync();
                   }

               });

               element.on('dragover', function (evt) {

                   currentList.isOver = true;
                     evt.preventDefault();
               });

               element.on('dragenter', function(evt)
               {
                   currentList.isOver = false;
                   evt.preventDefault();
               });

               element.on('dragleave', function()
               {
                   currentList.isOver = false;

               });
           }
       };
   };

    app.directive('listWrapper',['boardDataService',directive]);
});