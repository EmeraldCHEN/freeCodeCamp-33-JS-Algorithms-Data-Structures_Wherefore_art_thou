function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    return collection.filter(function(obj){
        for(let i = 0; i < sourceKeys.length; i++){
            if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
                 return false;
            } 
        }
        return true;
    })
}
const result = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); 
// Return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]




// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou/


