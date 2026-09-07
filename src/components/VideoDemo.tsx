import { motion } from 'framer-motion';
import { Play, ExternalLink, Video, Clock, Monitor } from 'lucide-react';

export default function VideoDemo() {
  return (
    <section id="video" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Video Demonstration
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A 2–5 minute video showing the Newsletter Curator skill in action,
            posted on X and tagged @Mermailapp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden"
        >
          {/* Video placeholder */}
          <div className="aspect-video bg-gradient-to-br from-[#0d1117] to-[#161b22] flex items-center justify-center relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-red-500/30 transition-all hover:scale-110">
                <Play className="w-8 h-8 text-red-400 ml-1" />
              </div>
              <p className="text-gray-400 text-sm">Demo Video — 3:42</p>
              <p className="text-gray-500 text-xs mt-1">Posted on X @Mermailapp</p>
            </div>

            {/* Corner badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10">
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs text-gray-300">DEMO</span>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs text-gray-300">3:42</span>
            </div>
          </div>

          {/* Video details */}
          <div className="p-6 border-t border-white/5">
            <h3 className="text-lg font-semibold text-white mb-3">What the video demonstrates:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: '1️⃣', text: 'Prompt that triggers the Newsletter Curator skill' },
                { icon: '2️⃣', text: 'Agent connecting to Mermail MCP server' },
                { icon: '3️⃣', text: 'Mailbox provisioning and email monitoring' },
                { icon: '4️⃣', text: 'Premium content payment via Agent Wallet' },
                { icon: '5️⃣', text: 'Curated digest composition and delivery' },
                { icon: '6️⃣', text: 'Final result with user approval flow' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://x.com/Mermailapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                View on X
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400">
                <Monitor className="w-4 h-4" />
                AI Client: Claude Desktop + Mermail MCP
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
