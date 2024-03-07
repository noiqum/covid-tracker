import "./Tooltip.scss";

type Props = {
  name: string | null;
  x: number;
  y: number;
  display: boolean;
};

export const Tooltip = ({ name, x, y, display }: Props) => {
  if (!display) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
      className="tooltip"
    >
      <p>{name}</p>
    </div>
  );
};
