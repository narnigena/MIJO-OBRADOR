export default function Historia() {
  return (
    <section className="story-page">
      <div className="story-hero">
        <span className="eyebrow">Nuestra historia</span>
        <h1>Una familia.<br /><em>Un oficio.</em><br />Un legado.</h1>
      </div>

      <div className="story-block">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
            alt="Pan artesanal"
          />
        </div>

        <div className="story-copy">
          <span className="eyebrow">Los comienzos</span>
          <h2>Empezar de cero también puede convertirse en una tradición.</h2>
          <p>
            Un ecuatoriano llegó a Martos con la voluntad de construir una
            vida nueva. Con trabajo, paciencia y cariño levantó un pequeño
            obrador.
          </p>
          <p>
            Con el tiempo, aquello que empezó como un proyecto personal se
            convirtió en un oficio compartido por sus hijos.
          </p>
        </div>
      </div>

      <div className="story-quote">
        <p>“Lo artesanal no es volver atrás. Es recordar por qué hacemos las cosas.”</p>
      </div>

      <div className="story-block reverse">
        <div className="story-copy">
          <span className="eyebrow">Ahora</span>
          <h2>El legado también puede evolucionar.</h2>
          <p>
            La nueva generación mantiene el respeto por los procesos manuales
            mientras incorpora herramientas digitales para hacer el obrador
            más cercano, cómodo y visible.
          </p>
        </div>

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
            alt="Elaboración de pan"
          />
        </div>
      </div>
    </section>
  );
}
