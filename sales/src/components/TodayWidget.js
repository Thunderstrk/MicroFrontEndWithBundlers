import React from "react";
import { Box, Typography, useTheme } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

// Generate Sales Data
const data = [
  { time: "00:00", amount: 0},
  { time: "03:00", amount: 300},
  { time: "06:00", amount: 600},
  { time: "09:00", amount: 800},
  { time: "12:00", amount: 1500},
  { time: "15:00", amount: 2000},
  { time: "18:00", amount: 2400},
  { time: "21:00", amount: 2400},
  { time: "24:00", amount: undefined},
];

export default function TodayWidget() {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Today
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
