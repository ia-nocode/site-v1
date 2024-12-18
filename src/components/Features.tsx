import React from "react";
import { Lightbulb, Video, Mic, Bot, Globe, Workflow, Code } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Devenez un expert(e) en IA Générative
          </h2>
          <p className="text-white/80">Formation 100 % en ligne. Prochaine session : 1er juillet 2024</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Expert en images IA",
              description: "Cette formation spécialisée se concentre sur l'utilisation d'outils d'intelligence artificielle pour créer et éditer des images de manière avancée.",
            },
            {
              icon: Video,
              title: "Expert en vidéos IA",
              description: "Cette formation est exclusivement dédiée à la création et à l'édition de vidéos à l'aide de l'intelligence artificielle. Vous apprendrez à manipuler, améliorer et générer des vidéos de haute qualité.",
            },
            {
              icon: Mic,
              title: "Expert en audio IA",
              description: "Cette formation vous apprendra à concevoir des voix, composer de la musique, produire des podcasts et générer des sons de diverses natures dans n'importe quelle langue.",
            },
            {
              icon: Bot,
              title: "Expert en assistants IA",
              description: "Développez des assistants virtuels personnalisés, entraînés avec des données spécifiques à votre entreprise pour offrir des réponses précises aux clients ou aux employés.",
            },
            {
              icon: Globe,
              title: "Expert en web IA",
              description: "Apprenez à développer des blogs, sites web ou plateformes e-commerce plus rapidement en utilisant l'intelligence artificielle pour générer du contenu de manière agile et efficace.",
            },
            {
              icon: Workflow,
              title: "Expert en automatisation IA",
              description: "Apprenez à systématiser et connecter votre entreprise avec des milliers d'applications. Travaillez plus intelligemment en automatisant vos processus avec l'IA.",
            },
            {
              icon: Code,
              title: "Expert en code IA",
              description: "Accélérez vos développements avec l'IA comme alliée pour créer, éditer et optimiser votre code efficacement. Complétez vos projets plus rapidement grâce au principe de Pareto.",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-forest-light p-8 rounded-xl border border-mint/10"
            >
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-forest" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;