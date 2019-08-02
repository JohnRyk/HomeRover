$(document).ready(function () {
//operate the get request
	$("#up").click(function () {
		$.get('/instruction/?key=1');
	});
	$("#down").click(function () {
		$.get('/instruction/?key=2');
	});
	$("#left").click(function () {
		$.get('/instruction/?key=3');
	});
	$("#right").click(function () {
		$.get('/instruction/?key=4');
	});
	$("#light").click(function () {
		$.get('/instruction/?key=5');
  });

//fake progress bar
	var progressbar = $( "#progressbar" ),
	progressLabel = $( ".progress-label" ),
	progressbarValue = progressbar.find( ".ui-progressbar-value" );

	progressbar.progressbar({
	  value: false,
	  change: function() {
		progressLabel.text( progressbar.progressbar( "value" ) + "%" );
	  },
	  complete: function() {
		disappear2();
		display1();
	  }
	});

// control
	function progress() {
	  var val = progressbar.progressbar( "value" ) || 0;

	  progressbar.progressbar( "value", val + 1 );

	  if ( val < 99 ) {
		setTimeout( progress, 10 );
	  }
	}

	function disappear1(){
		$('#window').hide();
		$('#table').hide();
	}
	function disappear2(){
    progressbar.hide();	
    $('#placeholder').hide();
	}
	function display1(){
		$('#window').show();
		$('#table').show();
	}

	disappear1();
// delay 2s at the beginning
	setTimeout( progress, 500 );
 });
