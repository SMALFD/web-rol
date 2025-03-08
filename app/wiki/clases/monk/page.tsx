import React from 'react';
import Link from "next/link";

export default function Monk() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="monk">Monje</h1>
                <p>
                    Entre la gente que entrena su cuerpo para luchar contra los enemigos que
                    asolan el mundo hay un tipo más increíble que el resto, un tipo que
                    asciende entre el resto solo por la valentía que presentan al mundo.
                    Porque una cosa es bajarse un dragón, y otra es bajárselo a puños.
                    Controlando la fuerza interior, el mítico ki, estos monjes demuestran que
                    un hombre no necesita nada más que si mismo para enfrentarse al mundo.
                </p>
                <p>
                    Los monjes suelen dedicar su vida a la meditación y perfeccionar sus
                    habilidades hasta que su cuerpo se rompa pero entre ellos unos pocos
                    despiertan curiosidad por el mundo exterior y en contra de algunas
                    doctrinas salen en busca de aventura. La mayoría acaban entre el <Link href="/wiki/organizaciones/gremio-de-aventureros">Gremio de Aventureros</Link> y el <Link href="/wiki/organizaciones/gremio-de-asesinos">Gremio de Asesinos</Link>. Habitualmente debido a sus
                    extrañas habilidades son aceptados sin demasiados miramientos.
                </p>
                <p>
                    Os ofrecemos dos escuelas que existen en el setting pero no es poco común
                    que un monje pertenezca a una secta oculta en las montañas con 8 miembros
                    y una cabra.
                </p>
                <h3 id="escuela-de-las-sombras">Escuela de las Sombras</h3>
                <hr />
                <p>
                    Este grupo de monjes fue iniciado por un Shadar-kai o elfo de las sombras,
                    hace ya varios cientos de años, se rumorea que el fundador continua vivo,
                    pero escondido, esperando al momento en el que se necesiten sus
                    habilidades.
                </p>
                <p>
                    La mayoría de los estudiantes son huérfanos cuyo camino les llevó a
                    entrenar en este arte marcial. Aunque hay diversidad de opiniones y formas
                    de ver la vida entre los estudiantes, como sus poderes se basan en atacar
                    desde las sombras, tienen mala fama en el imperio y la mayoría acaba
                    trabajando para el gremio de asesinos.
                </p>
                <h3 id="escuela-del-dragón">Escuela del dragón</h3>
                <hr />
                <p>
                    Durante las eras hay varios dragones que usando una forma humanoide han
                    recorrido el <Link href="/wiki/organizaciones/imperio">Imperio</Link> dejando su rastro por donde iban. Algunos de
                    ellos dejaban solo destrucción a su paso, pero otros compartían su
                    conocimiento a los ciudadanos.
                </p>
                <p>
                    Parte de este conocimiento se le conoce como el camino del dragón, un arte
                    marcial que permite el control de los elementos. En la actualidad la
                    escuela mas conocida se encuentra en una montaña al norte del imperio,
                    donde un dragón plateado enseña a todo aquél que quiera aprender y protege
                    su escuela de cualquier fuerza enemiga, aunque esta sea el Imperio.
                </p>
                <p>
                    Cuando ocurrió la caída de los dragones hace 200 años se sabe que ese
                    dragón abandonó el monasterio sin mediar palabra antes de desaparecer. Los
                    monjes predicen que volverá en un momento de crisis para el mundo y
                    liderará a los monjes de la escuela del dragón para salvarlo.
                </p>
                <h3 id="rangos-de-monk">Rangos de Monje</h3>
                <hr />
                <ol>
                    <li>Discípulo</li>
                    <li>Discípulo Interno</li>
                    <li>Discípulo Avanzado</li>
                    <li>Sucesor</li>
                    <li>Patriarca</li>
                </ol>
            </div>
        </main>
    );
}

/*&quot;Monje me gusta mucho porque es como jugar al Street Fighter con los combos&quot;
&quot;¿Qué es ese Street Fighter del que hablas?&quot;
Fragmento de un antiguo texto de una secta Murim. Su significado es desconocido */