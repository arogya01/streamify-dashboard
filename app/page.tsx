import { KeyMetrics } from "@/components/key-metrics"
import { UserGrowthChart } from "@/components/user-growth-chart"
import { RevenueDistributionChart } from "@/components/revenue-distribution-chart"
import { TopSongsChart } from "@/components/top-songs-chart"
import { StreamsTable } from "@/components/streams-table"

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <KeyMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <UserGrowthChart />
        <RevenueDistributionChart />
      </div>
      <div className="mt-6">
        <TopSongsChart />
      </div>
      <div className="mt-6">
        <StreamsTable />
      </div>
    </div>
  )
}

