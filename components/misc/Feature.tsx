interface FeatureProps {
  title: string;
  feature: string;
}

export default function Feature({ title, feature }: FeatureProps) {
  return (
    <div className="flex flex-col border border-lotion rounded-lg p-5">
      <h3 className="uppercase font-mono font-bold">{title}</h3>
      <p>{feature}</p>
    </div>
  );
}
