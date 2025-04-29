import React from 'react';
import { useState } from 'react'

const MostrarMais = () => {
    const [Mostrar, setMostrar] = useState(false);
    return (
        <div>

            {Mostrar && (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat eius quaerat ab doloribus tempore, ipsum placeat vitae voluptatibus ducimus autem vero ipsam asperiores nam cum pariatur inventore tenetur delectus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis amet beatae nostrum culpa voluptatibus nam laudantium nulla quasi! Qui, est? Ab eius, repellat adipisci aliquid voluptatibus aliquam nobis debitis est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sed minima voluptatibus totam dignissimos, ipsa corrupti natus possimus officia a fugiat! Quas dicta modi quia voluptates alias esse culpa distinctio.</p>
            )}
            <button onClick={() => setMostrar(!Mostrar)}>
                {Mostrar ? 'Mostrar-menos' : 'Mostrar-mais'}

            </button>
        </div>
    )
}

export default MostrarMais;