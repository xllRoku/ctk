type AlertType = "error" | "warning" | "success";

export function Alert({
  children,
  type,
}: {
  children: string;
  type: AlertType;
}) {
  const backgroundColor =
    type === "error" ? "tomato" : type === "warning" ? "orange" : "powderBlue";

  return <div style={{ padding: "0 10", backgroundColor }}>{children}</div>;
}
