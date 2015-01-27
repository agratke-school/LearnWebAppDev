var main = function() {
    "use strict";

    function tabLet() {
        var $element = $(element);

        $(".tabs span").removeClass("active");
        $element.addClass("active");
        $("main .content").empty();

        if ($element.parent().is(":nth-child(1)")) {
            console.log("First Tab Clicked!");
        } else if ($element.parent().is(":nth-child(2)")) {
            console.log("Second Tab Clicked!");
        } else if ($element.parent().is(":nth-child(3)")) {
            console.log("Third Tab Clicked!");
        }

        return false;
    }
    $(".tabs span").toArray().forEach(function(element) {
        $(element).on("click", tabLet());
    });
};
$(document).ready(main);
