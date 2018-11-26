# ! /usr/bin/python3

from os import system as system
from random import randint

'''
	Contains functions to print board and save game variables
'''
class Board:
	def __init__(self):				# happens when a board is created
		self.center = 24			# used to center printing the game board 		
		self.numColors = 4			# size of secret
		self.numMaxColors = 8		# size of pool of colors to guess
		self.board = ["  ".join([ "><" for c in range(0, self.numColors)]) for i in range(0, self.numMaxColors) ]	# starts board guess array with attempts as ><
		self.key = generateSecret()	# generates a secret

	'''
		Prints a line
			- input : string, string, string
				- s : center text
				- c : filler char
				- f : start and finish char
	'''
	def printElement(self, s='', c='-', f='-'):	
		print(f+s.center(self.center,c)+f)	

	'''
		Prints game board
			- input : object { int, int }
				- r : dictionary with result from guess
					- right : number of digits that exist in the secret
					- placed : number of digits placed in the right position
	'''
	def printBoard(self, r={"right":-1,"placed":-1}):
		n = r.get("right")
		p = r.get("placed")
		self.printElement('', f='+')
		self.printElement('Master Mind'.upper(),c=' ', f='|')
		self.printElement('', f='+')
		self.printElement( self.getColorStr([str(x) for x in range(1,9)], 18, elem='n',sep =''), c=' ', f='|')
		self.printElement('', f='+')
		for i in self.board:
			self.printElement(i, c=' ', f='|')					# prints all guesses

		self.printElement('', f='+')
		result='Matched colors: '+ (str(n) if n != -1 else 'X')	
		self.printElement( result , c=' ', f='|')
		result='Matched colors: '+ (str(p) if p != -1 else 'X')
		self.printElement( result , c=' ', f='|')
		self.printElement('', f='+')

	'''
		Creates string from sequence of numbers with corresponding colors
			- input : tuple, int, string, string, string, string
				- sequence : sequence of numbers to be printed with corresponding colors
				- l : variable to help center print
				- elem : toggle to display color with corresponding number
				- sep : string to separate color prints
				- right : number of digits that exist in the secret
				- placed : number of digits placed in the right position
			- output : string
				- sep : formated string to be printed
	'''
	def getColorStr(self, sequence, l=16, elem = '  ',sep='  ', right= ' ', placed=' '):
		f= '\033[{};5;{}m{}\033[0m'
		right = f.format('1;38',7,right) 	# right in white color
		placed = f.format('1;38',1,placed)	# placed in red color

		sep = sep.join([f.format('1;48',x,' '+ (str(x) if elem =='n' else ' ')) for x in sequence])

		rhs=((self.center-l)//2)+(0 if self.center%2==0 else 1)	# right formating spacing
		lhs= self.center-l-rhs									# left formating spacing
		sep=right+" "*rhs+sep+" "*lhs+placed
		return sep

	'''
		Updates board guess array with new guess
			- input : int, tuple, object { int, int }
				- i : index of guess to be updated
				- t : inputed attempt from the player
				- r : dictionary with result from guess
					- right : number of digits that exist in the secret
					- placed : number of digits placed in the right position
	'''
	def updateBoard(self, i, t, r):
		self.board[i]= self.getColorStr(t,16, right= str(r.get("right")), placed=str(r.get("placed")))

	'''
		Uses match function to update board values and print new board
			- input : tuple, int
				- attempt : valid input play from terminal
				- iteration : number of current try
			- output : boolean
				- t : test if guess is correct
	'''
	def Guess(self, attempt, iteration ):
		answer = match(attempt, self.key) 				# dictionary with {right:'',placed:''}
		self.updateBoard(iteration, attempt , answer)
		self.printBoard(r=answer)
		t = answer["placed"] == self.numColors
		return t

	'''
		Prints result of the game
	'''
	def printResult(self, result):
		self.printElement("You won!" if result else "You lost!", c=' ',f='|')
		self.printElement(self.getColorStr(self.key), c=' ',f='|')
		self.printElement('', c='-',f='+')
		
# 1st - generateSecret
'''
	Generates a 4 digit long str tuple secret without repeating numbers from 1-8
		- output : tuple
			- t : valid inputed attempt 
'''
def generateSecret():
	r = randint
	l = list(range(1,9))				# list with possible numbers
	f = []								# list to save picked secret
	for i in range(4):					# picks 4 random numbers from l and appends them to f
		v = str(l.pop(r(0,len(l)-1)))	# picks number from list and turns it into string
		f.append(v) 					# appends picked number in string form to f
	
	t = tuple(f)						# turns f list to an immutable tuple
	return t

def genSeq(allowed = list(range(1,9))):	
	return tuple( [ str( allowed.pop(randint(0,len(allowed)-1)) ) for x in range(0,4) ] )


# 2nd - getInput
'''
	Gets valid input from terminal ( 4 digit long str tuple without repeating numbers from 1-8 )
		- output : tuple
'''
def getInput(allowed = ''.join([str(i) for i in range(1,9)]), numMax=4):						# sets allowed as a string of numbers 1-8 and max size of input as 4
	while True:																					# continues to try to get valid input
		try:
			s = tuple(input('Select the colors by their number: '))								# gets input from terminal as a tuple
			if len(set(s)) == numMax and len(s) == len(set(s)) and set(s).issubset(allowed):	# checks if input is the right size, has no repeats and is a number from 1-8
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
		"placed":[ t[x]==k[x] for x in range(0,len(k)) ].count(True),	# goes to k and checks ou many elements are equal to t with the same index
		"right":len(set(k).intersection(set(t)))						# chekcs intersection between k and t
	}

# 4th - game 
'''
	Keeps track of game state
'''
def game():

	iteration = 0						# variable used to keep track of the number of tries  
	board = Board()						# creates a board secret and necessary funtions to print the game in the terminal
	system('clear')						# clears the terminal
	board.printBoard()					
	while iteration < 8:				# gives player 8 tries
		t=getInput()					# gets valid input from terminal
		system('clear')					# clears the terminal
		if board.Guess(t, iteration):	# breaks if player guesses the secret
			break
		iteration = iteration+1			
	else:								# while completes without breaking then player lost
		board.printResult(False)		# prints losing message
		return

	board.printResult(True)				# prints winning message
		
if __name__ == "__main__":
	game()