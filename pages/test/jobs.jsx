import React from 'react'
import Button from '../../src/components/Button'
import Card from '../../src/components/Card'
import Header from '../../src/components/Header'
import style from '../../styles/Jobs.module.css'
import { useState } from 'react'


export default function Jobs() {
  const [companyFilter, setCompanyFilter] = useState('')
  const [pastWeek, setPastWeek] = useState(false)


  return (
    <div>
        <Header />
        <div className={style.jobsDiv}>
            <h1>Developer Jobs Near Me</h1>
            <div className={style.searchDiv}>
              <label htmlFor='searchJobs'></label>
                  <input type='text' placeholder='Company Name' value={companyFilter} onChange={(e)=>setCompanyFilter(e.target.value)} />
              <div className={style.pastWeekDiv}>
                <label id={style.pastWeekLabel}>Past week jobs?</label>
                  <input type='checkbox' value={pastWeek} onChange={() =>setPastWeek(!pastWeek)} />

              </div>

            </div>
        </div>
        <Card filter={companyFilter} pastWeek={pastWeek} api={process.env.API_LINK} />
    </div>
  )
}   
