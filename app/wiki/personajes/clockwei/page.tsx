import React from 'react';
import Link from "next/link";

export default function Clockwei() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="clockwei">Clockwei</h1>
                <p>
                    Es una mujer de estirada figura y cuerpo menudo, con la cara permanentemente tapada por un tupido velo y un sombrero de ala ancha que oculta aún más sus facciones. Se la conoce por ser una especialista de la magia de abjuración y por sus ingeniosos artilugios que usa para cubrirse las espaldas y tener el control de la situación en todo momento.
                </p>
                <p>
                    Sus hechizos más comunes son aquellos que hacen que allá donde pise sea un espacio seguro, ya sea por estar a su lado, porque la sala sea segura o porque ella misma está protegida contra la mayoría de los males conocidos.
                </p>
                <p>
                    Es especialista en escudos o protecciones personales. Cuando quieres que una región sea segura o deseas proteger con sumo cuidado es a ella a quien debes llamar pues es la mejor en su trabajo. Además de profesora está al servicio del emperador y le presta su protección en numerosas ocasiones. Pero o no fue suficiente el día del desastre o esa vez no se encontraba en el palacio durante el ataque, solo se sabe que se culpa por ello y nunca debes sacarle el tema.
                </p>
                <p>
                    Los artilugios con los que va equipada son objetos imbuidos con magia o puramente mecánicos que coloca en lugares estratégicos para preparar alarmas, bloqueos de puertas o paredes incluso en ocasiones ha situado esfinges para custodiar y proteger entradas, objetos o personas.
                </p>
                <p>
                    Habitualmente una profesora fría y distante da las clases con la misma eficiencia que prepara sus hechizos. Clases magistrales en las que las preguntas son escuetas ya que no deja espacio a dudas. Sus exámenes se centran en teoría mágica y en temporada de exámenes se llena de quejas por correcciones de exámenes injustas. A pesar de las acusaciones siempre hay una lógica aplastante detrás de las notas.
                </p>
                <p>
                    Se lleva tremendamente mal con <Link href="/wiki/personajes/crimson">Crimson</Link> ya que su altenería suele ponerla de los nervios. Es de las pocas personas que es capaz de hacer que pierda los estribos.
                </p>
            </div>
        </main>
    );
}