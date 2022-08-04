import { Class, ClassData, Student, StudentResponse } from "../types";

export const login = async (name: string) => {
  const studentFilterFecth = await fetch(
    `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students?filterByFormula=(%7BName%7D%3D%22${name}%22)&api_key=keyFt92KorZvH3kGd`
  );

  const students: StudentResponse = await studentFilterFecth.json();
  const filteredStudent: Student[] = students.records;

  let data: undefined | ClassData[] = undefined;

  if (filteredStudent.length > 0) {
    data = [];
    const student = filteredStudent[0];
    const classes = student.fields.Classes;

    for (let i = 0; i < classes.length; i++) {
      const classId = classes[i];
      const classData: ClassData = {
        name: "",
        students: [],
      };

      const classFilterFecth = await fetch(
        `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/${classId}?api_key=keyFt92KorZvH3kGd`
      );

      const filteredClass: Class | undefined = await classFilterFecth.json();
      if (filteredClass) {
        classData.name = filteredClass.fields.Name;
        const studentsIds = filteredClass.fields.Students;
        for (let j = 0; j < studentsIds.length; j++) {
          const studentId = studentsIds[j];

          const studentFilter = await fetch(
            `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students/${studentId}?api_key=keyFt92KorZvH3kGd`
          );

          const studentRes: Student | undefined = await studentFilter.json();
          if (studentRes) {
            classData.students.push(studentRes.fields.Name);
          }
        }
      }

      data.push(classData);
    }
  }
  return data;
};
