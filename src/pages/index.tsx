
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Sparkles, Gift, Users, Gamepad2 } from "lucide-react";
import GemIcon from "@/components/ui/gem-icon";
import MainLayout from "@/components/layout/main-layout";

const featuredGames = [
  {
    id: "coinflip",
    name: "Coin Flip",
    description: "50/50 chance to double your gems",
    image: "coin-flip",
  },
  {
    id: "dice",
    name: "Dice Roll",
    description: "Predict the outcome of dice rolls",
    image: "dice-roll",
  },
  {
    id: "blackjack",
    name: "Blackjack",
    description: "Beat the dealer to win big",
    image: "blackjack",
  },
  {
    id: "case",
    name: "Case Opening",
    description: "Open cases to find rare gems",
    image: "case-opening",
  },
];

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-6 flex justify-center">
            <GemIcon size="lg" className="h-16 w-16 text-gem-400 animate-float" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gem-300 to-gem-400 text-transparent bg-clip-text">
            Play Games. Win Gems. Rise in Ranks.
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Join the GemVerse community and compete in exciting games to win valuable gems.
            Climb the leaderboard and show off your skills!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button className="px-8 py-6 text-lg gem-gradient gem-glow">
                Start Playing Now
              </Button>
            </Link>
            <Link to="/games">
              <Button variant="outline" className="px-8 py-6 text-lg border-gem-500">
                Explore Games
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose GemVerse?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-gem-800">
            <CardContent className="pt-6 text-center">
              <div className="bg-gem-800 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Gamepad2 className="text-gem-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Exciting Games</h3>
              <p className="text-muted-foreground">
                Experience a variety of thrilling games designed to test your luck and skill.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-gem-800">
            <CardContent className="pt-6 text-center">
              <div className="bg-gem-800 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-gem-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Active Community</h3>
              <p className="text-muted-foreground">
                Join thousands of players competing, chatting, and making friends.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-gem-800">
            <CardContent className="pt-6 text-center">
              <div className="bg-gem-800 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Gift className="text-gem-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Daily Rewards</h3>
              <p className="text-muted-foreground">
                Earn free gems every day just by logging in and staying active.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Games</h2>
          <Link to="/games">
            <Button variant="outline" className="border-gem-500">
              View All Games
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <Card className="overflow-hidden border-gem-800 hover:border-gem-500 transition-all duration-300 group">
                <div className="aspect-[16/9] bg-gem-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gem-800">
                    <Gamepad2 className="w-12 h-12 text-gem-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-gem-400 transition-colors">{game.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{game.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Top Players</h2>
          <Link to="/leaderboard">
            <Button variant="outline" className="border-gem-500">
              <BarChart3 className="mr-2 h-4 w-4" />
              Full Leaderboard
            </Button>
          </Link>
        </div>
        
        <Card className="border-gem-800">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gem-800">
                    <th className="px-6 py-4 text-left">#</th>
                    <th className="px-6 py-4 text-left">User</th>
                    <th className="px-6 py-4 text-right">Level</th>
                    <th className="px-6 py-4 text-right">Gems</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="border-b border-gem-800 hover:bg-secondary/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {i === 1 && <Sparkles className="h-4 w-4 text-yellow-500 mr-1" />}
                          {i === 2 && <Sparkles className="h-4 w-4 text-gray-300 mr-1" />}
                          {i === 3 && <Sparkles className="h-4 w-4 text-amber-700 mr-1" />}
                          {i}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">Player{Math.floor(Math.random() * 1000)}</td>
                      <td className="px-6 py-4 text-right">{Math.floor(Math.random() * 50) + 10}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end">
                          <span className="font-mono">{(Math.random() * 10000).toFixed(2)}</span>
                          <GemIcon size="sm" className="ml-1 text-gem-400" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Home;
