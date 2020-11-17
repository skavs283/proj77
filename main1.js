    counter = 1;
    name_of_the_student_array = [];
    function nextstudent(type)
    {
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", "text");
    //element.setAttribute("value", "name of the student"+counter);
    element.setAttribute("id", "stid"+counter);
    element.setAttribute("name", "txtbox"+counter);
   

    var foo = document.getElementById("addstudents");

    //Append the element in page (in span).

            foo.appendChild(element);
            console.log(foo);
            var br = document.createElement("br");
            foo.appendChild(br);
            
            counter++;
    }
	
	function submit()
	{
        var i=1;;
        for( i=1; i<counter;i++)
       { 
           var studid= document.getElementById("stid"+i).value;
           //console.log(studid);
           name_of_the_student_array.push(studid);
    }
		console.log(name_of_the_student_array);
		
        document.getElementById("display_name").innerHTML = name_of_the_student_array;
        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button1").style.display = "inline-block";
        

	}
function sorting()
{

}
function sorting1()
{
console.log(name_of_the_student_array);
    name_of_the_student_array.sort();
    
    console.log(name_of_the_student_array);
	document.getElementById("display_name").innerHTML = name_of_the_student_array;
}
