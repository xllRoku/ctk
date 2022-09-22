export const AlertInput = ({ children }: { children: React.ReactNode }) => {
  return (
    <span role="alert" style={{ color: "tomato" }}>
      {children}
    </span>
  );
};
