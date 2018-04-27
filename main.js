console.log("hello world from javascript");
alert("hello world from javascript");

//letters , numbers, underscores, dollar signs
//begin with a letter or _ or $
//case sensitive

//camel case
var myFavoriteNumber = 1;

//partial case
var MyFavoriteNumber = 2;

//underscore
var my_favorite_number = 3;


/*var n = 10;
var str = "qwerty";

alert("simple no " + n);

var n2 = n + 20;

alert("another no " + n2);

alert("simple string " + str);

var str2 = str + "uiop[]";

alert("another string " + str2);//*/

/*var colors = ['red', 'green' , 'blue'];

var anotherarray = new Array('red', 'green' , 'blue');

anotherarray[3] = 'orange';

anotherarray.push('orange');

anotherarray.push(45);


alert("my color " + anotherarray[4]);

var multiply = anotherarray[5] + 20;

alert("my number " + multiply);

alert("array length " + anotherarray.length);

alert("array sort " + anotherarray.sort());//*/

function myFunction()
{
var table = "<table>";


	
for(var r = 0; r < 0xff; r += 25)
{
	table += "<tr>";
	for(var g = 0; g < 0xff ; g += 25)
	{
		var color = ((r << 16) | (g << 8)) | (0);
		
		var color = "#" + ("000000" + color.toString(16)).slice(-6);
		
		//console.log("Color : " + color);

		table += "<td style=\"background-color:"+   color  + "\" >" +  " " + "</td>";	
		
	}
	table += "</tr>";
	
}




	



table += "</tr> </table>";

var colorchooser = document.getElementById("colorchooser");

colorchooser.innerHTML = table;

console.log(table);
}


var numbers = [23, 34, 56, 75, 12, 3 , 1, 78];

numbers = numbers.sort();

numbers.forEach(function(number){
	console.log("Iterate " + number );
});