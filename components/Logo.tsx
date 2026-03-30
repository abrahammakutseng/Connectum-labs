export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8"  cy="8"  r="4.5" stroke="#1a4d3e" strokeWidth="1.5" />
      <circle cx="20" cy="8"  r="4.5" stroke="#1a4d3e" strokeWidth="1.5" />
      <circle cx="14" cy="20" r="4.5" stroke="#1a4d3e" strokeWidth="1.5" />
      <line x1="11.5" y1="10.5" x2="17.5" y2="10.5" stroke="#1a4d3e" strokeWidth="1.2" />
      <line x1="10"   y1="11"   x2="13"   y2="16.5"  stroke="#1a4d3e" strokeWidth="1.2" />
      <line x1="18"   y1="11"   x2="15"   y2="16.5"  stroke="#1a4d3e" strokeWidth="1.2" />
    </svg>
  )
}
