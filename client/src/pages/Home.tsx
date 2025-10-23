import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Target, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a1628]/95 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/Logo_SXH_white_80px_72ppi.png" alt="ScalingX Hypergrowth" className="h-10" />
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#impact" className="hover:text-[#FFC107] transition">Impact System</a>
            <a href="#proof" className="hover:text-[#FFC107] transition">Proof</a>
            <a href="#team" className="hover:text-[#FFC107] transition">Team</a>
            <a href="#pathways" className="hover:text-[#FFC107] transition">Pathways</a>
          </div>
          <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0a1628] font-semibold">
            Inflection Call – Free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Emotional Story */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#FFC107]/20 rounded-full text-[#FFC107] text-sm font-semibold border border-[#FFC107]/30">
              🚀 For Growth-Stage Founders & PE/VC Leaders
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              From Growth Plateau to{" "}
              <span className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] bg-clip-text text-transparent">
                Scale Breakthrough
              </span>{" "}
              in 30–120 Days
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Ihr Startup hat €10M ARR erreicht. Jetzt fühlt sich Skalierung an wie Bergauffahren. 
              Während andere mit manuellen Prozessen kämpfen, gewinnen{" "}
              <span className="text-[#FFC107] font-semibold">AI-native Leaders</span> unfaire Vorteile.
            </p>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Strategy + Playbooks + AI Agents</div>
                    <div className="text-slate-400">Komplettes 30–120 Tage Impact System</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Messbare Ergebnisse, keine Folien-Beratung</div>
                    <div className="text-slate-400">ROI-garantierte Transformation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Expertise × Speed = Impact</div>
                    <div className="text-slate-400">Strategy that ships. Playbooks that work. Agents that deliver.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0a1628] px-8 py-6 text-lg font-bold shadow-lg shadow-[#FFC107]/30">
                Inflection Call – Free <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-slate-600 hover:border-[#FFC107] px-8 py-6 text-lg font-semibold bg-transparent">
                Expert Session – €490
              </Button>
            </div>

            <div className="text-sm text-slate-400">
              ⚡ EU-hosted • GDPR/EU AI Act • No training on customer data
            </div>
          </div>

          {/* Right: Live Dashboard */}
          <div className="space-y-6">
            <Card className="bg-slate-800/70 backdrop-blur-xl border-slate-700 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-sm text-slate-400 mb-4">LIVE CLIENT IMPACT</div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-4xl font-bold text-green-400">+414%</div>
                    <div className="text-slate-400 text-sm mt-1">ARR Growth</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#FFC107]">€13.72M</div>
                    <div className="text-slate-400 text-sm mt-1">Y2 Revenue</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400">€56k</div>
                    <div className="text-slate-400 text-sm mt-1">Sales Velocity/Tag</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400">90 Tage</div>
                    <div className="text-slate-400 text-sm mt-1">Bis €465k ARR</div>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">Managing Partner bei [VC] gerade beigetreten</span>
                    </div>
                    <span className="text-slate-500">2m</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">CEO von €15M ARR SaaS lud Report herunter</span>
                    </div>
                    <span className="text-slate-500">5m</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">Operating Partner buchte Deep Dive</span>
                    </div>
                    <span className="text-slate-500">8m</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Preview */}
            <Card className="bg-slate-800/70 backdrop-blur-xl border-slate-700">
              <CardContent className="p-6">
                <div className="text-sm text-slate-400 mb-4">EXPERT TEAM</div>
                <div className="flex -space-x-4">
                  <img src="/SXH_Team_M.png" alt="Michel" className="w-16 h-16 rounded-full border-2 border-slate-700" />
                  <img src="/SXH_Team_007.png" alt="Alban" className="w-16 h-16 rounded-full border-2 border-slate-700" />
                  <img src="/SXH_Team_Flo.png" alt="Florian" className="w-16 h-16 rounded-full border-2 border-slate-700" />
                </div>
                <div className="mt-4 text-sm text-slate-300">
                  10+ Jahre Top-Management-Beratung & SaaS-Exec-Erfahrung
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="bg-slate-800/50 border-y border-slate-700 py-4 overflow-hidden">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap">
          <span className="text-slate-400">🏆 Trusted by Series A-C Startups</span>
          <span className="text-slate-400">💼 Portfolio companies of leading VC/PE</span>
          <span className="text-slate-400">📈 €1.3M → €13.72M in 24 Monaten</span>
          <span className="text-slate-400">⚡ 30-120 Tage bis zum ersten Impact</span>
          <span className="text-slate-400">🎯 Clean-Code Growth statt Quick-Fixes</span>
        </div>
      </section>

      {/* Impact System */}
      <section id="impact" className="py-24 px-6 bg-[#0a1628]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Der{" "}
              <span className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] bg-clip-text text-transparent">
                AI-Native Vorteil
              </span>
            </h2>
            <p className="text-xl text-slate-400">Von manuellen Operationen zu intelligenten Systemen</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/50 hover:border-green-500 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Revenue Acceleration</h3>
                <p className="text-slate-300 mb-4">
                  Wiederholbare Umsatzsysteme, präzises Pricing, sauberes RevOps, beschleunigte Sales Velocity.
                </p>
                <div className="text-green-400 font-bold">Smarter Selling in the Age of AI</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/50 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Market Leadership</h3>
                <p className="text-slate-300 mb-4">
                  Unwiderstehliche Angebote, effektives GTM, hocheffektive Funnels, erfolgreicher Markteintritt.
                </p>
                <div className="text-blue-400 font-bold">Smarter GTM in the Age of AI</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Höhere Geschwindigkeit</h3>
                <p className="text-slate-300 mb-4">
                  Effiziente & agile Organisationen, tragende Operating Systems, schnelle Innovationszyklen.
                </p>
                <div className="text-purple-400 font-bold">Smarter Operations in the Age of AI</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-yellow-700/50 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Kapitaleffizienz</h3>
                <p className="text-slate-300 mb-4">
                  Impact-orientierte Führung, skalierende Entscheidungslogiken, wirkungsvolle KPI-Systeme.
                </p>
                <div className="text-yellow-400 font-bold">Smarter Leadership in the Age of AI</div>
              </CardContent>
            </Card>
          </div>

          {/* Impact System Explanation */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="text-[#FFC107] text-6xl font-black mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">Strategie</h3>
                <p className="text-slate-300">
                  Klarheit über entscheidende Hebel, Ziele, KPIs. Keine Folien-Beratung – saubere, skalierbare Systemik.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="text-[#FFC107] text-6xl font-black mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">Playbooks</h3>
                <p className="text-slate-300">
                  Systematische, befähigende Umsetzung der Strategie. Handover-ready: Tools, die Ihr Team nachhaltig betreibt.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="text-[#FFC107] text-6xl font-black mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">AI-Systems & Agents</h3>
                <p className="text-slate-300">
                  Automationen und Entscheidungslogik, die Prozesse skalierbar und kapitaleffizient machen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-24 px-6 bg-gradient-to-br from-[#0a1628] to-[#1a2942]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Impact-Belege</h2>
            <p className="text-xl text-slate-400">Messbare Ergebnisse aus echten Projekten</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/70 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-green-400 font-semibold mb-1">B2B SaaS · Series B · Segment-Neubau</div>
                    <h3 className="text-2xl font-bold">€1.3M → €13.72M in 24 Monaten</h3>
                  </div>
                  <div className="text-4xl">🚀</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Year 1 Revenue</span>
                    <span className="text-green-400 font-bold">€6.69M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Year 2 Revenue</span>
                    <span className="text-green-400 font-bold">€13.72M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">EBITDA Swing</span>
                    <span className="text-green-400 font-bold">-€300k → +€150k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ACV Increase</span>
                    <span className="text-green-400 font-bold">+25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Sales Velocity</span>
                    <span className="text-green-400 font-bold">~€56k/Tag</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#FFC107] pl-4 italic text-slate-300">
                  "Strategy that ships. Playbooks that work. Systems that scale."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-blue-400 font-semibold mb-1">Enterprise SaaS · Channel-Build</div>
                    <h3 className="text-2xl font-bold">+45.6% Revenue in 12 Monaten</h3>
                  </div>
                  <div className="text-4xl">📈</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">SQL Increase</span>
                    <span className="text-blue-400 font-bold">+58%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">New Logos</span>
                    <span className="text-blue-400 font-bold">+40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Revenue Growth</span>
                    <span className="text-blue-400 font-bold">+45.6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Contact Load</span>
                    <span className="text-blue-400 font-bold">↓ signifikant</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#FFC107] pl-4 italic text-slate-300">
                  "Tempo & Klarheit: Diagnose → Priorisierung → Umsetzung in 30–120 Tagen."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-purple-400 font-semibold mb-1">Growth-Stage SaaS · Quick Impact Sprint</div>
                    <h3 className="text-2xl font-bold">+€465k ARR in 90 Tagen</h3>
                  </div>
                  <div className="text-4xl">⚡</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Timeframe</span>
                    <span className="text-purple-400 font-bold">90 Tage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ARR Added</span>
                    <span className="text-purple-400 font-bold">€465k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Approach</span>
                    <span className="text-purple-400 font-bold">Power Up Sprint</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#FFC107] pl-4 italic text-slate-300">
                  "Clean-Code Growth: wiederholbare Systeme statt Quick-Fixes."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#FFC107]/10 to-[#FFD54F]/5 border-[#FFC107]/50 border-2">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-4">Thought Leadership</h3>
                  <p className="text-slate-300 mb-6">
                    Buch "Fix Growth. Scale Faster." auf Amazon verfügbar. 
                    Whitepaper-Reihe: Executive Briefings, Diagnostic Field Guides, Playbooks, Case Studies.
                  </p>
                  <div className="space-y-2 text-sm text-slate-400">
                    <div>✓ ScalingX GPT & AICE.ME Collective</div>
                    <div>✓ AI-native Wachstumsarchitekturen für B2B-SaaS</div>
                    <div>✓ Forschung zu Multi-Agentic Systems</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-[#0a1628]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Strategy that ships.{" "}
              <span className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] bg-clip-text text-transparent">
                Playbooks that work.
              </span>{" "}
              Systems that scale.
            </h2>
            <p className="text-xl text-slate-400">
              Entscheidungskraft, Baukompetenz und AI/LCNC-Systemik – gebündelt für messbaren Fortschritt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8 text-center">
                <img src="/SXH_Team_M.png" alt="Michel Lason" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#FFC107]" />
                <h3 className="text-2xl font-bold mb-2">Michel Lason</h3>
                <div className="text-[#FFC107] font-semibold mb-4">Strategy. Scaling. Impact.</div>
                <p className="text-slate-300 text-sm mb-4">
                  Autor von "Fix Growth. Scale Faster." Gründer von ScalingX Hypergrowth und LASR.io.
                </p>
                <div className="text-xs text-slate-400 space-y-1">
                  <div>Revenue Architecture</div>
                  <div>GTM/RevOps OS</div>
                  <div>AI/LCNC (customGPTs, Agents, Multi-Agentic Systems)</div>
                  <div className="font-semibold text-[#FFC107] mt-2">Expertise × Speed = Impact</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8 text-center">
                <img src="/SXH_Team_007.png" alt="Alban Halili" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#FFC107]" />
                <h3 className="text-2xl font-bold mb-2">Alban Halili</h3>
                <div className="text-[#FFC107] font-semibold mb-4">Growth. AI Solutions. Automation.</div>
                <p className="text-slate-300 text-sm mb-4">
                  10+ Jahre B2B-Sales (Telco, RPA/AI, Performance). Enterprise-Account-Führung.
                </p>
                <div className="text-xs text-slate-400 space-y-1">
                  <div>Datengetriebene Wachstumsstrategien</div>
                  <div>Team-Scaling</div>
                  <div>"Smarter Scaling in the Age of AI" Expert Sessions</div>
                  <div className="font-semibold text-[#FFC107] mt-2">Stringente Diagnose, klare Priorisierung</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8 text-center">
                <img src="/SXH_Team_Flo.png" alt="Florian Metzger" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#FFC107]" />
                <h3 className="text-2xl font-bold mb-2">Florian Metzger</h3>
                <div className="text-[#FFC107] font-semibold mb-4">RevOps. GTM. Venture Architect.</div>
                <p className="text-slate-300 text-sm mb-4">
                  Venture-Building, GTM- und RevOps-Architekturen für B2B-SaaS.
                </p>
                <div className="text-xs text-slate-400 space-y-1">
                  <div>HubSpot, Make/Zapier</div>
                  <div>Prozess-Automation & Enablement</div>
                  <div>Blueprint → Implementierung → Enablement</div>
                  <div className="font-semibold text-[#FFC107] mt-2">CRM/RevOps & GTM betriebsfähig ausrollen</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Was Startup-Teams schätzen</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Tempo & Klarheit</div>
                      <div className="text-slate-400 text-sm">Diagnose → Priorisierung → Umsetzung in 30–120 Tagen</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Clean-Code Growth</div>
                      <div className="text-slate-400 text-sm">Wiederholbare Systeme statt Quick-Fixes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Handover-ready</div>
                      <div className="text-slate-400 text-sm">Playbooks, Runbooks und Tools, die das eigene Team nachhaltig betreibt</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Was VC- & PE-Teams begeistert</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">KPI-geführte Exekution</div>
                      <div className="text-slate-400 text-sm">Jede Maßnahme zahlt sichtbar auf Revenue, Efficiency oder Value Growth ein</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Board-taugliche Transparenz</div>
                      <div className="text-slate-400 text-sm">Klare Entscheidungslogik, Cadence, Reportability</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Portfolio-Leverage</div>
                      <div className="text-slate-400 text-sm">Wiederverwendbare Playbooks und Enablement über mehrere PortCos</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section id="pathways" className="py-24 px-6 bg-gradient-to-br from-[#0a1628] to-[#1a2942]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Wählen Sie Ihren{" "}
              <span className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] bg-clip-text text-transparent">
                Growth Path
              </span>
            </h2>
            <p className="text-xl text-slate-400">Mehrere Einstiegspunkte, ein Ziel: Scale Breakthrough</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {/* Free Entry */}
            <Card className="bg-slate-800/70 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-blue-400 text-sm font-bold mb-4">EXPLORE</div>
                <h3 className="text-2xl font-bold mb-4">Inflection Call</h3>
                <div className="text-4xl font-black text-[#FFC107] mb-6">FREE</div>
                
                <div className="space-y-2 mb-8 text-sm">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">45-Minuten Diagnose</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Opportunity Assessment</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Next Steps</span>
                  </div>
                </div>

                <Button className="w-full bg-slate-700 hover:bg-slate-600">
                  Jetzt buchen <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Expert Sessions */}
            <Card className="bg-slate-800/70 border-slate-700 hover:border-[#FFC107] transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-green-400 text-sm font-bold mb-4">QUICK START</div>
                <h3 className="text-2xl font-bold mb-4">Expert Session</h3>
                <div className="mb-6">
                  <div className="text-4xl font-black text-white">€490</div>
                  <div className="text-sm text-slate-400">Expert Deep Dive: €890</div>
                </div>
                
                <div className="space-y-2 mb-8 text-sm">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">2-Stunden Deep Dive</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Konkrete Handlungsempfehlungen</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">ROI-Projektion</span>
                  </div>
                </div>

                <Button className="w-full bg-[#FFC107] hover:bg-[#FFD54F] text-[#0a1628] font-bold">
                  Session buchen <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Power Ups */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-[#FFC107] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFC107] px-4 py-1 rounded-full text-xs font-bold text-[#0a1628]">
                BELIEBT
              </div>
              <CardContent className="p-8">
                <div className="text-purple-400 text-sm font-bold mb-4">POWER UP</div>
                <h3 className="text-2xl font-bold mb-4">Impact Sprint</h3>
                <div className="mb-6">
                  <div className="text-4xl font-black text-white">€13.490</div>
                  <div className="text-sm text-slate-400">Explorer | Master: €17.490 | Genius: €23.600</div>
                </div>
                
                <div className="space-y-2 mb-8 text-sm">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-semibold">Komplette Strategie</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-semibold">Custom Playbooks</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-semibold">AI Agent Deployment</span>
                  </div>
                </div>

                <Button className="w-full bg-[#FFC107] hover:bg-[#FFD54F] text-[#0a1628] font-bold shadow-lg shadow-[#FFC107]/30">
                  Sprint starten <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Boost */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500">
              <CardContent className="p-8">
                <div className="text-pink-400 text-sm font-bold mb-4">BOOST</div>
                <h3 className="text-2xl font-bold mb-4">Retainer & Advisory</h3>
                <div className="mb-6">
                  <div className="text-4xl font-black text-white">€9.780/M</div>
                  <div className="text-sm text-slate-400">Navigator | Wingman: €15.300 | Captain: €22.880</div>
                </div>
                
                <div className="space-y-2 mb-8 text-sm">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-semibold">On-Demand Leadership</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-semibold">Continuous Optimization</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-semibold">Scaling Advisory</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold">
                  Anfrage senden <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee */}
          <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-2 border-green-600/50">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Unser Impact-Versprechen</h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Wenn Sie innerhalb von 120 Tagen keine messbaren Ergebnisse sehen, die mindestens dem 3-fachen Ihrer Investition entsprechen, 
                arbeiten wir weiter – ohne zusätzliche Kosten – bis Sie diese Ergebnisse erreichen.
              </p>
              <div className="mt-6 text-sm text-slate-400">
                Execution first, Clean-Code Growth: keine Folien-Beratung; saubere, skalierbare Systemik.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/5 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Bereit für{" "}
            <span className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] bg-clip-text text-transparent">
              Scale Breakthrough
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Starten Sie mit einem kostenlosen Inflection Call oder buchen Sie direkt eine Expert Session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#0a1628] px-8 py-6 text-lg font-bold shadow-lg shadow-[#FFC107]/30">
              Inflection Call – Free <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="border-2 border-[#FFC107] hover:bg-[#FFC107] hover:text-[#0a1628] px-8 py-6 text-lg font-semibold bg-transparent">
              Expert Session – €490
            </Button>
          </div>
          <div className="mt-8 text-sm text-slate-400">
            EU-hosted • GDPR/EU AI Act • No training on customer data
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/Logo_SXH_white_80px_72ppi.png" alt="ScalingX Hypergrowth" className="h-10 mb-4" />
              <p className="text-slate-400 text-sm">
                Smarter Scaling in the Age of AI
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Expert Sessions</div>
                <div>Power Ups</div>
                <div>Boost Retainer</div>
                <div>Advisory</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Fix Growth. Scale Faster (Buch)</div>
                <div>Whitepapers</div>
                <div>Case Studies</div>
                <div>ScalingX GPT</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Inflection Call buchen</div>
                <div>Expert Session anfragen</div>
                <div>LASR.io Platform</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 ScalingX Hypergrowth. Expertise × Speed = Impact.</p>
            <p className="mt-2">EU-hosted • GDPR/EU AI Act compliant • No training on customer data</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

