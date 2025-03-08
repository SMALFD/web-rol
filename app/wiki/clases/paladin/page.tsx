import React from 'react';
import Link from "next/link";

export default function Paladin() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="paladin">Paladín</h1>
                <p>
                    Como paladín tus juramentos son tu valor, tus creencias, tu poder y la
                    fuerza que guía tu vida. Desde que empezaste a entrenar te has entregado a
                    una causa y a unos juramentos a los que nunca debes fallar. Una creencia
                    lo suficientemente fuerte te dará la capacidad de alterar los hechos y
                    destruir a los que buscan enfrentarse a tus creencias. Habitualmente las
                    rígidas creencias de los paladines los llevan a crear estructuras de mando
                    y a juntarse en grandes grupos para hacer real su utopía de manera más
                    eficiente.
                </p>
                <p>
                    Tus juramentos pueden ser cualquier cosa desde una lealtad inmortal al
                    queso hasta la creencia de que la justicia debe ser absoluta en el mundo
                    pero suele estar dirigida hacia un dios que representa unos ideales que
                    deseas seguir o una corona a la que eres leal. A medida que avanzas en el
                    escalafón se te revelarán nuevos juramentos necesarios para aumentar tus
                    capacidades. Siempre es posible que como individuo sigas tu propio credo
                    aunque este camino es conocido por ser mucho más arduo. En este setting os
                    ofrecemos dos caminos habituales para ser un paladín.
                </p>
                <h3 id="paladín-del-imperio">Paladín del <Link href="/wiki/organizaciones/imperio">Imperio</Link></h3>
                <hr />
                <p>
                    Como paladín al servicio del imperio has jurado servir a la corona y al
                    bienestar del país. Aunque tu principal lealtad es hacia el país y la
                    mayoría del tiempo lo dedicas a hacer turnos de guardia, limpiar armas y
                    practicar formaciones siempre puedes dedicar algo de tiempo a hacer algún
                    encargo para el <Link href="/wiki/organizaciones/gremio-de-aventureros">Gremio de Aventureros</Link>.
                </p>
                <p>
                    Servir al Imperio siempre te da ventajas a la hora de acceder a
                    información o zonas que estén bajo protección por la guardia. El Imperio
                    sigue siendo la mayor fuerza en la ciudad y formar parte de su guardia
                    tiene claros beneficios.
                </p>
                <h3 id="paladín-de-la-iglesia">Paladín de la <Link href="/wiki/organizaciones/iglesia">Iglesia</Link></h3>
                <hr />
                <p>
                    Tu lealtad jurada a una diosa de la vida y la luz te ha puesto en un claro
                    camino de ayudar al prójimo. Desde dedicarse a destruir y quemar a los
                    enemigos de la vida hasta proteger a aquellos que son más débiles este es
                    uno de los caminos más difíciles de mantener ya que, ¿Acaso los enemigos
                    de la vida son tales?¿Acaso no merecen la misma oportunidad de vida? La
                    doctrina de la Iglesia recomienda apartar de tu cabeza tales preguntas y
                    te ordena seguir golpeando pero uno de sus mayores críticos es el
                    legendario paladín de [[Los Héroes Imperiales]]. La Iglesia pareció
                    agradecer la muerte de uno de sus más grandes críticos pero no son pocos
                    los que han hecho una conexión entre su muerte y los fallos de los
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
                <h3 id="rangos-de-paladín">Rangos de Paladín</h3>
                <hr />
                <p>
                    No todas las organizaciones siguen este sistema pero el Imperio se basó en
                    los rangos de la Iglesia para crear sus propios puestos volviéndolos casi
                    iguales.
                </p>
                <ol>
                    <li>Mozo de espadas</li>
                    <li>Escudero</li>
                    <li>Defensor de</li>
                    <li>Paladín</li>
                    <li>Maestro de la Marca</li>
                    <li>Sublime Maestro</li>
                </ol>
            </div>
        </main>
    );
}

/*&quot;Que asco da paladín. El mejor tanque, dps, top 3 healer, carisma, utilidad&quot;
La rogue de Dani, comandante de las legiones sagradas*/