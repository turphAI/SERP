'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { User, ChevronDown, Briefcase, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import HeaderInput from "@/components/core/HeaderInput";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type HeaderProps = {
  variant: "full" | "short";
  onLogout?: () => void;
  onNavSelect?: (navKey: string) => void;
  onSmartSuggestOpen?: () => void;
  selectedTestOption?: string;
  onSelectTestOption?: (option: string) => void;
  homeHref?: string;
};

const navLinks = [
  { key: "accounts", label: "Accounts", icon: <CreditCard className="w-4 h-4 mr-1" /> },
  { key: "planning", label: "Planning" },
];

const researchDropdown = [
  { key: "research1", label: "Research 1" },
  { key: "research2", label: "Research 2" },
];

const productsDropdown = [
  { key: "product1", label: "Product 1" },
  { key: "product2", label: "Product 2" },
];

const testOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

export default function Header({
  variant = "full",
  onLogout,
  onNavSelect,
  onSmartSuggestOpen,
  selectedTestOption,
  onSelectTestOption,
  homeHref = "/",
}: HeaderProps) {
  const [testingMenuOpen, setTestingMenuOpen] = useState(false);
  const [showTextStrings, setShowTextStrings] = useState(false);
  const router = useRouter();
  const logoutButtonRef = React.useRef<HTMLButtonElement>(null);

  // Focus the Log out button when the modal closes
  React.useEffect(() => {
    if (!showTextStrings && logoutButtonRef.current) {
      logoutButtonRef.current.focus();
    }
  }, [showTextStrings]);

  const handleLogout = () => {
    setShowTextStrings(false);
    router.push('/');
    onLogout?.();
  };

  // Top row: logo/company (left), actions (right)
  const topRow = (
    <div className="flex w-full items-center justify-between gap-2 px-4 py-2">
      <Link href={homeHref} className="flex items-center gap-2 font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <Briefcase className="w-6 h-6" />
        <span>Finance Company</span>
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="flex items-center gap-1">
          <User className="w-4 h-4" /> Profile
        </Button>
        <Button variant="ghost">Open an account</Button>
        {/* Testing Menu for Log out */}
        <DropdownMenu open={testingMenuOpen} onOpenChange={setTestingMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              ref={logoutButtonRef}
              variant="ghost"
              className="flex items-center gap-1"
              onClick={() => setTestingMenuOpen((open) => !open)}
            >
              Log out
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Testing menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-destructive">
              Log out
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {
              setTestingMenuOpen(false);
              setShowTextStrings(true);
            }}>
              Show Text Strings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectedTestOption}
              onValueChange={onSelectTestOption}
            >
              {testOptions.map((option) => (
                <DropdownMenuRadioItem key={option} value={option}>
                  {option}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  // Bottom row: nav (left), HeaderInput (right)
  const bottomRow = (
    <div className="flex w-full items-center justify-between gap-2 px-4 pb-2">
      <nav className="flex gap-4 items-center">
        {navLinks.map((link) => (
          <Button
            key={link.key}
            variant="ghost"
            className="px-2 font-medium"
            onClick={() => onNavSelect?.(link.key)}
          >
            {link.label}
          </Button>
        ))}
        {/* Research Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 font-medium flex items-center">
              Research <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {researchDropdown.map((item) => (
              <DropdownMenuItem key={item.key} onClick={() => onNavSelect?.(item.key)}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Products & Services Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 font-medium flex items-center">
              Products & Services <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {productsDropdown.map((item) => (
              <DropdownMenuItem key={item.key} onClick={() => onNavSelect?.(item.key)}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="min-w-[300px] max-w-xs w-full">
        <HeaderInput
          onSmartSuggestOpen={onSmartSuggestOpen ?? (() => {})}
          onOpenResearch={() => router.push("/research")}
        />
      </div>
    </div>
  );

  return (
    <header className="w-full border-b bg-background">
      {topRow}
      {variant === "full" && bottomRow}
      {showTextStrings && (
        <Dialog open={showTextStrings} onOpenChange={setShowTextStrings}>
          <DialogContent className="max-h-[70vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Prototype Test Strings</DialogTitle>
              <DialogDescription>
                These are sample search queries for testing different prototypes:
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <div className="font-semibold">Answer Feature:</div>
                <ul className="list-disc pl-6">
                  <li>What is React?</li>
                  <li>How does machine learning work?</li>
                  <li>What is the capital of France?</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Type Ahead:</div>
                <ul className="list-disc pl-6">
                  <li>java</li>
                  <li>python</li>
                  <li>machine learning</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </header>
  );
} 