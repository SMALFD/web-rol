import React from 'react';
import Link from "next/link";

export default function Plots() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="plots">Plots</h1>
                <p>
                    En esta zona colocaremos los &quot;plots&quot; activos y descubiertos por los jugadores. Esto son lineas argumentales que cualquier jugador puede tomar e investigar seleccionando &quot;Free Roam&quot; en los contratos semanales o jugando misiones normalmente.
                </p>
                <p>
                    Si queréis que se añada algo a esta página tanto si es un hecho que creéis confirmado o un rumor que queréis investigar os invitamos a avisar al director de juego para que lo añada a la web.
                </p>
                <ul>
                    <li><Link href="/wiki/plots/el-culto-bajo-la-ciudad">El culto bajo la ciudad</Link></li>
                    <li><Link href="/wiki/plots/el-asesinato-del-emperador">El asesinato del Emperador</Link></li>
                    <li><Link href="/wiki/plots/la-nueva-ropa-del-principe">La nueva ropa del príncipe</Link></li>
                </ul>
            </div>
        </main>
    );
}