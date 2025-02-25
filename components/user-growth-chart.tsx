"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { LoadingSpinner } from "@/components/loading-spinner"
import { mockData } from "@/mockData"

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData.userGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" name="Total Users" />
            <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

