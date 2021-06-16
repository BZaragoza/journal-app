export const trimAndFormatString = ( string="" ) => (
  
  string.length > 25
    ? string.substring(0, 25) + " ..."
    : string

);
