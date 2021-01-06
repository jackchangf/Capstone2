/*onload*/
$(function () {
    $("#nav-placeholder").load("nav.html", function () {
        let pageTitle = $("title").text();
        if (pageTitle == "Home") {
            $("#homePage").addClass("currentPage");
        }
        else if (pageTitle == "Students") {
            $("#studentsPage").addClass("currentPage");
        }
        else if (pageTitle == "Courses") {
            $("#coursesPage").addClass("currentPage");
        }
    });

    $("#footer-placeholder").load("footer.html");


});



//sticky navigation

if ($('title').text() == 'Home') {
    //putting variable outside won't work in this case if script tags referenced in index comes first before the navplaceholder is read. so either move script ref tag to bottom or put it in function
    let navbar2 = $("#nav-placeholder");

    $(window).scroll(function () {
        //let navbar2 = $("#nav-placeholder");
        let oTop = $(".section-1").offset().top - window.innerHeight;
        if ($(window).scrollTop() > oTop) {
            navbar2.addClass("sticky");
        } else {
            navbar2.removeClass("sticky");
        }
    });
}



/*counter animation*/

/*let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate(
            {
                Counter: $(this).text()
            },
            {
                duration: 40000,
                easing: "swing",
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            }
        );
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1");
    }
})*/