import React from "react";

import "./index.css";
import c3 from "c3";

interface GraphProps {
  title: string;
}

const Graph = ({ title }: GraphProps) => {
  React.useEffect(() => {
    c3.generate({
      padding: {
        top: 10,
      },
      data: {
        columns: [
          ["ReactJS", 3],
          ["Typescript", 3],
          ["NodeJS", 3],
          ["Git", 3],
          ["Material UI", 1],
        ],
        type: "donut",
      },
      tooltip: { show: false },
      axis: {
        x: {
          tick: { width: 55 },
        },
      },
      donut: {
        title,
        label: {
          format: (value) => {
            return value;
          },
        },
      },
    });
  }, [title]);

  return <div id="chart" />;
};

export default Graph;
