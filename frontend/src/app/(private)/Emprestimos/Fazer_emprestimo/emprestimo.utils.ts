interface Student {
  name: string;
  course: string;
  call_number: number;
  grade_level: string;
}

export const getDateAfter10Days = () => {
  const dateNow = new Date();

  dateNow.setDate(dateNow.getDate() + 10);

  return String(dateNow.toLocaleDateString("PT-BR"));
};

export const formatToObject = (data: string) => {
  const finalObject = Object.fromEntries(
    String(data)
      .split("\n") // Transforma a string em um array de linhas
      .map((linha) => linha.split(": ")) // Para cada linha, cria um array [chave, valor]
  );
  return finalObject;
};

interface FormatStudent {
  Nome: string;
  Curso: string;
  "Número da chamada": number;
}
export const formatStudent = (data: FormatStudent): Student => {
  const [grade_level, course] = data.Curso.split(" ");

  return {
    name: data.Nome,
    course,
    call_number: data["Número da chamada"],
    grade_level,
  };
};
