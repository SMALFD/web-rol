import React from 'react';
import Link from "next/link";

export default function Armstrong() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="armstrong">Alex Armstrong</h1>
                <p>
                    Es un hombre de elevada estatura y mediana edad notablemente musculado con una gran pasión por la alquimia y el culturismo. Destaca su carácter afable y atento junto con una grandísima autoestima y orgullo por su figura, la cual presume a la mínima oportunidad que encuentra.
                </p>
                <p>
                    Combina las técnicas de la magia de trasmutación con las técnicas de combate físicas como el boxeo o la lucha libre. Ha entrenado su cuerpo para no depender de la magia en combate, pero a su vez aplica el potencial de su magia mejorando sus capacidades físicas según le convenga. Por ejemplo potencia sus músculos para una mayor fuerza o refuerza su espada y así aguanta un impacto.
                </p>
                <p>
                    Su hechizo favorito es "<Link href="https://dnd5e.wikidot.com/spell:stone-shape">Stone Shape</Link>" para esculpir, aunque también la usa en combate en ocasiones. Un ejemplo de esta técnica en combate se observa cuando crea espinas o pinchos de piedra para luego impulsarlos a puñetazos.
                </p>
                <p>
                    Como profesor es conocido por ser un buenazo que pone buenas notas casi siempre si ve al estudiante esforzarse. A pesar de esto demuestra una increíble determinación de que la magia solo debe ser usada para el bien, si ve a un estudiante pasarse de la raya no tiene problemas con ocuparse de que esté encerrado un tiempo en el calabozo. Si quieres un profesor fácil de complacer en la <Link href="/wiki/organizaciones/torre-magica-roja">Torre Mágica Roja</Link> este es el mejor.
                </p>
            </div>
        </main>
    );
}