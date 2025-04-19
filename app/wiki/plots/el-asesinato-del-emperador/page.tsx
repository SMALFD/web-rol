import React from 'react';
import Link from "next/link";

export default function El_asesinato_del_emperador() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="el_asesinato_del_emperador">El asesinato del Emperador</h1>
                <ul>
                    <li>El Emperador y <Link href="/wiki/organizaciones/los-heroes-imperiales">los Héroes Imperiales</Link> fueron asesinados a inicios de marzo. Esto ha causado una perdida de estabilidad política y militar en todo el <Link href="/wiki/organizaciones/imperio">Imperio</Link>.</li>
                </ul>
            </div>
        </main>
    );
}