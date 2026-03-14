import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { ChartDataPoint } from '../types';

interface Props {
  data: ChartDataPoint[];
  primaryColor: string;
  accentColor: string;
  textColor: string;
  forExport?: boolean;
}

const ChartComponent: React.FC<Props> = ({ data, primaryColor, accentColor, textColor, forExport }) => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={primaryColor} stopOpacity={0.4}/>
              <stop offset="95%" stopColor={primaryColor} stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="gradientAccent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={primaryColor} stopOpacity={1}/>
              <stop offset="100%" stopColor={accentColor} stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          
          {/* Subtle grid lines */}
          <CartesianGrid 
            strokeDasharray="4 4" 
            vertical={false} 
            stroke={textColor}
            strokeOpacity={0.1}
            strokeWidth={1}
          />
          
          {/* X Axis */}
          <XAxis
            dataKey="label"
            stroke={textColor}
            strokeOpacity={0.6}
            fontSize={14}
            fontWeight={600}
            tickLine={false}
            axisLine={false}
            reversed
            style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}
            dy={10}
          />
          
          {/* Y Axis */}
          <YAxis
            stroke={textColor}
            strokeOpacity={0.6}
            fontSize={14}
            fontWeight={600}
            tickLine={false}
            axisLine={false}
            style={{ fontFamily: 'IBM Plex Sans Arabic, sans-serif' }}
            dx={-10}
            tickFormatter={(value) => `${value}`}
          />
          
          {/* Custom Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderColor: primaryColor,
              borderWidth: 2,
              borderRadius: '16px',
              color: textColor,
              textAlign: 'right',
              fontFamily: 'IBM Plex Sans Arabic, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              padding: '12px 20px'
            }}
            labelStyle={{
              color: primaryColor,
              fontWeight: 700,
              marginBottom: '8px',
              fontFamily: 'IBM Plex Sans Arabic, sans-serif'
            }}
            itemStyle={{
              color: textColor,
              fontWeight: 700,
              fontFamily: 'IBM Plex Sans Arabic, sans-serif'
            }}
            cursor={{
              stroke: primaryColor,
              strokeWidth: 2,
              strokeDasharray: '4 4',
              opacity: 0.5
            }}
          />
          
          {/* Area with gradient stroke */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#gradientAccent)"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={forExport ? 0 : 1800}
            activeDot={{
              r: 8,
              fill: primaryColor,
              stroke: '#FFFFFF',
              strokeWidth: 3,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
