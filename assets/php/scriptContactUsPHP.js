// //  This script is associated with mailer.php

// var myForm = document.getElementById('myForm');

// myForm.addEventListener('submit', function(event) {


// 	if (!myForm.checkValidity()) {

//         event.preventDefault()
//         event.stopPropagation()
// 	    myForm.classList.add('was-validated')
// 	    // Create an "div" node:
// 		var node = document.createElement("div");
// 		// Create a text node:
// 		var textnode = document.createTextNode("Isso não é um problema, tente novamente.");
// 		// Append the text node to the "li" node:
// 		node.appendChild(textnode);
// 		node.className = "alert alert-danger tex-center";
// 		// Append the "li" node to the list:
// 		document.getElementById("yourMessageIsSent").innerHTML = '';
// 		document.getElementById("yourMessageIsSent").appendChild(node);	
// 		document.getElementById("sendMessage").disabled = false;

//     } else {


// 	  var data = new FormData(myForm);
// 	 	document.getElementById("sendMessage").disabled = true;
// 	 	// Create an "div" node:
// 		var node = document.createElement("div");
// 		// Create a text node:
// 		var textnode = document.createTextNode("Por favor, espere para dizer se a mensagem foi enviada ou não!");
// 		// Append the text node to the "li" node:
// 		node.appendChild(textnode);
// 		node.className = "alert alert-secondary tex-center";
// 		// Append the "li" node to the list:
// 		document.getElementById("yourMessageIsSent").innerHTML = ''
// 		document.getElementById("yourMessageIsSent").appendChild(node);

// 		// (B) FETCH
// 		fetch("./assets/php/mailer.php", {
// 		    method: "post",
// 		    body: data
// 		})
// 		.then((res) => { return res.text(); })
// 		.then((txt) => {

// 		  	if (txt === 'Email Sent') {

// 	 			myForm.reset();
// 				// Create an "div" node:
// 				var node = document.createElement("div");
// 				// Create a text node:
// 				var textnode = document.createTextNode("Sua mensagem foi enviada, e agora vamos contactar você assim que possivel, muito obrigado!");
// 				node.className = "alert alert-success tex-center";
// 				// Append the text node to the "li" node:
// 				node.appendChild(textnode);
// 				// Append the "li" node to the list:
// 				document.getElementById("yourMessageIsSent").innerHTML = '';
// 				document.getElementById("yourMessageIsSent").appendChild(node);
//  				document.getElementById("sendMessage").disabled = false;

// 		  	} else {

// 		  		// Create an "div" node:
// 				var node = document.createElement("div");
// 				// Create a text node:
// 				var textnode = document.createTextNode("Isso não é um problema, tente novamente.");
// 				// Append the text node to the "li" node:
// 				node.appendChild(textnode);
// 				node.className = "alert alert-danger tex-center";
// 				// Append the "li" node to the list:
// 				document.getElementById("yourMessageIsSent").innerHTML = '';
// 				document.getElementById("yourMessageIsSent").appendChild(node);	
//  				document.getElementById("sendMessage").disabled = false;

// 		  	}
// 		})
// 		.catch((err) => { console.log(err); });
		 
// 		event.preventDefault();
// 		myForm.classList.remove('was-validated');

// 	}


// }, false)


document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('myForm');
	form.addEventListener('submit', contact, false);

	function contact(e) {
			// Prevent form submission to handle email formatting
			e.preventDefault();

			// Validate the form manually
			if (!form.checkValidity()) {
					form.classList.add('was-validated');
					return;
			}

			// Gather form data
			const name = form.elements['nameForm'].value;
			const email = form.elements['emailForm'].value;
			const subject = form.elements['subject'].value;
			const message = form.elements['body'].value;

			// Compose the body for mailto
			const body = `Nome: ${name}\r\nEmail: ${email}\r\nAssunto: ${subject}\r\nMensagem:\r\n${message}`;

			// Update the action attribute to include dynamic content
			form.action = `mailto:mamaucar@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

			// Display success message (optional)
			document.getElementById('yourMessageIsSent').innerHTML = "Sua mensagem foi enviada!";
			
			// Submit the form
			form.submit();
	}
});