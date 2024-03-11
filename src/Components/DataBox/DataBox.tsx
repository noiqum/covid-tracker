import "./DataBox.scss";

interface DataBoxProps {
  title: string;
  data: string | number | undefined;
}

export const DataBox = ({ title, data }: DataBoxProps) => {
  return (
    <div className="data-box">
      <p className="data-box__title">{title}</p>
      <p className="data-box__data">{data}</p>
    </div>
  );
};
