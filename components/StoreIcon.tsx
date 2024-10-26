import { FC } from "react";

interface Props {
  src: string;
  alt: string;
}

const StoreIcon: FC<Props> = ({ src, alt }) => {
  return (
    <img
      className="scale-on-hover"
      src={src}
      alt={alt}
      style={{ width: 250, margin: 10 }}
    />
  );
};

export default StoreIcon;
