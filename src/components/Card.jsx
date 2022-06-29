import React from 'react'
import { useState, useEffect } from 'react'
import { requestPayLoad } from '../helpers/request'
import styles from '../../styles/Cards.module.css'

export default function Card(props) {
    const [jobs, setJobs] = useState([])
    let jobsFiltered = jobs.slice(0, 10).filter(job => job.companyName.toLowerCase().includes(props.filter.toLowerCase()))
    function filteredDate(){
        if (props.pastWeek){
            jobsFiltered = jobsFiltered.filter(function(job){
                const today = new Date().getTime()
                const jobDate = new Date(job.OBJpostingDate).getTime()
                const difference= Math.abs(today-jobDate);
                const days = difference/(1000 * 3600 * 24)
                return days <= 7
            })
        }
    }

    filteredDate()

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API, {
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayLoad),
    })
        .then(response => response.json())
        .then(data => {
            setJobs(data.jobs)
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }, [])

    console.log(jobsFiltered)

  return (
    <div className={styles.cardDiv}>
        {jobsFiltered.map(job => 
        <div className={styles.cards} key={job.jobId}>
            <h3>{job.jobTitle}</h3>
            <h4>{job.companyName}</h4>
            <div className={styles.description}>
            <p>Description: </p>
            {job.snippets.map((text, index) => <p key={index}>{text}</p>)}
            </div>

        </div>)
        }
    </div>
  )
}
