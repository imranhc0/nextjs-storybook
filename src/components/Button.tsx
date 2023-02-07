interface Props {
  label: string;
  size: "small" | "medium" | "large" | "extraLarge";
  color: "primary" | "secondary" | "warning";
}

export const Button = ({ label, size, color }: Props) => {
  const baseColor =
    color === "primary"
      ? "bg-blue-500"
      : color === "secondary"
      ? "bg-green-500"
      : color === "warning"
      ? "bg-orange-500"
      : "bg-blue-500";
  let btnSize = "";
  switch (size) {
    case "small":
      btnSize = "px-4 py-2";
      break;
    case "medium":
      btnSize = "px-8 py-3";
      break;
    case "large":
      btnSize = "px-10 py-4";
      break;
    case "extraLarge":
      btnSize = "px-12 py-4";
      break;
  }
  return (
    <button
      className={`${btnSize} ${baseColor} rounded-lg shadow-xl text-white font-bold`}
    >
      {label}
    </button>
  );
};
