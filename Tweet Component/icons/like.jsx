const LikeIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "red" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 21s-8-4.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-8 11-8 11z" />
  </svg>
);

export default LikeIcon;
