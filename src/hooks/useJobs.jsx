import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = (sort , search) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:7000/jobs?sort=${sort}&search=${search}`)
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sort, search]);

  return { jobs, loading };
};

export default useJobs;
