import { motion } from 'framer-motion';
import { Mail, Wallet, Brain, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: 'Inbox Management',
    description: 'Creates dedicated mailbox for newsletter subscriptions. Monitors incoming newsletters, extracts key insights, and organizes by topic.',
    color: 'cyan',
  },
  {
    icon: Wallet,
    title: 'Premium Access via Wallet',
    description: 'Uses Agent Wallet (PayBox) to pay for premium newsletter content via x402 pay-per-use protocol. Human-defined spending limits.',
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'Smart Curation',
    description: 'Classifies newsletters by relevance, extracts action items, summarizes key points, and flags time-sensitive content.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Follows Mermail safety protocol. All external actions require human approval. Email content treated as untrusted data.',
    color: 'green',
  },
  {
    icon: Zap,
    title: 'Automated Triage',
    description: 'Configures Mermail task triage to auto-classify incoming newsletters. Urgent items get immediate attention, others batch-processed.',
    color: 'yellow',
  },
  {
    icon: Globe,
    title: 'Multi-Source',
    description: 'Handles newsletters from any sender. Supports paid Substack, premium research reports, and free community digests.',
    color: 'pink',
  },
];

const colorMap: Record<string, string> = {
  cyan: 'from-cyan-400 to-cyan-600',
  purple: 'from-purple-400 to-purple-600',
  blue: 'from-blue-400 to-blue-600',
  green: 'from-green-400 to-green-600',
  yellow: 'from-yellow-400 to-yellow-600',
  pink: 'from-pink-400 to-pink-600',
};

const bgColorMap: Record<string, string> = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20',
  purple: 'bg-purple-500/10 border-purple-500/20',
  blue: 'bg-blue-500/10 border-blue-500/20',
  green: 'bg-green-500/10 border-green-500/20',
  yellow: 'bg-yellow-500/10 border-yellow-500/20',
  pink: 'bg-pink-500/10 border-pink-500/20',
};

const iconColorMap: Record<string, string> = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  pink: 'text-pink-400',
};

export default function SkillOverview() {
  return (
    <section id="overview" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              What This Skill Enables
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A complete newsletter curation workflow powered by Mermail's inbox and Agent Wallet.
            Your agent subscribes, reads, curates, and even pays for premium content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]"
            >
              <div className={`w-12 h-12 rounded-xl ${bgColorMap[feature.color]} border flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${iconColorMap[feature.color]}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '63', label: 'MCP Tools Available' },
            { value: '4', label: 'Workflow Phases' },
            { value: '∞', label: 'Newsletter Sources' },
            { value: '0', label: 'Human Emails Needed' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
