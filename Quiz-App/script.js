window.alert("Welcome to the Quiz");


function ready(){
    const total = 3;
    var score = 0;
    const res = document.querySelector('.result');
    console.log('res');
    //Get the data
    const q1 = document.forms['quiz']['q1'].value;
    const q2 = document.forms['quiz']['q2'].value;
    const q3 = document.forms['quiz']['q3'].value;
    const fa = document.querySelector('.fa')


    //Validation
    for(i=1;i<=total;i++){
        if(eval('q'+i)==null || eval('q'+i)==''){
            alert("You have missed question"+i);
        }
    }

    //set ans
    const ans = ['a','a','c'];

    //check answers
    for(i=1;i<=total;i++){
        if(eval('q'+i)==ans[i-1]){
            score++;
        }
    }
    alert(score);
    fa.innerHTML = score;
    return false;
}

