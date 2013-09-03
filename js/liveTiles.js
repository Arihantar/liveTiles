 $(function(){
	reCreate();
	//
	

});
function reCreate (){
	$(".liveTile").each(function(){
		var tileColor = $(this).attr("data-tileColor");
		var title = $(this).attr("title");
		var update = $(this).attr("data-update");
		var size = $(this).attr("data-size");
		
		var clone = $(this).clone();
		
		
		if (tileColor!==undefined){			
			$(clone).css("background",tileColor);
		}
		
		if (update!==undefined){			
			if(size=="small"){				
				$(clone).children(".mainTile").before("<div class='updateValue'>"+update+"</div>")
			}
			else{
				$(clone).children(".mainTile").before("<div class='peekTile'><div class='updateText' style='display:none'>"+update+"</div><div class='titleText'>"+title+"</div></div>");
			}
		}
		else{
			if(size=="small"){}
			else{
			$(clone).children(".mainTile").before("<div class='peekTile'><div class='titleText'>"+title+"</div></div>");
			}
		}
		
		$(this).replaceWith(clone);
	});
}
 