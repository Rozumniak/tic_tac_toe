import React, {useEffect, useState} from 'react';
import './App.css';
import Board from "./Components/Board";
import {Patterns} from "./Patterns";
import Modal from "./Components/Modal";
import {Formik} from "formik";

function App() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "",]);
    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({winner: "none", state: "none"});
    const [isModal, setIsModal] = useState(true);
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [numberOfWins, setNumberOfWins] = useState([0, 0]);
    const [winningIndex, setWinningIndex] = useState(null);


    useEffect(() => {
        checkWin();
        checkIfTie();

        if (player == "X") {
            setPlayer("O");
        } else {
            setPlayer("X");
        }
    }, [board]);

    useEffect(() => {
        if (result.state != "none") {
            if (result.winner === "X") {
                setNumberOfWins(
                    numberOfWins.map((val, idx) => {
                        if (idx === 0) {
                            return val + 1;
                        }
                        return val;
                    })
                )
            } else {
                if (result.winner === "O") {
                    setNumberOfWins(
                        numberOfWins.map((val, idx) => {
                            if (idx === 1) {
                                return val + 1;
                            }
                            return val;
                        })
                    )
                }
            }
            setTimeout(() => {
                restartGame();
                setWinningIndex(0);
            }, 1000)

        }
    }, [result]);

    const chooseSquare = (square) => {
        setBoard(
            board.map((val, idx) => {
                if (idx == square && val == "") {
                    return player;
                }
                return val;
            })
        );
    };

    const checkWin = () => {
        Patterns.forEach((currPattern, i) => {
            const firstPlayer = board[currPattern[0]];
            // console.log(board[currPattern[0]])
            if (firstPlayer == "") return;
            let foundWinningPattern = true;
            currPattern.forEach((idx) => {

                if (board[idx] != firstPlayer) {
                    foundWinningPattern = false;
                }
            });

            if (foundWinningPattern) {
                setResult({winner: player, state: "Won"});
                setWinningIndex(currPattern.join(''))
            }
        });
    };

    const checkIfTie = () => {
        let filled = true;
        board.forEach((square) => {
            if (square == "") {
                filled = false;
            }
        });

        if (filled) {
            setResult({winner: "No One", state: "Tie"});
        }
    };

    const restartGame = () => {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setPlayer("O");
    };

    let submitPlayers = (values) => {
        setName1(values.player_name1);
        setName2(values.player_name2);
        setIsModal(false);
    };

    let gameFullRestart = () => {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setPlayer("O");
        setNumberOfWins([0, 0]);
        setIsModal(true);
    };

    return (
        <div className={"wrapper"}>
            <div className={"content"}>

                <Board board={board} chooseSquare={chooseSquare} winningIndex={winningIndex}/>
                <div className={"sidebar"}>
                    <button onClick={() => {
                        gameFullRestart()
                    }} className={"sidebar__button"}>Restart
                    </button>
                    <div className={"sidebar__score"}>
                        <p>Score</p>
                        <p>{name1 + ":" + " " + numberOfWins[0]}</p>
                        <p>{name2 + ":" + " " + numberOfWins[1]}</p>
                    </div>
                </div>
            </div>
            <Modal isModal={isModal} setIsModal={setIsModal} setName1={setName1} setName2={setName2}>
                <div>
                    <Formik
                        initialValues={{
                            player_name1: '',
                            player_name2: ''
                        }}
                        onSubmit={(values) => {
                            submitPlayers(values)
                        }}>
                        {({
                              values, handleSubmit, handleChange
                          }) => (
                            <form className={"settingForm"}>
                                <p className={"settingForm__label"}>Set players names</p>
                                <p className={"settingForm__label"}>Player 1</p>
                                <input className={"settingForm__input"} type={"text"} name={"player_name1"}
                                       onChange={handleChange}
                                       value={values.player_name1}/>
                                <p className={"settingForm__label"}>Player 2</p>
                                <input className={"settingForm__input"} type={"text"} name={"player_name2"}
                                       onChange={handleChange}
                                       value={values.player_name2}/>
                                <button className={"settingForm__button"} type={"submit"} onClick={handleSubmit}>Start
                                    game
                                </button>
                            </form>
                        )}
                    </Formik>

                </div>
            </Modal>
        </div>
    );
}

export default App;
