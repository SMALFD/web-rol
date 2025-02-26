import React from 'react';
import Link from "next/link";

export default function Druida() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="druida">Druida</h1>
                <p>
                    Una danza bajo la luna mientras que formas bestiales se mezclan con la
                    naturaleza de tu cuerpo transformándote en un híbrido bestial o recordando
                    la sabiduría de los ancestros del bosque trayendo magia antigua a un plano
                    terrenal bien podría ser la mejor manera de describir a un druida.
                </p>
                <p>
                    Los druidas suelen tener rituales comunales en los lugares donde la magia
                    antigua aún vive y pueden estar en comunión con la naturaleza. Esto, muy
                    rara vez es en mitad de una plaza del mercado así que suele ir a vivir a los bosques o en lo profundo de cuevas llenas
                    de vida. La mayoría de druidas rechazan el metal y la modernidad
                    prefiriendo vivir en pequeños grupos semi-nomádicos en los bosques
                    cercanos a su círculo.
                </p>
                <p>
                    A pesar de esto los druidas no son completamente asociales, muchos de
                    ellos reconocen el valor de organizaciones como el <Link href="/wiki/gremio-de-aventureros">Gremio de Aventureros</Link> como una herramienta para mantener la paz en los bosques,
                    evitar infestaciones y destruir a aquellos que buscan traer demonios a la
                    tierra.
                </p>
                <p>
                    En este setting os ofrecemos una comunidad druídica específica para formar
                    parte del setting.
                </p>
                <h3 id="comuna-independiente-del-bosque-de-patent-pending">
                    <Link href="/wiki/comuna-independiente-del-bosque">Comuna independiente del Bosque de</Link>
                </h3>
                <hr />
                <p>
                    Una comuna relativamente grande con unos 60 miembros vive al lado de la
                    ciudad de <Link href="/wiki/imperio">El Imperio de Patent Pending</Link> y realiza sus
                    rituales cada luna llena con el beneplácito del <Link href="/wiki/emperador">Emperador</Link>. Tras su
                    muerte este permiso desaparece y su posición en el <Link href="/wiki/imperio">Imperio</Link> queda en el
                    aire esperando a su permiso o prohibición.
                </p>
                <p>
                    Este grupo tiene una muy buena relación con el Gremio de Aventureros y
                    suele mandar a gente para ayudar con sus contratos. Muchas veces les
                    permiten guardar el pago en el propio Gremio de Aventureros haciendo
                    compras a través de ellos para evitar la ciudad y el contacto con el metal
                    de las monedas.
                </p>
                <p>
                    Su relación con el Imperio y la guardia es cuanto menos tensa. Hace más de
                    dos siglos que no ha habido ninguna caza de druidas pero las antiguas
                    rivalidades aún se mantienen. La relación con la guardia de la ciudad es
                    activamente mala y suele haber altercados ya que no se dejan registrar por
                    hombres en armaduras de metal.
                </p>
                <p>
                    Entre ellos se escuchan rumores sobre el desarrollo de un arma diseñada
                    para matar druidas aunque por ahora parecen solo eso, rumores.
                </p>
            </div>
        </main>
    );
}