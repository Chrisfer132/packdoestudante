function showFormulas(topic) {
    const formulas = {
        areas: `
            <h2>Fórmulas de Áreas</h2>
            <ul>
                <li>Área do Quadrado: A = l²</li>
                <li>Área do Retângulo: A = b . h</li>
                <li>Área do Triângulo: A = (b . h) ÷ 2</li>
                <li>Área do Círculo: A = π . r²</li>
                <li>Losango: A = (D . d).h ÷ 2</li>
                <li>Trapézio: A = (B . b).h ÷ 2</li>
                <li>Polígono Regular: A = P ÷ 2 . a</li>
                <li>Cone: A = πr . g</li>
                <li>Esfera: A = 4πr²</li>
            </ul>
        `,
        volumes: `
            <h2>Fórmulas de Volumes</h2>
            <ul>
                <li>Volume do Cubo: V = a³</li>
                <li>Volume do Paralelepípedo: V = l . w . h</li>
                <li>Volume da Esfera: V = (4/3) . π . r³</li>
                <li>Volume do Cilindro: V = π . r² . h</li>
                <li>Volume da Prisma Regular: V = Ab . h</li>
                <li>Volume do Cone: V = 1/3.h.π.r²</li>
            </ul>
        `,
        trigonometry: `
            <h2>Fórmulas de Trigonometria</h2>
            <ul>
                <li>Sen(θ) = Oposto / Hipotenusa</li>
                <li>Cos(θ) = Adjacente / Hipotenusa</li>
                <li>Tan(θ) = Oposto / Adjacente</li>
                <li>Identidade de Pitágoras: sin²(θ) + cos²(θ) = 1</li>
            </ul>
        `,
        Potencias: `
            <h2>Fórmulas de Potências</h2>
            <ul>
                <li>Propriedade do Produto de Potências com a Mesma Base:
                    <code>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></code>
                </li>
                <li>Propriedade do Produto de Potências com Expoentes Iguais:
                    <code>a<sup>m</sup> × b<sup>m</sup> = (a × b)<sup>m</sup></code>
                </li>
                <li>Propriedade do Quociente de Potências com a Mesma Base:
                    <code>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></code>
                </li>
                <li>Propriedade do Quociente de Potências com Expoentes Iguais:
                    <code>a<sup>m</sup> ÷ b<sup>m</sup> = (a ÷ b)<sup>m</sup></code>
                </li>
                <li>Potência de uma Potência:
                    <code>(a<sup>m</sup>)<sup>p</sup> = a<sup>m×p</sup></code>
                </li>
                <li>Qualquer Número Elevado a Zero:
                    <code>a<sup>0</sup> = 1</code>
                </li>
            </ul>
        `,
        Equacoes: `
            <h2>Fórmulas de Equações</h2>
            <ul>
                <li>Equação Linear: ax + b = 0</li>
                <li>Equação Quadrática: ax² + bx + c = 0</li>
                <li>Fórmula de Bhaskara: x = (-b ± √(b² - 4ac)) / 2a</li>
                <li>Equação Exponencial: a^x = b</li>
                <li>Equação Logarítmica: log<sub>a</sub>(b) = x</li>
            </ul>
        `,
        Logaritmo: `
            <h2>Fórmulas de Logaritmo</h2>
            <ul>
                <li>Propriedade do Produto:
                    <code>log<sub>a</sub>(xy) = log<sub>a</sub>(x) + log<sub>a</sub>(y)</code>
                </li>
                <li>Propriedade do Quociente:
                    <code>log<sub>a</sub>(x/y) = log<sub>a</sub>(x) - log<sub>a</sub>(y)</code>
                </li>
                <li>Propriedade da Potência:
                    <code>log<sub>a</sub>(x<sup>p</sup>) = p × log<sub>a</sub>(x)</code>
                </li>
                <li>Logaritmo na Base 10:
                    <code>log<sub>10</sub>(x) = log(x)</code>
                </li>
            </ul>
        `
    };

    document.getElementById('formulas').innerHTML = formulas[topic] || '<p>Selecione um tópico para ver as fórmulas.</p>';
}
