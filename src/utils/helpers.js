export function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function camelCaseStringToCapitalizeString(str) {
    const capitaliseString = capitalise(str);
    return capitaliseString.replace(/([A-Z])/g, " $1");
  }