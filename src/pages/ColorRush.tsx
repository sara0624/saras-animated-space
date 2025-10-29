import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Home, Play, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const COLORS = [
  { name: "RED", value: "hsl(0, 84%, 60%)", glow: "0 0 40px hsla(0, 84%, 60%, 0.6)" },
  { name: "BLUE", value: "hsl(217, 91%, 60%)", glow: "0 0 40px hsla(217, 91%, 60%, 0.6)" },
  { name: "GREEN", value: "hsl(142, 71%, 45%)", glow: "0 0 40px hsla(142, 71%, 45%, 0.6)" },
  { name: "YELLOW", value: "hsl(48, 96%, 53%)", glow: "0 0 40px hsla(48, 96%, 53%, 0.6)" },
  { name: "PURPLE", value: "hsl(271, 76%, 53%)", glow: "0 0 40px hsla(271, 76%, 53%, 0.6)" },
];

interface Ball {
  id: number;
  x: number;
  y: number;
  color: typeof COLORS[0];
  speed: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  velocityX: number;
  velocityY: number;
}

const ColorRush = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<"menu" | "playing" | "gameOver">("menu");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [balls, setBalls] = useState<Ball[]>([]);
  const [targetColor, setTargetColor] = useState(COLORS[0]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [ballIdCounter, setBallIdCounter] = useState(0);
  const [particleIdCounter, setParticleIdCounter] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("colorRushHighScore");
    if (saved) setHighScore(parseInt(saved));
  }, []);

  const createBall = useCallback(() => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const newBall: Ball = {
      id: ballIdCounter,
      x: Math.random() * 80 + 10,
      y: -10,
      color,
      speed: 1 + (level - 1) * 0.3,
    };
    setBallIdCounter(prev => prev + 1);
    return newBall;
  }, [ballIdCounter, level]);

  const createParticles = useCallback((x: number, y: number, color: string) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      const angle = (Math.PI * 2 * i) / 15;
      const speed = Math.random() * 3 + 2;
      newParticles.push({
        id: particleIdCounter + i,
        x,
        y,
        color,
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed,
      });
    }
    setParticleIdCounter(prev => prev + 15);
    return newParticles;
  }, [particleIdCounter]);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setLives(3);
    setLevel(1);
    setBalls([createBall()]);
    setTargetColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setParticles([]);
  };

  const handleBallClick = (ball: Ball) => {
    if (ball.color.name === targetColor.name) {
      setScore(prev => prev + 10 * level);
      const newParticles = createParticles(ball.x, ball.y, ball.color.value);
      setParticles(prev => [...prev, ...newParticles]);
      setBalls(prev => prev.filter(b => b.id !== ball.id));
      setTargetColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
      
      if (score > 0 && score % 100 === 0) {
        setLevel(prev => prev + 1);
      }
    } else {
      setLives(prev => prev - 1);
      const newParticles = createParticles(ball.x, ball.y, "#666");
      setParticles(prev => [...prev, ...newParticles]);
      setBalls(prev => prev.filter(b => b.id !== ball.id));
    }
  };

  useEffect(() => {
    if (gameState !== "playing") return;

    const gameLoop = setInterval(() => {
      setBalls(prev => {
        const updated = prev.map(ball => ({
          ...ball,
          y: ball.y + ball.speed,
        })).filter(ball => {
          if (ball.y > 100) {
            setLives(l => l - 1);
            return false;
          }
          return true;
        });

        if (Math.random() < 0.02 * level && updated.length < 8) {
          return [...updated, createBall()];
        }
        return updated;
      });

      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocityX,
            y: p.y + p.velocityY,
            velocityY: p.velocityY + 0.2,
          }))
          .filter(p => p.y < 110)
      );
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameState, createBall, level]);

  useEffect(() => {
    if (lives <= 0 && gameState === "playing") {
      setGameState("gameOver");
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("colorRushHighScore", score.toString());
      }
    }
  }, [lives, gameState, score, highScore]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Menu Screen */}
      {gameState === "menu" && (
        <div className="min-h-screen flex items-center justify-center relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-2xl animate-pulse">
                COLOR
                <span className="block gradient-text text-8xl md:text-[10rem]">RUSH</span>
              </h1>
              <p className="text-2xl text-white/80">Click the correct colored balls!</p>
            </div>
            
            <div className="space-y-4">
              <Button
                onClick={startGame}
                size="lg"
                className="text-2xl px-12 py-8 bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform shadow-2xl"
              >
                <Play className="w-8 h-8 mr-3" />
                START GAME
              </Button>
              
              <div className="text-xl text-white/60">
                High Score: <span className="text-yellow-400 font-bold">{highScore}</span>
              </div>
              
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
                className="mt-4 border-white/30 text-white hover:bg-white/10"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Game Screen */}
      {gameState === "playing" && (
        <div className="min-h-screen p-4 relative">
          {/* HUD */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white drop-shadow-lg">
                {score}
              </div>
              <div className="text-lg text-white/80">Level {level}</div>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${
                      i < lives ? "bg-red-500" : "bg-gray-600"
                    } shadow-lg`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-white/80 text-lg">Click:</div>
              <div
                className="text-4xl font-bold px-8 py-4 rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: targetColor.value,
                  boxShadow: targetColor.glow,
                  color: "white",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {targetColor.name}
              </div>
            </div>
          </div>

          {/* Game Area */}
          <div className="absolute inset-0">
            {balls.map(ball => (
              <button
                key={ball.id}
                onClick={() => handleBallClick(ball)}
                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer transition-transform hover:scale-110 shadow-2xl animate-pulse"
                style={{
                  left: `${ball.x}%`,
                  top: `${ball.y}%`,
                  backgroundColor: ball.color.value,
                  boxShadow: ball.color.glow,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
            
            {particles.map(particle => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 10px ${particle.color}`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Game Over Screen */}
      {gameState === "gameOver" && (
        <div className="min-h-screen flex items-center justify-center relative z-10">
          <div className="text-center space-y-8 animate-scale-in">
            <h2 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
              GAME OVER
            </h2>
            
            <div className="space-y-4">
              <div className="text-3xl text-white/80">
                Score: <span className="text-yellow-400 font-bold text-5xl">{score}</span>
              </div>
              <div className="text-2xl text-white/60">
                Level Reached: <span className="text-purple-400 font-bold">{level}</span>
              </div>
              {score >= highScore && score > 0 && (
                <div className="text-3xl text-green-400 font-bold animate-pulse">
                  🎉 NEW HIGH SCORE! 🎉
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              <Button
                onClick={startGame}
                size="lg"
                className="text-xl px-10 py-6 bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform"
              >
                <RotateCcw className="w-6 h-6 mr-2" />
                PLAY AGAIN
              </Button>
              
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorRush;
