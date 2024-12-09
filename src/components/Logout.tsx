import useLogout from "@/hooks/auth/useLogout";
import { Button } from "./ui/button";

function Logout() {
  const { mutation } = useLogout();

  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <Button variant='green' className='ms-3' onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
