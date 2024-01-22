// HeatmapComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
// import Tooltip from "@uiw/react-tooltip";

import HeatMap from "@uiw/react-heat-map";

const HeatmapComponent = ({
  goalId,
  goalType,
  startDate,
  endDate,
  goalProgress,
}: {
  goalId: any;
  goalType: any;
  startDate: any;
  endDate: any;
  goalProgress: any;
}) => {
  const value = [
    { date: "2024/01/22", count: 5 },
    { date: "2024/01/21", count: 5 },
    { date: "2024/01/24", count: 5 },
    { date: "2024/01/23", count: 5 },
    { date: "2024/01/28", count: 5 },
    { date: "2024/01/29", count: 5 },
  ];
  const value2 = goalProgress.map((gp) => ({
    date: gp.dateTime,
    count: 5,
  }));
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [selected, setSelected] = useState("");
  return (
    <div className="">
      <HeatMap
        value={value2}
        width={1100}
        height={210}
        // className=" h-full"
        space={5}
        weekLabels={false}
        legendCellSize={0}
        rectSize={16}
        monthLabels={false}
        startDate={new Date(startDate)}
        endDate={new Date("")}
        panelColors={{
          0: "#f4decd",
          2: "#e4b293",
          4: "#d48462",
          10: "#c2533a",
          20: "#ad001d",
          30: "#000",
        }}
        rectRender={(props, data) => {
          if (selected !== "") {
            props.opacity = data.date === selected ? 1 : 0.45;
          }
          return (
            <rect
              {...props}
              onClick={() => {
                setSelected(data.date === selected ? "" : data.date);
              }}
            />
          );
        }}
      />
      <div>{selected}</div>
    </div>
  );
};

export default HeatmapComponent;
