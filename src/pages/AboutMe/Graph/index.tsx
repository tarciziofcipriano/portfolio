import React from "react";

import "./index.css";
import c3 from "c3";
import { ThemeModeContext } from "../../../context/ThemeModeContext";
import useIsMobile from "../../../hooks/useIsMobile";

interface GraphProps {
  title: string;
}

const Graph = ({ title }: GraphProps) => {
  const { theme } = React.useContext(ThemeModeContext);
  const mobile = useIsMobile();

  React.useEffect(() => {
    c3.generate({
      padding: {
        top: mobile ? 0 : 10,
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
  }, [mobile, title]);

  return (
    <div id="chart" style={{ fill: theme === "light" ? "black" : "white" }} />
  );
};

export default Graph;
