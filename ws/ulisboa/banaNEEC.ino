// define as portas analógicas de 0 a 3 como as bananas 0 a 3
int banana0 = A0;
int banana1 = A1;
int banana2 = A2;
int banana3 = A3;

// a rotina de setup corre uma vez no início do programa e sempre que o butão reset é pressionado
void setup() {
  Serial.begin(9600);
  
  // define as bananas como portas INPUT_PULLUP
  pinMode(banana0, INPUT_PULLUP);
  pinMode(banana1, INPUT_PULLUP);
  pinMode(banana2, INPUT_PULLUP);
  pinMode(banana3, INPUT_PULLUP);
  pinMode(0,OUTPUT);
}

// a rotina loop corre infinitamente até que o o botão reset seja pressionado
void loop() {
  //  obter leituras dos pinos analógicos
  int reading0 = analogRead(banana0);
  int reading1 = analogRead(banana1);
  int reading2 = analogRead(banana2);
  int reading3 = analogRead(banana3);
  
  // converter as leituras analógicas (valores de 0 a 1023) para tensões (0 a 5V):
  //map(valor, de_menor_valor, de_maior_valor, para_menor_valor, para_maior_valor) -> converte valores entre 0 e 1023 para entre 0 e 5V
 float voltage0 = map(reading0, 0, 1023, 0, 5);
 float voltage1 = map(reading1, 0, 1023, 0, 5);
 float voltage2 = map(reading2, 0, 1023, 0, 5);
 float voltage3 = map(reading3, 0, 1023, 0, 5);
 
 // float voltage0 = reading0 * (5.0 / 1023.0);
  //float voltage1 = reading1 * (5.0 / 1023.0);
  //float voltage2 = reading2 * (5.0 / 1023.0);
  //float voltage3 = reading3 * (5.0 / 1023.0);
  
  // verificação das tensões para ver qual banana foi pressionada e tocar o som de cada uma
  if(voltage0 < 4.9){
    tone(10, 244);
    analogWrite(0, 100);
    delay(100);
  }
  else if(voltage1 < 4.9){
    tone(10, 244);
    analogWrite(1, 145);
    delay(100);
  }
  else if(voltage2 < 4.9){
    tone(10, 244);
    analogWrite(2, 185);
    delay(100);
  }
  else if(voltage3 < 4.9){
    tone(10, 244);
    analogWrite(3, 250);
    delay(100);
  }
  else{
    noTone(10);
    analogWrite(0, OFF);
    analogWrite(1, OFF);
    analogWrite(2, OFF);
    analogWrite(3, OFF);
  }

  // print da leitura da banana0:
  Serial.println(voltage0);
}
