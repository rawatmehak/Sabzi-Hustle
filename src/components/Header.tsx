import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://media.shutterstock.com/image-vector/modern-green-grocery-cart-logo-260nw-2662954095.jpg" 
              alt="Fresh Mart Logo" 
              className="h-24 w-24 object-contain" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Fresh Mart</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Your Local Sabzi Mandi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/customer" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/customer" ? "text-primary" : "text-foreground"
              }`}
            >
              Shop Now
            </Link>
            <Link 
              to="/vendor" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/vendor" ? "text-primary" : "text-foreground"
              }`}
            >
              For Vendors
            </Link>
            {/* NEW Contact Us Link */}
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button className="hidden sm:flex">
              Login
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart, User, Menu } from "lucide-react";

// const Header = () => {
//   const location = useLocation();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img 
//               src="https://media.shutterstock.com/image-vector/modern-green-grocery-cart-logo-260nw-2662954095.jpg" 
//               alt="Fresh Mart Logo" 
//               className="h-24 w-24 object-contain" 
//             />
//             <div className="flex flex-col">
//               <span className="text-xl font-bold text-primary">Fresh Mart</span>
//               <span className="text-xs text-muted-foreground hidden sm:block">Your Local Sabzi Mandi</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-4">
//             <Link 
//               to="/" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 location.pathname === "/" ? "text-primary" : "text-foreground"
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/customer" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 location.pathname === "/customer" ? "text-primary" : "text-foreground"
//               }`}
//             >
//               Shop Now
//             </Link>
//             <Link 
//               to="/vendor" 
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 location.pathname === "/vendor" ? "text-primary" : "text-foreground"
//               }`}
//             >
//               For Vendors
//             </Link>
//           </nav>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
//                 3
//               </span>
//             </Button>

//             <Button variant="ghost" size="icon">
//               <User className="h-5 w-5" />
//             </Button>

//             <Button className="hidden sm:flex">
//               Login
//             </Button>

//             <Button variant="ghost" size="icon" className="md:hidden">
//               <Menu className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
