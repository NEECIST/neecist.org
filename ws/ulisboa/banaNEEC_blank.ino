// define as portas analógicas de 0 a 3 como as bananas 0 a 3
int banana0 = A0;
int banana1 = A1;
int banana2 = A2;
int banana3 = A3;

// a rotina de setup corre uma vez no início do programa e sempre que o butão reset é pressionado
void setup() {
 ?
  
  // define as bananas como portas INPUT_PULLUP
?
?
?
?
?
}

// a rotina loop corre infinitamente até que o o botão reset seja pressionado
void loop() {
  //  get readings from analog ports
  ?
  ?
  ?
  ?
  
  // Convert the analog readings (which goes from 0 - 1023) to a voltage (0 - 5V):
  float voltage0 = reading0 * (5.0 / 1023.0);
  float voltage1 = reading1 * (5.0 / 1023.0);
  float voltage2 = reading2 * (5.0 / 1023.0);
  float voltage3 = reading3 * (5.0 / 1023.0);
  
  // check voltages to determine which banana was pressed and play tone associated with it
  if(   ?    ){
    ?
  }
  else if(   ?    ){
    ?
  }
  else if(   ?    ){
    ?
  }
  else if(   ?    ){
    ?
  }
  else{
    ?
  }

  // print out the value you read:
  Serial.println(voltage0);
}
