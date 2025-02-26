import React from 'react';
import Link from "next/link";

export default function Ranger() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="ranger">Explorador</h1>
                <p>
                    Los exploradores suelen vivir más al margen de la sociedad, manteniendo la
                    sociedad a salvo de criaturas salvajes que viven en lo más profundo de los
                    bosques, aprendiendo magia olvidada por todos menos por las personas más
                    mayores de un pueblo y asegurándose de mantener las carreteras libres de
                    bandidos. Habitualmente expertos con el arco y con un pequeño arsenal de
                    hechizos de apoyo los exploradores se unen al lado de la ley que más les
                    conviene para abrirse un camino en la vida. Una de sus leyendas más
                    populares es la de [[Robin Hood]].
                </p>
                <p>
                    Los exploradores suelen estar afiliados solo con el <Link href="/wiki/gremio-de-aventureros">Gremio de Aventureros</Link> y sencillamente aceptan los contratos necesarios para vivir
                    su día a día pero tampoco es poco común verlos afiliados en mayor o menor
                    nivel con la <Link href="/wiki/guardia-de-roble">Guardia de Roble</Link>. Aquellos más interesados en esta
                    organización pueden empezar a saber más sobre la red de información y
                    política asociada y además tendrán asignado un mentor.
                </p>
                <h3 id="la-guardia-de-roble">La Guardia de Roble</h3>
                <hr />
                <p>
                    La guardia de Roble o cuerpo de guardianes son un cuerpo especial de
                    inteligencia del imperio. Se caracteriza por el halo de misterio y
                    ocultación que envuelven todas sus operaciones. Es un cuerpo centrado en
                    la mensajería sensible, especialistas en asegurar amplios espacios de
                    territorio gracias a sus dotes de sigilo, detección y adaptación a
                    situaciones inesperadas, también son responsables del cuidado tanto
                    administrativo como de la seguridad del feudo que les haya sido asignado.
                </p>
                <p>
                    Todos los guardianes tienen un feudo donde junto a un aprendiz controlan y
                    protegen a la población. Solo el concilio y algunos de los guardianes
                    retirados viven en la sede central en el linde del bosque rojo, a un día
                    de camino de la frontera con la capital del imperio. Por ser tan solo unos
                    pocos miembros tienden a andar escasos de personal y en ocasiones algún
                    feudo ha quedado sin guardián haciéndose notar su ausencia en eso casos. A
                    ojos del mundo son consejeros, estrategas y sodados altamente entrenados
                    al servicio del territorio que les haya sido conferido. No obstante, de
                    fondo son expertos en recabar información sobre todos los posibles y
                    potenciales elementos que pongan en peligro al Imperio.
                </p>
                <p>
                    Esta organización la componen un concilio de tres líderes
                    donde uno de ellos ostenta la gran hoja de roble dorada, símbolo de su
                    liderazgo sobre el concilio de la hoja de roble, otro es el Maestro de la
                    orden a cargo de la capital y sus alrededores y el último es el experto en
                    asuntos exteriores al reino (paradero actual desconocido). Todos
                    los miembros de la guardia de Roble portan la distinción de una hoja de
                    roble en sus capas, cinturones o ropajes, la del concilio y maestros de la
                    orden es dorada, la de los guardianes estándar es plateada, los aprendices
                    deben ganarla y la de los miembros retirados está hecha de madera del
                    árbol en cuestión.
                </p>
                <ul>
                    <li>[[Halt]]</li>
                    <li>[[Corwey]]</li>
                    <li>[[Will]]</li>
                </ul>
            </div>
        </main>
    );
}