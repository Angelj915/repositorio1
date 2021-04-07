//https://www.eclipse.org/paho/clients/js/

function estado() {
	//alert("clic");
	
	
	console.log("estado");
	//document.getElementById("sensor").innerHTML="CLICK";
	message1 = new Paho.MQTT.Message("estado");
    	message1.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client.send(message1);
	
	
  
}
function historial(){	
	//alert("clic");
	console.log("historial");
	message2 = new Paho.MQTT.Message("historial");
    	message2.destinationName = "ajmorocho.fie@unach.edu.ec/tema2";
    	client.send(message2);
	//document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  var counter=0;
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  var options = {
   useSSL: false,
    userName: "ajmorocho.fie@unach.edu.ec",
    password: "Guipi_1997",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("ajmorocho.fie@unach.edu.ec/tema1");
    client.subscribe("ajmorocho.fie@unach.edu.ec/tema2");
    message3 = new Paho.MQTT.Message("RUNNING...");
    message3.destinationName = "ajmorocho.fie@unach.edu.ec/tema2";
    client.send(message3);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor1").innerHTML=message1.payloadString;
	  document.getElementById("sensor2").innerHTML=message2.payloadString;
  }


