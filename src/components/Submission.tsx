import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, Video, MessageSquare, Award } from 'lucide-react';

export default function Submission() {
  return (
    <section id="submit" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Submission Details
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything needed for the Mermail Agent Skill bounty submission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Skill Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Skill Description</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-gray-200">Mermail Newsletter Curator</strong> — An AI agent skill that
              manages newsletter subscriptions through a dedicated Mermail inbox, automatically classifies
              and summarizes incoming newsletters by topic and relevance, optionally pays for premium
              content using the Agent Wallet (PayBox) via x402 protocol, and delivers a curated digest
              to the user. All external actions require human approval following Mermail's safety protocol.
            </p>
          </motion.div>

          {/* AI Client */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI Client Used</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">C</div>
                <div>
                  <div className="text-sm font-medium text-white">Claude Desktop</div>
                  <div className="text-xs text-gray-500">Primary demo client</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">X</div>
                <div>
                  <div className="text-sm font-medium text-white">Codex CLI</div>
                  <div className="text-xs text-gray-500">Also tested & compatible</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <a
            href="https://github.com/Nudgen-Marketing/mermail-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            <div>
              <div className="text-sm font-medium text-white">GitHub PR</div>
              <div className="text-xs text-gray-500">mermail-skills repo</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto group-hover:text-cyan-400 transition-colors" />
          </a>

          <a
            href="https://x.com/Mermailapp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
          >
            <Video className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <div>
              <div className="text-sm font-medium text-white">Demo Video</div>
              <div className="text-xs text-gray-500">Posted on X</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto group-hover:text-purple-400 transition-colors" />
          </a>

          <a
            href="https://docs.mermail.app/ai/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 transition-all"
          >
            <FileText className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
            <div>
              <div className="text-sm font-medium text-white">SKILL.md</div>
              <div className="text-xs text-gray-500">Full documentation</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto group-hover:text-green-400 transition-colors" />
          </a>
        </motion.div>

        {/* Prize categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Bounty Prize Categories</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { label: '1st Place', amount: '250 USDC', color: 'from-yellow-400 to-amber-500' },
              { label: '2nd Place', amount: '100 USDC', color: 'from-gray-300 to-gray-400' },
              { label: '3rd Place', amount: '50 USDC', color: 'from-amber-600 to-amber-700' },
              { label: 'Most Innovative', amount: '50 USDC', color: 'from-purple-400 to-pink-400' },
              { label: 'Best Video', amount: '50 USDC', color: 'from-red-400 to-orange-400' },
            ].map((prize, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className={`text-sm font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                  {prize.amount}
                </div>
                <div className="text-xs text-gray-500 mt-1">{prize.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
