function calculaSal(salario) {
    const inss = salario * 0.11;
    const ir = salario * 0.27;
    const salarioLiq = salario - (ir + inss);

    let message = `Salário bruto: ${salario}\nINSS: ${inss}\nIR: ${ir}\nSalario Liquido: ${salarioLiq}`;

    console.log(message);
}

calculaSal(2700);