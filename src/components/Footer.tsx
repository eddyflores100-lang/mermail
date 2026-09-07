import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Newsletter Curator Skill
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>for the</span>
            <a href="https://mermail.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Mermail
            </a>
            <span>bounty</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://mermail.app" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
              Mermail
            </a>
            <a href="https://docs.mermail.app" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
              Docs
            </a>
            <a href="https://github.com/Nudgen-Marketing/mermail-skills" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
              Skills Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
