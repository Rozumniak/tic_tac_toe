import React from 'react';
import "../App.css";
import Square from "./Square";

const Board = ({board, chooseSquare, winningIndex}) => {
    return(
        <div className={"board"}>
            <div className={ winningIndex===0 ? "crossline" : "crossline crossline__" + winningIndex}></div>
            <div className={"row"}>
                <Square value={board[0]} chooseSquare={() => {
                    chooseSquare(0);
                }} position={"top_left"} positionLtl={"top_left-ltl"}/>
                <Square value={board[1]} chooseSquare={() => {
                    chooseSquare(1);
                }} position={"top_center"} positionLtl={"top_center-ltl"}/>
                <Square value={board[2]} chooseSquare={() => {
                    chooseSquare(2);
                }} position={"top_right"} positionLtl={"top_right-ltl"}/>
            </div>
            <div className={"row"}>
                <Square value={board[3]} chooseSquare={() => {
                    chooseSquare(3);
                }} position={"center_left"} positionLtl={"center_left-ltl"}/>
                <Square value={board[4]} chooseSquare={() => {
                    chooseSquare(4);
                }} position={"center_center"} positionLtl={"center_center-ltl"}/>
                <Square value={board[5]} chooseSquare={() => {
                    chooseSquare(5);
                }} position={"center_right"} positionLtl={"center_right-ltl"}/>
            </div>
            <div className={"row"}>
                <Square value={board[6]} chooseSquare={() => {
                    chooseSquare(6);
                }} position={"bottom_left"} positionLtl={"bottom_left-ltl"}/>
                <Square value={board[7]} chooseSquare={() => {
                    chooseSquare(7);
                }} position={"bottom_center"} positionLtl={"bottom_center-ltl"}/>
                <Square value={board[8]} chooseSquare={() => {
                    chooseSquare(8);
                }} position={"bottom_right"} positionLtl={"bottom_right-ltl"}/>
            </div>
        </div>
    );
}
export default Board;