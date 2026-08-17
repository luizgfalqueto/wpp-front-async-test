type MessageTailProps = {
  className?: string;
};

export function MessageTail({ className }: MessageTailProps) {
  return (
    <svg
      viewBox="0 0 8 13"
      width="8"
      height="13"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#000000"
        opacity="0.15"
        d="M1.533,3.568L8,12.193V1H2.812C1.042,1,0.474,2.156,1.533,3.568z"
      />

      <path
        fill="currentColor"
        d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
      />
    </svg>
  );
}
