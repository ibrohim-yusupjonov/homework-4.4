const students= [
    { name: "Bekmurod", group: "NT-79", success: true },
    { name: "Asliddin", group: "NT-77", success: true },
    { name: "Ahmadxon", group: "NT-70", success: false },
    { name: "Ibrohim", group: "NT-77", success: true },
    { name: "Xojiakbarxon", group: "NT-70", success: true },
    { name: "Abbos", group: "NT-79", success: true },
    { name: "Iroda", group: "NT-77", success: true },
    { name: "Abduraxim", group: "NT-70", success: false },
    { name: "Komiljon", group: "NT-79", success: false },
    { name: "Javlonbek", group: "NT-70", success: true },
    { name: "Muhammadrizo", group: "NT-79", success: true },
    { name: "Azizbek", group: "NT-79", success: false },
    { name: "Jahongir", group: "NT-71", success: false },
    { name: "Alisher", group: "NT-79", success: true },
    { name: "Jake", group: "NT-77", success: true },
    { name: "Kate", group: "NT-65", success: false },
    { name: "Sam", group: "NT-77", success: false },
    { name: "Phil", group: "NT-34", success: true },
    { name: "Ed", group: "NT-45", success: true },
    { name: "Tami", group: "NT-34", success: true },
    { name: "Mary", group: "NT-45", success: false },
    { name: "Becky", group: "NT-67", success: false },
    { name: "Joey", group: "NT-45", success: true },
    { name: "Jeff", group: "NT-34", success: true },
    { name: "Zack", group: "NT-79", success: false },
    { name: "Zack", group: "NT-71", success: false },
   ];
   const studentsTableBody = document.getElementById('student-table-body');

       /*
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    */


    function renderStudents(s){
        studentsTableBody.innerHTML = ""; 
        s.forEach( function(student, index)  {
        const tr = document.createElement('tr')

        const orderTh = document.createElement('th')
        orderTh.setAttribute("scope", "row");
        orderTh.innerHTML = index;

        const nameTd = document.createElement('td');
        nameTd.innerHTML = student.name;

        const groupTd = document.createElement('td')
        groupTd.innerHTML = student.group;

        const resultTd = document.createElement('td')
        const resultInner = document.createElement('span')
        resultInner.classList.add("badge")
        if(student.success){
            resultInner.classList.add("text-bg-primary")
            resultInner.innerHTML = "O'tdi"
        }else {
            resultInner.classList.add("text-bg-danger")
            resultInner.innerHTML = "Yiqildi"
        }
        resultTd.append(resultInner);

        const delTd = document.createElement("td");
      const delButton = document.createElement("button");
      const editButton = document.createElement("button");
      delButton.innerHTML = "Delete";
      editButton.innerHTML = "Edit";
      editButton.classList.add("btn", "btn-warning", "mx-2")
      delButton.classList.add("btn", "btn-danger");
      delButton.addEventListener("click", function(e) {
          e.stopPropagation();
          console.log(student.id);
          students.splice(index, 1);

          renderStudents(students)
        })

        editButton.setAttribute("data-bs-toggle", "modal")
        editButton.setAttribute("data-bs-target", "#editModal")

        editButton.onclick = (e) => {
          e.stopPropagation();
          const nameInput = document.getElementById("student-name");

          nameInput.value = student.name
        }
        delTd.append(editButton, delButton);

        tr.dataset.identifierId =student.id
        tr.append(orderTh, nameTd, groupTd, resultTd, delTd);
        studentsTableBody.append(tr)
      })
    }
    
     renderStudents(students)


     document.getElementById('filter-input').addEventListener('input' , function (e){
        const searchValue = e.target.value;
        const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()))
        renderStudents(filteredStudents)
     })

     studentsTableBody.addEventListener("click", (e) => {
        const student = students.find(student => student.id === +e.target.parentNode.dataset.identifierId);
      
        alert(student.name + " " + student.group)
      })
      
      document.getElementById("input_group").addEventListener('input', function (e) {
        const searchGroupValue = e.target.value;
      
        const filteredGroupStudents = students.filter(student => student.group.toLowerCase().includes(searchGroupValue.toLowerCase()));
      
        renderStudents(filteredGroupStudents);
      
      })
   