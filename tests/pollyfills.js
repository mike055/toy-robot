
if (!Number.isInteger) {
    Number.isInteger = Number.isInteger || function(value) {
        return typeof value === "number" && 
            isFinite(value) && 
            Math.floor(value) === value;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}