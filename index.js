function serie(){
	var deret = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
	var filteDeret = deret.filter(deret => {return deret > 15});
	console.log(filteDeret);
}

serie();
