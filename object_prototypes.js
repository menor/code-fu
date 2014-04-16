var spacify = function( string ) {
  var the_array = string.split('');
  var new_array = [] ;
  var size = the_array.length;
  for ( var i = 0 ; i < size ; i += 1) {
    new_array.push ( the_array [i]);
    if ( the_array[i] !== ' ' ) {
      new_array.push ( ' ');
    }
  }
  return new_array.join('');
};

String.prototype.spacify = function() {
  return spacify( this );
};

console.log( spacify( 'hire me' ) );
console.log( 'please do it'.spacify() );