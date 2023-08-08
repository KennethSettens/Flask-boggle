from boggle import Boggle
from flask import Flask, jsonify, render_template, request, session

app = Flask(__name__)
boggle_game = Boggle()
app.secret_key = 'your_secret_key_here'


@app.route('/')
def start():
   gameBoard = boggle_game.make_board()
   session['gameBoard'] = gameBoard
   return render_template("board.html", gameBoard=gameBoard)


@app.route("/submit", methods=["POST"])
def submit_answer():
   board = request.form.get("gameBoard")
   word  = request.form.get("input")
   abc = boggle_game.check_valid_word(board, word)

   return abc