/**
 * Created by ranwahle on 9/13/15.
 */
(function(){
    if (!Array.prototype.remove)
    {
        Array.prototype.remove = function(item)
        {
            var index = this.indexOf(item);
            if (index >= 0)
            {
                this.splice(index, 1);
            }
        }
    }
}());