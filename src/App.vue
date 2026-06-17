<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { experiences, projects, skills } from './data/content';

  type FilterOption = 'All' | 'SaaS' | 'Enterprise';

  const activeFilter = ref<FilterOption>('All');

  const featuredProjects = computed(() => projects.filter((p) => p.featured));
  const openSourceProjects = computed(() => projects.filter((p) => !p.featured));

  const filteredProjects = computed(() => {
    if (activeFilter.value === 'All') return featuredProjects.value;
    return featuredProjects.value.filter((p) => p.category === activeFilter.value);
  });

  const skillCategories: Record<string, string> = {
    backend: 'Backend',
    frontend: 'Frontend',
    mobile: 'Mobile',
    tools: 'Tools & Ecosystem',
  };

  const filters: FilterOption[] = ['All', 'SaaS', 'Enterprise'];
</script>

<template>
  <div
    class="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-blue-900/50">

    <!-- ─── Navigation ─── -->
    <nav
      class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100 dark:bg-slate-950/90 dark:border-slate-800">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" class="flex font-black text-xl tracking-tighter">
          Code
          <span class="text-primary px-2">
            With
          </span>
          Kingsley
        </a>

        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
          <a href="#about" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About</a>
          <a href="#experience" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Experience</a>
          <a href="#projects" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projects</a>
          <a href="#contact" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </nav>

    <!-- ─── Hero ─────────────────────────────────────────────── -->
    <section class=" max-w-5xl mx-auto px-6 pt-20 pb-28">
      <div class="flex flex-col gap-7">
        <!-- Live status -->
        <div class="flex items-center gap-3">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </span>
          <span class="text-sm font-medium text-slate-500 dark:text-slate-400">Open to new opportunities</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <!-- Name -->
            <h1 class="text-3xl md:text-5xl font-black tracking-wide text-slate-900 leading-[1.05] dark:text-slate-100">
              Kingsley<br />
              <span class="text-primary">Osei Opoku</span>
            </h1>
            <p class="text-sm font-mono text-slate-400 mt-2 dark:text-slate-500">@codewithkingsley</p>
          </div>
          <div class="flex items-center justify-center sm:justify-start">
            <img src="/image/kingsley.png" alt="portrait of Kingsley Osei Opoku"
              class="aspect-square object-cover size-40 sm:size-35 rounded-full" />
          </div>
        </div>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl font-light text-slate-500 max-w-2xl leading-relaxed dark:text-slate-300">
          Full-stack software Engineer & SaaS Architect building high-traffic systems and enterprise
          solutions.
        </p>

        <!-- Skill pills -->
        <div class="flex flex-wrap gap-2.5 mt-1">
          <span
            class="px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            PHP · Laravel
          </span>
          <span
            class="px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            Vue 3 · Inertia.js
          </span>
          <span
            class="px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-yellow-50 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
            JavaScript · TypeScript
          </span>
          <span
            class="px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            React · React Native
          </span>
          <span
            class="px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
            SaaS · Enterprise
          </span>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 mt-2">
          <a href="#contact"
            class="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
            Get In Touch
          </a>
          <a href="https://github.com/quajo-king" target="_blank" rel="noopener noreferrer"
            class="px-6 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:border-slate-600 transition-all text-sm flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd" />
            </svg>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>

    <!-- ─── About + Skills ───────────────────────────────────── -->
    <section id="about" class="bg-slate-50 dark:bg-slate-900/40">
      <div class="max-w-5xl mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-16 items-start">

          <!-- About text -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
              About</h2>
            <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              Full-stack developer with a strong backend focus, specializing in
              <span class="font-semibold text-slate-800 dark:text-slate-100">Laravel</span>,
              <span class="font-semibold text-slate-800 dark:text-slate-100">PHP</span>, and modern JavaScript
              frameworks. Currently working full-time at
              <span class="font-semibold text-slate-800 dark:text-slate-100">SuperWeb Technologies</span>,
              maintaining
              GhanaWeb — one of Ghana's highest-traffic web platforms.
            </p>
            <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              Simultaneously leading enterprise software development at
              <span class="font-semibold text-slate-800 dark:text-slate-100">Beesofthive Limited</span> and
              building a
              suite of SaaS products through my own startup firm,
              <span class="font-semibold text-slate-800 dark:text-slate-100">
                <a href="https://softviewghana.com" target="_blank" rel="noopener noreferrer"
                  class="text-primary hover:underline">
                  Softview Ghana.
                </a>
              </span>
            </p>
            <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Passionate about solving real-world African market problems with well-architected,
              scalable software.
            </p>
          </div>

          <!-- Skills -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
              Skills</h2>
            <div class="space-y-6">
              <div v-for="(category, key) in skillCategories" :key="key">
                <h3 class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  {{ category }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in skills[key as keyof typeof skills]" :key="skill"
                    class="px-3 py-1.5 text-sm font-medium bg-white border border-slate-200 text-slate-700 rounded-lg dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── Experience ───────────────────────────────────────── -->
    <section id="experience" class="max-w-5xl mx-auto px-6 py-20">
      <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-14">
        Professional
        Experience</h2>

      <div class="space-y-14">
        <div v-for="exp in experiences" :key="exp.company" class="grid md:grid-cols-[220px_1fr] gap-8">
          <!-- Date / type column -->
          <div class="md:text-right pt-0.5">
            <p class="text-sm font-mono text-slate-400 dark:text-slate-500">{{ exp.period }}</p>
            <span class="inline-block mt-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full"
              :class="{
                'bg-blue-50 text-blue-700': exp.type === 'Full-time',
                'bg-violet-50 text-violet-700': exp.type === 'Part-time',
                'bg-amber-50 text-amber-700': exp.type === 'Founder',
              }">{{ exp.type }}</span>
          </div>

          <!-- Content column -->
          <div class="relative border-l-2 border-slate-100 dark:border-slate-800 pl-8">
            <!-- Connector dot -->
            <div
              class="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full border-2 border-primary/70 bg-white dark:bg-slate-950">
            </div>

            <div class="flex flex-wrap items-start justify-between gap-3 mb-1">
              <div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">{{ exp.company }}</h3>
                <p class="text-primary font-semibold text-sm mt-0.5">{{ exp.role }}</p>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{{ exp.location }}</p>
              </div>
              <span v-if="exp.isCurrent"
                class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold shrink-0">
                <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                Current
              </span>
            </div>

            <ul class="mt-4 space-y-2.5">
              <li v-for="point in exp.description" :key="point"
                class="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-3 leading-relaxed">
                <span class="mt-2 h-1 w-1 rounded-full bg-blue-400 shrink-0"></span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Featured Projects ────────────────────────────────── -->
    <section id="projects" class="bg-slate-50 dark:bg-slate-900/40">
      <div class="max-w-5xl mx-auto px-6 py-20">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Featured
            Projects
          </h2>
          <div class="flex gap-2 flex-wrap">
            <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
              class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors" :class="activeFilter === filter
                ? 'bg-primary text-white'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-100'
                ">{{ filter }}</button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="project in filteredProjects" :key="project.title"
            class="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/60 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:shadow-none transition-all duration-300">
            <div class="flex items-center justify-between mb-6">
              <span
                class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{{ project.category }}</span>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                :class="project.type === 'Private' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700'">{{ project.type }}</span>
            </div>

            <h3
              class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-4">{{ project.tagline }}</p>
            <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{{ project.description }}
            </p>

            <div class="flex flex-wrap gap-3 mb-6">
              <span v-for="h in project.highlights" :key="h"
                class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span class="h-1 w-1 rounded-full bg-blue-400"></span>{{ h }}
              </span>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-5 border-t border-slate-100 dark:border-slate-800">
              <span v-for="tech in project.stack" :key="tech"
                class="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded uppercase tracking-tighter dark:bg-slate-800 dark:text-slate-300">{{ tech }}</span>
            </div>

            <div v-if="project.liveUrl" class="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary font-semibold text-sm rounded-lg hover:bg-blue-100 dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-slate-700 transition-colors group">
                Visit Site
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Open Source Repos ────────────────────────────────── -->
    <section class="max-w-5xl mx-auto px-6 py-20">
      <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-1.5">
            Open Source
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm">Public repositories on GitHub</p>
        </div>
        <a href="https://github.com/quajo-king" target="_blank" rel="noopener noreferrer"
          class="text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors">
          View all on GitHub
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <a v-for="project in openSourceProjects" :key="project.title" :href="project.githubUrl" target="_blank"
          rel="noopener noreferrer"
          class="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-900/70 transition-all duration-200 flex flex-col gap-3">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">{{ project.tagline }}</p>
            </div>
            <svg
              class="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 shrink-0 mt-0.5 transition-colors"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="tech in project.stack" :key="tech"
              class="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-tighter dark:bg-slate-800 dark:text-slate-300">{{ tech }}</span>
          </div>
        </a>
      </div>
    </section>

    <!-- ─── Contact / Footer ─────────────────────────────────── -->
    <footer id="contact" class="bg-slate-900 text-white">
      <div class="max-w-5xl mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-16 items-center">

          <!-- Contact text -->
          <div>
            <h2 class="text-4xl font-black tracking-tight mb-4 leading-tight">
              Let's build something<br />
              <span class="text-primary/95">great together.</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed mb-8">
              Available for full-time roles, freelance projects, and consulting.
              Based in Accra, Ghana — open to remote work worldwide.
            </p>
            <a href="mailto:oseikin7@gmail.com"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              oseikin7@gmail.com
            </a>
            <div class="mt-4 flex flex-wrap gap-3">
              <a href="tel:+233549289243" title="Call"
                class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 transition-colors text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.37l1.03 3.09a2 2 0 01-.46 2.05l-1.25 1.25a16 16 0 006.25 6.25l1.25-1.25a2 2 0 012.05-.46l3.09 1.03A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                </svg>
                0549 289 243
              </a>
              <a href="https://wa.me/233549289243" target="_blank" rel="noopener noreferrer" title="WhatsApp"
                class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors text-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19.11 4.89A9.82 9.82 0 0012.12 2c-5.4 0-9.8 4.4-9.8 9.8 0 1.73.45 3.43 1.31 4.93L2 22l5.42-1.39a9.75 9.75 0 004.69 1.2h.01c5.4 0 9.8-4.4 9.8-9.8 0-2.62-1.02-5.08-2.81-6.92zM12.12 20a8.14 8.14 0 01-4.15-1.14l-.3-.18-3.22.82.86-3.14-.2-.32a8.12 8.12 0 01-1.24-4.24c0-4.49 3.66-8.15 8.16-8.15a8.1 8.1 0 015.76 2.38 8.08 8.08 0 012.38 5.77c0 4.5-3.66 8.16-8.15 8.16zm4.47-6.07c-.24-.12-1.41-.7-1.63-.78-.22-.08-.37-.12-.53.12-.16.24-.61.78-.75.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.36.52.57.18 1.08.15 1.49.09.45-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Social links -->
          <div class="space-y-3">
            <a href="https://github.com/quajo-king" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors shrink-0" fill="currentColor"
                viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd" />
              </svg>
              <div>
                <p class="font-semibold text-white text-sm">GitHub</p>
                <p class="text-slate-400 text-xs">quajo-king · 56 public repos</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/kingsley-osei-opoku-972b5a220" target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors shrink-0" fill="currentColor"
                viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <p class="font-semibold text-white text-sm">LinkedIn</p>
                <p class="text-slate-400 text-xs">Kingsley Osei Opoku</p>
              </div>
            </a>

            <a href="https://youtube.com/@codewithkingsley" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all group">

              <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors shrink-0" fill="currentColor"
                viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.504 3.5 12 3.5 12 3.5s-7.504 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12C0 8.08 0 12 0 12s0 3.92.502 5.814a2.997 2.997 0 0 0 2.11 2.12C4.496 20.5 12 20.5 12 20.5s7.504 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12C24 15.92 24 12 24 12s0-3.92-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
              </svg>

              <div>
                <p class="font-semibold text-white text-sm">YouTube</p>
                <p class="text-slate-400 text-xs">@codewithkingsley</p>
              </div>
            </a>

            <a href="https://softviewghana.com" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-4 p-4 rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-white transition-colors shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div>
                <p class="font-semibold text-white text-sm">Softview Ghana</p>
                <p class="text-slate-400 text-xs">softviewghana.com</p>
              </div>
            </a>

          </div>
        </div>

        <div
          class="mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p class="text-center">
            &copy; {{ new Date().getFullYear() }} Kingsley Osei Opoku. Built with Vue.js &plus; TS &amp; Tailwind CSS.
          </p>
          <p class="font-mono text-xs">Accra, Ghana</p>
        </div>
      </div>
    </footer>

  </div>
</template>