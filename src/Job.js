import React from "react";

export default function Job({ job }) {
  return (
    <div>
      {job.title}--{job.type}--{job.location}
    </div>
  );
}
