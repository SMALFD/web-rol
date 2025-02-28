import React from 'react';
import Link from "next/link";

export default function Rogue() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="rogue">Pícaro</h1>
                <p>
                    Si bien se usa la palabra pícaro como un arquetipo general este se trata
                    de uno de los títulos más variados en su aplicación real, desde un asesino
                    bajo contrato de silencio del <Link href="/wiki/gremio-de-asesinos">Gremio de Asesinos</Link>, un luchador
                    especializado en apuñalar a alguien entre las juntas de la armadura
                    mientras está distraído o un joven acostumbrado a moverse por las
                    mazmorras del viejo [[Tigger]] y a deshabilitar trampas.
                </p>
                <h3 id="pícaros-al-servicio-del-gremio-de-asesinos">
                    Pícaros al servicio del Gremio de Asesinos
                </h3>
                <hr />
                <p>
                    La mayoría de pícaros son gente entrenada desde la infancia por el Gremio
                    de Asesinos y sirven directamente a [[La Daga]]. Estos para volverse
                    miembros oficiales deben matar a un compañero de su promoción y hacer un
                    juramento de silencio, este implica nunca hablar de un contrato ya acabado
                    para así mantener el secretismo de sus actividades. Romper este juramento
                    es el mayor tabú entre ellos e implica un botín de la más alta prioridad
                    puesto en tu cabeza. Formar parte del Gremio te dará acceso a contratos
                    especiales demás de los contratos básicos del <Link href="/wiki/gremio-de-aventureros">Gremio de Aventureros</Link>.
                    Si ves a alguien sentándose en una mesa a oscuras en la taberna con la
                    capucha puesta en un interior probablemente sea parte del Gremio de
                    Asesinos.
                </p>
                <h3 id="pícaros-al-servicio-del-gremio-de-aventureros">
                    Pícaros al servicio del Gremio de Aventureros
                </h3>
                <hr />
                <p>
                    A pesar de esto no es poco común ver a pícaros que simplemente han
                    entrenado para unirse al Gremio de Aventureros. Estos son más variados y
                    son confundidos habitualmente con gente que clasifica más como
                    <Link href="/wiki/fighter"> guerreros</Link>. La mayoría de ellos tiene como héroe y objetivo ser como el
                    pícaro de [[Los Héroes Imperiales]]. Evidentemente su muerte hace escaso
                    tiempo ha afectado a la mayoría.
                </p>
            </div>
        </main>
    );
}
