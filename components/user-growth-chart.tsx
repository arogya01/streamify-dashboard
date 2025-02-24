"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { LoadingSpinner } from "@/components/loading-spinner"

const data = [
  { month: "Jan", totalUsers: 400000, activeUsers: 300000 },
  { month: "Feb", totalUsers: 500000, activeUsers: 350000 },
  { month: "Mar", totalUsers: 600000, activeUsers: 400000 },
  { month: "Apr", totalUsers: 700000, activeUsers: 500000 },
  { month: "May", totalUsers: 800000, activeUsers: 600000 },
  { month: "Jun", totalUsers: 900000, activeUsers: 700000 },
  { month: "Jul", totalUsers: 950000, activeUsers: 750000 },
  { month: "Aug", totalUsers: 1000000, activeUsers: 800000 },
  { month: "Sep", totalUsers: 1050000, activeUsers: 850000 },
  { month: "Oct", totalUsers: 1100000, activeUsers: 900000 },
  { month: "Nov", totalUsers: 1150000, activeUsers: 950000 },
  { month: "Dec", totalUsers: 1200000, activeUsers: 1000000 },
]

export function UserGrowthChart() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <LoadingSpinner />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
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

