
const student_form = document.getElementById('student_form');

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
            gender: gender.value,
            photo: photo.value
        })

        dataSend('result_apps', storate_data);

    }

});