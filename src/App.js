import React from "react";
import Line from "./components/line.js";
import Line_month from "./components/line_month.js";
import Line_year from "./components/line_year.js";
import { Tabs } from "@feuer/react-tabs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Tabs
        tabsProps={{
          style: {
            textAlign: "left"
          }
        }}
        activeTab={{
          id: "tab1"
        }}
      >
        <Tabs.Tab id="tab1" title="Tab 1">
          <div style={{ padding: 10 }}>
            <h1> Daily NPS Score </h1>
            <div style={{ height: 500 }}>
              <Line />
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Tab 2">
          <div style={{ padding: 10 }}>
            <h1> Monthly NPS Score </h1>
            <div style={{ height: 500 }}>
              <Line_month />
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab id="tab3" title="Tab 3">
          <div style={{ padding: 10 }}>
            <h1> Yearly NPS Score </h1>
            <div style={{ height: 500 }}>
              <Line_year />
            </div>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
