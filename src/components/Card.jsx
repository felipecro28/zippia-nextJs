import React from 'react'
import { useState, useEffect } from 'react'
import { requestPayLoad } from '../helpers/request'
import styles from '../../styles/Cards.module.css'

export default function Card(props) {
    const [jobs, setJobs] = useState([]) //Creating an array to push API data into
    let jobsFiltered = jobs.slice(0, 10).filter(job => job.companyName.toLowerCase().includes(props.filter.toLowerCase())) //Filtering the original ARRAY to display the roles searched by company name
    function filteredDate(){ //Using props to control if the user want to filter the array by date or not
        if (props.pastWeek){
            jobsFiltered = jobsFiltered.filter(function(job){
                const today = new Date().getTime()
                const jobDate = new Date(job.OBJpostingDate).getTime()
                const difference= Math.abs(today-jobDate); // simple algorithm to determine the difference of days beetwen the actual day and the day the job was posted
                const days = difference/(1000 * 3600 * 24)
                return days <= 7
            })
        }
    }

    filteredDate()

    useEffect(() => {     //using the use effect hook to fetch data from the API
        fetch(process.env.NEXT_PUBLIC_API, {
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayLoad),
    })
        .then(response => response.json())
        .then(data => {
            setJobs(data.jobs) // pushing data to the created array
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }, [])

  return (
    <div className={styles.cardDiv}>
        {jobsFiltered.map(job =>  // using array method map to return a div with all avaible jobs (limited to 10)
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
