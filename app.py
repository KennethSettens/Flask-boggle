from boggle import Boggle
from flask import Flask, render_template, session

app = Flask(__name__)
boggle_game = Boggle()
app.secret_key = 'your_secret_key_here'


@app.route('/')
def start():
   gameBoard = boggle_game.make_board()
   session['gameBoard'] = gameBoard
   return render_template("board.html", gameBoard=gameBoard)
