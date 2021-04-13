//https://www.eclipse.org/paho/clients/js/
var cont=0;
function estado() {
	//alert("clic");
	
	
	if(cont==1){
	console.log("OFF");
	//document.getElementById("sensor").innerHTML="CLICK";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client.send(message);
	cont=2;
	}
	
	if(cont==0){
	console.log("ON");
	//document.getElementById("sensor").innerHTML="CLICK";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client.send(message);
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
    	client.send(message);
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
	  msm=message.payloadString;
	  if(msm=="Sensor1-ON"){
		document.getElementById("sensor1").innerHTML=msm;  
	  }
	   if(msm=="Sensor1-OFF"){
		document.getElementById("sensor1").innerHTML=msm;  
	  }
	  if(msm=="Sensor2-ON"){
		document.getElementById("sensor2").innerHTML=msm;  
	  }
	   if(msm=="Sensor2-OFF"){
		document.getElementById("sensor2").innerHTML=msm;  
	  }
	  if(msm[0]=="1"){
		 
		
	         document.getElementById("sensor3").innerHTML=msm; 	
		  
	  }
	  
  }


