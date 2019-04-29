$(document).ready(function() {
    
    // page2scroll
    $("nav a,header a,footer a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
    
    $(document).ready(function(){
        $("#navigator").sticky({topSpacing:0});
    });
    
}); 
