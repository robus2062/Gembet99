
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import GemIcon from "@/components/ui/gem-icon";
import { cn } from "@/lib/utils";

const CoinFlip = () => {
  const [betAmount, setBetAmount] = useState("10");
  const [selectedSide, setSelectedSide] = useState<"heads" | "tails" | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [gameState, setGameState] = useState<"idle" | "flipping" | "result">("idle");
  const [hasWon, setHasWon] = useState<boolean | null>(null);

  // Common bet amounts for quick selection
  const quickBets = [10, 25, 50, 100];

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (/^\d*\.?\d*$/.test(value)) {
      setBetAmount(value);
    }
  };

  const selectSide = (side: "heads" | "tails") => {
    setSelectedSide(side);
  };

  const handleQuickBet = (amount: number) => {
    setBetAmount(amount.toString());
  };

  const resetGame = () => {
    setGameState("idle");
    setResult(null);
    setHasWon(null);
  };

  const flipCoin = () => {
    // Validate input
    if (!selectedSide) {
      toast.error("Please select heads or tails first");
      return;
    }

    const betValue = parseFloat(betAmount);
    if (isNaN(betValue) || betValue <= 0) {
      toast.error("Please enter a valid bet amount");
      return;
    }

    // In a real app, we would check if the user has enough gems

    // Start the coin flip animation
    setGameState("flipping");
    setIsFlipping(true);

    // Simulate the coin flip
    setTimeout(() => {
      // Randomly decide the result
      const coinResult = Math.random() < 0.5 ? "heads" : "tails";
      const won = coinResult === selectedSide;

      setResult(coinResult);
      setHasWon(won);
      setIsFlipping(false);
      setGameState("result");

      // Show toast notification based on result
      if (won) {
        toast.success(`You won ${(betValue * 2).toFixed(2)} gems!`);
      } else {
        toast.error(`You lost ${betValue.toFixed(2)} gems!`);
      }
    }, 2000);
  };

  return (
    <Card className="border-gem-800 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Coin Flip</CardTitle>
        <CardDescription className="text-center">
          Choose heads or tails and flip the coin to double your gems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Coin Display */}
          <div className="flex justify-center py-8">
            <div 
              className={cn(
                "w-32 h-32 rounded-full relative overflow-hidden",
                isFlipping ? "animate-spin-slow" : "",
                result === "heads" ? "bg-gem-400" : result === "tails" ? "bg-gem-700" : "bg-gem-600"
              )}
            >
              {!isFlipping && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  {result === "heads" ? "HEADS" : result === "tails" ? "TAILS" : "?"}
                </div>
              )}
            </div>
          </div>

          {/* Game Results */}
          {gameState === "result" && (
            <div className="text-center mb-6 py-2 px-4 rounded-md bg-secondary">
              <p className="text-lg">
                {hasWon ? (
                  <>
                    You <span className="text-green-500 font-bold">won</span>{" "}
                    <span className="font-bold">{(parseFloat(betAmount) * 2).toFixed(2)}</span>{" "}
                    <GemIcon size="sm" className="inline text-gem-400" />
                  </>
                ) : (
                  <>
                    You <span className="text-red-500 font-bold">lost</span>{" "}
                    <span className="font-bold">{parseFloat(betAmount).toFixed(2)}</span>{" "}
                    <GemIcon size="sm" className="inline text-gem-400" />
                  </>
                )}
              </p>
            </div>
          )}

          {/* Bet Controls */}
          <div className="space-y-6">
            {/* Side Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Select Side</label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={selectedSide === "heads" ? "default" : "outline"}
                  className={cn(selectedSide === "heads" ? "gem-gradient" : "border-gem-600")}
                  onClick={() => selectSide("heads")}
                  disabled={gameState === "flipping"}
                >
                  HEADS
                </Button>
                <Button
                  variant={selectedSide === "tails" ? "default" : "outline"}
                  className={cn(selectedSide === "tails" ? "gem-gradient" : "border-gem-600")}
                  onClick={() => selectSide("tails")}
                  disabled={gameState === "flipping"}
                >
                  TAILS
                </Button>
              </div>
            </div>

            {/* Bet Amount */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Bet Amount</label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={betAmount}
                  onChange={handleBetAmountChange}
                  className="text-right"
                  disabled={gameState === "flipping"}
                />
                <div className="flex items-center bg-secondary rounded-md px-2">
                  <GemIcon size="sm" />
                </div>
              </div>
            </div>

            {/* Quick Bet Selection */}
            <div className="grid grid-cols-4 gap-2">
              {quickBets.map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  className="border-gem-700"
                  onClick={() => handleQuickBet(amount)}
                  disabled={gameState === "flipping"}
                >
                  {amount}
                </Button>
              ))}
            </div>

            {/* Action Button */}
            {gameState === "idle" || gameState === "result" ? (
              <Button
                className="w-full gem-gradient"
                onClick={gameState === "idle" ? flipCoin : resetGame}
                disabled={!selectedSide && gameState === "idle"}
              >
                {gameState === "idle" ? "Flip Coin" : "Play Again"}
              </Button>
            ) : (
              <Button className="w-full" disabled>
                Flipping...
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinFlip;
