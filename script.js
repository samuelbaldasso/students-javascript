const students = [
    {
        nome: "Samuel Baldasso",
        n1: 7,
        n2: 8,
    },
    {
        nome: "Adriana Calcanhoto",
        n1: 8,
        n2: 9,
    },
    {
        nome: "Diego Fernandes",
        n1: 6,
        n2: 5,
    },
]

function calcAverage(n1, n2) {
    return (n1 + n2) / 2;
}

function showAlert(){
    for (const student of students) {
        let average = calcAverage(student.n1, student.n2);
        if(average >= 7){
            alert(`A média de ${student.nome} é de: ${average}. Parabéns, você passou no concurso.`);
        }else{
            alert(`A média de ${student.nome} é de: ${average}. Não foi dessa vez, tente novamente.`);
        }
    }
}

showAlert();


