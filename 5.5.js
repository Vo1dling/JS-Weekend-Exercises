function getInitials(str) {
    let matches = str.match(/\b(\w)/g);
    return matches.join('.').toUpperCase();
}
console.log(getInitials('Sarah Key'))