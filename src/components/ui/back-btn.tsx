import { useNavigate } from "react-router-dom";
import { Button } from "./button";

type BackBtnProps = {
  title: string;
};

function BackBtn({ title }: BackBtnProps) {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <Button variant='outline' onClick={handleBack}>
      {title}
    </Button>
  );
}

export default BackBtn;
