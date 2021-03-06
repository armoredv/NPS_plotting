import React from "react";
import { ResponsiveLine } from "@nivo/line";
import data from "../data1";
const Line_month = () => (
  <ResponsiveLine
    data={data}
    margin={{
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    }}
    xScale={{
      type: "time",
      format: "%Y-%m",
      precision: "month"
    }}
    xFormat="%Y-%m"
    yScale={{
      type: "linear",
      stacked: true,
      min: "auto",
      max: "auto"
    }}
    minY="auto"
    maxY="auto"
    stacked={true}
    curve="cardinal"
    axisBottom={{
      format: "%Y-%m",
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 90,
     // legend: "Time Scale",
      legendOffset: -10,
      legendPosition: "center"
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "NPS-Score",
      legendOffset: -40,
      legendPosition: "center"
    }}
    dotSize={10}
    dotColor="inherit:darker(0.3)"
    dotBorderWidth={2}
    dotBorderColor="#ffffff"
    enableDotLabel={true}
    dotLabel="y"
    dotLabelYOffset={-12}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default Line_month;
