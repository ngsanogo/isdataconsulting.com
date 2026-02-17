export default function ManifestoSection() {
  return (
    <section className="section bg-black dark:bg-white text-white dark:text-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm opacity-50 mb-4 uppercase tracking-wide">
            Pourquoi moi ?
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Je suis Issa Sanogo
          </h2>

          <div className="text-lg sm:text-xl leading-relaxed space-y-6 opacity-90">
            <p>
              Je ne suis pas une agence, <strong>je suis l'expert qui met les mains dans vos bases de données</strong>.
            </p>
            
            <p>
              Pendant 9 ans, j'ai travaillé sur des <strong>données critiques</strong> : hôpitaux, instituts de recherche médicale, 
              startups en hypercroissance. J'ai vu ce qui marche et ce qui casse.
            </p>
            
            <p>
              Je n'aime pas le jargon. <strong>Je préfère les systèmes qui marchent et les chiffres sur lesquels on peut compter.</strong>
            </p>
            
            <p className="text-2xl font-semibold pt-4">
              Si vos données sont un bazar, c'est normal. Mon job est de ranger, pas de juger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
