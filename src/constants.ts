import { AITool, Comparison, BlogPost, ToolCategory, AIAgentTool, AgentIdea } from './types';

export const CATEGORIES: { name: ToolCategory; icon: string }[] = [
  { name: 'Writing', icon: 'PenTool' },
  { name: 'Image Generator', icon: 'Image' },
  { name: 'Video', icon: 'Video' },
  { name: 'Coding', icon: 'Code' },
  { name: 'Student', icon: 'GraduationCap' },
  { name: 'Business', icon: 'Briefcase' },
  { name: 'Voice', icon: 'Mic' },
  { name: 'Productivity', icon: 'Zap' },
];

export const AI_TOOLS: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI by OpenAI for writing, coding, and problem-solving.',
    longDescription: 'ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. It’s capable of complex reasoning, creative writing, and technical debugging across a vast array of topics.',
    features: ['Real-time conversation', 'Code generation & debugging', 'Creative writing & summaries', 'Data analysis & visualization'],
    testimonials: [{ author: 'Dev Sarah', text: 'It cut my coding time in half. Best companion for any dev.' }, { author: 'Mark M.', text: 'The creative writing prompts are unparalleled.' }],
    category: 'Writing',
    pricing: 'Freemium',
    priceRange: 'Free / $20/mo Plus',
    rating: 4.9,
    icon: 'MessageSquare',
    url: 'https://chat.openai.com'
  },
  {
    id: '2',
    name: 'Gemini',
    description: 'Googles multimodal AI capable of reasoning across text, images, and code.',
    longDescription: 'Gemini is built from the ground up to be multimodal, meaning it can generalize and seamlessly understand, operate across and combine different types of information including text, images, audio, video and code.',
    features: ['Google Workspace integration', 'Advanced multimodal reasoning', 'High-performance mobile app', 'Image & video analysis'],
    testimonials: [{ author: 'Product Lead', text: 'Integrating Gemini into our workflow has been seamless.' }],
    category: 'Productivity',
    pricing: 'Freemium',
    priceRange: 'Free / $19.99/mo Pro',
    rating: 4.8,
    icon: 'Sparkles',
    url: 'https://gemini.google.com'
  },
  {
    id: '3',
    name: 'Claude',
    description: 'Anthropic’s helpful, harmless, and honest AI with long context window.',
    longDescription: 'Claude is a next-generation AI assistant based on Anthropics research into training safe, manageable AI systems. Claude is capable of a wide variety of tasks from sophisticated dialogue and creative content generation to complex reasoning and detailed instruction.',
    features: ['Constitutional AI safety', '200k+ context window', 'Natural writing style', 'Advanced technical analysis'],
    testimonials: [{ author: 'Academic Researcher', text: 'Claude’s nuance is much better for research papers.' }],
    category: 'Writing',
    pricing: 'Freemium',
    priceRange: 'Free / $20/mo Pro',
    rating: 4.8,
    icon: 'Bot',
    url: 'https://claude.ai'
  },
  {
    id: '4',
    name: 'Midjourney',
    description: 'High-quality artistic image generation through Discord-based commands.',
    longDescription: 'Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. Their AI tool converts natural language prompts into high-fidelity artistic images.',
    features: ['Professional artistic styles', 'Aspect ratio control', 'Community showcase access', 'Ultra-high resolution upscaling'],
    testimonials: [{ author: 'Creative Director', text: 'The textures and lighting are better than any other generator.' }],
    category: 'Image Generator',
    pricing: 'Paid',
    priceRange: 'From $10/mo',
    rating: 4.9,
    icon: 'Palette',
    url: 'https://midjourney.com'
  },
  {
    id: '5',
    name: 'Leonardo AI',
    description: 'Professional visual asset creation with fine-tuned models and tools.',
    longDescription: 'Leonardo.ai allows you to create production-quality visual assets for your projects with unprecedented speed and style-consistency. It provides ultimate control over image generation with advanced canvas and editing tools.',
    features: ['Canvas editor', 'Model fine-tuning', 'Texture generation for 3D', 'Consistent character tools'],
    testimonials: [{ author: 'Game Artist', text: 'Essential for my conceptual art pipeline.' }],
    category: 'Image Generator',
    pricing: 'Freemium',
    priceRange: 'Free / Paid tiers',
    rating: 4.7,
    icon: 'Layers',
    url: 'https://leonardo.ai'
  },
  {
    id: '6',
    name: 'Canva AI',
    description: 'Magic Studio for effortless design, image editing, and branding.',
    longDescription: 'Canva Magic Studio brings the power of AI to your design journey. From Magic Media that generates images and videos from text to Magic Switch that transforms your content across formats instantly.',
    features: ['Magic Edit & Erase', 'Text to Image/Video', 'Automatic translation', 'Brand Voice consistency'],
    testimonials: [{ author: 'Social Manager', text: 'Design tasks that took hours now take seconds.' }],
    category: 'Business',
    pricing: 'Freemium',
    priceRange: 'Free / $12.99/mo Pro',
    rating: 4.6,
    icon: 'Layout',
    url: 'https://canva.com'
  },
  {
    id: '7',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that provides real-time code suggestions and functions.',
    longDescription: 'GitHub Copilot is your AI pair programmer. It uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor. It’s trained on billions of lines of public code.',
    features: ['Auto-complete code snippets', 'Natural language to code', 'Unit test generation', 'Multi-language support'],
    testimonials: [{ author: 'Backend Dev', text: 'I can barely code without it now. Huge productivity boost.' }],
    category: 'Coding',
    pricing: 'Paid',
    priceRange: '$10/mo Individuals',
    rating: 4.9,
    icon: 'Terminal',
    url: 'https://github.com/features/copilot'
  },
  {
    id: '8',
    name: 'Notion AI',
    description: 'Built-in assistant to summarize, write, and organize your workspace.',
    longDescription: 'Notion AI brings the power of artificial intelligence directly into your workspace. It helps you write faster, iterate better, and think bigger—right where your work is already happening.',
    features: ['Drafting assistance', 'Summarization', 'Translation in-place', 'Brainstorming tools'],
    testimonials: [{ author: 'Project Manager', text: 'The summarize feature is a lifesaver for long docs.' }],
    category: 'Productivity',
    pricing: 'Paid',
    priceRange: '$8-10/mo add-on',
    rating: 4.7,
    icon: 'FileText',
    url: 'https://notion.so'
  },
  {
    id: '9',
    name: 'Runway',
    description: 'Next-gen video generation tools for creators and filmmakers.',
    longDescription: 'Runway is an applied AI research company shaping the next era of art, entertainment and human creativity. Their tools allow users to generate, modify, and enhance video using AI.',
    features: ['Gen-2: Text-to-Video', 'Motion brush', 'Inpainting & Object removal', 'Style transfer'],
    testimonials: [{ author: 'VFX Artist', text: 'The motion brush is revolutionary for AI video.' }],
    category: 'Video',
    pricing: 'Paid',
    priceRange: 'From $12/mo',
    rating: 4.8,
    icon: 'Film',
    url: 'https://runwayml.com'
  },
  {
    id: '10',
    name: 'Jasper',
    description: 'Enterprise AI writing platform for marketing teams and content creators.',
    longDescription: 'Jasper is the AI content platform that helps organizations create high-quality content faster. It’s built for enterprise marketing teams to stay consistent, on-brand, and agile.',
    features: ['Brand Voice & Memory', 'SEO optimization', 'Multi-lingual support', 'Marketing campaign tools'],
    testimonials: [{ author: 'CMO', text: 'Jasper ensures our copy is consistent across all channels.' }],
    category: 'Writing',
    pricing: 'Paid',
    priceRange: 'Custom pricing',
    rating: 4.5,
    icon: 'Pen',
    url: 'https://jasper.ai'
  },
  {
    id: '11',
    name: 'Perplexity',
    description: 'AI-powered search engine providing accurate, cited answers to queries.',
    longDescription: 'Perplexity AI is a conversational search engine that provides instant answers to questions using large language models. It provides real-time search results with linked citations.',
    features: ['Source citations', 'Copilot researcher', 'Real-time web search', 'Pro discovery modes'],
    testimonials: [{ author: 'Student', text: 'Better than Google for finding actual answers.' }],
    category: 'Productivity',
    pricing: 'Freemium',
    priceRange: 'Free / $20/mo Pro',
    rating: 4.9,
    icon: 'Search',
    url: 'https://perplexity.ai'
  },
  {
    id: '12',
    name: 'Grammarly',
    description: 'AI communication assistant for clear, mistake-free writing everywhere.',
    longDescription: 'Grammarly goes beyond grammar and spelling to help you write with confidence. Their AI analyzes your communication for clarity, tone, and conciseness, providing actionable suggestions.',
    features: ['Grammar & Spell check', 'Tone detection', 'Plagiarism checker', 'Generative writing assistant'],
    testimonials: [{ author: 'Editor', text: 'An essential final check for all my work.' }],
    category: 'Writing',
    pricing: 'Freemium',
    priceRange: 'Free / Premium subscription',
    rating: 4.7,
    icon: 'CheckCircle',
    url: 'https://grammarly.com'
  },
  {
    id: '13',
    name: 'ElevenLabs',
    description: 'The most realistic AI speech platform for voice cloning and design.',
    longDescription: 'ElevenLabs is an American software company developing natural-sounding speech synthesis and text-to-speech software, using deep learning and artificial intelligence.',
    features: ['High-fidelity voice cloning', 'Multi-lingual synthesis', 'Emotion & style control', 'API for developers'],
    testimonials: [{ author: 'Game Tech', text: 'The natural intonation is miles ahead of traditional TTS.' }],
    category: 'Voice',
    pricing: 'Freemium',
    priceRange: 'Free / $5/mo Starter',
    rating: 4.9,
    icon: 'Volume2',
    url: 'https://elevenlabs.io'
  },
  {
    id: '14',
    name: 'HeyGen',
    description: 'AI video generator that creates professional avatars from text.',
    longDescription: 'HeyGen is an innovative AI video platform that helps you create professional business videos with AI avatars. Translate your videos into 40+ languages seamlessly.',
    features: ['Instant AI avatars', 'Video translation', 'Lip-sync technology', 'Text-to-Video generation'],
    testimonials: [{ author: 'HR Director', text: 'Reduced our training video production time by 80%.' }],
    category: 'Video',
    pricing: 'Freemium',
    priceRange: 'Free / $24/mo Creator',
    rating: 4.8,
    icon: 'Bot',
    url: 'https://heygen.com'
  },
  {
    id: '15',
    name: 'Descript',
    description: 'All-in-one video and podcast editor that works like a document.',
    longDescription: 'Descript is a new kind of video and podcast editor that makes editing as easy as editing a doc. It includes features like AI voice cloning, filler word removal, and studio sound.',
    features: ['Text-based video editing', 'Overdub (voice cloning)', 'Studio Sound enhancement', 'Automatic transcription'],
    testimonials: [{ author: 'Podcaster', text: 'Literally magic. I edit by deleting text, not cutting waveforms.' }],
    category: 'Video',
    pricing: 'Freemium',
    priceRange: 'Free / $12/mo Creator',
    rating: 4.7,
    icon: 'Mic',
    url: 'https://descript.com'
  },
  {
    id: '16',
    name: 'Phind',
    description: 'AI search engine and pair programmer optimized for developers.',
    longDescription: 'Phind is an answer engine that uses LLMs to provide direct answers and code snippets to complex technical questions, citing documentation and forum results.',
    features: ['Developer-first search', 'Deep repo indexing', 'Model selection (Grok, Claude)', 'Direct CLI integration'],
    testimonials: [{ author: 'Senior Engineer', text: 'Replaced Google + StackOverflow for my daily workflow.' }],
    category: 'Coding',
    pricing: 'Freemium',
    priceRange: 'Free / $20/mo Pro',
    rating: 4.9,
    icon: 'Terminal',
    url: 'https://phind.com'
  },
  {
    id: '17',
    name: 'Suno AI',
    description: 'Transform your lyrics into professional-grade music and songs.',
    longDescription: 'Suno AI is a generative artificial intelligence program designed to generate songs that combine vocals and instrumentation. It uses two AI models: Bark for vocals and Chirp for backing tracks.',
    features: ['Complete song generation', 'Custom style & genre', 'Multi-lingual vocals', 'Commercial rights (Pro)'],
    testimonials: [{ author: 'Content Creator', text: 'Created the perfect intro song in 30 seconds.' }],
    category: 'Voice',
    pricing: 'Freemium',
    priceRange: 'Free / $10/mo Pro',
    rating: 4.8,
    icon: 'Music',
    url: 'https://suno.com'
  },
  {
    id: '18',
    name: 'Gamma',
    description: 'Create beautiful presentations and documents in seconds with AI.',
    longDescription: 'Gamma is a new medium for presenting ideas. Powered by AI, it enables you to create polished, interactive content from text, without the formatting hassle of slides.',
    features: ['One-click presentations', 'Flexible layout cards', 'Built-in analytics', 'Interactive embed support'],
    testimonials: [{ author: 'Sales Rep', text: 'Told it my topic, and I had a 10-slide deck ready for review.' }],
    category: 'Business',
    pricing: 'Freemium',
    priceRange: 'Free / $8/mo Plus',
    rating: 4.7,
    icon: 'Monitor',
    url: 'https://gamma.app'
  },
  {
    id: '19',
    name: 'DeepL',
    description: 'World’s most accurate AI translator for text and documents.',
    longDescription: 'DeepL is a neural machine translation service that provides translations of unparalleled quality. It is widely considered the world’s most accurate AI translation tool.',
    features: ['High-accuracy translation', 'Document file translation', 'Tone control (Formal/Informal)', 'Glossary management'],
    testimonials: [{ author: 'Translator', text: 'The only AI I trust to capture linguistic nuances.' }],
    category: 'Productivity',
    pricing: 'Freemium',
    priceRange: 'Free / Pro tiers',
    rating: 4.9,
    icon: 'Globe',
    url: 'https://deepl.com'
  },
  {
    id: '20',
    name: 'Krisp',
    description: 'AI-powered noise cancellation for crystal clear online meetings.',
    longDescription: 'Krisp is an AI-powered noise-canceling software that removes background noise from your calls in real-time. It works with any conferencing app like Zoom, Teams, and Meet.',
    features: ['Bi-directional noise removal', 'Acoustic echo cancellation', 'Meeting transcriptions', 'AI meeting assistant'],
    testimonials: [{ author: 'Remote Worker', text: 'My coworkers can’t hear my baby crying or the construction outside.' }],
    category: 'Productivity',
    pricing: 'Freemium',
    priceRange: 'Free / $8/mo Pro',
    rating: 4.8,
    icon: 'Ear',
    url: 'https://krisp.ai'
  },
  {
    id: '21',
    name: 'Stable Diffusion',
    description: 'Open-source image model for powerful, uncensored generation.',
    longDescription: 'Stable Diffusion is a deep learning, text-to-image model released in 2022. It is primarily used to generate detailed images conditioned on text descriptions.',
    features: ['Full local control', 'Extensive model ecosystem', 'Inpainting & Outpainting', 'LoRA & ControlNet support'],
    testimonials: [{ author: 'Concept Artist', text: 'The absolute freedom to train my own styles is vital.' }],
    category: 'Image Generator',
    pricing: 'Free',
    rating: 4.9,
    icon: 'Palette',
    url: 'https://stability.ai'
  },
  {
    id: '22',
    name: 'Copy.ai',
    description: 'AI marketing platform for rapid content and sales copy generation.',
    longDescription: 'Copy.ai is an AI-powered content generation tool for businesses. It helps marketing teams write high-converting copy for emails, social media, and more.',
    features: ['90+ writing templates', 'Brand voice training', 'Workflow automation', 'Long-form editor'],
    testimonials: [{ author: 'Agency Owner', text: 'Scaled our content output by 10x without hiring more writers.' }],
    category: 'Business',
    pricing: 'Freemium',
    priceRange: 'Free / $36/mo Pro',
    rating: 4.6,
    icon: 'PenTool',
    url: 'https://copy.ai'
  }
];

export const COMPARISONS: Comparison[] = [
  {
    id: 'c1',
    title: 'ChatGPT vs Gemini',
    toolA: 'ChatGPT',
    toolB: 'Gemini',
    description: 'Deep dive into two of the biggest AI chatbots in 2026.',
    content: 'The battle between OpenAI and Google has reached new heights. ChatGPT remains the gold standard for creative writing and code generation, while Gemini leverages the power of Google search and deep integration with the Google Workspace ecosystem.',
    prosA: ['Better creative writing', 'Stronger coding capabilities', 'Extensive plugin ecosystem'],
    prosB: ['Real-time Google search info', 'Multimodal native integration', 'Unlimited context in Pro version'],
    verdict: 'Choose ChatGPT for coding and writing; choose Gemini if you live in Google Workspace or need real-time data.'
  },
  {
    id: 'c2',
    title: 'Midjourney vs Leonardo AI',
    toolA: 'Midjourney',
    toolB: 'Leonardo AI',
    description: 'Which artistic generator wins for professional designers?',
    content: 'Midjourney offers unparalleled artistic quality and "vibe," but Leonardo AI provides much more granular control through its web-based interface and fine-tuning tools.',
    prosA: ['Unmatched lighting & textures', 'Massive artistic community', 'Simple prompt-to-art flow'],
    prosB: ['Web-based canvas editor', 'Fine-tuned model training', 'Consistent character generation'],
    verdict: 'Midjourney for pure artistry; Leonardo AI for production pipelines and control.'
  },
  {
    id: 'c3',
    title: 'Canva AI vs Adobe Express',
    toolA: 'Canva AI',
    toolB: 'Adobe Express',
    description: 'Comparing magic design tools for non-designers.',
    content: 'Canva AI focuses on ease of use and rapid marketing asset creation, while Adobe Express brings professional-grade Firefly AI and deep Creative Cloud integration.',
    prosA: ['Incredible ease of use', 'Faster collaboration', 'Massive template library'],
    prosB: ['Adobe Firefly integration', 'Better asset organization', 'Creative Cloud sync'],
    verdict: 'Canva for speed and teams; Adobe Express for high-fidelity assets and brand control.'
  },
  {
    id: 'c4',
    title: 'GitHub Copilot vs Codeium',
    toolA: 'GitHub Copilot',
    toolB: 'Codeium',
    description: 'The ultimate battle of AI coding assistants.',
    content: 'GitHub Copilot is the industry standard with OpenAI Codex, whereas Codeium offers a very powerful free tier and excellent performance across a wide range of IDEs.',
    prosA: ['Market-leading accuracy', 'Enterprise security', 'GitHub context awareness'],
    prosB: ['Free for individuals', 'Blazing fast autocomplete', 'Search across local codebase'],
    verdict: 'Copilot for professional/corporate work; Codeium for individuals and those needing speed.'
  },
  {
    id: 'c5',
    title: 'Claude 3.5 vs GPT-4o',
    toolA: 'Claude 3.5',
    toolB: 'GPT-4o',
    description: 'Which frontier model is the real king of 2026?',
    content: 'Claude 3.5 Sonnet has taken the lead in emotional intelligence and nuance, while GPT-4o remains superior in multimodal speed and voice interaction. Anthropic’s model feels more "human" and follows complex instructions with fewer hallucinations, while OpenAI’s beast is a master of all trades from vision to data analysis.',
    prosA: ['Better coding ability', 'More natural tone', 'Huge 200k context window'],
    prosB: ['Native multimodal speed', 'Excellent vision support', 'Superior data analysis tools'],
    verdict: 'Claude for complex reasoning; GPT-4o for versatile, fast multimodal tasks.'
  },
  {
    id: 'c6',
    title: 'ElevenLabs vs Play.ht',
    toolA: 'ElevenLabs',
    toolB: 'Play.ht',
    description: 'The best AI voice generation for creators.',
    content: 'ElevenLabs is world-class for emotional storytelling and high-fidelity cloning. Play.ht focuses on high-speed API generation for e-learning and localized narration with a massive library of 900+ voices across 140 languages.',
    prosA: ['Ultra-realistic emotion', 'Best-in-class cloning', 'Speech-to-Speech conversion'],
    prosB: ['Massive language library', 'Fast API response times', 'Great for e-learning content'],
    verdict: 'ElevenLabs for quality; Play.ht for scale and language diversity.'
  },
  {
    id: 'c7',
    title: 'Perplexity vs Google Search',
    toolA: 'Perplexity',
    toolB: 'Google Search',
    description: 'Is the traditional search engine dead?',
    content: 'Perplexity AI provides direct answers with citations, eliminating the need to click through ten blue links. Google is fighting back with Search Generative Experience (SGE), which adds a similar AI summary above the traditional search results.',
    prosA: ['Direct answers with links', 'No SEO spam results', 'Clean, ad-free experience'],
    prosB: ['Real-time local data', 'Shopping & Map integration', 'Deep web of original sources'],
    verdict: 'Perplexity for research; Google for shopping and local navigation.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Best Free AI Tools for Students',
    excerpt: 'Boost your grades and productivity with these essential AI apps.',
    content: 'In 2026, students are leveraging AI not just to write essays, but to understand complex concepts, manage their time, and learn languages more effectively. For research, Perplexity AI remains the king, providing cited sources and direct answers. For writing assistance, Hemmingway and Quillbot help refine tone and clarity. Language learners are turning to DeepL for ultra-accurate translations that grasp nuance better than legacy tools. Math and science students use Wolfram Alpha’s computational intelligence for step-by-step problem solving. The key is to use these tools as tutors, not just as a way to bypass the work. AI Study assistants can summarize 50-page research papers into 5 key bullet points, allowing for faster meta-learning.',
    image: 'https://picsum.photos/seed/student/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b2',
    title: 'Top AI Tools for YouTube Creators',
    excerpt: 'From script to edit: How AI is revolutionizing video content.',
    content: 'YouTube content creation has been transformed by a new generation of generative video and audio tools. For scriptwriting, tools like ChatGPT and Claude 3.5 Sonnet provide excellent hooks and structural flow. Once the script is ready, HeyGen or ElevenLabs can handle high-quality voiceovers if you prefer not to use your own voice. For the editing phase, Descript’s text-based editing is a game-changer, allowing you to edit video as easily as a Word document. Thumbnails, the most critical part of growth, are now often sparked by Midjourney or Canva AI. Additionally, tools like VidIQ helped creators understand trending keywords and topics before they even hit Record.',
    image: 'https://picsum.photos/seed/video/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b3',
    title: 'Best ChatGPT Alternatives',
    excerpt: 'Exploring powerful LLMs that might suit your needs better.',
    content: 'While ChatGPT is the household name, several alternatives offer superior performance in specific niches. Claude 3.5 Sonnet by Anthropic is widely considered the best for logical reasoning and natural-sounding creative writing. Google Gemini provides the best integration with the Workspace ecosystem, allowing you to draft emails and analyze Docs directly. For developers, Phind or GitHub Copilot Chat are optimized specifically for code, often outperforming general-purpose models. If you prioritize privacy and local execution, Llama 3 running via Ollama is a fantastic open-source alternative. Each model has its own "personality" and strengths, so trying a few on platforms like Poe.com is highly recommended.',
    image: 'https://picsum.photos/seed/ai/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b4',
    title: 'Best AI Voice Generators',
    excerpt: 'The most realistic AI voices for narration, gaming, and business.',
    content: 'The "uncanny valley" of AI voices has finally been crossed. ElevenLabs leads the market with proprietary models that capture emotion, breath, and stuttering for ultimate realism. Play.ht and Murf.ai follow closely, offering specialized voices for e-learning and corporate presentations. For those on a budget, OpenAI’s TTS models (available via API) provide clean, high-speed synthesis at a fraction of the cost. These tools are currently being used to localize podcasts into 20+ languages instantly while maintaining the original speaker’s tone and pitch. The legal landscape is still evolving regarding "voice cloning," so users should always have the rights to the voices they replicate.',
    image: 'https://picsum.photos/seed/voice/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b5',
    title: 'Best AI Resume Builders',
    excerpt: 'Land your dream job with AI-optimized resumes and cover letters.',
    content: 'Traditional resume formats often fail modern ATS (Applicant Tracking Systems). AI Resume builders like Rezi and Teal solve this by analyzing job descriptions and suggesting keywords that will actually get you seen by a human recruiter. They don’t just "write" the resume; they score it based on objective criteria like readability, impact, and formatting. Kickresume and Canva AI provide more design-centric options for creative roles. The smart move in 2026 is to have a "base" resume and use AI to tailor a unique version for every single job application, matching the specific requirements of each role perfectly.',
    image: 'https://picsum.photos/seed/job/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b6',
    title: 'Top Free AI Tools in 2026',
    excerpt: 'Our ultimate list of tools you can use without spending a dime.',
    content: 'Despite the rise of expensive Pro plans, the "Free" tier of AI has never been more powerful. Stable Diffusion (Free via local or open-source hosts) remains the gold standard for unrestricted image generation. ChatGPT (Free tier) now includes access to GPT-4o with limited uses, which is enough for most casual users. For students, Microsoft Copilot provides free access to GPT-4 and DALL-E 3 simply by using a Microsoft account. Canva’s free AI features allow for basic photo editing and background removal that used to require a Photoshop subscription. Finally, open-source models like Mistral and Llama can be run for the cost of electricity on your own hardware, providing truly unlimited and private AI.',
    image: 'https://picsum.photos/seed/free/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b7',
    title: 'Best AI Tools for Small Business',
    excerpt: 'Scale your operations and marketing without a massive team.',
    content: 'Small businesses are the biggest winners of the AI revolution. Copy.ai and Jasper can handle a month’s worth of social media captions and blog posts in a single afternoon. For customer support, Intercom’s Fin AI or custom-built agents using Flowise can resolve 50%+ of common queries without human intervention. Financial tools like Booke.ai or Glean help automate bookkeeping and identify cost-saving opportunities. By using a "stack" of affordable AI tools, a single-person business can now output the work that previously required a team of five, leveling the playing field with much larger competitors.',
    image: 'https://picsum.photos/seed/business/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b8',
    title: 'Best AI Video Generators',
    excerpt: 'Create cinematic videos from simple text prompts with these top tools.',
    content: 'The year 2026 has brought us Sora-level quality available to the public. Luma Dream Machine and Kling AI are currently the top contenders for high-fidelity generated video with complex physics. Runway Gen-3 Alpha remains a favorite for professional filmmakers due to its granular camera controls and consistent motion. For social media creators, tools like InVideo AI can generate a complete video with stock footage, subtitles, and music in minutes. We are also seeing the rise of "Style Transfer" where you can record a video on your phone and use AI to transform it into a 3D animation or a Studio Ghibli-style masterpiece.',
    image: 'https://picsum.photos/seed/video-gen/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b9',
    title: 'Best AI Writing Tools',
    excerpt: 'Beyond basic grammar checks: AI that helps you draft better stories.',
    content: 'Modern AI writing assistants like Sudowrite and NovelCrafter are designed specifically for fiction writers, helping with world-building and character consistency. For copywriters, Jasper and Copy.ai provide thousands of proven frameworks for sales pages and ad copy. If you need academic precision, Quillbot’s paraphrasing tool and Hemingway Editor’s clarity scores are essential. The most advanced users are now using specialized models that allow them to upload their own "Brand Voice" documents, ensuring that the AI outputs content that sounds exactly like them every time.',
    image: 'https://picsum.photos/seed/writer/600/400',
    date: 'April 18, 2026'
  },
  {
    id: 'b10',
    title: 'Best AI Productivity Tools',
    excerpt: 'Automate your schedule and clear your inbox with these AI apps.',
    content: 'Productivity is no longer about doing more—it is about doing less manual work. Motion and Reclaim.ai use AI to automatically schedule your tasks and meetings into your calendar, finding the optimal slots for focused work. Otter.ai and Fireflies.ai have made manual note-taking obsolete by transcribing meetings and providing action items instantly. For email, tools like Superhuman and Shortwave use AI to summarize threads and draft replies. By delegating these repetitive cognitive tasks to AI, knowledge workers are reporting saving upwards of 10 hours per week.',
    image: 'https://picsum.photos/seed/prod/600/400',
    date: 'April 18, 2026'
  }
];

export const AGENT_TOOLS: AIAgentTool[] = [
  {
    id: 'at1',
    name: 'Google AI Studio',
    description: 'Build simple Gemini-powered AI apps and agents without coding.',
    useCase: 'Rapid prototyping and simple automation.',
    difficulty: 'Easy',
    pricing: 'Free',
    icon: 'Sparkles',
    url: 'https://aistudio.google.com'
  },
  {
    id: 'at2',
    name: 'LangChain',
    description: 'Create advanced AI agents and workflows using Python and JavaScript.',
    useCase: 'Production-grade AI app development.',
    difficulty: 'Advanced',
    pricing: 'Free',
    icon: 'Layers',
    url: 'https://langchain.com'
  },
  {
    id: 'at3',
    name: 'CrewAI',
    description: 'Build multi-agent systems where multiple AI agents work together.',
    useCase: 'Complex task automation with role-playing agents.',
    difficulty: 'Medium',
    pricing: 'Free',
    icon: 'Bot',
    url: 'https://crewai.com'
  },
  {
    id: 'at4',
    name: 'n8n',
    description: 'Create AI-powered automations and workflows visually without coding.',
    useCase: 'Connecting AI to 400+ apps visually.',
    difficulty: 'Medium',
    pricing: 'Freemium',
    icon: 'Zap',
    url: 'https://n8n.io'
  },
  {
    id: 'at5',
    name: 'Flowise',
    description: 'Drag-and-drop builder for LangChain AI apps and chatbots.',
    useCase: 'Visual LangChain workflow building.',
    difficulty: 'Easy',
    pricing: 'Free',
    icon: 'Layout',
    url: 'https://flowiseai.com'
  },
  {
    id: 'at6',
    name: 'OpenAI Playground',
    description: 'Test prompts and prototype AI assistants quickly.',
    useCase: 'Prompt engineering and assistant testing.',
    difficulty: 'Easy',
    pricing: 'Freemium',
    icon: 'Terminal',
   url: 'https://platform.openai.com/playground'
},
{
  id: '11',
  title: 'Best Free AI Tools for Students',
  excerpt: 'Discover the best free AI tools that help students study, write assignments and learn faster.',
  content: `
# Best Free AI Tools for Students

Students can use AI tools to save time, improve learning and complete assignments more efficiently.

## ChatGPT
ChatGPT helps students understand difficult concepts, summarize chapters, solve doubts and generate notes.

## Gemini
Gemini is useful for research, answering questions and creating quick summaries.

## Grammarly
Grammarly improves grammar, spelling and sentence structure.

## Notion AI
Notion AI helps organize notes, create study plans and manage tasks.

## Canva AI
Canva AI can create presentations, posters and school projects quickly.

## Which Tool Is Best?
For study help, ChatGPT is best. For writing, Grammarly is useful. For notes and planning, Notion AI is excellent.

## Conclusion
AI tools can help students study faster and more effectively when used correctly.
  `,
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55e?w=1200',
  date: 'April 18, 2026'
},
{
  id: '12',
  title: 'Best AI Tools for Coding',
  excerpt: 'These AI coding tools help developers write, debug and understand code faster.',
  content: `
# Best AI Tools for Coding

AI coding tools can save hours of work for developers.

## GitHub Copilot
GitHub Copilot suggests code while you type and helps complete functions quickly.

## ChatGPT
ChatGPT can explain code, fix bugs and generate code snippets.

## Gemini
Gemini is useful for coding explanations and project ideas.

## Replit Ghostwriter
Ghostwriter helps create code directly inside Replit.

## Cursor AI
Cursor AI is one of the most popular AI coding editors in 2026.

## Conclusion
For most developers, GitHub Copilot and ChatGPT are the best combination.
  `,
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200',
  date: 'April 18, 2026'
},
{
  id: '13',
  title: 'ChatGPT vs Gemini',
  excerpt: 'Compare ChatGPT and Gemini to see which AI assistant is better in 2026.',
  content: `
# ChatGPT vs Gemini

ChatGPT and Gemini are two of the most popular AI assistants.

## ChatGPT
ChatGPT is better for writing, coding and detailed explanations.

## Gemini
Gemini is better for research and works well with Google services.

## Which Is Faster?
Gemini is usually faster for short answers, while ChatGPT gives more detailed responses.

## Which Is Better for Students?
Students may prefer ChatGPT for explanations and Gemini for research.

## Final Verdict
If you want creativity and coding, choose ChatGPT. If you want fast research, choose Gemini.
  `,
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
  date: 'April 18, 2026'
},
{
  id: '14',
  title: 'Best AI Image Generators',
  excerpt: 'Explore the best AI image generators to create stunning images in seconds.',
  content: `
# Best AI Image Generators

AI image generators allow users to create art, thumbnails and graphics.

## Midjourney
Midjourney creates highly realistic and artistic images.

## DALL·E
DALL·E is easy to use and works well for creative images.

## Leonardo AI
Leonardo AI is popular for gaming, characters and concept art.

## Canva AI
Canva AI is great for beginners who want quick social media graphics.

## Which Is Best?
Midjourney is best for quality, while Canva AI is easiest for beginners.
  `,
  image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200',
  date: 'April 18, 2026'
},
{
  id: '15',
  title: 'Best AI Video Generators',
  excerpt: 'These AI video generators can create videos, avatars and animations quickly.',
  content: `
# Best AI Video Generators

AI video tools are becoming very popular in 2026.

## Runway
Runway is excellent for creating cinematic AI videos.

## Pika Labs
Pika Labs can generate short videos from text prompts.

## Synthesia
Synthesia creates AI avatar videos.

## HeyGen
HeyGen is useful for marketing and talking avatar videos.

## Conclusion
Runway is best for creative videos, while HeyGen and Synthesia are ideal for business videos.
  `,
  image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200',
  date: 'April 18, 2026'
},
{
  id: '16',
  title: 'Best AI Resume Builders',
  excerpt: 'Create professional resumes in minutes using AI resume builders.',
  content: `
# Best AI Resume Builders

AI resume builders help job seekers create better resumes quickly.

## Kickresume
Kickresume provides beautiful templates and AI-generated content.

## Resume.io
Resume.io is easy to use and helps create ATS-friendly resumes.

## Rezi
Rezi is designed specifically to optimize resumes for ATS systems.

## Which Tool Is Best?
Kickresume is best for design, while Rezi is better for ATS optimization.

## Conclusion
AI resume builders can save time and improve your chances of getting hired.
  `,
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
  date: 'April 18, 2026'
},
{
  id: '17',
  title: 'Best AI Voice Generators',
  excerpt: 'The best AI voice generators for videos, narration and business.',
  content: `
# Best AI Voice Generators

AI voice generators can create realistic voices in seconds.

## ElevenLabs
ElevenLabs creates some of the most realistic AI voices.

## Murf AI
Murf AI is useful for business presentations and narration.

## Play.ht
Play.ht supports many languages and accents.

## Conclusion
ElevenLabs is the best overall, while Murf AI is great for professionals.
  `,
  image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200',
  date: 'April 18, 2026'
}
];

export const AGENT_IDEA_TEMPLATES: AgentIdea[] = [
  {
    title: '',
    purpose: 'Helps students learn faster.',
    tools: 'Google AI Studio + LangChain',
    features: ['Answer questions', 'Create quizzes', 'Explain topics']
  },
  {
    title: '',
    purpose: 'Automates social media content creation.',
    tools: 'n8n + OpenAI',
    features: ['Generate captions', 'Schedule posts', 'Analyze trends']
  },
  {
    purpose: 'Manages incoming customer support emails.',
    tools: 'Flowise + n8n',
    title: '',
    features: ['Categorize issues', 'Draft responses', 'Escalate complex cases']
  },
  {
    purpose: 'Personalized fitness and nutrition coach.',
    tools: 'CrewAI + GPT-4',
    title: '',
    features: ['Custom workout plans', 'Meal tracking', 'Progress analysis']
  },
  {
    purpose: 'Coding assistant for legacy codebases.',
    tools: 'LangChain + GitHub API',
    title: '',
    features: ['Explain repo structure', 'Suggest refactors', 'Generate documentation']
  }
];
