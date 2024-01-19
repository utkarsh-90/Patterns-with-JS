// pattern 3
function pattern3() {
    for (let i = 1; i <= 3; i++){
        let num = ""
        for (let j = 1; j <= i; j++){
            num +=j
        }
        console.log(num);
    }
}

pattern3()