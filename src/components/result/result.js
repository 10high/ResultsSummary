import React from "react";
import "./result.css";

export class Result extends React.Component {
    render() {
        return (
            <article>
                <h2 className="result__heading">Your Result</h2>
                <div className="result__scoreContainer">
                    <h3 className="result__scoreWrapper">
                        <div className="result__scoreScore">76</div>
                        <div className="result__scoreOutOf">of 100</div>
                    </h3>
                    <h4 className="result__categoryHeader">Great</h4>
                    <p className="result__categoryBody">You scored higher than 65% of the people who have taken these tests.</p>
                </div>
            </article>
        )
    }
}