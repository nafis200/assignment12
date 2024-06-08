import { useLoaderData } from "react-router";
import React, { PureComponent, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Surveyresponsedetails = () => {
  const [Click, setClick] = useState(true);
  const loader = useLoaderData();
  const {
    submitted_email,
    submitted_name,
    countyes,
    countno,
    email,
    title,
    description,
    serialNo
  } = loader[0];

  const data = [
    { name: "Group A", value: countyes },
    { name: "Group B", value: countno }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <button className="btn" onClick={() => setClick(true)}>
          Chart
        </button>{" "}
        <button className="btn" onClick={() => setClick(false)}>
          Tabular form
        </button>{" "}
      </div>
      {Click === true ? (
        <>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial No</th>
                  <th>User Name</th>
                  <th>User email</th>
                  <th>Count Yes</th>
                  <th>Count No</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{serialNo}</td>
                  <td>{submitted_name}</td>
                  <td>{submitted_email}</td>
                  <td>{countyes}</td>
                  <td>{countno}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Surveyresponsedetails;
