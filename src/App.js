import React from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "./useFetchJobs";

function App() {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      {loading && <h1>loading</h1>}
      {error && <h1>error loading page</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
