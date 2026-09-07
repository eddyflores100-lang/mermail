import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Search, Brain, Send, Wallet, CheckCircle, ArrowRight, Play, RotateCcw } from 'lucide-react';

const steps = [
  {
    id: 'setup',
    title: 'Setup & Provision',
    icon: Mail,
    description: 'Agent creates a dedicated mailbox for newsletter subscriptions',
    color: 'cyan',
    tool: 'create_mailbox',
    input: '{ name: "newsletter-curator", display_name: "Newsletter Curator" }',
    output: `{
  "public_id": "mbx_8f3k2n",
  "email": "curator-8f3k2n@mermail.app",
  "can_receive": true,
  "receiving_status": "active"
}`,
  },
  {
    id: 'monitor',
    title: 'Monitor & Classify',
    icon: Search,
    description: 'Agent monitors inbox and classifies incoming newsletters by topic',
    color: 'blue',
    tool: 'search_emails + get_email',
    input: '{ mailbox_id: "mbx_8f3k2n", query: "newsletter", metadata_only: true, agent_safe_content: true }',
    output: `{
  "emails": [
    { "id": "eml_001", "subject": "AI Weekly Digest", "sender": "digest@airesearch.com", "received": "2026-09-08T09:00:00Z" },
    { "id": "eml_002", "subject": "Crypto Markets Report", "sender": "reports@cryptodaily.io", "received": "2026-09-08T10:30:00Z" },
    { "id": "eml_003", "subject": "🔒 Premium: Q3 Analysis", "sender": "premium@substack.com", "received": "2026-09-08T11:00:00Z" }
  ],
  "scan_status": "clean"
}`,
  },
  {
    id: 'curate',
    title: 'Curate & Summarize',
    icon: Brain,
    description: 'Agent extracts key insights, action items, and ranks by relevance',
    color: 'purple',
    tool: 'get_email (full content)',
    input: '{ email_id: "eml_001", agent_safe_content: true }',
    output: `{
  "summary": "Key AI developments this week: GPT-5 benchmark results, new open-source LLM releases, EU AI Act enforcement updates.",
  "action_items": ["Review GPT-5 benchmarks for product impact", "Evaluate new Llama 4 for internal tools"],
  "relevance_score": 0.92,
  "urgency": "medium",
  "topics": ["AI", "LLMs", "Regulation"]
}`,
  },
  {
    id: 'pay',
    title: 'Pay for Premium',
    icon: Wallet,
    description: 'Agent uses Agent Wallet to unlock premium content via x402 protocol',
    color: 'green',
    tool: 'paybox_pay_x402',
    input: '{ endpoint: "https://premium.substack.com/api/content/003", amount: 0.05, currency: "USDC" }',
    output: `{
  "status": "paid",
  "transaction_id": "tx_9x2m4k",
  "amount": "0.05 USDC",
  "content_unlocked": true,
  "wallet_balance": "12.45 USDC",
  "receipt_saved": true
}`,
  },
  {
    id: 'deliver',
    title: 'Deliver Summary',
    icon: Send,
    description: 'Agent composes and sends curated digest to user for approval',
    color: 'yellow',
    tool: 'save_draft + send_email',
    input: '{ to: "user@example.com", subject: "📰 Your Curated Newsletter Digest — Sep 8", body: "..." }',
    output: `{
  "status": "draft_saved",
  "draft_id": "dft_7k3n9p",
  "preview": "3 newsletters curated. 1 premium unlocked. Top story: GPT-5 benchmarks show 40% improvement...",
  "awaiting_approval": true
}`,
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', glow: 'shadow-green-500/20' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', glow: 'shadow-yellow-500/20' },
};

export default function WorkflowDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playDemo = () => {
    setIsPlaying(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps.length) {
        clearInterval(interval);
        setIsPlaying(false);
        return;
      }
      setActiveStep(step);
    }, 2500);
  };

  const reset = () => {
    setActiveStep(0);
    setIsPlaying(false);
  };

  return (
    <section id="demo" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Interactive Workflow Demo
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Watch the agent execute the full newsletter curation workflow step by step.
            Each step calls real Mermail MCP tools.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={playDemo}
              disabled={isPlaying}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-400 transition-all disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              {isPlaying ? 'Running...' : 'Play Demo'}
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {steps.map((step, i) => {
            const colors = colorClasses[step.color];
            return (
              <button
                key={step.id}
                onClick={() => { setActiveStep(i); setIsPlaying(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                  i === activeStep
                    ? `${colors.bg} ${colors.border} ${colors.text}`
                    : i < activeStep
                    ? 'bg-green-500/5 border-green-500/20 text-green-400'
                    : 'bg-white/[0.02] border-white/5 text-gray-500'
                }`}
              >
                {i < activeStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <step.icon className="w-4 h-4" />
                )}
                <span className="text-sm font-medium hidden sm:inline">{step.title}</span>
                <span className="text-sm font-medium sm:hidden">{i + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl ${colorClasses[steps[activeStep].color].bg} ${colorClasses[steps[activeStep].color].border} border flex items-center justify-center`}>
                    {(() => { const Icon = steps[activeStep].icon; return <Icon className={`w-5 h-5 ${colorClasses[steps[activeStep].color].text}`} />; })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Step {activeStep + 1}: {steps[activeStep].title}</h3>
                    <p className="text-sm text-gray-400">{steps[activeStep].description}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 font-mono">MCP Tool: {steps[activeStep].tool}</span>
                </div>
              </div>

              {/* Input/Output */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Agent Input</div>
                  <pre className="text-sm text-cyan-300 font-mono bg-black/30 rounded-xl p-4 overflow-x-auto">
                    {steps[activeStep].input}
                  </pre>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Tool Response</div>
                  <pre className="text-sm text-green-300 font-mono bg-black/30 rounded-xl p-4 overflow-x-auto">
                    {steps[activeStep].output}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500">Step {activeStep + 1} of {steps.length}</span>
            <span className="text-xs text-gray-500">{Math.round(((activeStep + 1) / steps.length) * 100)}% complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
