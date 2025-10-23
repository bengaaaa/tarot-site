export default function Sparkle({ style }) {
  return (
    <div className="absolute pointer-events-none animate-sparkle" style={style}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0L11.5 7.5L19 9L11.5 10.5L10 18L8.5 10.5L1 9L8.5 7.5L10 0Z"
          fill="currentColor"
          className="text-yellow-300"
        />
      </svg>
    </div>
  );
}
