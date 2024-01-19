// pattern 5

function pattern5() {
    for (let i = 3; i >= 1;i--){
        let star = ""
        for (let j = 1; j <= i; j++){
            star +="*" 
        }
        console.log(star);
    }
}
pattern5()