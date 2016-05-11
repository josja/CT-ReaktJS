/**
 * Boldifies case-insensitive occurences of 'Restaurant'
 */

const boldify = (name) => {
  const idx = name.search(/restaurant/i);
  if ( idx > -1 ) {
    return name.substring(0, idx) + name.substring(idx, idx + 10).bold() + name.substring(idx + 10);
  }
  return name;
};

export default boldify;
