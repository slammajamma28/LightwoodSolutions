$(document).ready(function() {
    function updateItems(delta)
    {
        var $items = $('#group').children();
        var $current = $items.filter('.current');
        var index = $current.index();
        var newIndex = index+delta;
        // Range check the new index
        newIndex = (newIndex < 0) ? 0 : ((newIndex > $items.length) ? $items.length : newIndex); 
        if (newIndex != index){
            $current.removeClass('current');
            $current = $items.eq(newIndex).addClass('current');
            // Hide/show the next/prev
            $("#previousPage").toggle(!$current.is($items.first()));    
            $("#nextPage").toggle(!$current.is($items.last()));    
        }
    }

    $("#nextPage").click(function () {
        updateItems(1);
    });

    $("#previousPage").click(function () {
        updateItems(-1);
    });
});