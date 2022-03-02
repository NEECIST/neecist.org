// define as portas analógicas de 0 a 3 como as bananas 0 a 3
// define o buzzer
int banana0 = A0;
int banana1 = A1;
int banana2 = A2;
int banana3 = A3;
int buzzer = 10;

// a rotina de setup corre uma vez no início do programa e sempre que o butão reset é pressionado
void setup() {
  Serial.begin(9600);
  
  // define as bananas como portas INPUT_PULLUP
  pinMode(banana0, INPUT_PULLUP);
  pinMode(banana1, INPUT_PULLUP);
  pinMode(banana2, INPUT_PULLUP);
  pinMode(banana3, INPUT_PULLUP);
  pinMode(buzzer, OUTPUT);
}

// a rotina loop corre infinitamente até que o o botão reset seja pressionado
void loop() {
  //  obter leituras dos pinos analógicos
  int reading0 = analogRead(banana0);
  int reading1 = analogRead(banana1);
  int reading2 = analogRead(banana2);
  int reading3 = analogRead(banana3);
  
  // converter as leituras analógicas (valores de 0 a 1023) para tensões (0 a 5V):
  float voltage0 = reading0 * (5.0 / 1023.0);
  float voltage1 = reading1 * (5.0 / 1023.0);
  float voltage2 = reading2 * (5.0 / 1023.0);
  float voltage3 = reading3 * (5.0 / 1023.0);
  
  // verificação das tensões para ver qual banana foi pressionada e tocar o som de cada uma
  if(voltage0 < 4.9){
    tone(buzzer, 264);
  }
  else if(voltage1 < 4.9){
    tone(buzzer, 297);
  }
  else if(voltage2 < 4.9){
    tone(buzzer, 330);
  }
  else if(voltage3 < 4.9){
    tone(buzzer, 352);
  }
  else{
    noTone(buzzer);
  }

  // print da leitura da banana0:
  Serial.println(voltage0);
}
