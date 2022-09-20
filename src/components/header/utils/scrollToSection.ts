export const scrollToSection = (
  elementRef: any,
  navigate: any,
  currentLocation: any
) => {
  console.log(elementRef);
  if (currentLocation !== "/") {
    navigate("/");

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  } else {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }
};
