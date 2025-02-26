import React from 'react';
import Link from "next/link";

export default function Organizaciones() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="organizaciones">Organizaciones</h1>
                <ul>
                    <li>
                        <Link href="/wiki/imperio">Imperio</Link>
                    </li>
                    <li>
                        <Link href="/wiki/torre-magica-roja">Torre Mágica Roja</Link>
                    </li>
                    <li>
                        <Link href="/wiki/torre-magica-azul">Torre Mágica Azul</Link>
                    </li>
                    <li>
                        <Link href="/wiki/gremio-de-asesinos">Gremio de Asesinos</Link>
                    </li>
                    <li>
                        <Link href="/wiki/gremio-de-aventureros">Gremio de Aventureros</Link>
                    </li>
                    <li>
                        <Link href="/wiki/culto-bajo-ciudad">Culto bajo la ciudad</Link>
                    </li>
                    <li>
                        <Link href="/wiki/grupo-de-bandidos">Grupo de bandidos</Link>
                    </li>
                    <li>
                        <Link href="/wiki/iglesia">Iglesia</Link>
                    </li>
                    <li>
                        <Link href="/wiki/guardia-de-roble">Guardia de Roble</Link>
                    </li>
                    <li>
                        <Link href="/wiki/islas-de-azir">Islas de Azir</Link>
                    </li>
                    <li>
                        <Link href="/wiki/comuna-independiente-del-bosque">Comuna independiente del Bosque de</Link>
                    </li>
                    <li>
                        <Link href="/wiki/el-dragon-verde">El Dragón Verde</Link>
                    </li>
                    <li>
                        <Link href="/wiki/la-gaceta-imperial">La Gaceta Imperial</Link>
                    </li>
                    <li>
                        <Link href="/wiki/los-heroes-imperiales">Los Héroes Imperiales</Link>
                    </li>
                    <li>
                        <Link href="/wiki/las-tribus-del-norte">Las tribus del Norte</Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}