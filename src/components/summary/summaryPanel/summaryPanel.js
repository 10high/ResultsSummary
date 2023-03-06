import React from "react";
import "./summaryPanel.css"
import data from "../../../data/data.json"
import { SummaryItem } from "../summaryItem/summaryItem";
import reactionIcon from "../../../assets/images/icon-reaction.svg";
import memoryIcon from "../../../assets/images/icon-memory.svg";
import verbalIcon from "../../../assets/images/icon-verbal.svg";
import visualIcon from "../../../assets/images/icon-visual.svg";



export class SummaryPanel extends React.Component {
    getData(category) {
        for (let item of data) {
            if (item.category.toLowerCase() === category) {
                return item;
            }
        }
    }

    getIcon(category) {
        const svgVars = { reaction: reactionIcon, memory: memoryIcon, verbal: verbalIcon, visual: visualIcon };
        for (let item of data) {
            if (item.category.toLocaleLowerCase() === category) {
                console.log(svgVars[category]);
                return svgVars[category];
            }
        }
    }

    render() {
        return (
            <article className="summaryPanel__wrapper">
                <h2>Summary</h2>
                <div className="summaryPanel__itemsWrapper">

                    <SummaryItem className="summaryPanel__itemReaction"
                        icon={this.getIcon("reaction")}
                        category={this.getData("reaction").category}
                        score={this.getData("reaction").score} />

                    <SummaryItem className="summaryPanel__itemMemory"
                        icon={this.getIcon("memory")}
                        category={this.getData("memory").category}
                        score={this.getData("memory").score} />

                    <SummaryItem className="summaryPanel__itemVerbal"
                        icon={this.getIcon("verbal")}
                        category={this.getData("verbal").category}
                        score={this.getData("verbal").score} />

                    <SummaryItem className="summaryPanel__itemVisual"
                        icon={this.getIcon("visual")}
                        category={this.getData("visual").category}
                        score={this.getData("visual").score} />
                </div>
            </article>
        )
    }
}
