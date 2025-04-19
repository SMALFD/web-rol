import React from 'react';
import Link from "next/link";

export default function El_culto_bajo_la_ciudad() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="el_culto_bajo_la_ciudad">El culto bajo la ciudad</h1>
                <ul>
                    <li><Link href="/wiki/personajes/leo">Leo</Link> sospecha que hay un culto que está realizando experimentos con animales cercanos a la ciudad.</li>
                    <li>El jugador Balder ha encontrado a uno de los cultistas y tiene un libro suyo.</li>
                </ul>
            </div>
        </main>
    );
}