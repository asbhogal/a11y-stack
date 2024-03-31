import Icon from "../Icon";

type LinkPropsBase = {
  className?: string;
  children: React.ReactNode;
  label: string;
  href: string;
  title: string;
  ariaLabel: string;
  external: boolean;
  related: boolean;
  rel?: string;
  type: "primary" | "secondary" | "tertiary";
};

type LinkPropsWithIcon = LinkPropsBase & {
  icon: true;
  iconTitle: string;
  iconDescription: string;
};

type LinkPropsWithoutIcon = LinkPropsBase & {
  icon?: false;
};

type LinkProps = LinkPropsWithIcon | LinkPropsWithoutIcon;

export default function Link({
  className,
  label,
  href,
  ariaLabel,
  children,
  related = false,
  rel,
  title,
  external = false,
  type = "primary",
  ...props
}: LinkProps) {
  const hasIcon = "iconTitle" in props && "iconDescription" in props;

  const typeClassMap = {
    primary: "primary-link",
    secondary: "secondary-link",
    tertiary: "tertiary-link",
  };

  const linkClass = typeClassMap[type];

  return (
    <a
      href={href}
      aria-label={external ? `${ariaLabel} (Opens in a new tab)` : ariaLabel}
      target={external ? "_blank" : "_self"}
      rel={related ? "noopener noreferrer" : undefined}
      title={title}
      className={[
        "flex",
        "items-center",
        "gap-4",
        "p-2",
        "rounded-md",
        "w-max",
        "uppercase",
        "font-bold",
        "tracking-[0.0625rem]",
        "transition",
        type,
        className,
        linkClass,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      {hasIcon && (
        <Icon
          svgProps={{
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }}
          title={props.iconTitle}
          description={props.iconDescription}
        >
          <path
            id="Path 2"
            d="M1.3219 1L6.3219 6L1.3219 11"
            stroke="#D87D4A"
            strokeWidth="2"
          />
        </Icon>
      )}
    </a>
  );
}
