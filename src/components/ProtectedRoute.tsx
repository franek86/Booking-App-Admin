import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import useGetSession from "@/hooks/auth/useGetSession";

type Props = {
  children: React.ReactElement;
};

function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const { isLoading, user } = useGetSession();

  useEffect(() => {
    if (!user && !isLoading) navigate("/signin");
  }, [isLoading, user, navigate]);

  if (isLoading) return <Loader />;

  if (user) return children;
}

export default ProtectedRoute;
