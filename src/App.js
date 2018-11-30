import React, { Component } from 'react';
import './App.css';
import logoX from './Gif/X.gif'
import logoO from './Gif/O.gif'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      writeX: true,
      winX: false,
      winO: false,
      pareggio: false,
      chihavinto: "",
      logo: "",
      board: [
      ]
    }

    for (let i = 0; i < 9; i++) {
      this.state.board.push({
        idx: i,
        val: ""
      })
    }
  }

  play(idx) {
    const text = this.state.writeX ? "x" : "o"
    const board = this.state.board

    if (board[idx].val === "") {
      board[idx].val = text
      this.setState({
        board: board,
        writeX: !this.state.writeX
      })
    }

    if ((board[0].val === "x" && board[1].val === "x" && board[2].val === "x") ||
      (board[0].val === "x" && board[3].val === "x" && board[6].val === "x") ||
      (board[0].val === "x" && board[4].val === "x" && board[8].val === "x") ||
      (board[3].val === "x" && board[4].val === "x" && board[5].val === "x") ||
      (board[6].val === "x" && board[7].val === "x" && board[8].val === "x") ||
      (board[1].val === "x" && board[4].val === "x" && board[7].val === "x") ||
      (board[2].val === "x" && board[5].val === "x" && board[8].val === "x") ||
      (board[2].val === "x" && board[4].val === "x" && board[6].val === "x")) {
      this.setState({
        winX: true,
        chihavinto: "La X ha vinto",
        logo: logoX
      })
    }

    if ((board[0].val === "o" && board[1].val === "o" && board[2].val === "o") ||
      (board[0].val === "o" && board[3].val === "o" && board[6].val === "o") ||
      (board[0].val === "o" && board[4].val === "o" && board[8].val === "o") ||
      (board[3].val === "o" && board[4].val === "o" && board[5].val === "o") ||
      (board[6].val === "o" && board[7].val === "o" && board[8].val === "o") ||
      (board[1].val === "o" && board[4].val === "o" && board[7].val === "o") ||
      (board[2].val === "o" && board[5].val === "o" && board[8].val === "o") ||
      (board[2].val === "o" && board[4].val === "o" && board[6].val === "o")) {
      this.setState({
        winO: true,
        chihavinto: "La O ha vinto",
        logo: logoO
      })

    }

    if (board[0].val !== "" && board[1].val !== "" && board[2].val !== "" && board[3].val !== "" &&
      board[4].val !== "" && board[5].val !== "" && board[6].val !== "" && board[7].val !== "" && board[8].val !== "") {
      this.setState({
        pareggio: true,
        chihavinto: "Nessuno ha vinto"
      })
    }
  }

  reset() {
    const board = this.state.board
    if (this.state.winX === true) {
      for (let i = 0; i < 9; i++) {
        board[i].val = ""
        this.setState({
          board: board,
          winX: false,
          writeX: true,
          chihavinto: "",
          logo: ""
        })
      }
    } else if (this.state.winO === true) {
      for (let i = 0; i < 9; i++) {
        board[i].val = ""
        this.setState({
          board: board,
          winO: false,
          writeX: true,
          chihavinto: "",
          logo: ""
        })
      }
    } else if (this.state.pareggio === true) {
      for (let i = 0; i < 9; i++) {
        board[i].val = ""
        this.setState({
          board: board,
          pareggio: false,
          writeX: true,          chihavinto: "",
          logo: ""
        })
      }
    }
  }

  render() {
    const turno = this.state.writeX ? "1" : "2"
    return (
      <div className="App">
        <h1>È il turno del giocatore {turno}</h1>
        <div className="grid-container" onClick={() => { this.reset() }}>
          {this.state.board &&
            this.state.board.map((item, index) => {
              return (
                <div key={item + index} onClick={() => { this.play(index) }} className={"grid grid" + index} >
                  {this.state.board[index].val}
                </div>
              )
            })
          }
        </div>
        <div className="vinto">
          <div className="testo">{this.state.chihavinto}</div>
          <img src={this.state.logo} alt="logo" />
        </div>
      </div >
    );
  }
}

export default App;
