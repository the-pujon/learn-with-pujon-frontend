//import {
//  AreaChart,
//  Area,
//  XAxis,
//  YAxis,
//  CartesianGrid,
//  Tooltip,
//  ResponsiveContainer,
//} from "recharts";

//const data = [
//  {
//    name: "Page A",
//    uv: 4000,
//    pv: 2400,
//    amt: 2400,
//  },
//  {
//    name: "Page B",
//    uv: 3000,
//    pv: 1398,
//    amt: 2210,
//  },
//  {
//    name: "Page C",
//    uv: 2000,
//    pv: 9800,
//    amt: 2290,
//  },
//  {
//    name: "Page D",
//    uv: 2780,
//    pv: 3908,
//    amt: 2000,
//  },
//  {
//    name: "Page E",
//    uv: 1890,
//    pv: 4800,
//    amt: 2181,
//  },
//  {
//    name: "Page F",
//    uv: 2390,
//    pv: 3800,
//    amt: 2500,
//  },
//  {
//    name: "Page G",
//    uv: 3490,
//    pv: 4300,
//    amt: 2100,
//  },
//];

//export default function Charts({ earningsDetails }) {
//  console.log(earningsDetails);

//  const earnings = [
//    {
//      _id: "6596a6f002489554f335f8fc",

//      sessionId:
//        "cs_test_b10iQFCEWfnZHN6K1FY2I3Y6dEnZkfDzvXJvHH0TSSQAO8EgfCovwlbmcR",

//      email: "pujondas1234@gmail.com",

//      totalAmount: 3083.3,

//      courses: [
//        {
//          _id: "6534e947609fe8b5740b9fe6",

//          name: "Caryn Ferguson",

//          category: "languageToys",

//          instructorName: "Glenna Carey",

//          price: 966,

//          classImage:
//            "https://i.ibb.co/vhMHN3m/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg",
//        },

//        {
//          _id: "6534e947609fe8b5740b9fe6",

//          name: "Caryn Ferguson",

//          category: "languageToys",

//          instructorName: "Glenna Carey",

//          price: 966,

//          classImage:
//            "https://i.ibb.co/vhMHN3m/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg",
//        },

//        {
//          _id: "65353dd2c424429d6537e3bf",

//          name: "Vivien Head",

//          category: "scienceToys",

//          instructorName: "Glenna Carey",

//          price: 871,

//          classImage:
//            "https://i.ibb.co/h9Pms8z/dollar-gill-0-V7-N62z-Zc-U-unsplash.jpg",
//        },
//      ],

//      paymentStatus: "unpaid",

//      date: "1704371952857",

//      __v: 0,
//    },

//    {
//      _id: "6596aaa402489554f335f909",

//      sessionId:
//        "cs_test_b1nBJaxLZKHdVHLgRGXbfUwBCjos2MR8dUIShUGSAniZSp0svCp0toExnv",

//      email: "pujondas1234@gmail.com",

//      totalAmount: 3083.3,

//      courses: [
//        {
//          _id: "6534e947609fe8b5740b9fe6",

//          name: "Caryn Ferguson",

//          category: "languageToys",

//          instructorName: "Glenna Carey",

//          price: 966,

//          classImage:
//            "https://i.ibb.co/vhMHN3m/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg",
//        },

//        {
//          _id: "6534e947609fe8b5740b9fe6",

//          name: "Caryn Ferguson",

//          category: "languageToys",

//          instructorName: "Glenna Carey",

//          price: 966,

//          classImage:
//            "https://i.ibb.co/vhMHN3m/wes-hicks-MEL-j-Jnm7-RQ-unsplash.jpg",
//        },

//        {
//          _id: "65353dd2c424429d6537e3bf",

//          name: "Vivien Head",

//          category: "scienceToys",

//          instructorName: "Glenna Carey",

//          price: 871,

//          classImage:
//            "https://i.ibb.co/h9Pms8z/dollar-gill-0-V7-N62z-Zc-U-unsplash.jpg",
//        },
//      ],

//      paymentStatus: "unpaid",

//      date: "1704372900676",

//      __v: 0,
//    },
//  ];

//  return (
//    <div className="App">
//      <h1>Hello CodeSandbox</h1>
//      <div
//      //style={{
//      //  width: "100%",
//      //  padding: "30px",
//      //  maxWidth: "1000px",
//      //  margin: "20px auto",
//      //}}
//      >
//        <ResponsiveContainer width={1000} height={600}>
//          <AreaChart
//            width={500}
//            height={400}
//            data={data}
//            margin={{
//              top: 10,
//              right: 30,
//              left: 0,
//              bottom: 0,
//            }}
//          >
//            <CartesianGrid strokeDasharray="3 3" />
//            <XAxis dataKey="name" />
//            <YAxis />
//            <Tooltip />
//            <Area
//              type="monotone"
//              dataKey="uv"
//              stroke="#213555"
//              fill="#213555"
//            />
//          </AreaChart>
//        </ResponsiveContainer>
//      </div>
//    </div>
//  );
//}



import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

export default function Charts({ earningsDetails }) {
  // Assuming earningsDetails is an array of objects with 'date' and 'totalAmount' properties
  const data = earningsDetails.map((earning) => ({
    date: new Date(Number(earning.date)).toLocaleDateString(), // Format the date as per your requirement
    totalAmount: earning.totalAmount,
  }));

  // Group data by date and sum totalAmount for each date
  const groupedData = data.reduce((acc, entry) => {

    console.log(acc)
    console.log(entry)

    const date = entry.date;
    console.log(acc[date])
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += entry.totalAmount;
    return acc;
  }, {});

  console.log(groupedData)


  // Convert grouped data back to an array for rendering the chart
  const chartData = Object.keys(groupedData).map((date) => ({
    date,
    totalAmount: groupedData[date],
  }));

  return (
    <div >
      <div>
        <ResponsiveContainer width={1000} height={600}>
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="totalAmount" stroke="#213555" fill="#213555" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
