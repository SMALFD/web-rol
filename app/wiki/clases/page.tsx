import React from 'react';
import Link from "next/link";

export default function Clases() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="clases">Clases</h1>
                <p>
                    Aquí pondremos el lore de cada clase individual. Debemos recordar que esto
                    debe funcionar como una guía general para que las cosas tengan algo de
                    consistencia interna, no necesariamente unas reglas que seguir a lo
                    Ultramarines con el Codex Astartes. Hay mucho valor en un jugador que se
                    salga un poco para mejorar su historia personal. Un sorcerer que está
                    aprovando todas las asignaturas prácticas en la torre de magia mientras
                    suspende las teóricas, un mago nacido genio que apenas va a las clases o
                    que solo aprende de tutores en el gremio....
                </p>
                <p>
                    Aún así debemos intentar que se mantengan dentro de la consistencia de
                    este mundo. Un paladín cuya gracia es que no tiene juramentos, un clérigo
                    ateo... son sencillamente tonterías que van directamente en contra de las
                    mecánicas así que no tenemos porque aceptarlas.
                </p>
                <p>
                    Como nota adicional, las clases no son necesariamente algo real en este
                    mundo, es decir, aunque a nivel mecánico tenemos rogue, bardo, monje... No
                    necesariamente la gente hace esas distinciones directamente en el propio
                    mundo.
                </p>
                <ul>
                    <li><Link href="/wiki/clases/artificer">Artificiero(NA)</Link></li>
                    <li><Link href="/wiki/clases/barbarian">Bárbaro</Link></li>
                    <li><Link href="/wiki/clases/bard">Bardo</Link></li>
                    <li><Link href="/wiki/clases/cleric">Clérigo</Link></li>
                    <li><Link href="/wiki/clases/druid">Druida</Link></li>
                    <li><Link href="/wiki/clases/fighter">Guerrero</Link></li>
                    <li><Link href="/wiki/clases/monk">Monje</Link></li>
                    <li><Link href="/wiki/clases/paladin">Paladín</Link></li>
                    <li><Link href="/wiki/clases/ranger">Explorador</Link></li>
                    <li><Link href="/wiki/clases/rogue">Pícaro</Link></li>
                    <li><Link href="/wiki/clases/sorcerer">Hechicero</Link></li>
                    <li><Link href="/wiki/clases/warlock">Brujo</Link></li>
                    <li><Link href="/wiki/clases/wizard">Mago</Link></li>
                </ul>
            </div>
        </main>
    );
}