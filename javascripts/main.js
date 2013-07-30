$(function(){
  var $demo, $textarea, $on, $off, showWrapState;

  $demo = $( '#demo-container' );
  $textarea = $demo.find( 'textarea' );
  $on = $demo.find( '.on' );
  $off = $demo.find( '.off' );

  showWrapState = function( event, autowrap ){
    if ( autowrap ){
      $on.show();
      $off.hide();
    }

    else {
      $off.show();
      $on.hide();
    }
  }

  $textarea.on( 'toggleAutoWrap', showWrapState );
  $textarea.textWrapper();
});
