/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Star, 
  ChevronRight, 
  ExternalLink,
  PenTool,
  Image as ImageIcon,
  Video,
  Code,
  GraduationCap,
  Briefcase,
  Mic,
  Zap,
  MessageSquare,
  Sparkles,
  Bot,
  Palette,
  Layers,
  Layout,
  Terminal,
  FileText,
  Film,
  Pen,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Plus,
  Check,
  Volume2,
  Ear,
  Monitor,
  Mail,
  MousePointer2,
  Headphones,
  Music,
  Wind
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AI_TOOLS, CATEGORIES, COMPARISONS, BLOG_POSTS, AGENT_TOOLS, AGENT_IDEA_TEMPLATES } from './constants';
import { ToolCategory, AITool, Comparison, AgentIdea, BlogPost } from './types';

// Icon mapping helper
const IconMap: Record<string, any> = {
  PenTool, Image: ImageIcon, Video, Code, GraduationCap, Briefcase, Mic, Zap,
  MessageSquare, Sparkles, Bot, Palette, Layers, Layout, Terminal, FileText, Film, Pen, CheckCircle,
  Search, Volume2, Ear, Monitor, MousePointer2, Headphones, Music, Wind
};

// Google AdSense Component
const GoogleAd = ({ slot, format = 'auto', responsive = 'true' }: { slot: string, format?: string, responsive?: string }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto px-10 my-8 text-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
      {/* Visual fallback for development */}
      <div className="w-full h-[90px] mt-2 rounded-lg border border-dashed border-neutral-800 bg-neutral-900/50 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Google AdSense</p>
        <p className="text-[8px] text-neutral-700 mt-1">Slot: {slot}</p>
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'All'>('All');
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTool, setActiveTool] = useState<AITool | null>(null);
  const [activeComparison, setActiveComparison] = useState<Comparison | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [activeStaticPage, setActiveStaticPage] = useState<'About' | 'Privacy' | 'Terms' | null>(null);
  const [agentIdeaInput, setAgentIdeaInput] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState<AgentIdea | null>(null);
  const [showAllPosts, setShowAllPosts] = useState(false);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate Agent Idea
  const generateAgentIdea = () => {
    if (!agentIdeaInput.trim()) return;
    const randomIndex = Math.floor(Math.random() * AGENT_IDEA_TEMPLATES.length);
    const template = AGENT_IDEA_TEMPLATES[randomIndex];
    setGeneratedIdea({
      ...template,
      title: agentIdeaInput
    });
  };
  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-[100]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-16 h-16 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-brand-primary" />
          </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 font-display font-medium text-neutral-400"
        >
          AI Tools Hub Loading...
        </motion.p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans ${(activeTool || activeComparison || activeBlogPost || activeStaticPage) ? 'overflow-hidden' : ''}`}>
      {/* Background patterns */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-[1024px] mx-auto px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-display font-extrabold tracking-tighter text-white uppercase">
              AI TOOLS <span className="text-brand-primary">HUB</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {['Home', 'Categories', 'Top Tools', 'AI Agent', 'Comparisons', 'Blog'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button onClick={() => setActiveStaticPage('About')} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">About</button>

          </div>

          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest border border-neutral-800 px-3 py-1 rounded-full">
              2026 Edition
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-neutral-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-neutral-950 pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {['Home', 'Categories', 'Top Tools', 'AI Agent', 'Comparisons', 'Blog'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-2xl font-display font-bold text-neutral-300 hover:text-brand-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => { setActiveStaticPage('About'); setIsMenuOpen(false); }}
                className="text-2xl font-display font-bold text-neutral-300 hover:text-brand-primary"
              >
                About
              </button>
              <div className="mt-4 pt-6 border-t border-neutral-800 w-full">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Contact Us</p>
                <p className="text-lg font-medium text-neutral-300 select-all">amanbagde2003@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24">
        {/* ... existing hero and other sections ... */}
        {/* Hero Section */}
        <section id="home" className="relative px-10 pt-16 pb-12 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-display font-extrabold tracking-[-1.5px] text-white mb-3"
            >
              Discover the Best <span className="text-brand-primary">Free AI Tools</span> in 2026
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Curated directory for students, creators, developers, and businesses.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-[600px] mx-auto mb-6"
            >
              <input 
                type="text" 
                placeholder="Search 2,500+ AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all text-base"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2.5"
            >
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  document.getElementById('top-tools')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                  selectedCategory === 'All' 
                  ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary shadow-sm' 
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    document.getElementById('top-tools')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                    selectedCategory === cat.name 
                    ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary shadow-sm' 
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AdSense Slot 1: Hero Bottom */}
        <GoogleAd slot="1234567890" />

        {/* Categories Grid Section */}
        <section id="categories" className="px-10 py-12 bg-neutral-950/50">
          <div className="max-w-[1024px] mx-auto">
            <h2 className="text-xl font-display font-semibold text-white mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => {
                const Icon = IconMap[cat.icon] || Sparkles;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      document.getElementById('top-tools')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`group p-6 rounded-2xl border transition-all text-center flex flex-col items-center justify-center gap-4 ${
                      selectedCategory === cat.name
                      ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${
                      selectedCategory === cat.name ? 'bg-brand-primary text-white' : 'bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700 group-hover:text-white'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold tracking-tight">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Featured Tools Section */}
        <section id="top-tools" className="px-10 py-12">
          <div className="max-w-[1024px] mx-auto">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-xl font-display font-semibold text-white">Featured Tools</h2>
              </div>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="flex items-center gap-2 text-brand-primary hover:underline font-medium text-xs transition-all"
              >
                View all tools &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool) => {
                    const Icon = IconMap[tool.icon] || Sparkles;
                    return (
                      <motion.div 
                        layout
                        key={tool.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setActiveTool(tool)}
                        className="group cursor-pointer flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-all shadow-sm"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] font-bold uppercase tracking-tight text-white">
                            {tool.pricing}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-white mb-1">{tool.name}</h3>
                          <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.8rem]">
                            {tool.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800/50">
                          <div className="flex items-center gap-1.5 text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span className="text-xs font-semibold">{tool.rating}</span>
                          </div>
                          <span className="text-neutral-400 group-hover:text-brand-primary transition-colors">
                            <Plus className="w-4 h-4" />
                          </span>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-base font-medium text-neutral-500">No tools found matching your request.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Free Tools Row */}
        <section className="px-10 py-12 bg-neutral-900/30">
          <div className="max-w-[1024px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                <Zap className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-display font-semibold text-white">Free & Freemium Tools</h2>
            </div>
            
            <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar -mx-10 px-10">
              {AI_TOOLS.filter(t => t.pricing !== 'Paid').map((tool) => {
                const Icon = IconMap[tool.icon] || Sparkles;
                return (
                  <motion.div 
                    key={`free-${tool.id}`}
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveTool(tool)}
                    className="flex-shrink-0 w-[240px] bg-neutral-900 border border-neutral-800 rounded-2xl p-5 cursor-pointer hover:border-brand-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-brand-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-white truncate">{tool.name}</h3>
                        <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">{tool.pricing}</p>
                      </div>
                    </div>
                    <p className="text-neutral-500 text-[10px] leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Agent Section */}
        <section id="ai-agent" className="px-10 py-20 bg-neutral-950">
          <div className="max-w-[1024px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-white mb-4">Build Your Own <span className="text-brand-primary">AI Agent</span> for Free</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Create simple AI agents using free tools like Google AI Studio, OpenAI, LangChain, CrewAI, n8n, and Flowise.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {AGENT_TOOLS.map((tool) => {
                const Icon = IconMap[tool.icon] || Bot;
                return (
                  <motion.a 
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group block bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-brand-primary/30 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{tool.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                        <Check className="w-3 h-3 text-brand-primary" />
                        <span>Best use: {tool.useCase}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800/50">
                      <div className="flex gap-2">
                        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                          tool.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-500' :
                          tool.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-500' :
                          'bg-rose-500/10 text-rose-500'
                        }`}>
                          {tool.difficulty}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-neutral-800 text-[8px] font-black uppercase tracking-widest text-neutral-400">
                          {tool.pricing}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-brand-primary group-hover:text-white flex items-center gap-1 transition-colors">
                        Learn More <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Idea Generator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl"></div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Quick AI Agent Idea Generator</h3>
              <p className="text-neutral-400 text-sm mb-8">Not sure where to start? Tell us your goal.</p>
              
              <div className="max-w-md mx-auto flex flex-col md:flex-row gap-3 mb-8">
                <input 
                  type="text" 
                  value={agentIdeaInput}
                  onChange={(e) => setAgentIdeaInput(e.target.value)}
                  placeholder="Enter your idea (example: AI Study Assistant)"
                  className="flex-1 px-5 py-3.5 bg-neutral-950 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                />
                <button 
                  onClick={generateAgentIdea}
                  className="px-6 py-3.5 bg-brand-primary text-neutral-950 font-bold rounded-xl text-sm hover:bg-white hover:text-black transition-all"
                >
                  Generate Agent Idea
                </button>
              </div>

              <AnimatePresence>
                {generatedIdea && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto p-6 bg-neutral-950 border border-neutral-800 rounded-2xl text-left"
                  >
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Title</span>
                        <h4 className="text-white font-bold">{generatedIdea.title}</h4>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Purpose</span>
                        <p className="text-neutral-400 text-sm leading-relaxed">{generatedIdea.purpose}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Recommended Tools</span>
                        <p className="text-neutral-300 text-sm font-medium">{generatedIdea.tools}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Key Features</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {generatedIdea.features.map(f => (
                            <span key={f} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] text-neutral-300">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* AdSense Slot 2: Middle */}
        <GoogleAd slot="0987654321" />

        {/* Comparisons Section */}
        <section id="comparisons" className="px-10 py-12">
          <div className="max-w-[1024px] mx-auto">
            <h2 className="text-xl font-display font-semibold text-white mb-8">Top Comparisons</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPARISONS.map((comp) => (
                <div 
                  key={comp.id} 
                  onClick={() => setActiveComparison(comp)}
                  className="group cursor-pointer relative overflow-hidden p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center font-display font-bold text-white">
                      {comp.toolA[0]}
                    </div>
                    <span className="text-neutral-600 font-display font-bold italic text-xs">VS</span>
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center font-display font-bold text-white">
                      {comp.toolB[0]}
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">{comp.title}</h3>
                  <p className="text-neutral-500 text-xs mb-6 max-w-sm line-clamp-2">{comp.description}</p>
                  <button className="flex items-center gap-2 text-brand-primary font-bold text-xs hover:gap-3 transition-all hover:text-brand-secondary">
                    Read Comparison &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="px-10 py-12">
          <div className="max-w-[1024px] mx-auto">
            <h2 className="text-xl font-display font-semibold text-white mb-8">Latest Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(showAllPosts ? BLOG_POSTS : BLOG_POSTS.slice(0, 3)).map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => setActiveBlogPost(post)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-neutral-800">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                </article>
              ))}
            </div>

            {BLOG_POSTS.length > 3 && (
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setShowAllPosts(!showAllPosts)}
                  className="px-8 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 font-bold hover:text-white hover:border-neutral-700 transition-all text-sm"
                >
                  {showAllPosts ? 'Show Less Articles' : 'View All Articles'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* AdSense Slot 3: Footer Top */}
        <GoogleAd slot="1122334455" />
      </main>

      {/* Static Page Modal */}
      <AnimatePresence>
        {activeStaticPage && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStaticPage(null)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button 
                onClick={() => setActiveStaticPage(null)}
                className="absolute top-6 right-6 p-2 bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-display font-extrabold text-white mb-6">
                  {activeStaticPage === 'About' ? 'About AI Tools Hub' : 
                   activeStaticPage === 'Privacy' ? 'Privacy Policy' : 
                   'Terms of Service'}
                </h2>
                
                <div className="prose prose-invert prose-emerald max-w-none text-neutral-400 leading-relaxed space-y-6">
                  {activeStaticPage === 'About' && (
                    <>
                      <p>AI Tools Hub is the web’s leading directory for discovering high-quality, professional, and free artificial intelligence tools. Our mission is to democratize access to cutting-edge technology by curating the best apps for students, creators, and entrepreneurs.</p>
                      <p>Founded in 2026, we have grown from a simple list into a comprehensive ecosystem of comparisons, guides, and interactive tools designed to help you navigate the complex world of generative AI. Our team manually reviews every tool to ensure it meets our standards for performance and usability.</p>
                      <h3 className="text-white font-bold">Our Commitment</h3>
                      <p>We believe that AI should be a tool for empowerment. We prioritize highlighting open-source and free-tier solutions that allow anyone to start building their future without a massive financial barrier.</p>
                    </>
                  )}
                  {activeStaticPage === 'Privacy' && (
                    <>
                      <p>At AI Tools Hub, your privacy is paramount. This policy outlines how we handle the very limited data we collect. We do not require account creation to browse our directory.</p>
                      <h3 className="text-white font-bold">Data Collection</h3>
                      <p>We use standard analytics tools to understand how users interact with our site. This may include IP addresses, browser types, and referring URLs. This information is used strictly for improving user experience and performance.</p>
                      <h3 className="text-white font-bold">Cookies</h3>
                      <p>We use cookies to remember your preferences (like theme settings or category filters). You can disable cookies in your browser settings at any time.</p>
                      <p>We also serve ads via Google AdSense, which may use cookies to serve personalized ads based on your previous visits to our website or other websites.</p>
                    </>
                  )}
                  {activeStaticPage === 'Terms' && (
                    <>
                      <p>By using AI Tools Hub, you agree to the following terms and conditions. The content provided on this website is for informational purposes only.</p>
                      <h3 className="text-white font-bold">Disclaimer</h3>
                      <p>We do not guarantee the accuracy, completeness, or usefulness of any tool listed in our directory. Users should exercise their own judgment when using third-party AI services and comply with their respective terms of service.</p>
                      <h3 className="text-white font-bold">Affiliate Disclosure</h3>
                      <p>Some links on this site may be affiliate links, meaning we earn a small commission if you choose to purchase a premium plan, at no extra cost to you. This helps keep the core directory free for everyone.</p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {activeBlogPost && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBlogPost(null)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button 
                onClick={() => setActiveBlogPost(null)}
                className="absolute top-6 right-6 p-2 bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={activeBlogPost.image} 
                  alt={activeBlogPost.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">
                  Article &bull; {activeBlogPost.date}
                </div>
                <h2 className="text-3xl font-display font-extrabold text-white mb-6 leading-tight">
                  {activeBlogPost.title}
                </h2>
                
                <div className="prose prose-invert prose-emerald max-w-none text-neutral-300 leading-relaxed space-y-4">
                  <p className="text-lg text-neutral-200 font-medium">
                    {activeBlogPost.excerpt}
                  </p>
                  <div className="h-px bg-neutral-800 my-8"></div>
                  <p>
                    {activeBlogPost.content}
                  </p>
                  <p>
                    Continual advancements in artificial intelligence are reshaping how we interact with technology. Whether you are a solo creator or a large enterprise, integrating these tools into your daily workflow is no longer optional—it is a strategic necessity.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-neutral-800">
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span>Published in AI Tools Hub</span>
                    <span>&bull;</span>
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {activeComparison && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveComparison(null)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button 
                onClick={() => setActiveComparison(null)}
                className="absolute top-6 right-6 p-2 bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-display font-extrabold text-white mb-4">{activeComparison.title}</h2>
                  <div className="flex items-center justify-center gap-6">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-xl font-display font-bold text-brand-primary border border-brand-primary/20">
                      {activeComparison.toolA[0]}
                    </div>
                    <span className="text-neutral-600 font-display font-black italic text-xl">VS</span>
                    <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-xl font-display font-bold text-brand-secondary border border-brand-secondary/20">
                      {activeComparison.toolB[0]}
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">The Breakdown</h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {activeComparison.content}
                    </p>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="p-6 bg-neutral-950/30 rounded-2xl border border-neutral-800/50">
                      <h4 className="text-brand-primary font-bold text-sm mb-4">Why choose {activeComparison.toolA}?</h4>
                      <ul className="space-y-3">
                        {activeComparison.prosA.map((pro, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                            <Check className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="p-6 bg-neutral-950/30 rounded-2xl border border-neutral-800/50">
                      <h4 className="text-brand-secondary font-bold text-sm mb-4">Why choose {activeComparison.toolB}?</h4>
                      <ul className="space-y-3">
                        {activeComparison.prosB.map((pro, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                            <Check className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <section className="bg-brand-primary/5 p-8 rounded-2xl border border-brand-primary/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3">Final Verdict</h4>
                    <p className="text-white font-medium leading-relaxed">
                      {activeComparison.verdict}
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {activeTool && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTool(null)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <button 
                onClick={() => setActiveTool(null)}
                className="absolute top-6 right-6 p-2 bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-brand-primary shadow-inner">
                    {(() => {
                      const Icon = IconMap[activeTool.icon] || Sparkles;
                      return <Icon className="w-8 h-8" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-3xl font-display font-extrabold text-white">{activeTool.name}</h2>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="text-sm font-bold">{activeTool.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       <span className="px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider border border-brand-primary/20">
                        {activeTool.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        {activeTool.pricing}
                      </span>
                      {activeTool.priceRange && (
                        <span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] font-bold tracking-wider text-neutral-500">
                          {activeTool.priceRange}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">About</h4>
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                      {activeTool.longDescription}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeTool.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                          <div className="w-5 h-5 bg-brand-primary/10 rounded flex items-center justify-center text-brand-primary">
                            <Check className="w-3 h-3" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Testimonials</h4>
                    <div className="space-y-4">
                      {activeTool.testimonials.map((t, i) => (
                        <div key={i} className="bg-neutral-950/50 p-6 rounded-2xl border border-neutral-800">
                          <p className="text-neutral-300 italic text-sm mb-3">"{t.text}"</p>
                          <span className="text-xs font-bold text-brand-primary">— {t.author}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="pt-4">
                    <a 
                      href={activeTool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-brand-primary text-neutral-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all shadow-xl shadow-brand-primary/20"
                    >
                      Visit {activeTool.name} <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="about" className="bg-neutral-950 pt-16 pb-12 px-10 border-t border-neutral-800">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xs text-neutral-500">
            &copy; 2026 AI Tools Hub. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-neutral-500">
            <button onClick={() => setActiveStaticPage('Privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveStaticPage('Terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <a href="mailto:amanbagde2003@gmail.com" className="hover:text-brand-primary transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" /> Contact us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
