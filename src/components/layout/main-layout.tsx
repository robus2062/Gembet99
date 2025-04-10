
import { useLocation } from "react-router-dom";
import NavigationBar from "./navigation-bar";

interface MainLayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
}

const MainLayout = ({ children, isAuthenticated = false }: MainLayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar isAuthenticated={isAuthenticated} currentPath={location.pathname} />
      <main className="flex-1 container mx-auto py-6 px-4">{children}</main>
      <footer className="py-4 px-6 border-t border-gem-800 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} GemVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
