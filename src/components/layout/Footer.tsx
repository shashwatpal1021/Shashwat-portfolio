import { Github, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 py-12 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">{SITE_CONFIG.name}</h2>
            <p className="text-muted-foreground mt-2">{SITE_CONFIG.description}</p>
          </div>

          <div className="flex space-x-4">
            <a
              href={SITE_CONFIG.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
