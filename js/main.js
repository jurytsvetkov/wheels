$(document).ready(function() {
    
    // page2scroll
    $("nav a,header a,footer a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
    
    //stickyjs
    $("#navigator").sticky({topSpacing:0});
    
    //hamburger-nav
    $('.hamburger-menu').click(function () {
        $(".open-hamburger").addClass('display');
    });
    
    $('.menu-button').click(function () {
        $(".open-hamburger").removeClass('display');
    });
    
});
