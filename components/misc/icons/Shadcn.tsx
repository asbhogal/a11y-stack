import Icon from "@/components/Icon";

export default function Shadcn() {
  return (
    <Icon
      title="shadcn/ui logo"
      description="Two adjacent white lines at an angle, one shorter than the other, against a black backdrop"
      svgProps={{ viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg" }}
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Icon>
  );
}
