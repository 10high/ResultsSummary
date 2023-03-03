import React from "react";
import "./summaryItem.css";

export class SummaryItem extends React.Component {
    render() {
        return (
            <article className="summaryItem__outerWrapper">
                <div className="summaryItem__innerWrapper">
                    <span className="summaryItem__icon">{this.props.icon}</span>
                    <h2 className="summaryItem__header">{this.props.header}</h2>
                    <p className="summaryItem__scoreWrapper">
                        <span className="summaryItem__score">{this.props.score}</span>
                        <span className="summaryItem__scoreOutOf">/ 100</span>
                    </p>
                </div>
            </article>
        )
    }
}