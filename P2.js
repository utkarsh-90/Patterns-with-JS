// pattern 2

function pattern2() {
    for (let i = 1; i <= 3; i++){
        let star = ""
        for (let j = 1; j <= i; j++){
            star += "*"
        }
        console.log(star);
    }
}
pattern2()