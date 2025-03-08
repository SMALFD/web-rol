import React from 'react';
import Link from "next/link";

export default function Warlock() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="warlock">Brujo</h1>
                <p>
                    Los brujos son aquellos que han hecho un pacto con una entidad superior y
                    funcionan desde perritos falderos, persona que le parecía graciosa o hasta
                    avatar de la destrucción y mano derecha de la muerte. Realmente hay tantas
                    criaturas selladas, que prefieren no actuar o que han accedido a
                    mantenerse neutrales dispuestas a hacer pactos que no es poco común ver a
                    gente que lanza rayos por los dedos y en vez de rezar a un dios agradece a
                    su sponsor como si de un YouTuber se tratara. Suelen llevar sus sectas con
                    cierto nivel de secretismo y a pesar de ser encontrados a menudo en
                    diferentes gremios siempre son más leales a si mismos y a su patrón que a
                    cualquier otro miembro de su equipo. A pesar de esto siempre son
                    bienvenidos ya que poseen conocimientos arcanos y la capacidad de sacar al
                    equipo de malas situaciones.
                </p>
                <p>
                    Si tu personaje es un brujo puedes crearte tu propio mini-culto alejado de
                    la ciudad principal del setting si quieres hacer tu propio lore pero
                    siempre recomendamos que os podéis adherir al culto ya creado en la
                    ciudad.
                </p>
                <h3 id="culto-de-"><Link href="/wiki/organizaciones/culto-bajo-ciudad">Culto bajo la ciudad</Link></h3>
                <hr />
                <p>Si quieres más detalles sobre el culto puede acceder directamente a la <Link href="/wiki/organizaciones/culto-bajo-ciudad">página </Link>mismamente.</p>
                <h3 id="rangos-de-brujo">Rangos de brujo</h3>
                <hr />
                <p>
                    Mientras que cada culto es distinto en su manera de otorgar rangos se
                    suele observar esta distribución.
                </p>
                <h3 id="rangos-de-warlock">Rangos de Brujo</h3>
                <hr />
                <ol>
                    <li>Sacrificio</li>
                    <li>Iniciado</li>
                    <li>Acólito</li>
                    <li>Jefe de área</li>
                    <li>Líder del culto</li>
                </ol>
        </div>
        </main >
    );
}