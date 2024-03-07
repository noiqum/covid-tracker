import { TCountry } from "../../Data/Data";

export const Country = ({ name, path }: TCountry) => {
  return <path d={path} name={name}></path>;
};
