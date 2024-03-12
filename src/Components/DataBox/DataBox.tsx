import { useCallback } from "react";
import "./DataBox.scss";
import { DownICon } from "./DownIcon";
import { UpICon } from "./UpIcon";

interface DataBoxProps {
  title: string;
  data: string | number | undefined;
  diff: number | undefined;
  loading: boolean;
}

export const DataBox = ({ title, data, diff, loading }: DataBoxProps) => {
  const IconHandler = useCallback(
    (diff?: number) => {
      if (diff) {
        if (diff > 0) {
          return <UpICon />;
        }
        if (diff < 0) {
          return <DownICon />;
        }
      } else {
        return "--";
      }
    },

    []
  );

  return (
    <div className={`data-box ${loading ? "data-box--loading" : ""}`}>
      <p className="data-box__title">{title}</p>
      <p className="data-box__data">{data}</p>
      <p className="data-box__diff">
        <small>changes:</small> {diff}
        {IconHandler(diff)}
      </p>
    </div>
  );
};
