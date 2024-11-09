interface IconProps {
  children: React.ReactNode;
  className?: string;
  inButton?: boolean;
  title: string;
  description: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export default function Icon({
  children,
  className,
  inButton = false,
  title,
  description,
  svgProps,
}: IconProps) {
  return (
    <svg
      aria-hidden={inButton ? 'true' : undefined}
      focusable={inButton ? 'false' : undefined}
      role="img"
      aria-describedby="icon icon-description"
      className={[className, 'icon'].join(' ')}
      {...svgProps}
    >
      <title id="my-title">{title}</title>
      <desc id="my-description">{description}</desc>
      {children}
    </svg>
  );
}
