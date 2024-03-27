import Icon from "@/components/Icon";

export default function Shadcn() {
  return (
    <Icon
      title="shadcn/ui logo"
      description="Two adjacent white lines at an angle, one shorter than the other, against a black backdrop"
      svgProps={{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256" }}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
    </Icon>
  );
}
