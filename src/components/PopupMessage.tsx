type PopupMessageProps = {
  message: string;
  type: "error" | "success";
};

function PopupMessage({ message, type }: PopupMessageProps) {
  return (
    <div
      className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
        type === "error"
          ? "border-red-400/30 bg-red-500/10 text-red-200"
          : "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
      }`}
    >
      {message}
    </div>
  );
}

export default PopupMessage;
