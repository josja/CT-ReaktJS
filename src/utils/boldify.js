/**
 * Boldifies case-insensitive occurences of 'Restaurant'
 */

 const Boldify = (name) => {
  var idx = name.search(/restaurant/i);
  if ( idx > -1 )
    return name.substring(0,idx) + name.substring(idx,idx+10).bold() + name.substring(idx+10);
  else
    return name;
}

export default Boldify;
