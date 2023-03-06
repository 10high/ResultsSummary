import React from "react";
import ReactDOM from "react-dom";
import "./Utilities/reset.css"
import "./index.css";
import { Result } from "./components/result/result";
import { SummaryPanel } from "./components/summary/summaryPanel/summaryPanel";


ReactDOM.render(
    <main>
        <div className="imposter">
            <div className="card">
                <Result />
                <SummaryPanel />
            </div>
        </div>
    </main>,
    document.getElementById("root"));

