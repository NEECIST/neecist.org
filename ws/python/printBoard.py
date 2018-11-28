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
		result='Placed colors: '+ (str(p) if p != -1 else 'X')
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