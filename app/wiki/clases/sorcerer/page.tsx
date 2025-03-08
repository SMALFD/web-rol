import React from 'react';
import Link from "next/link";

export default function Sorcerer() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="sorcerer">Hechicero</h1>
                <p>
                    Los hechiceros ganan la capacidad de modificar la realidad a su antojo
                    gracias a un padre que vio a un dragón como un objetivo al que cortejar,
                    un hada concediendo una poderosa bendición tras tu nacimiento o una grieta
                    en el plano astral enchufándote de poder hasta las cejas.
                </p>
                <p>
                    Este grupo es ampliamente el más desorganizado de todos ya que no tienen
                    ninguna organización central que los apoye o un grupo de ayuda entre
                    ellos. Es debido a eso que suelen ir directamente a sitio más conocido por
                    estar lleno de inadaptados con ganas de grandeza y gloria, el <Link href="/wiki/organizaciones/gremio-de-aventureros">Gremio de Aventureros</Link>. Cuando dos hechiceros se encuentran suelen llevarse bien ya
                    que no es común encontrar a alguien que comprenda las dificultades de
                    encontrarse con una capacidad tan extraña y ninguna guía para ayudarles.
                </p>
                <p>
                    A pesar de todo justo en este Gremio de Aventureros alguno de los
                    hechizeros más senior recomiendan a los nuevos que vayan a bosque si
                    tienen tiempo y ganas de aprender más de sus poderes ya que allí se oculta
                    una figura que les puede ayudar.
                </p>
            </div>
        </main>
    );
}