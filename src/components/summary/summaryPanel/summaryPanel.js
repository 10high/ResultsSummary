import React from "react";
import "./summaryPanel.css"
import data from "../../../data/data.json"
import { SummaryItem } from "../summaryItem/summaryItem";

export class SummaryPanel extends React.Component {
    getData(category) {
        for (let item of data) {
            if (item.category.toLowerCase() === category) return item;
        }
    }

    render() {
        return (
            <article className="summaryPanel__wrapper">
                <h2>Summary</h2>
                <div className="summaryPanel__itemsWrapper">

                    <SummaryItem className="summaryPanel__itemReaction"
                        icon={this.getData("reaction").icon}
                        category={this.getData("reaction").category}
                        score={this.getData("reaction").score} />

                    <SummaryItem className="summaryPanel__itemMemory"
                        icon={this.getData("memory").icon}
                        category={this.getData("memory").category}
                        score={this.getData("memory").score} />

                    <SummaryItem className="summaryPanel__itemVerbal"
                        icon={this.getData("verbal").icon}
                        category={this.getData("verbal").category}
                        score={this.getData("verbal").score} />

                    <SummaryItem className="summaryPanel__itemVisual"
                        icon={this.getData("visual").icon}
                        category={this.getData("visual").category}
                        score={this.getData("visual").score} />
                </div>
            </article>
        )
    }
}
