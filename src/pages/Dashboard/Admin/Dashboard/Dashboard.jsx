import React from 'react'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Chart from '../../../../Components/Chart/Chart'

const Dashboard = () => {
  return (
    <div className="wrapper mt-5 min-h-screen text-primary backdrop-blur-md">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2' >
        <div className='flex flex-col p-3 border rounded-md shadow-xl gap-2' >
          <div className='text-sm' >Total users</div>
          <div className='text-3xl font-semibold text-primary'>$ 200</div>
          <div className='flex justify-between' >
            <Link>See all users</Link>
            <FaUser/>
          </div>
        </div>
        <div className='flex flex-col p-3 border rounded-md shadow-xl gap-2' >
          <div className='text-sm' >Total users</div>
          <div className='text-3xl font-semibold text-primary'>$ 200</div>
          <div className='flex justify-between' >
            <Link>See all users</Link>
            <FaUser/>
          </div>
        </div>
        <div className='flex flex-col p-3 border rounded-md shadow-xl gap-2' >
          <div className='text-sm' >Total users</div>
          <div className='text-3xl font-semibold text-primary'>$ 200</div>
          <div className='flex justify-between' >
            <Link>See all users</Link>
            <FaUser/>
          </div>
        </div>
        <div className='flex flex-col p-3 border rounded-md shadow-xl gap-2' >
          <div className='text-sm' >Total users</div>
          <div className='text-3xl font-semibold text-primary'>$ 200</div>
          <div className='flex justify-between' >
            <Link>See all users</Link>
            <FaUser/>
          </div>
        </div>
      </div>

      <div>
        <Chart/>
      </div>

    </div>
  )
}

export default Dashboard