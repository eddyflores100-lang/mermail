import { motion } from 'framer-motion';
import { Mail, Server, Brain, Wallet, User, ArrowRight, ArrowDown } from 'lucide-react';

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Architecture & Flow
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            How the Newsletter Curator agent connects to Mermail's MCP server,
            processes emails, and uses the Agent Wallet for premium content.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8 overflow-x-auto">
            {/* Top row - User & Agent */}
            <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <User className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">Human User</span>
                <span className="text-xs text-gray-500">Approves actions</span>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-600 hidden sm:block" />
              <ArrowDown className="w-6 h-6 text-gray-600 sm:hidden" />

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">AI Agent</span>
                <span className="text-xs text-gray-500">Claude / Codex / Cursor</span>
              </div>

              <ArrowRight className="w-6 h-6 text-gray-600 hidden sm:block" />
              <ArrowDown className="w-6 h-6 text-gray-600 sm:hidden" />

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300">Mermail MCP</span>
                <span className="text-xs text-gray-500">63 typed tools</span>
              </div>
            </div>

            {/* Connection lines */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            </div>

            {/* Bottom row - Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-center">
                <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Agent Inbox</div>
                <div className="text-xs text-gray-400 mt-1">Newsletter subscriptions, monitoring, search</div>
                <div className="mt-2 flex flex-wrap gap-1 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300">create_mailbox</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300">search_emails</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300">get_email</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 text-center">
                <Wallet className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Agent Wallet (PayBox)</div>
                <div className="text-xs text-gray-400 mt-1">MPC-secured, x402 payments, spending limits</div>
                <div className="mt-2 flex flex-wrap gap-1 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300">paybox_pay_x402</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300">get_agent_wallet</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 text-center">
                <Brain className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white">Task Triage</div>
                <div className="text-xs text-gray-400 mt-1">Auto-classify, prioritize, batch process</div>
                <div className="mt-2 flex flex-wrap gap-1 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-300">save_draft</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-300">send_email</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-300">reply_to_email</span>
                </div>
              </div>
            </div>

            {/* Safety note */}
            <div className="mt-8 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">⚠️</span>
                <div>
                  <div className="text-sm font-medium text-yellow-300">Safety Protocol</div>
                  <div className="text-xs text-gray-400 mt-1">
                    All external effects (send, pay, forward) require explicit human approval.
                    Email content is treated as untrusted data. Agent Wallet operations are scoped
                    by user-defined spending limits. Destructive operations require single-use MCP confirmation tokens.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
