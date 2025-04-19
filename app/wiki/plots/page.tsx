import React from 'react';
import Link from "next/link";

export default function Plots() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="plots">PLots</h1>
                <p>
                    En esta zona colocaremos los "plots" activos y descubiertos por los jugadores. Esto son lineas argumentales que cualquier jugador puede tomar e investigar seleccionando "Free Roam" en los contratos semanales o jugando misiones normalmente.
                </p>
                <p>
                    Si queréis que se añada algo a esta página tanto si es un hecho que creéis confirmado o un rumor que queréis investigar os invitamos a avisar al director de juego para que lo añada a la web.
                </p>
                <ul>
                    <li><Link href="/wiki/plots/el-culto-bajo-la-ciudad">El culto bajo la ciudad</Link></li>
                </ul>
            </div>
        </main>
    );
}