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