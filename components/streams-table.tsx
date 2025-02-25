"use client"
import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { mockData } from "@/mockData"


export function StreamsTable() {
  const [data, setData] = useState(mockData.streamsTable)
  const [sortColumn, setSortColumn] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [filterText, setFilterText] = useState("")

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[column as keyof typeof a] < b[column as keyof typeof b]) return sortDirection === "asc" ? -1 : 1
      if (a[column as keyof typeof a] > b[column as keyof typeof b]) return sortDirection === "asc" ? 1 : -1
      return 0
    })
    setData(sortedData)
  }

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value.toLowerCase()
    setFilterText(filterValue)
    const filteredData = mockData.streamsTable.filter(
      (item) => item.songName.toLowerCase().includes(filterValue) || item.artist.toLowerCase().includes(filterValue),
    )
    setData(filteredData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input placeholder="Filter by song or artist" value={filterText} onChange={handleFilter} />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <Button variant="ghost" className="w-full justify-start p-0 font-medium" onClick={() => handleSort("songName")}>
                  Song Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[200px]">
                <Button variant="ghost" className="w-full justify-start p-0 font-medium" onClick={() => handleSort("artist")}>
                  Artist
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[200px]">
                <Button variant="ghost" className="w-full justify-start p-0 font-medium" onClick={() => handleSort("dateStreamed")}>
                  Date Streamed
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[200px]">
                <Button variant="ghost" className="w-full justify-start p-0 font-medium" onClick={() => handleSort("streamCount")}>
                  Stream Count
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="w-[200px]">
                <Button variant="ghost" className="w-full justify-start p-0 font-medium" onClick={() => handleSort("userId")}>
                  User ID
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.songName}</TableCell>
                <TableCell>{item.artist}</TableCell>
                <TableCell>{item.dateStreamed}</TableCell>
                <TableCell>{item.streamCount}</TableCell>
                <TableCell>{item.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

