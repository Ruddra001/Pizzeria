pizza_list_array = [];

function getmenu()
	{    pizza_name
        // Give the appropriate id name as e
        var item = document.getElementById("pizza_name").value; 
       
        //Add push() function to push item into array
        pizza_list_array.push(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
	}