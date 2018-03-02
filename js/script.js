$('.count').each(function ( ){
	$(this).prop('Counter',0).animate({
		Counter:$(this).text()
	},{
		duration : 4000,
		easing: 'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	});
});

$(document).ready(function(){
    $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 1200
    });
});

VK.Widgets.CommunityMessages("vk_community_messages", 162892886, {tooltipButtonText: "Есть вопрос?"});