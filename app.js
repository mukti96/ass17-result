
const student_form = document.getElementById('student_form');
const data_list = document.getElementById('data_list');


student_form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = student_form.querySelector("input[placeholder='Name']");
    let roll = student_form.querySelector("input[placeholder='Roll Number']");
    let student_class = student_form.querySelector("input[placeholder='Class Name']");
    let photo = student_form.querySelector("input[placeholder='Photo']");
    let gender = student_form.querySelector("input[type='radio']:checked");
    let ban = student_form.querySelector("input[placeholder='Bangla']");
    let eng = student_form.querySelector("input[placeholder='English']");
    let math = student_form.querySelector("input[placeholder='Math']");
    let sci = student_form.querySelector("input[placeholder='Science']");
    let ss = student_form.querySelector("input[placeholder='Social Science']");
    let reli = student_form.querySelector("input[placeholder='Religion']");

    if(name.value == '' || roll.value == '' || student_class.value == '' || photo.value == '' || gender.value == ''){
        alert('All fields are requird');
    }else{
        
        let storate_data = [];
        if( dataGet('result_apps')){
            storate_data = dataGet('result_apps');
        }

        storate_data.push({
            name: name.value,
            roll: roll.value,
            className: student_class.value,
            photo: photo.value,
            gender: gender.value,
            ban: ban.value,
            eng: eng.value,
            math: math.value,
            sci: sci.value,
            ss: ss.value,
            reli: reli.value
        })

        dataSend('result_apps', storate_data);

    student_form.querySelector("input[placeholder='Name']").value = '';
    student_form.querySelector("input[placeholder='Roll Number']").value = '';
    student_form.querySelector("input[placeholder='Class Name']").value = '';
    student_form.querySelector("input[placeholder='Photo']").value = '';
    student_form.querySelector("input[type='radio']:checked").removeAttribute('checked');
    student_form.querySelector("input[placeholder='Bangla']").value = '';
    student_form.querySelector("input[placeholder='English']").value = '';
    student_form.querySelector("input[placeholder='Math']").value = '';
    student_form.querySelector("input[placeholder='Science']").value = '';
    student_form.querySelector("input[placeholder='Social Science']").value = '';
    student_form.querySelector("input[placeholder='Religion']").value = '';

    }

    allStudentData();

});

allStudentData();
function allStudentData(){
    let all_data = dataGet('result_apps');
    let data = '';
    all_data.reverse().map((student, index) => {
        data += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.className}</td>
                <td>${student.gender}</td>
                <td>A</td>
                <td>4.00</td>
                <td><img style="width:50px; height:40px; object-fit: cover;" src="${student.photo}"></td>
                <td>
                <button class="btn btn-info btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#student_single_modal" onclick="resultview(${index})">View</button>
                <button onclick="deletestudent(${index})" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        `;
    });
    data_list.innerHTML = data;
};

// delete student data
function deletestudent(id){

    let conf = confirm('Are you sure ?');

    if(conf){
        let storage_data =dataGet('result_apps');
        storage_data.splice(id, 1);
        dataSend('result_apps', storage_data);
        allStudentData();
    }else{
        return false;
    }
    
}

const student_result_data = document.querySelector('.student-result-data');
// resultview
function resultview(index){
    let output2 = new Result();
    let storage_data =dataGet('result_apps');
    student_result_data.innerHTML = `
        <img class="shadow" src="${storage_data[index].photo}" alt="">
          <h2>Mukti</h2>
          <hr>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>GPA</th>
                  <th>Grade</th>
                  <th>CGPA</th>
                  <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bangla</td>
                <td>70</td>
                <td>3</td>
                <td>B</td>
                <td rowspan="6">4</td>
                <td rowspan="6">A+</td>
              </tr>
              <tr>
                <td>Bangla</td>
                <td>70</td>
                <td>4</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Bangla</td>
                <td>70</td>
                <td>4</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Bangla</td>
                <td>70</td>
                <td>4</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Bangla</td>
                <td>70</td>
                <td>4</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Bangla</td>
                <td>70</td>
                <td>4</td>
                <td>A</td>
              </tr>
            </tbody>
          </table>
    `;
}