$(document).ready(function() {
    // *******
    // Navigating Menu Screens, a la Crosswords
    // *******
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

    // *******
    // END THIS SECTION
    // *******

    // *******
    // Click into and out of Menu, a la Word Search
    // *******

    $("button.wordsearchmenubutton").click(function() {
        console.log($(this).text());
        // Hide the main puzzle menu
        $("#menuGrid").removeClass('active');
        // Show the back button
        $("#backButton").toggle(true);
        // Show the div for this button
        var datavar =  $(this).attr('data');
        $("#" + datavar).addClass('active');
    });

    $("#backButton").click(function() {
        // Hide puzzle
        $(".active").removeClass('active');
        // Show the main puzzle menu
        $("#menuGrid").addClass('active');
        // Hide the back button
        $("#backButton").toggle(false);
    });

    $("button.wordsearchpuzzlebutton").click(function() {
        $("#showSolution").addClass('active');
        var dispuzzle = $(this).attr('data');
        var activecat = $('.category.active').attr('id');
        $("#showSolution").html("<img src='" + activecat + "/" + dispuzzle + ".jpg' />");
        console.log("<img src='" + activecat + "/" + dispuzzle + ".png' />")
    });
});