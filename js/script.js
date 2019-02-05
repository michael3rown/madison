$(document).ready(function(){
		
	$(".special .element div.imageElement").parent().addClass("full");
	$(".feature .element div.imageElement").parent().addClass("full");

	// admin bar fix
    $(function(){
    if($('#adminbar').length > 0){
        $('html').addClass('admin');
		$('.header-position, .feature').addClass('adminbarfix');
    }
    });
			
	// show hide nav on mobile
	$(".nav-toggle").click(function(){
		$("nav ul").toggleClass("active");
		$(".nav-close").toggleClass("active");
	});
			
	// make the cart icon move
	$(".searchInput").focusin(function(){
		$(".cartFull").addClass("active");
	});
	$(".searchInput").focusout(function(){
		$(".cartFull").removeClass("active");
	});
		
	// toggle
	$(".toggle-elements .container").on("click", function(){
	    $(this).toggleClass("active");
	    $(this).next(".element").toggleClass("hidden");
	});	

    //relocate blog meta info
    $('.left .blogList').children('ul').children('li').each(function(){
    var blogMetaInfo = $('.postInfo',this);
    $(blogMetaInfo).remove();
    $('.postTitle',this).after(blogMetaInfo);
    });

    // hide address bar when page loads on mobile devices
    window.top.scrollTo(0, 1);

    // fix zoom issue when switching to landscape on iOS
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            document.body.addEventListener('gesturestart', function () {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }
	

	// rewrites                                        
    $('.remember label').replaceWith(' Remember me.');   // login page
    $('.commentsHead').replaceWith(' <h3 class="commentsHead">Comments</h3> ');  // comments header
    $('.productDetailQuantity label').replaceWith(' QTY: ');  // products quantity
    $('th.cartDescription').replaceWith(' <th colspan="2" class="cartDescription">ITEM</th> ');  // checkout products description
    $('th.cartQuantity').replaceWith(' <th class="cartQuantity">QTY</th> ');  // checkout products quantity

});