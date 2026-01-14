import { Brain, CircleCheckBig, ChevronDown, Shield, Zap, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    "Mais de 10.000 moçambicanos já estão faturando todos os dias usando o Robô Cyber Hacker",
    "Sistema de Inteligência Artificial que analisa o Aviator em tempo real",
    "100% de acerto - o robô mostra exatamente onde o Aviator vai cair",
    "Suporte 24/24 para todos os usuários"
  ];

  const faqs = [
    {
      question: "Como funciona o robô?",
      answer: "O robô utiliza algoritmos avançados de IA para analisar padrões do Aviator em tempo real, fornecendo sinais precisos de quando entrar e onde sacar."
    },
    {
      question: "É seguro usar?",
      answer: "Sim! Nosso sistema é 100% seguro e não requer acesso à sua conta. Você apenas recebe os sinais e toma suas próprias decisões."
    },
    {
      question: "Quanto posso ganhar?",
      answer: "Os ganhos variam de acordo com seu investimento inicial e frequência de uso. Muitos usuários relatam ganhos consistentes diariamente."
    },
    {
      question: "Como recebo os sinais?",
      answer: "Após o registro, você terá acesso à nossa plataforma onde os sinais são exibidos em tempo real com atualizações a cada segundo."
    }
  ];

  const stats = [
    { icon: Users, value: "10.000+", label: "Usuários Ativos" },
    { icon: Zap, value: "100%", label: "Taxa de Acerto" },
    { icon: Clock, value: "24/7", label: "Suporte" },
    { icon: Shield, value: "100%", label: "Seguro" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">CyberHacker</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Registre-se
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Background gradient effects */}
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Inteligência Artificial Avançada</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Domine o <span className="text-gradient-primary">Aviator</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
            O robô mostra onde o Aviator vai cair com <span className="font-semibold text-primary">100% de acerto</span> usando IA avançada em tempo real
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-105"
            >
              Começar Agora
            </Link>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-4 text-lg font-medium text-foreground transition-colors hover:bg-secondary/80"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground">
            O Que É o Robô <span className="text-primary">Cyber Hacker</span>?
          </h2>
          
          <div className="mx-auto mb-12 max-w-4xl">
            <div className="rounded-xl border border-border gradient-card p-8 shadow-lg">
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                O <span className="font-bold text-primary">Robô Cyber Hacker</span> É um sistema revolucionário de análise preditiva desenvolvido especificamente para o jogo Aviator. Utilizando algoritmos de <span className="font-semibold text-foreground">machine learning</span> e análise de padrões em tempo real, nosso robô identifica as melhores oportunidades de entrada e os momentos ideais para sacar seus ganhos.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ele analisa o Aviator em tempo real e mostra onde o Aviator vai cair com <span className="font-semibold text-primary">100% de acerto</span>. Com uma interface intuitiva e atualização a cada segundo, você recebe sinais precisos sobre <span className="font-semibold text-foreground">QUANDO entrar</span> e <span className="font-semibold text-foreground">ONDE sacar</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground">
            Por que escolher o Robô <span className="text-primary">Cyber Hacker</span>?
          </h3>
          
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-border bg-background p-8">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CircleCheckBig className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-base text-foreground">
                      {feature.includes("10.000") ? (
                        <>
                          Mais de <span className="font-bold text-primary">10.000 moçambicanos</span> já estão faturando todos os dias usando o Robô Cyber Hacker
                        </>
                      ) : feature.includes("100%") ? (
                        <>
                          <span className="font-semibold text-primary">100% de acerto</span> - o robô mostra exatamente onde o Aviator vai cair
                        </>
                      ) : feature.includes("Inteligência") ? (
                        <>
                          Sistema de <span className="font-bold text-primary">Inteligência Artificial</span> que analisa o Aviator em tempo real
                        </>
                      ) : (
                        <>
                          Suporte <span className="font-semibold text-primary">24/24</span> para todos os usuários
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground">
            Perguntas Mais Frequentes
          </h3>
          
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 text-left font-medium text-foreground transition-colors hover:text-primary"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-border px-4 pb-4 pt-2">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-3xl font-bold text-foreground">
            Pronto para Começar a <span className="text-primary">Faturar</span>?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Junte-se a mais de 10.000 moçambicanos que já estão lucrando todos os dias com o Robô Cyber Hacker.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:scale-105"
          >
            Registre-se Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">CyberHacker</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2026 CyberHacker. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
