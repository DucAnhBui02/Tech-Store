"use client";
import Image from "next/image";
interface BannerProps {
  image: string;
  width: number;
  height: number;
}
const HomeBanner: React.FC<BannerProps> = ({ image, width, height }) => {
  return (
    <div>
      <Image src={image} alt="banner" width={width} height={height} />
    </div>
  );
};

export default HomeBanner;
