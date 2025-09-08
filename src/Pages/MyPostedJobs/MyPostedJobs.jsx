import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

const MyPostedJobs = () => {
  const { user } = useAuth()
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:7000/jobs?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setJobs(data))
  },[user?.email])
  return (
    <div>
      <h2>MY POSTED JOBS : {jobs.length}</h2>
    </div>
  )
}

export default MyPostedJobs
