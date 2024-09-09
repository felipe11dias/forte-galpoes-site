//  This script is associated with mailer.php

var myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {


	if (!myForm.checkValidity()) {

        event.preventDefault()
        event.stopPropagation()
	    myForm.classList.add('was-validated')
	    // Create an "div" node:
		var node = document.createElement("div");
		// Create a text node:
		var textnode = document.createTextNode("Isso não é um problema, tente novamente.");
		// Append the text node to the "li" node:
		node.appendChild(textnode);
		node.className = "alert alert-danger tex-center";
		// Append the "li" node to the list:
		document.getElementById("yourMessageIsSent").innerHTML = '';
		document.getElementById("yourMessageIsSent").appendChild(node);	
		document.getElementById("sendMessage").disabled = false;

    } else {


	  var data = new FormData(myForm);
	 	document.getElementById("sendMessage").disabled = true;
	 	// Create an "div" node:
		var node = document.createElement("div");
		// Create a text node:
		var textnode = document.createTextNode("Por favor, espere para dizer se a mensagem foi enviada ou não!");
		// Append the text node to the "li" node:
		node.appendChild(textnode);
		node.className = "alert alert-secondary tex-center";
		// Append the "li" node to the list:
		document.getElementById("yourMessageIsSent").innerHTML = ''
		document.getElementById("yourMessageIsSent").appendChild(node);

		// (B) FETCH
		fetch("./assets/php/mailer.php", {
		    method: "post",
		    body: data
		})
		.then((res) => { return res.text(); })
		.then((txt) => {

		  	if (txt === 'Email Sent') {

	 			myForm.reset();
				// Create an "div" node:
				var node = document.createElement("div");
				// Create a text node:
				var textnode = document.createTextNode("Sua mensagem foi enviada, e agora vamos contactar você assim que possivel, muito obrigado!");
				node.className = "alert alert-success tex-center";
				// Append the text node to the "li" node:
				node.appendChild(textnode);
				// Append the "li" node to the list:
				document.getElementById("yourMessageIsSent").innerHTML = '';
				document.getElementById("yourMessageIsSent").appendChild(node);
 				document.getElementById("sendMessage").disabled = false;

		  	} else {

		  		// Create an "div" node:
				var node = document.createElement("div");
				// Create a text node:
				var textnode = document.createTextNode("Isso não é um problema, tente novamente.");
				// Append the text node to the "li" node:
				node.appendChild(textnode);
				node.className = "alert alert-danger tex-center";
				// Append the "li" node to the list:
				document.getElementById("yourMessageIsSent").innerHTML = '';
				document.getElementById("yourMessageIsSent").appendChild(node);	
 				document.getElementById("sendMessage").disabled = false;

		  	}
		})
		.catch((err) => { console.log(err); });
		 
		event.preventDefault();
		myForm.classList.remove('was-validated');

	}


}, false)

