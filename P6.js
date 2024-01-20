// pattern 6

function pattern6() {
    for (let i = 3; i >= 1; i--){
        let num = "";
        for (let j = 1; j <= i; j++){
            num += j
        }
        console.log(num);
    }
}
pattern6()