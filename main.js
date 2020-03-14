const onetoone = (first, second) => {
	if (first.length !== second.length){
		return false;
	}

    return true;
}

console.log(onetoone('abc', 'xyz'));