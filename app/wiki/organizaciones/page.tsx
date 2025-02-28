import React from 'react';
import Link from "next/link";

export default function Organizaciones() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="organizaciones">Organizaciones</h1>
                <ul>
                    <li>
                        <Link href="/wiki/organizaciones/imperio">Imperio</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/torre-magica-roja">Torre Mágica Roja</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/torre-magica-azul">Torre Mágica Azul</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/gremio-de-asesinos">Gremio de Asesinos</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/gremio-de-aventureros">Gremio de Aventureros</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/culto-bajo-ciudad">Culto bajo la ciudad</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/grupo-de-bandidos">Grupo de bandidos</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/iglesia">Iglesia</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/guardia-de-roble">Guardia de Roble</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/islas-de-azir">Islas de Azir</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/comuna-independiente-del-bosque">Comuna independiente del Bosque de</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/el-dragon-verde">El Dragón Verde</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/la-gaceta-imperial">La Gaceta Imperial</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/los-heroes-imperiales">Los Héroes Imperiales</Link>
                    </li>
                    <li>
                        <Link href="/wiki/organizaciones/las-tribus-del-norte">Las tribus del Norte</Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}