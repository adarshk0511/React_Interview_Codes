import { useEffect, useState } from "react";

const JobsList = ({ data, perPage = 10 }) => {
  const [jobsData, setJobsData] = useState([]);
  const [currPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const jobPromises = data
        .slice(currPage, currPage + perPage)
        .map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (res) => res.json()
          )
        );

      const jobs = await Promise.all(jobPromises);
      console.log(jobs);
      setJobsData((prev) => [...prev, ...jobs]);
      setLoading(false);
    } catch (err) {
      console.error();
    }
  };

  useEffect(() => {
    fetchData();
  }, [data, currPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2 &&
        !loading
      ) {
        setCurrentPage((prev) => prev + perPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      <p>List</p>
      <div className="jobs">
        {jobsData.map((job, index) => {
          return (
            <div key={job.id} className="job">
              {" "}
              <strong>Job Title: {job.title}</strong>
              <br />
              <span>By: {job.by}</span>
              <button className="apply">Apply</button>
            </div>
          );
        })}
        {loading && <div>Loading more</div>}
        {!loading && currPage >= data.length && <div>No more jobs to load</div>}
      </div>
    </div>
  );
};

export default JobsList;
