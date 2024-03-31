let name1 = document.getElementById("i")
let surname = document.getElementById("f")
let lastname = document.getElementById("o")
let birthday = document.getElementById("br")
let year2 = document.getElementById("year2")
let faculty = document.getElementById("napr")

let table = document.getElementById("table")

let button1 = document.getElementById("add");

let fiofilt = document.getElementById("fiofilt")
let facfilt = document.getElementById("facfilt")
let filtYear1 = document.getElementById("filtYear1")
let filtYear2 = document.getElementById("filtYear2")

button1.addEventListener('click', async () => {
try {
  const response = await fetch('http://localhost:3000/api/students', {
    method: 'post',
    body: JSON.stringify({name: name1.value, surname: surname.value, lastname: lastname.value, birthday: birthday.value, studyStart: year2.value, faculty: faculty.value}),
    headers: { 'Content-Type': 'application/json' }
  }); 
  if (response.ok) {
    const res = await axios.get('http://localhost:3000/api/students');
    const students = res.data;
    table.getElementsByTagName('tbody')[0].innerHTML = '';
    students.forEach(student => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td>${student.surname + " " + student.name + " " + student.lastname}</td>
      <td>${student.faculty}</td>
      <td>${student.birthday}</td>
      <td>${student.studyStart}</td>
      <td style="text-align: center;"><button class="deleteButton" data-id="${student.id}" style="background-color: #363636; color: white; border: none;">X</button></td>
      `;
      table.getElementsByTagName('tbody')[0].appendChild(tr);
});
console.log(students);
const deleteButtons = document.querySelectorAll('.deleteButton');
deleteButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const studentId = button.dataset.id;
    await axios.delete(`http://localhost:3000/api/students/${studentId}`);
    console.log(`Студент с ID ${studentId} удален`);
    const row = button.parentNode.parentNode;
    row.remove('lox i')
  });
});
button1.innerHTML = "Добавить студента";
name1.style.border = "none";
surname.style.border = "none";
lastname.style.border = "none";
birthday.style.border = "none";
year2.style.border = "none";
faculty.style.border = "none";
} else {
  throw new Error("Ошибка при отправке данных");
}
} catch (error) {
  console.error(error);
  button1.innerHTML = "Произошла ошибка";
  if (name1.value === "") {name1.style.border = "1px solid red";}
    else{name1.style.border = "none";}
  if (surname.value === "") {surname.style.border = "1px solid red";}
    else{surname.style.border = "none";}
  if (lastname.value === "") {lastname.style.border = "1px solid red";}
    else{lastname.style.border = "none";}
  if (birthday.value === "") {birthday.style.border = "1px solid red";}
    else{birthday.style.border = "none";}
  if (year2.value === "") {year2.style.border = "1px solid red";}
    else{year2.style.border = "none";}
  if (faculty.value === "") {faculty.style.border = "1px solid red";}
    else{faculty.style.border = "none";}
  }
});

function filter(){
  const filt1 = fiofilt.value.toLowerCase();
  const filt2 = facfilt.value.toLowerCase();
  const filt3 = filtYear1.value;
  const filt4 = filtYear2.value;
  for(let i = 1; i < table.rows.length; i++){
    const row = table.rows[i]
    const name = row.cells[0].textContent.toLowerCase();
    const facultyfilt = row.cells[1].textContent.toLowerCase();
    const startyear = row.cells[2].textContent;
    const endyear = row.cells[3].textContent;

    const isNameMatch = name.includes(filt1);
    const isFacultyMatch = facultyfilt.includes(filt2);
    const isStartYearMatch = startyear.includes(filt3);
    const isEndYearMatch = endyear.includes(filt4);
  if (isNameMatch && isFacultyMatch && isStartYearMatch && isEndYearMatch){
    row.style.display = '';
  } else{
      row.style.display = "none";
    }
  }
}
fiofilt.addEventListener('input', filter);
facfilt.addEventListener('input', filter);
filtYear1.addEventListener('input', filter);
filtYear2.addEventListener('input', filter);