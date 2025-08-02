import Image from "next/image";

export default function Spin({ width = 24, height = 24 }: { width?: number; height?: number }) {
  return <Image className=" animate-spin " src={"spin.svg"} width={width} height={height} alt="spin" />;
}
