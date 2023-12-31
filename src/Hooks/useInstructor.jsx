import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user, loading } = useAuth();
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        ` https://summer-camp-school-server-roan.vercel.app/users/instructor/${user?.email}`
      );
      return res.json();
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
