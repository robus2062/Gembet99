
import MainLayout from "@/components/layout/main-layout";
import CoinFlip from "@/components/games/coin-flip";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoinFlipPage = () => {
  return (
    <MainLayout isAuthenticated={true}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/games">
              <Button variant="ghost" size="sm" className="mr-2">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Coin Flip</h1>
          </div>
          <Button variant="outline" size="sm">
            <HelpCircle className="h-4 w-4 mr-1" /> How to Play
          </Button>
        </div>
        
        {/* Game Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CoinFlip />
          </div>
          
          <div className="space-y-4">
            {/* Rules Card */}
            <Card className="border-gem-800">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">How to Play</h3>
                <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                  <li>Choose heads or tails for your bet</li>
                  <li>Enter your bet amount</li>
                  <li>Click "Flip Coin" to start the game</li>
                  <li>If the result matches your choice, you win 2x your bet</li>
                </ol>
              </CardContent>
            </Card>
            
            {/* Statistics Card */}
            <Card className="border-gem-800">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Your Stats</h3>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Games Played</span>
                    <span>42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Win Rate</span>
                    <span>47.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Biggest Win</span>
                    <span>500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Profit</span>
                    <span className="text-red-500">-125.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Live Bets */}
            <Card className="border-gem-800">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Live Bets</h3>
                <div className="space-y-2">
                  {["Player123", "GemMaster", "LuckyOne"].map((player, i) => (
                    <div key={i} className="text-sm p-2 rounded bg-secondary/50">
                      <div className="flex justify-between">
                        <span>{player}</span>
                        <span className={i % 2 === 0 ? "text-green-500" : "text-red-500"}>
                          {i % 2 === 0 ? "Won" : "Lost"} {(Math.random() * 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CoinFlipPage;
