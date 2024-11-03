import Icon from "@/components/Icon";

export default function Clipboard() {
  return (
    <Icon
      title="Copy"
      description="A clipboard icon"
      svgProps={{
        "aria-hidden": true,
        className: "lucide lucide-clipboard",
        fill: "none",
        focusable: false,
        height: "24",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
      }}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </Icon>
  );
}
