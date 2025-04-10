
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, LogIn, Home, GameController, BarChart3, MessageCircle, Settings } from "lucide-react";
import GemIcon from "@/components/ui/gem-icon";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavLink = ({ to, icon, label, isActive }: NavLinkProps) => {
  return (
    <Link to={to} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 rounded-md py-2",
          isActive ? "bg-secondary" : ""
        )}
      >
        {icon}
        <span className="ml-1">{label}</span>
      </Button>
    </Link>
  );
};

interface NavigationBarProps {
  isAuthenticated?: boolean;
  currentPath: string;
}

const NavigationBar = ({ isAuthenticated = false, currentPath }: NavigationBarProps) => {
  const mainLinks = [
    { to: "/", icon: <Home size={18} />, label: "Home" },
    { to: "/games", icon: <GameController size={18} />, label: "Games" },
    { to: "/leaderboard", icon: <BarChart3 size={18} />, label: "Leaderboard" },
  ];

  const authenticatedLinks = [
    { to: "/dashboard", icon: <User size={18} />, label: "Dashboard" },
    { to: "/chat", icon: <MessageCircle size={18} />, label: "Chat" },
    { to: "/settings", icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
    <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full p-4 border-b border-gem-800">
      <div className="flex items-center mb-4 lg:mb-0">
        <Link to="/" className="flex items-center gap-2">
          <GemIcon size="lg" className="text-gem-400 animate-pulse-glow" />
          <span className="text-xl font-bold bg-gradient-to-r from-gem-300 to-gem-400 text-transparent bg-clip-text">
            GemVerse
          </span>
        </Link>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full lg:w-auto">
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 w-full lg:w-auto">
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={currentPath === link.to}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 w-full lg:w-auto mt-2 lg:mt-0">
          {isAuthenticated ? (
            authenticatedLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                icon={link.icon}
                label={link.label}
                isActive={currentPath === link.to}
              />
            ))
          ) : (
            <>
              <Link to="/login" className="w-full lg:w-auto">
                <Button variant="outline" className="w-full gap-2">
                  <LogIn size={18} />
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-full lg:w-auto">
                <Button className="w-full gap-2 gem-gradient">
                  <User size={18} />
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
