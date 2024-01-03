import React, {useEffect, useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Chart from '../../../../Components/Chart/Chart'
import DashboardCard from '../../../../Components/DashboardCard/DashboardCard'
import useApi from './../../../../Hooks/useApi';

const Dashboard = () => {

  const [totalUsers, setTotalUsers] = useState(0)
  const [totalInstructors, setTotalInstructors] = useState(0)
  const [totalCourses, setTotalCourses] = useState(0)
  const [totalEarnings, setTotalEarnings] = useState(0)

  const {get} = useApi()

  useEffect(()=>{
    get('users').then((res)=>setTotalUsers(res.length))
    get('instructors').then((res)=>{
      const approvedInstructors = res.filter((instructor)=>instructor.approved===true)
      setTotalInstructors(approvedInstructors.length)
    })
    get('courses').then((res)=>{
      const approvedCourses = res.filter((course)=>course.approved===true)
      setTotalCourses(approvedCourses.length)
    })
    get('payments').then((res)=>console.log(res))

  },[])




  return (
    <div className="wrapper mt-5 min-h-screen text-primary backdrop-blur-md">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2' >
       <DashboardCard name={'users'} total={totalUsers} url={'/dashboard/manageUsers'} />
       <DashboardCard name={'instructor applications'} total={totalInstructors} url={'/dashboard/instructorApplication'} />
       <DashboardCard name={'courses'} total={totalCourses} url={'/dashboard/courseRequest'} />
       <DashboardCard name={'earnings'} total={'200'} url={'/dashboard/allTransactions'} />

      </div>

      <div>
        <Chart/>
      </div>

    </div>
  )
}

export default Dashboard