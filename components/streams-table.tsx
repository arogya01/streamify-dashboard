"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

const initialData = [
  { id: 1, songName: "Song 1", artist: "Artist 1", dateStreamed: "2023-05-01", streamCount: 1000, userId: "user123" },
  { id: 2, songName: "Song 2", artist: "Artist 2", dateStreamed: "2023-05-02", streamCount: 1500, userId: "user456" },
  { id: 3, songName: "Song 3", artist: "Artist 3", dateStreamed: "2023-05-03", streamCount: 800, userId: "user789" },
  { id: 4, songName: "Song 4", artist: "Artist 4", dateStreamed: "2023-05-04", streamCount: 2000, userId: "user101" },
  { id: 5, songName: "Song 5", artist: "Artist 5", dateStreamed: "2023-05-05", streamCount: 1200, userId: "user202" },
]

export function StreamsTable() {
  const [data, setData] = useState(initialData)
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
    const filteredData = initialData.filter(
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
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("songName")}>
                  Song Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("artist")}>
                  Artist
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("dateStreamed")}>
                  Date Streamed
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort("streamCount")}>
                  Stream Count
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>User ID</TableHead>
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

