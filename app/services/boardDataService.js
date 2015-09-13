/**
 * Created by ranwahle on 9/13/15.
 */
require(['app'], function(app)
{

    var service = function()
    {
        this.lists = [];
    };

   return app.service('boardDataService',[service]);

});