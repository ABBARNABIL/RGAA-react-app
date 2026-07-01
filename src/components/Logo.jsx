import logoUrl from '../assets/logo.png';

export default function Logo({ className, height = 34 }) {
  return (
    <img
      src={logoUrl}
      alt="Malakoff Humanis"
      className={className}
      height={height}
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
    />
  );
}
