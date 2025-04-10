
import MainLayout from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, GameController, Gift, Plus, RefreshCw, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import GemIcon from "@/components/ui/gem-icon";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  // This would be fetched from the user's profile in a real app
  const user = {
    username: "GemMaster123",
    gems: 1250.75,
    level: 12,
    xpCurrent: 340,
    xpNeeded: 500,
    dailyRewardCollected: false,
  };

  // Recent games history - would be fetched from API
  const recentGames = [
    { id: 1, game: "Coin Flip", bet: 50, outcome: "win", profit: 50, date: "2025-04-10 15:30" },
    { id: 2, game: "Dice Roll", bet: 100, outcome: "loss", profit: -100, date: "2025-04-10 14:15" },
    { id: 3, game: "Blackjack", bet: 75, outcome: "win", profit: 75, date: "2025-04-09 21:45" },
    { id: 4, game: "Case Opening", bet: 200, outcome: "loss", profit: -200, date: "2025-04-09 18:20" },
  ];

  return (
    <MainLayout isAuthenticated={true}>
      <div className="space-y-8">
        {/* Welcome and Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Welcome Card */}
          <Card className="border-gem-800 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome back, {user.username}!</CardTitle>
              <CardDescription>Here's an overview of your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GemIcon />
                    <h3 className="font-medium text-lg">Gem Balance</h3>
                  </div>
                  <div className="text-3xl font-bold flex items-center gap-1">
                    {user.gems.toFixed(2)}
                    <GemIcon size="sm" className="text-gem-400" />
                  </div>
                  <div className="mt-4">
                    <Button className="gem-gradient mr-2" size="sm">
                      <Plus className="mr-1 h-4 w-4" /> Add Gems
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-1 h-4 w-4" /> Withdraw
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="h-5 w-5" />
                    <h3 className="font-medium text-lg">Level {user.level}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>XP Progress</span>
                      <span>{user.xpCurrent} / {user.xpNeeded}</span>
                    </div>
                    <Progress value={(user.xpCurrent / user.xpNeeded) * 100} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {user.xpNeeded - user.xpCurrent} XP until next level
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Daily Reward Card */}
          <Card className="border-gem-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> 
                Daily Reward
              </CardTitle>
              <CardDescription>Collect gems every day you log in</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {!user.dailyRewardCollected ? (
                <>
                  <div className="my-4 flex flex-col items-center">
                    <div className="relative mb-2">
                      <GemIcon size="lg" className="w-16 h-16 text-gem-400 animate-pulse-glow" />
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white">
                        +50
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Claim your daily 50 gems!</p>
                  </div>
                  <Button className="gem-gradient w-full">
                    <Gift className="mr-2 h-4 w-4" /> Collect Reward
                  </Button>
                </>
              ) : (
                <>
                  <div className="my-8 text-center">
                    <p className="text-muted-foreground mb-2">You've already collected today's reward</p>
                    <p className="text-sm">Next reward in: <span className="font-bold">22:45:19</span></p>
                  </div>
                  <Button className="w-full" disabled>
                    <Gift className="mr-2 h-4 w-4" /> Collected
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link to="/games/coinflip">
            <Card className="border-gem-800 hover:border-gem-500 transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <GameController className="h-8 w-8 text-gem-400" />
                </div>
                <h3 className="font-medium">Play Games</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/leaderboard">
            <Card className="border-gem-800 hover:border-gem-500 transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <BarChart className="h-8 w-8 text-gem-400" />
                </div>
                <h3 className="font-medium">Leaderboard</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/promotions">
            <Card className="border-gem-800 hover:border-gem-500 transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <Gift className="h-8 w-8 text-gem-400" />
                </div>
                <h3 className="font-medium">Promotions</h3>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/settings">
            <Card className="border-gem-800 hover:border-gem-500 transition-all cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <Rocket className="h-8 w-8 text-gem-400" />
                </div>
                <h3 className="font-medium">Level Up</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        {/* Recent Games */}
        <Card className="border-gem-800">
          <CardHeader>
            <CardTitle>Recent Games</CardTitle>
            <CardDescription>Your latest gaming activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gem-800">
                    <th className="px-4 py-3 text-left">Game</th>
                    <th className="px-4 py-3 text-right">Bet Amount</th>
                    <th className="px-4 py-3 text-right">Outcome</th>
                    <th className="px-4 py-3 text-right">Profit</th>
                    <th className="px-4 py-3 text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentGames.map((game) => (
                    <tr key={game.id} className="border-b border-gem-800 hover:bg-secondary/50">
                      <td className="px-4 py-3">{game.game}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end">
                          <span>{game.bet.toFixed(2)}</span>
                          <GemIcon size="sm" className="ml-1 text-gem-400" />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          game.outcome === "win" 
                            ? "bg-green-500/20 text-green-500" 
                            : "bg-red-500/20 text-red-500"
                        }`}>
                          {game.outcome === "win" ? "Win" : "Loss"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end">
                          <span className={game.profit > 0 ? "text-green-500" : "text-red-500"}>
                            {game.profit > 0 ? "+" : ""}{game.profit.toFixed(2)}
                          </span>
                          <GemIcon size="sm" className="ml-1 text-gem-400" />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-sm text-muted-foreground">
                        {game.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link to="/history">
                <Button variant="outline">View Full History</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
