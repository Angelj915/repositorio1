//https://www.eclipse.org/paho/clients/js/
function on() {
	//alert("clic");
	
	
        console.log("on");
	message = new Paho.MQTT.Message("on");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client.send(message);
	
  
}
function off() {
	//alert("clic");
	
	
        console.log("off");
	message = new Paho.MQTT.Message("off");
    	message.destinationName = "ajmorocho.fie@unach.edu.ec/tema1";
    	client.send(message);
	
  
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
	  console.log(msm[0]);
	  if(msm[0]=='A'){
	  document.getElementById("sensor1").innerHTML=msm;
	  }
	  if(msm[0]=='B'){
	  document.getElementById("sensor2").innerHTML=msm;  
	  }
	  if(msm[0]=='C'){
	  document.getElementById("sensor3").innerHTML=msm;
	  }
	  if(msm[0]=='D'){
          document.getElementById("sensor4").innerHTML=msm;  
	  }


	  
	  
  }


