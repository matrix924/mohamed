import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const efficiencyData = [
  { name: 'Data Analysis', withStats: 95, withoutStats: 45 },
  { name: 'ML Model Tuning', withStats: 92, withoutStats: 30 },
  { name: 'System Optimization', withStats: 88, withoutStats: 60 },
  { name: 'A/B Testing', withStats: 98, withoutStats: 50 },
];

const bugReductionData = [
  { month: 'Jan', bugs: 120 },
  { month: 'Feb', bugs: 110 },
  { month: 'Mar', bugs: 95 }, // Stats training intro
  { month: 'Apr', bugs: 60 },
  { month: 'May', bugs: 45 },
  { month: 'Jun', bugs: 30 },
];

export const Charts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-journal-900 mb-2">
          Developer Efficiency Comparison
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Impact of statistical literacy on task completion quality (Score 0-100).
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={efficiencyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip 
                contentStyle={{ fontFamily: 'Inter', borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend wrapperStyle={{fontSize: '12px', paddingTop: '10px'}}/>
              <Bar dataKey="withStats" name="With Stats Knowledge" fill="#0f172a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="withoutStats" name="Without Stats Knowledge" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-serif text-lg font-bold text-journal-900 mb-2">
          Bug Frequency Post-Training
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Reduction in logic errors after implementing statistical validation methods.
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={bugReductionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{fontSize: 12}} />
              <YAxis tick={{fontSize: 12}} />
              <Tooltip 
                 contentStyle={{ fontFamily: 'Inter', borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend wrapperStyle={{fontSize: '12px', paddingTop: '10px'}}/>
              <Line type="monotone" dataKey="bugs" name="Reported Logic Errors" stroke="#b45309" strokeWidth={3} dot={{r: 4, fill: '#b45309'}} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};