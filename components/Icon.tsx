interface IconProps {
  children: React.ReactNode;
  inButton?: boolean;
  title: string;
  description: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export default function Icon({
  children,
  inButton = false,
  title,
  description,
  svgProps,
}: IconProps) {
  return (
    <svg
      aria-hidden={inButton && "true"}
      focusable={inButton && "false"}
      role="img"
      aria-describedby="icon icon-description"
      {...svgProps}
    >
      <title id="my-title">{title}</title>
      <desc id="my-descrip">{description}</desc>
      {children}
    </svg>
  );
}
