import React from 'react';
import Link from "next/link";

export default function Bard() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="bard">Bardo</h1>
                <p>
                    Hay una lenguaje único que une a todo el mundo, desde las razas que
                    caminan la tierra, los peces que nadan por las fosas más profundas, las
                    criaturas en los infiernos más profundos e incluso al propio tejido
                    esencial de la magia, la música. Como bardo usas tu voz y tus instrumentos
                    para hablar de manera fundamental al tejido del Universo y modificar la
                    realidad a tu gusto. Ya sea contando gloriosas aventuras o con un solo de
                    guitarra espectacular, los años de conservatorio por fin valen la pena.
                </p>
                <p>
                    Los bardos se encuentran en todos lados, desde la mas pobre calle al
                    palacio mas ornamentado, por esta naturaleza, aunque hay colegios
                    especializados en enseñar este arte, muchos bardos son autodidactas o han
                    tenido profesores menos estándar. Lo único que tienen en común es que para
                    conseguir trabajo en el gremio de aventureros o en trabajos más
                    &quot;Ilícitos&quot;, saben que el mejor para presentarles es Lute.
                </p>
                <p>
                    En este setting la mayoría de bardos son increíblemente independientes y
                    por lo tanto no suelen estar asociados con ninguna organización más que
                    con el <Link href="/wiki/gremio-de-aventureros">Gremio de Aventureros</Link>.
                </p>
            </div>
        </main>
    );
}