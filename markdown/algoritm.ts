// Interfaces y tipos
interface Student {
  id: number;
  modalSubjects: [string, string];  // Tupla de exactamente 2 asignaturas
  optionalSubject: string;
  religion: string;
}

type SubjectCombination = [
  modalSubjects: [string, string],
  optionalSubject: string,
  religion: string
];

type StudentGroup = Student[];

// Constantes
const MODAL_SUBJECTS = [
  "Física y Química",
  "Biología, Geología y Ciencias Ambientales",
  "Dibujo Técnico I",
  "Tecnología e Ingeniería I"
] as const;

const OPTIONAL_SUBJECTS = [
  "Economía",
  "Segunda Lengua Extranjera FRANCES I",
  "Segunda Lengua Extranjera ITALIANO I",
  "Cultura Audiovisual",
  "Lenguaje y Práctica Musical",
  "Dibujo Técnico I"
] as const;

const RELIGION_OPTIONS = [
  "ATENCIÓN EDUCATIVA",
  "Religión CATÓLICA",
  "Religión EVANGÉLICA",
  "Religión ISLÁMICA"
] as const;

// Función principal de agrupamiento
function createBalancedGroups(
  students: Student[],
  groupSize: number = 25,
  numGroups: number = 10
): StudentGroup[] {
  // Inicializar grupos
  const groups: StudentGroup[] = Array(numGroups).fill([]).map(() => []);

  // Crear mapa de combinaciones
  const combinations = new Map<string, Student[]>();

  // Agrupar estudiantes por combinación de asignaturas
  students.forEach(student => {
      const combo = JSON.stringify([
          student.modalSubjects.sort(),
          student.optionalSubject,
          student.religion
      ]);

      if (!combinations.has(combo)) {
          combinations.set(combo, []);
      }
      combinations.get(combo)?.push(student);
  });

  // Distribuir estudiantes en grupos
  let currentGroup = 0;

  combinations.forEach((comboStudents) => {
      comboStudents.forEach(student => {
          // Buscar siguiente grupo con espacio
          while (groups[currentGroup].length >= groupSize) {
              currentGroup = (currentGroup + 1) % numGroups;
          }

          groups[currentGroup].push(student);
          currentGroup = (currentGroup + 1) % numGroups;
      });
  });

  return groups;
}

// Función para generar datos de prueba
function createSampleData(numStudents: number = 250): Student[] {
  const students: Student[] = [];

  for (let i = 0; i < numStudents; i++) {
      // Seleccionar 2 asignaturas de modalidad diferentes
      const modalSubjects = shuffleArray([...MODAL_SUBJECTS])
          .slice(0, 2) as [string, string];

      // Seleccionar 1 asignatura optativa
      const optionalSubject = OPTIONAL_SUBJECTS[
          Math.floor(Math.random() * OPTIONAL_SUBJECTS.length)
      ];

      // Seleccionar 1 opción de religión
      const religion = RELIGION_OPTIONS[
          Math.floor(Math.random() * RELIGION_OPTIONS.length)
      ];

      students.push({
          id: i,
          modalSubjects,
          optionalSubject,
          religion
      });
  }

  return students;
}

// Función auxiliar para mezclar array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Función para analizar grupos
function analyzeGroups(groups: StudentGroup[]): void {
  groups.forEach((group, index) => {
      console.log(`\nGrupo ${index + 1} (${group.length} estudiantes):`);

      // Contar combinaciones de asignaturas
      const modalCounts = new Map<string, number>();
      const optionalCounts = new Map<string, number>();
      const religionCounts = new Map<string, number>();

      group.forEach(student => {
          // Contar modalidades
          const modalKey = student.modalSubjects.sort().join(', ');
          modalCounts.set(modalKey, (modalCounts.get(modalKey) || 0) + 1);

          // Contar optativas
          optionalCounts.set(
              student.optionalSubject,
              (optionalCounts.get(student.optionalSubject) || 0) + 1
          );

          // Contar religión
          religionCounts.set(
              student.religion,
              (religionCounts.get(student.religion) || 0) + 1
          );
      });

      // Mostrar estadísticas
      console.log('  Combinaciones de modalidad más comunes:');
      Array.from(modalCounts.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .forEach(([combo, count]) => {
              console.log(`    ${combo}: ${count} estudiantes`);
          });

      console.log('  Optativas más comunes:');
      Array.from(optionalCounts.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .forEach(([subject, count]) => {
              console.log(`    ${subject}: ${count} estudiantes`);
          });

      console.log('  Distribución religión:');
      Array.from(religionCounts.entries())
          .sort((a, b) => b[1] - a[1])
          .forEach(([religion, count]) => {
              console.log(`    ${religion}: ${count} estudiantes`);
          });
  });
}

// Ejemplo de uso
const students = createSampleData();
const groups = createBalancedGroups(students);
analyzeGroups(groups);
