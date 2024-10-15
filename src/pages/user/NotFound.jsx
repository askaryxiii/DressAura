import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigateHook = useNavigate();

  return (
    <div className="text-center">
      NotFound
      <Button onClick={() => navigateHook("/")}>Back To Home</Button>
    </div>
  );
};

export default NotFound;
