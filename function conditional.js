let cat1 = 2;
let cat2 = 3;

Conditional();

function Conditional(){
	if (cat1 > cat2) {
		console.log("The first cat is older than the second cat.");
	}else if (cat1 < cat2){
		console.log("The first cat is younger than the second cat.");
	}else{
		console.log("The two cats are at the same age.")
	}
}