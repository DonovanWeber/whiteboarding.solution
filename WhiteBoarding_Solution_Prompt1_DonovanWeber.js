//urls cant have spaces
//input = string 
//replace space with %20
//numbers/ special chars in string 
//no null 
//cannot use replace method or regex
//javascript 

//string split into an array 
//use foreach or map to add %20
//replace the last element in that mapped with the original last element from my arrayFromString 
const input = "Jasmine Ann Jones";
const input2 = "Hey there bear leave";
const stringToUrl = (string) => {
	const arrayOfString = string.split(" ");
	const mappedArray = arrayOfString.map(e => e.concat("%20"));
	const result = mappedArray.splice((mappedArray.length -1),1, (arrayOfString[arrayOfString.length -1]));
	const finalResult = result.join("");
return finalResult;
};

console.log(stringToUrl(input)); = "Jasmine%20Ann%20Jones";
console.log(stringToUrl(input2)); = "Hey%20there%20bear%20leave";