import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>loading</h1>}
      {error && <h1>error loading page</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

export default App;
