type PhotoPlaceholderProps = {
  label: string;
  aspectClass?: string;
  className?: string;
};

export default function PhotoPlaceholder({
  label,
  aspectClass = "aspect-[4/3]",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`${aspectClass} rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-center p-6 ${className}`}
    >
      <svg
        className="w-8 h-8 text-gray-400 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h2l1.5-2h7L17 7h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <circle cx="12" cy="13" r="3" />
      </svg>
      <p className="text-sm font-medium text-gray-500">{label}</p>
    </div>
  );
}
