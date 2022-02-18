function Result(){

    // GPA Calculation

    this.gpaAndGrade = function(mark){

        this.gpa;
        this.grade;

        if(mark >= 0 && mark < 33){
            gpa = 0;
            grade = 'F';
        }else if(mark >= 33 && mark < 40){
            gpa = 1;
            grade = 'D';
        }else if(mark >= 40 && mark < 50){
            gpa = 2;
            grade = 'C';
        }else if(mark >= 50 && mark < 60){
            gpa = 3;
            grade = 'B';
        }else if(mark >= 60 && mark < 70){
            gpa = 3.5;
            grade = 'A-';
        }else if(mark >= 70 && mark < 80){
            gpa = 4;
            grade = 'A';
        }else if(mark >= 80 && mark <= 100){
            gpa = 5;
            grade = 'A+';
        }

        return {
            gpacal: gpa,
            gradecal: grade,
        };

    }

   


    // totalGrade
    this.totalGrade =  function(cgpa){

        if(cgpa >= 0 && cgpa < 1){
            return  'f';
        }else if(cgpa >= 1 && cgpa < 2){
            return  'd';
        }else if(cgpa >= 2 && cgpa < 3){
            return ' c';
        }else if(cgpa >= 3 && cgpa < 3.5){
            return  'b';
        }else if(cgpa >= 3.5 && cgpa < 4){
            return ' a-';
        }else if(cgpa >= 4 && cgpa < 5){
            return  'a';
        }else if(cgpa == 5){
            return  'a+';
        }


    }



    // CGPA

    this.cgpa = function(bn, en, math, s, ss, rel) {

        let total_gpa = ( bn + en + math + s + ss + rel );

        let cgpa = total_gpa / 6;

        if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
            return " you are failed ";
        }else{
            return ` your cgpa ${cgpa.toFixed()} & Grade = ${ this.totalGrade(cgpa) } `;
        }


    }





}


