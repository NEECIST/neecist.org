#! /usr/bin/python3

from os import system as system
from random import randint



class Board:
	def __init__(self):
		self.center = 24
		self.numColors = 4
		self.numMaxColors = 8
		self.board = ["  ".join([ "><" for c in range(0, self.numColors)]) for i in range(0, self.numMaxColors) ]
		self.key = generateSecret()

	def printElement(self, s='', c='-', f='-'):
		print(f+s.center(self.center,c)+f)


	def printBoard(self, r={"right":-1,"placed":-1}):
		n = r.get("right")
		p = r.get("placed")
		self.printElement('', f='+')
		self.printElement('Master Mind'.upper(),c=' ', f='|')
		self.printElement('', f='+')
		self.printElement( self.getColorStr([str(x) for x in range(1,9)], 18, elem='n',sep =''), c=' ', f='|')
		self.printElement('', f='+')
		for i in self.board:
			self.printElement(i, c=' ', f='|')

		self.printElement('', f='+')
		result='Matched colors: '+ (str(n) if n != -1 else 'X')
		self.printElement( result , c=' ', f='|')
		result='Matched colors: '+ (str(p) if p != -1 else 'X')
		self.printElement( result , c=' ', f='|')
		self.printElement('', f='+')

	def getColorStr(self, sequence, l=16, elem = '  ',sep='  ', right= ' ', placed=' '):
		f= '\033[{};5;{}m{}\033[0m'
		right = f.format('1;38',7,right) # n. cores certas white color
		placed = f.format('1;38',1,placed) # n. cores bem posicionadas red color

		sep = sep.join([f.format('1;48',x,' '+ (str(x) if elem =='n' else ' ')) for x in sequence])

		rhs=((self.center-l)//2)+(0 if self.center%2==0 else 1)
		lhs= self.center-l-rhs
		sep=right+" "*rhs+sep+" "*lhs+placed
		return sep


	def updateBoard(self, i, t, r):
		self.board[i]= self.getColorStr(t,16, right= str(r.get("right")), placed=str(r.get("placed")))

	def Guess(self, attempt, iteration ):
		answer = match(attempt, self.key) #dictionary, with {right:'',placed:''}
		self.updateBoard(iteration, attempt , answer)
		self.printBoard(r=answer)
		return answer["placed"] == self.numColors

	def printResult(self, result):
		self.printElement("You won!" if result else "You lost!", c=' ',f='|')
		self.printElement(self.getColorStr(self.key), c=' ',f='|')
		self.printElement('', c='-',f='+')
		
# 1st - generateSecret
'''
	Generates a 4 digit long str tuple secret without repeating numbers from 1-8
		-output : tuple
			- t : valid inputed attempt 
'''
def generateSecret():
	r = randint
	l = list(range(1,9))				#list with possible numbers
	f = []								#list to save picked secret
	for i in range(4):					#picks 4 random numbers from l and appends them to f
		v = str(l.pop(r(0,len(l)-1)))	#picks number from list and turns it into string
		f.append(v) 					#appends picked number in string form to f
	
	t = tuple(f)						#turns f list to an immutable tuple
	return t

def genSeq(allowed = list(range(1,9))):	
	return tuple( [ str( allowed.pop(randint(0,len(allowed)-1)) ) for x in range(0,4) ] )


# 2nd - getInput
'''
	Gets valid input from terminal ( 4 digit long str tuple without repeating numbers from 1-8 )
		- output : tuple
'''
def getInput(allowed = ''.join([str(i) for i in range(1,9)]), numMax=4):						#sets allowed as a string of numbers 1-8 and max size of input as 4
	while True:																					#continues to try to get valid input
		try:
			s = tuple(input('Select the colors by their number: '))								#gets input from terminal as a tuple
			if len(set(s)) == numMax and len(s) == len(set(s)) and set(s).issubset(allowed):	#checks if input is the right size, has no repeats and is a number from 1-8
				return s
		except ValueError:
			pass

# 3nd - match
'''
	Checks how many digits are right and in the the right place
		- input : tuple, tuple
			- t : attempt
			- k : secret
		- output : object { int, int } 
			- placed : number of digits placed in the right position
			- right : number of digits that exist in the secret
'''
def match(t, k):
	return	{ 
		"placed":[ t[x]==k[x] for x in range(0,len(k)) ].count(True),	#goes to k and checks ou many elements are equal to t with the same index
		"right":len(set(k).intersection(set(t)))						#chekcs intersection between k and t
	}

# 5th - game 
'''

'''
def game():

	iteration = 0	
	board = Board()
	system('clear')
	board.printBoard()
	while iteration < 8:
		t=getInput()
		system('clear')
		if board.Guess(t, iteration):
			break
		iteration = iteration+1
	else:
		board.printResult(False)
		return

	board.printResult(True)
		
if __name__ == "__main__":
	game()