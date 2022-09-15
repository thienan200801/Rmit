function rmitformat(s) {
    let res = s.trim().split(' ');
    
    let resv2 = res.filter(e=>{
        return e!=="";
    })

    let resv3 = resv2.join(' ');
    resv3 += '.';

    let resv4 = resv3.charAt(0).toUpperCase() + resv3.slice(1);
    return resv4;
}

function rmitcut(array, n){
    let ans = [];
    for(let i = 0; i<array.length; i++){
        let tmp = '';
        let lastEmpty = '';
        for(let j=0; j<n; j++){
            tmp += array[i][j];
        }
        for(let l=n; l>=0; l--){
            if(tmp[l] === ' ') {
                lastEmpty = tmp.slice(0, l);
                break;
            }
        }
        ans.push(lastEmpty);
    }
    return ans;
}

function main(){
    console.log(rmitformat("   hello   world    Kelbin    !"));
    console.log(rmitcut(["hello world", "I love you"], 7));
}

main();