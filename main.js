const onetoone = (first, second) => {
	if (first.length !== second.length){
		return false;
	}
    let size = first.length; 

/* map will be the mapping of characters in (key, value) form. set represents the set of characters from the second string that have already occurred.*/
    let map = new Map();
    let set = new Array(size);
    
    for(let i = 0; i < size; i++){

        let x = first.charAt(i);
        let y = second.charAt(i);
      //Check if character from first string has already occurred and if its value in map is equivalent to character from second string
        if(map.has(x)){
            if (map.get(x) !== y){
                return false;
            }
        }
    }
    return true;
}

console.log(onetoone('abc', 'xyz'));