import { useEffect, useState } from "react";
import "./Loader.scss"; // Ensure your CSS file is correctly imported

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds and then trigger the animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoaded ? "is-loaded" : ""}`}>
      <div className="pl-l"></div>
      <div className="pl-r"></div>
      <div className="pl-line">
        <div></div>
      </div>
    </div>
  );
}
