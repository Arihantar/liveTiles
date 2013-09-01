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
		
		if (tileColor!==undefined){			
			$(this).css("background",tileColor);
		}
		
		if (update!==undefined){			
			if(size=="small"){				
				$(this).children(".mainTile").before("<div class='updateValue'>"+update+"</div>")
			}
			else{
				$(this).children(".mainTile").before("<div class='peekTile'><div class='updateText' style='display:none'>"+update+"</div><div class='titleText'>"+title+"</div></div>");
			}
		}
		else{
			if(size=="small"){}
			else{
			$(this).children(".mainTile").before("<div class='peekTile'><div class='titleText'>"+title+"</div></div>");
			}
		}
	});
}
 