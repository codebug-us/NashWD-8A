$( document ).ready(function() {
	// write your code below
		$("#comebackTitle1").hide();
		$("#comebackTitle2").hide();
		$("#comebackTitle1").fadeIn(2000);
		$("#comebackTitle2").fadeIn(4000);
	//airtable
	var airtableEndpoint="https://api.airtable.com/v0/appKcxfe1SeTfgxiX/ourMomsTable?api_key="+apiKey;

	var request =$.ajax({
		url:airtableEndpoint,
		method:"GET",
	});

	//display all cards/moms
	request.done(function(response){
		console.log("here is the response:", response);
		//loop through each response and add card
		for(var i=0;i<response.records.length;i++){
			$("#momCards").append('<div class="momCards">\
	        <div uk-card uk-card-default">\
	        	<div class="uk-card-media-top">\
	        		<img data-src="'+ response.records[i].fields.imageURL+'" uk-img>\
	        	</div>\
	        	<div class="uk-card-body">\
	        	    <a href="'+ response.records[i].fields.linkedInURL +'">\
	        	    	<h3 class="momNames uk-margin-remove-bottom uk-card-title">'+ response.records[i].fields.name +'</h3>\
	        	    </a>\
	        	    <p class="uk-margin-remove-top" >'+ response.records[i].fields.jobTitle+'</p>\
	        	</div>\
	        </div>\
	    </div>');
		}
	});

	request.fail(function( requestObject, textStatus ) {
    	alert( "Request failed: " + textStatus );
  	});

  	//search functionality
  	$("#momsSearchForm").keyup(function(event){
  		var stringOfValueEntered=$("#momsSearchInput").val();
  		console.log("#########");
  		console.log(stringOfValueEntered);
  		stringOfValueEntered=stringOfValueEntered.toLowerCase();
  		console.log("#########");
  		console.log(stringOfValueEntered);
  		//display only matches ... looping
  		var momCardsArray = $(".momCards");
  		var momNamesArray = $(".momNames");
  		// console.log(momCardsArray.length);
  		for(var j=0;j<momCardsArray.length;j++){
  			var currentMomCard = momCardsArray[j];
  			var currentMomName = $(momNamesArray[j]).text();
  			currentMomName=currentMomName.toLowerCase();
  			if(currentMomName.includes(stringOfValueEntered)){
  				//keep it displayed
  				console.log(currentMomName);
  				console.log(stringOfValueEntered);
  				console.log("if statement&&&&&&&");
  				$(currentMomCard).css("display","");
  			}else{
  				//hide it
  				console.log("else statement!!!!!!!!");
  				$(currentMomCard).css("display","none");
  			}
  		}
  	})




});
