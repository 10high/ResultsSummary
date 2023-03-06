import React from "react";
import "./summaryItem.css";


export class SummaryItem extends React.Component {
    render() {
        return (
            <article className="summaryItem__outerWrapper">
                <div className="summaryItem__innerWrapper">
                    <div className="summaryItem__categoryWrapper">
                        <img className="summaryItem__icon" alt="" src={this.props.icon} />
                        <h2 className="summaryItem__header">{this.props.category}</h2>
                    </div>
                    <p className="summaryItem__scoreWrapper">
                        <span className="summaryItem__score">{this.props.score}</span>
                        <span className="summaryItem__scoreOutOf">/ 100</span>
                    </p>
                </div>
            </article>
        )
    }
}