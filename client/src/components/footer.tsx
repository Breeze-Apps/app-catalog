import { Wind } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-2">
            <Wind className="h-6 w-6" />
            <span className="font-bold">BreezeApps</span>
          </div>
          <nav className="flex gap-6">
            <a
              href="#apps"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Apps
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BreezeApps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}