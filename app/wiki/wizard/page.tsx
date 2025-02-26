import React from 'react';
import Link from "next/link";

export default function Wizard() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="wizard">Mago</h1>
                <p>
                    Bienvenido al noble oficio de los magos, un antiguo sabio dijo una vez
                    "The price for learning magic is that you become responsible for your
                    own magic, no more lucky breaks, no more sinchronicity, no more
                    spontaneous moments of quiet wonder, you have to do it all yourself and in
                    exchange you get to shoot fireballs". Mientras que es ampliamente
                    conocido por ser una exageración entre amigos no se termina de alejar de
                    la realidad. El estudio de la magia deja la mente agotada y cuanto más
                    vasto es tu conocimiento más cosas entran bajo tu control y dominio
                    robándole algún elemento sorpresa al mundo, claro está, que obtienes
                    poderes increíbles por ese sacrificio.
                </p>
                <p>
                    En la práctica empezáis como simples estudiantes de grado en la <Link href="/wiki/torre-magica-roja">Torre Mágica Roja</Link>, tradicionalmente dirigida por aquellos magos más dirigidos 
                    hacia las artes y humanidades donde se centran en hechizos grandes,
                    dañinos e increíbles visualmente o en la <Link href="/wiki/torre-magica-azul">Torre Mágica Azul</Link>,
                    tradicionalmente dirigida a mentes más ordenadas y a un estudio más
                    sistemáticos de la magia donde se precian los hechizos de soporte, ayuda y
                    utilidad general.
                </p>
                <p>
                    Asimismo al estudiar en una torre de magia cada jugador debe elegir un
                    tutor al que reportar sus avances.
                </p>
                <h3 id="tutores-en-la-torre-mágica-roja">
                    Tutores en la Torre Mágica Roja
                </h3>
                <hr />
                <ul>
                    <li>[[Tutor 1]]</li>
                    <li>[[Tutor 2]]</li>
                    <li>[[Tutor 3]]</li>
                </ul>
                <h3 id="tutores-en-la-torre-mágica-azul">
                    Tutores en la Torre Mágica Azul
                </h3>
                <hr />
                <ul>
                    <li>[[Tutor 4]]</li>
                    <li>[[Tutor 5]]</li>
                    <li>[[Tutor 6]]</li>
                </ul>
                <h3 id="créditos-graduación-y-aventuras">
                    Créditos, graduación y aventuras
                </h3>
                <hr />
                <p>
                    La actividad más popular para conseguir créditos y además conseguir dinero
                    para las segundas matrículas es alistarse al <Link href="/wiki/gremio-de-aventureros">Gremio de Aventureros</Link>. La
                    mayoría de estudiantes dicen que no eres un estudiante real si no has
                    matado 1000 goblins. Esto es una evidente exageración pero se mantienen
                    rankings entre los alumnos para ver quien ha acudido a más misiones y se
                    considera algo muy positivo para entrar en las salas de estudios más
                    avanzadas o para congraciarse con los magos más senior que ya pasaron por
                    ello así que muchos estudiantes se apuntan aunque no lo necesiten
                    estrictamente aunque no suelen apuntarse a los contratos más peligrosos.
                    Claro está que algunos despiertan un sentido de la aventura y se empiezan
                    a atrever más.
                </p>
                <h3 id="rangos-de-mago">Rangos de mago</h3>
                <hr />
                <ol>
                    <li>Estudiante de grado</li>
                    <li>Estudiante de tesis</li>
                    <li>Investigador en &quot;Campo de magia&quot;</li>
                    <li>Especialista en &quot;Campo de Magia&quot;</li>
                    <li>Maestro de la magia</li>
                    <li>Archimago</li>
                </ol>
            </div>
        </main>
    );
}

/*"No he preguntado cuál es el tamaño de la sala, solo he dicho fireball"
Común broma entre los estudiantes de magia */