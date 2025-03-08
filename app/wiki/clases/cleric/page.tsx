import React from 'react';
import Link from "next/link";

export default function Cleric() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="Cleric">Clérigo</h1>
                <p>
                    <em>&quot;Mira, el rato que no estoy curándote estoy haciendo hechizos que
                        acaban con el triple de enemigos que tú. Si quieres mi atención y curas
                        más te vale ponerte en serio en las peleas.&quot; </em> Argeros el Santo, en sus
                    primeros días era conocido por su gran capacidad ofensiva.
                </p>
                <p>
                    Los dioses existen y son reales, cada uno representa unos ideales o
                    conceptos de la realidad. Entre los mortales el culto a estos aspectos de
                    la realidad es algo extendido pero entre estos mortales los hay que
                    entienden mejor estas fuerzas. Aquellos dispuestos a dedicar su vida a su
                    comprensión y creencia consiguen la capacidad de manifestar fragmentos de
                    su dios para conseguir crear hechizos. Los clérigos suelen juntarse en
                    grupos para encontrar el dogma más apropiado para su dios y para extender
                    su culto y su palabra.
                </p>
                <p>
                    Los clérigos deben ser leales a su dios independientemente de lo que ellos
                    quieran hacer o lo que otra gente quiere. Esto puede ir en contra de su
                    organización y no es poco común que estas tengan ciertos niveles de
                    corrupción. Como de conocido sea su dios no afecta al poder de un clérigo.
                    Los dioses existen independientemente de si los mortales creen en ellos o
                    no aunque habitualmente agradecen el culto ya que les ayuda a extender su
                    aspecto.
                </p>
                <p>
                    En este setting ofrecemos una opción de iglesia a la que el clérigo puede
                    servir.
                </p>
                <h3 id="la-iglesia">La <Link href="/wiki/organizaciones/iglesia">Iglesia</Link></h3>
                <hr />
                <p>
                    Has decidido seguir a la Diosa de la vida y la luz. Como su sirviente
                    debes tratar de expandir una palabra de paz y verdad. Tus tareas se
                    extienden desde curar a los enfermos y aquellos que tengan heridas hasta
                    iluminar las mentiras más oscuras y poner verdades a la luz. La doctrina
                    de la Iglesia cada vez es más estricta y sus acciones con las legiones de 
                    <Link href="/wiki/clases/paladin">paladines</Link> han tenido críticos. El paladín de <Link href="/wiki/organizaciones/los-heroes-imperiales">Los Héroes Imperiales</Link>
                    estuvo revelando que el dogma de la Iglesia no era necesariamente el de la
                    Diosa pero su muerte parece haber relajado estas acusaciones. La Iglesia
                    pareció agradecer la muerte de uno de sus más grandes críticos pero no son
                    pocos los que han hecho una conexión entre su muerte y los fallos de los
                    hechizos de resurrección.
                </p>
                <p>
                    Servir a la Iglesia da grandes beneficios dando acceso casi totalmente
                    libre a algunas de las bibliotecas más grandes del mundo y permiso para
                    usar los lugares más protegidos contra demonios y no muertos. Asimismo en
                    ocasiones la Iglesia puede reclamar que un contrato del Gremio de
                    Aventureros necesite de un Testigo de Dios, es decir, un miembro de la
                    Iglesia.
                </p>
                <h3 id="rangos-de-cleric">Rangos de Clérico</h3>
                <hr />
                <ol>
                    <li>Seminarista</li>
                    <li>Diácono</li>
                    <li>Pastor de la fe</li>
                    <li>Obispo</li>
                    <li>Papa</li>
                </ol>
            </div>
        </main>
    );
}