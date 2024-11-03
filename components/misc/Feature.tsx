interface FeatureProps {
  children?: React.ReactNode;
  title: string;
  feature: string;
}

export default function Feature({ children, title, feature }: FeatureProps) {
  return (
    <div className="flex flex-col gap-4 bg-vampireBlack p-5">
      <div className="flex items-center gap-4">
        {children}
        <h4 className="uppercase font-mono font-bold">{title}</h4>
      </div>
      <p>{feature}</p>
    </div>
  );
}
