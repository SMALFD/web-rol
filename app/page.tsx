import React from 'react';
import Link from "next/link";

export default function Liga_de_rol() {
    return (
        <main className="container">
            <div className="content">
                <h2 id="tabla-de-contenidos">Tabla de contenidos</h2>
                <li><Link href="/wiki/clases">Clases</Link></li>
                <li><Link href="/wiki/jugadores">Jugadores</Link> 🔧WIP🔧</li>
                <li><Link href="/wiki/organizaciones">Organizaciones</Link> 🔧WIP🔧</li>
                <li><Link href="/wiki/personajes">Personajes</Link> 🔧WIP🔧</li>
                <li>Plots</li>
                <p>
                    Como nota, esto estará disponible en formato página web para todos los
                    jugadores para acceder libremente. Aquello que se escriba para mantener
                    exclusivamente para DM deberá estar escrito en <em>cursiva</em>. Avisad a un DM si véis algo que está fuera de sitio o en cursiva.
                     Todo aquello que descubra aunque
                    solo lo encuentre una party quedará de manera pública en la web para que
                    haya más fácil acceso. La sección de
                    plots estará vacía hasta que alguien empiece uno de ellos y se irán
                    actualizando con lo último ocurrido en base a lo que se sabe públicamente.
                </p>
            </div>
        </main >
    );
}