function camelCase(string){
        string = string.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
        return string.substr(0, 1).toLowerCase() + string.substr(1);
}
console.log(camelCase('Camel-Case'))