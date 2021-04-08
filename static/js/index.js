//https://www.eclipse.org/paho/clients/js/
var cont=0;
function estado() {
	//alert("clic");
	
	
	if(cont==1){
	console.log("OFF");
	//document.getElementById("sensor").innerHTML="CLICK";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client1.send(message);
	cont=2;
	}
	
	if(cont==0){
	console.log("ON");
	//document.getElementById("sensor").innerHTML="CLICK";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client1.send(message);
	cont=1;
        
	}
	
	if(cont==2){
	cont=0;	
	}
	
  
}
function historial(){	
	//alert("clic");
	console.log("historial");
	message = new Paho.MQTT.Message("historial");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema2";
    	client2.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  var counter=0;
  client1 = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  client2 = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers


  var options = {
   useSSL: false,
    userName: "ajmorocho.fie@unach.edu.ec",
    password: "Guipi_1997",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client1.connect(options);
  client2.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client1.subscribe("ajmorocho.fie@unach.edu.ec/tema1");
    client2.subscribe("ajmorocho.fie@unach.edu.ec/tema2");
    
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection




client1.onConnectionLost = function (responseObject) {
     if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

client2.onConnectionLost = function (responseObject) {
   if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
}

  // called when a message arrives


client1.onMessageArrived = function (message) {
  console.log("Message Arrived: "+message.payloadString);
          msm=message.payloadString;
	  if(msm=="ON"){
		document.getElementById("sensor1").innerHTML=msm;  
	  }
	   if(msm=="OFF"){
		document.getElementById("sensor1").innerHTML=msm;  
	  }	
}


client2.onMessageArrived = function (message) {
  console.log("Message Arrived: "+message.payloadString);
	
	  msm=message.payloadString;
	  document.getElementById("sensor2").innerHTML=msm;
}



