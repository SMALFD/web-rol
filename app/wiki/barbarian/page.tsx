import React from 'react';
import Link from "next/link";

export default function Barbarian() {
    return (
        <main className="container">
            <div className="content">
                <h1 id="barbarian">Bárbaro</h1>
                <p>
                    En un campo de batalla, en ocasiones, un soldado para de sentir el dolor.
                    Rodeado de muerte y destrucción ataca sin distinción a lo que le rodea
                    dejando un camino de sangre y muerte a su paso ignorando los ataques que
                    le intentan parar. Su furia interior le da la capacidad de pelear más
                    fuerte y más rápido de lo que podía. Si sobrevive a esta primera
                    experiencia poco a poco podrá empezar a dominar estas sensaciones y podrá
                    ganar la capacidad de invocarlas a voluntad. Una vez capaz de hacerlo se
                    le considera un bárbaro en pleno derecho, listo para forjar su propio
                    camino con los cuerpos de sus enemigos.
                </p>
                <p>
                    Los bárbaros no son necesariamente estúpidos ni locos sin pensamientos. La
                    cualidad mejor valorada entre los bárbaros es, específicamente, el control
                    sobre su ira y su capacidad de formular planes al entrar en batalla. Suele
                    ser común que un bárbaro avise a su equipo de cuál va a ser su estrategia
                    antes de entrar en combate y que les notifique de lo que creen que harán
                    una vez entrada la pelea.
                </p>
                <p>
                    En este setting la mayoría de bárbaros provienen de las <Link href="/wiki/las-tribus-del-norte">Las tribus del Norte</Link>. Aún así es sabido de muchas más tribus y poblaciones, donde
                    estilos de pelea parecidos han ido surgiendo.
                </p>
                <h3 id="las-tribus-del-norte">Las tribus del norte</h3>
                <hr />
                <p>
                    Entre los bárbaros los más conocidos suelen venir de los pueblos de
                    procedencia nórdica, que hace pocas generaciones fueron asimilados en el
                    <Link href="/wiki/imperio">Imperio</Link>. A estos se les permitió mantener su cultura dejando que sus
                    conocimientos sobre como canalizar la furia interior a través de runas
                    fuera pasado de padres a hijos. Esta capacidad y entrenamiento riguroso
                    los ha convertido en los mercenarios más temidos.
                </p>
            </div>
        </main>
    );
}

/*"Mhmmm, si puedo mover la balalaika y puedo mover la pared. Eso significa que la pared está hecha de balalaika"
Fryderik el fuerte sobre una pared de madera*/