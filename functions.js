
function dataSend(key , arr){
    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;
}

function data(key){
    let data = localStorage.getItem(key);
    return data ? JSON.parse() : false ;
}