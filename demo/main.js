$(function(){
  $( 'textarea' ).on( 'toggleAutoWrap', function( event, state ){
    console.log( 'autowrap', state );
  });

  $( 'textarea' ).textWrapper();
});
