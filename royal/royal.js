var startBtn = document.getElementById("startButton");
var introBtn = document.getElementById("introButton");
var backBtn = document.getElementById("backButton");

var level;

startBtn.onclick = function() {
    let plCheck = document.getElementsByName('pl');

    if (plCheck.item(0).checked) {
        location.href='battle1.html'
    }else if (plCheck.item(1).checked) {
        location.href='battle2.html'
    }else if (plCheck.item(2).checked) {
        location.href='battle3.html'
    }else if (plCheck.item(2).checked) {
        location.href='battle4.html'
    }

    
    let lvCheck = document.getElementsByName('lv');
    if (lvCheck.item(0).checked) {
        sessionStorage.setItem('level', '0');
    }else if (lvCheck.item(1).checked) {
        sessionStorage.setItem('level', '1');
    }else if (lvCheck.item(2).checked) {
        sessionStorage.setItem('level', '2');
    }else if (lvCheck.item(3).checked) {
        sessionStorage.setItem('level', '3');
    }

    let hardCheck = document.getElementsByName('hard');
    if (hardCheck.item(0).checked) {
        sessionStorage.setItem("time", '30');
    }else if (hardCheck.item(1).checked) {
        sessionStorage.setItem("time", '15');
    }
}

introBtn.onclick = function() {
    alert(`★★★★★ルール★★★★★
①単語の上に自分の残りライフが表示されています。ライフはどんどん減っていきます。
②自分のライフが0になったらアウトです。
③最後まで生き残ったら勝ちです。バトルロイヤル形式です。
④出てきた単語のゴロを声に出して言えたら、言い終わってから（注意！）自分のエリアの画面のどこかをタップしてください。タップするとライフが3増えます。わかってないのに押してはいけません。
⑤ゴロがわからなかったら「パス」のボタンを押してもいいです。でも押すとライフが2減ります。
⑥わからなかった単語は試合が終わった後にその都度確認するといいです。
`);

}

backBtn.onclick = function() {
    location.href='../index.html'
}
