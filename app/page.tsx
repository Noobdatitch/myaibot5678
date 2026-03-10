'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  owner: { login: string };
};

const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];

const skills = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 92 },
  { name: 'JavaScript', value: 90 },
  { name: 'Responsive Web Design', value: 93 },
  { name: 'GitHub', value: 88 },
  { name: 'API Integration', value: 86 },
  { name: 'Frontend UI Design', value: 91 },
];

const services = [
  'Website Development',
  'Landing Page Development',
  'Frontend UI Design',
  'Small Web Applications',
];

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/Noobdatitch/repos?sort=updated&per_page=6');
      const data: Repo[] = await response.json();
      setRepos(Array.isArray(data) ? data : []);
    };

    fetchRepos().catch(() => setRepos([]));
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-hero-grid">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-10 top-20 h-36 w-36 animate-float rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-56 w-56 animate-float rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <nav className="glass fixed left-1/2 top-4 z-50 w-[92%] max-w-4xl -translate-x-1/2 rounded-full px-6 py-3 shadow-glow">
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200">
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="transition hover:text-cyan-300">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="mx-auto flex min-h-screen w-[92%] max-w-6xl flex-col justify-center pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Sora'] text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Danish <span className="gradient-text">Sharma</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-4 text-xl font-medium text-cyan-200"
        >
          Full-Stack Web Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-5 max-w-2xl text-slate-300"
        >
          “I build modern web interfaces and small web applications using HTML, CSS, JavaScript, and modern frontend tools.”
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-glow transition hover:scale-105">
            View My Work
          </a>
          <a
            href="https://github.com/Noobdatitch"
            target="_blank"
            className="glass rounded-full px-6 py-3 font-semibold transition hover:scale-105 hover:border-cyan-300/40"
          >
            Visit GitHub
          </a>
        </div>
      </section>

      <Section id="about" title="About">
        Danish Sharma is a developer who enjoys building interactive web interfaces, experimenting with APIs, and creating useful web tools. Focused on performance and visual polish, he blends logic and design to deliver premium web experiences.
      </Section>

      <section id="skills" className="mx-auto w-[92%] max-w-6xl py-20">
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="mt-10 grid gap-5">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="glass rounded-2xl p-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-[92%] max-w-6xl py-20">
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo, idx) => (
            <motion.article
              key={repo.id}
              className="glass rounded-3xl p-5 transition hover:-translate-y-2 hover:shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <img
                src={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                alt={`${repo.name} preview`}
                className="mb-4 h-40 w-full rounded-2xl object-cover"
              />
              <h3 className="text-lg font-semibold">{repo.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-300">
                {repo.description || 'A project from Danish Sharma’s GitHub profile.'}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-cyan-300">
                <span>{repo.language || 'Mixed'}</span>
                <a href={repo.html_url} target="_blank" className="inline-flex items-center gap-1 hover:text-cyan-200">
                  Source <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-[92%] max-w-6xl py-20">
        <h2 className="section-heading">
          Freelance <span className="gradient-text">Services</span>
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <motion.div key={service} whileHover={{ y: -6 }} className="glass flex items-center gap-3 rounded-2xl p-5">
              <Sparkles className="text-cyan-300" size={20} />
              <span>{service}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-[92%] max-w-6xl py-20">
        <h2 className="section-heading">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <p className="text-lg font-semibold">Danish Sharma</p>
            <a href="https://github.com/Noobdatitch" className="mt-2 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              <Github size={18} /> https://github.com/Noobdatitch
            </a>
            <p className="mt-3 text-sm text-slate-300">Full-Stack Web Developer creating modern, user-focused digital experiences.</p>
          </div>
          <form className="glass space-y-4 rounded-3xl p-6">
            <input placeholder="Your Name" className="w-full rounded-xl border border-white/15 bg-slate-900/60 p-3 outline-none focus:border-cyan-300" />
            <input placeholder="Your Email" type="email" className="w-full rounded-xl border border-white/15 bg-slate-900/60 p-3 outline-none focus:border-cyan-300" />
            <textarea placeholder="Message" rows={4} className="w-full rounded-xl border border-white/15 bg-slate-900/60 p-3 outline-none focus:border-cyan-300" />
            <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold text-slate-900 shadow-glow transition hover:brightness-110">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-center gap-4">
          <Code2 size={16} />
          <Mail size={16} />
          <a href="https://github.com/Noobdatitch" target="_blank" className="inline-flex items-center gap-1 text-cyan-300">
            <Github size={16} /> GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-[92%] max-w-6xl py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">
        {title} <span className="gradient-text">Me</span>
      </h2>
      <p className="glass mt-8 rounded-3xl p-6 text-slate-300">{children}</p>
    </motion.section>
  );
}
