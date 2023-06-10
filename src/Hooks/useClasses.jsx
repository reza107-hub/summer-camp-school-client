import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
  const { user } = useAuth();

  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedcourse?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedCourses, refetch, user];
};

export default useClasses;
