var words = [
    [
        "あいなし",
        "あかず",
        "あからさま(なり)",
        "あさまし",
        "あそび",
        "あだ(なり)",
        "あたらし",
        "あぢきなし",
        "あて(なり)",
        "あながち(なり)",
        "あはれ(なり)",
        "あまた",
        "あやし",
        "あやにく(なり)",
        "ありがたし",
        "ありく",
        "いう(なり)",
        "いかが(は)せむ",
        "いかで",
        "いかめし",
        "いぎたなし",
        "いさ(や)",
        "いそぎ",
        "いたづら(なり)",
        "いつしか(＋願望)",
        "いとど",
        "いとほし",
        "いぶかし",
        "いぶせし",
        "いますがり",
        "いみじ",
        "いらふ･いらへ",
        "うし",
        "うしろめたし",
        "うたて",
        "うちつけ(なり)",
        "うつくし",
        "うつつ",
        "うるはし",
        "え(～ず)",
        "おくる",
        "おこたる",
        "おこなふ",
        "おとなし",
        "おどろおどろし",
        "おどろく",
        "おのづから",
        "おはす",
        "おぼす",
        "おぼつかなし",
        "おほやけ",
        "おぼゆ",
        "おぼろけ(なり)",
        "おもて(を)ふす",
        "おろか(なり)",
        "おろす",
        "かこつ",
        "かしこし",
        "かしづく",
        "かたはらいたし",
        "かたみに",
        "かづく",
        "かなし･かなしうす",
        "からし",
        "かる",
        "きこゆ",
        "ぐす",
        "くちをし",
        "けしからず",
        "けしき",
        "げに",
        "ここら･そこら",
        "こころあり",
        "こころぐるし",
        "こころざし",
        "こころづきなし",
        "こころづくし",
        "こころにくし",
        "こころもとなし",
        "こそ～已然形、･･･(下に続く)",
        "ことわり(なり)",
        "こまやか(なり)",
        "さうざうし",
        "さうなし",
        "ざえ",
        "さかし",
        "さすがに",
        "さながら",
        "さはれ",
        "さら(なり)",
        "したたむ",
        "しどけなし",
        "しる",
        "しるし",
        "すき",
        "すさび",
        "すさまじ",
        "すずろ(なり)",
        "ずちなし",
        "すなはち",
        "せうそこ･せうそく",
        "そこばく",
        "そぞろ(なり)",
        "だに",
        "たのむ",
        "たまふ(四段活用)",
        "たまふ(下二段活用)",
        "たより",
        "ついで",
        "つきづきし",
        "つとめて",
        "つやつや･さらに･すべて･つゆ･おほかた･あへて･たえて(＋打消)",
        "つれなし",
        "てしが(な)･にしが(な)",
        "ときめく",
        "とく",
        "ところせし",
        "とし",
        "としごろ",
        "とみ(なり)",
        "とむ",
        "な(～そ)",
        "なかなか(なり)",
        "ながむ",
        "なつかし",
        "などー(か･て･や)",
        "なのめ(なり)",
        "なべて",
        "なほ",
        "なまめかし",
        "なむ",
        "ねんごろ(なり)",
        "ねんず",
        "ののしる",
        "はかなし",
        "はかばかし",
        "はしたなし",
        "はつか(なり)",
        "はづかし",
        "ばや",
        "ひがごと",
        "びんなし",
        "ふびん(なり)",
        "ふみ",
        "ほい",
        "まうけ",
        "まだき",
        "まめ(なり)",
        "まゐる",
        "むげ(なり)",
        "むつかし",
        "めざまし",
        "めづ",
        "めでたし",
        "やがて",
        "やすし",
        "やすらふ",
        "やはら･やをら",
        "やむごとなし",
        "ゆかし",
        "ゆゆし",
        "よし",
        "よしなし",
        "よも(～じ･まじ)",
        "らうらうじ",
        "れいの",
        "わびし",
        "わりなし",
        "をさをさ(＋打消)",
    ],
    [
        "あいぎゃう",
        "あえか(なり)",
        "あからめ",
        "あきらむ",
        "あく",
        "あくがる",
        "あげつらふ",
        "あさむ",
        "あし",
        "あした",
        "あそばす",
        "あない(す)",
        "あなかま",
        "あなづらはし",
        "あなる",
        "あふ",
        "あへず",
        "あへなむ",
        "あやなし",
        "あらがふ",
        "あらぬ",
        "あらまほし",
        "あり",
        "ありつる",
        "いたし",
        "いたはし",
        "いつく",
        "いなぶ",
        "いはけなし",
        "いふかひなし",
        "いまいまし",
        "うきよ",
        "うけたまはる",
        "うしろみ",
        "うしろやすし",
        "うす",
        "うたてし",
        "うち",
        "うつろふ",
        "うとし",
        "うるさし",
        "えさらず",
        "えん(なり)",
        "おいらか(なり)",
        "おづ",
        "おと",
        "おとなぶ",
        "おはします",
        "おぼえ",
        "おほけなし",
        "おほとのごもる",
        "おもしろし",
        "およずく･およすぐ",
        "かくる",
        "かしかまし",
        "かずならず",
        "かたし",
        "かたち",
        "かたへ",
        "かたほ(なり)",
        "かち",
        "かつ",
        "ーがり･ーのがり",
        "きよし･きよら(なり)",
        "くまなし",
        "けいす/そうす",
        "けうとし",
        "けうら(なり)",
        "けしきばむ",
        "ここのへ",
        "こころうし",
        "こころなし",
        "こころばへ",
        "こころゆく",
        "こしらふ",
        "こちたし",
        "こちなし",
        "ことごとし",
        "こよなし",
        "さがなし",
        "さだめて",
        "さて",
        "さはり",
        "さはる",
        "さぶらふ/はべり",
        "さらず",
        "さらぬ",
        "さらば",
        "さる",
        "さるべき",
        "しか",
        "しのぶ",
        "しほたる",
        "しろしめす",
        "すくよか(なり)",
        "ずは",
        "せち(なり)",
        "せむかたなし",
        "せめて",
        "そこはかとなし",
        "そしる",
        "そのかみ",
        "そらごと",
        "たいだいし",
        "たけし",
        "ただならず",
        "たづき",
        "たばかる",
        "たぶ",
        "たまさか(なり)",
        "ちぎり",
        "つかはす",
        "つか(う)まつる",
        "つたなし",
        "つつましげ(なり)",
        "つつむ",
        "つま",
        "つらし",
        "つれづれ(なり)",
        "てふ",
        "とが",
        "とぶらふ",
        "ながめ",
        "なごり",
        "なさけ",
        "なでふ",
        "なほざり(なり)",
        "なやむ",
        "ならふ",
        "にくし",
        "にげなし",
        "になし",
        "にほふ",
        "ねたし",
        "のたまはす",
        "のたまふ",
        "はた",
        "はばかる",
        "はやく〔う〕(〜けり)",
        "ひたぶる(なり)",
        "ふるさと",
        "ほいなし",
        "ほだし",
        "ほっしん",
        "まうく",
        "まかづ",
        "まかる",
        "まこと",
        "まさなし",
        "まどふ",
        "まどゐ",
        "まねぶ",
        "まほ(なり)",
        "まもる･まぼる",
        "みそか(なり)",
        "みまかる",
        "みやび",
        "みゆ",
        "むくつけし",
        "むつかる",
        "むつまじ",
        "むべ",
        "めす",
        "めづらし",
        "めやすし",
        "もがな･もがも",
        "もてなす",
        "ものかは",
        "ものす",
        "やうやう",
        "やさし",
        "やつす",
        "やつる",
        "やる",
        "やるかたなし",
        "ゆくりなし",
        "ゆめ(＋禁止･打消)",
        "ゆゑ",
        "よしあり",
        "よしなしごと",
        "よすが",
        "よそふ",
        "よのなか",
        "よもすがら",
        "よをすつ･よをのがる",
        "らうたし",
        "わく",
        "わざと",
        "わたり",
        "わたる",
        "わづらふ",
        "わぶ",
        "ゐる",
        "〜を〜み",
        "をかし",
        "をこ(なり)",
        "をさをさし"
    ],
    [
        "あかなくに",
        "あざる",
        "あかる",
        "あつし",
        "あべかり",
        "あへなし",
        "あめり",
        "あらたし",
        "あらは(なり)",
        "あらまし",
        "あらます",
        "ありありて",
        "ありとある",
        "ありもつかず",
        "あるじす",
        "あるじまうけ",
        "あるは",
        "あるやうこそは",
        "あれかにもあらず",
        "いざたまへ",
        "いちのひと",
        "いづら",
        "いでたつ",
        "いと･いたく〔う〕(+打消)",
        "いとけなし",
        "いとはし",
        "いとふ",
        "いひけつ",
        "います",
        "いまだし",
        "いまめかし",
        "いむ",
        "いもぬ",
        "うたてあり",
        "うちとく",
        "うつたへに",
        "うつはもの",
        "うとまし",
        "うへ",
        "う〔む〕まのはなむけ",
        "うめく",
        "うらなし",
        "うんず",
        "えならず",
        "おきつ",
        "おきな/おうな",
        "おとど",
        "おとなふ",
        "おほす",
        "おもて",
        "おもて",
        "おもて(を)おこす",
        "かきくらす",
        "かぎり",
        "かごと",
        "かし",
        "かしまし",
        "かずまふ",
        "かたくな(なり)",
        "かど",
        "かまびすし",
        "かまふ",
        "かまへて",
        "かりそめ(なり)",
        "かんず",
        "きは",
        "きはやか(なり)",
        "きゃうきゃう(なり)",
        "くすし",
        "くたす",
        "くつ",
        "くもゐ",
        "くんず",
        "けう(なり)",
        "けさう",
        "けし",
        "けしうはあらず",
        "けつ",
        "けに",
        "けむ",
        "けやけし",
        "こうず",
        "こころまうけ",
        "こぞ",
        "ことうけ",
        "ことさむ",
        "ことなしび･ことなしぶ",
        "ことのは",
        "こぼつ",
        "さが",
        "さきざき",
        "さくもん",
        "さやか(なり)",
        "さゆ",
        "さらぬわかれ",
        "さりがたし",
        "さるは",
        "さわがし",
        "しかじ",
        "しかり",
        "したりがほ",
        "しづ",
        "しな",
        "しふ",
        "しらなみ",
        "すきずきし",
        "すくせ",
        "すごし",
        "すさぶ",
        "すだく",
        "すべなし",
        "すまふ",
        "すゑ",
        "ずんず",
        "せきあふ",
        "ただ",
        "たふ",
        "たへたる",
        "たまのを",
        "たまはる",
        "たまゆら",
        "ためし",
        "ためらふ",
        "たゆむ",
        "ついゐる",
        "つきかげ",
        "つきなし",
        "つきなみの",
        "つと",
        "つぼ",
        "てうず",
        "てづから",
        "ところえがほ",
        "どち",
        "なづさふ",
        "なづむ",
        "なにおふ",
        "なまめく",
        "なめし",
        "なめり",
        "なやまし",
        "なゆ",
        "にくさげ(なり)",
        "ねぶ",
        "ねをなく",
        "のぼる",
        "はかなくなる",
        "はつ",
        "はな",
        "はらから",
        "ひがひがし",
        "ひつ",
        "ひとかたならず",
        "ひとりごつ",
        "ひとわろし",
        "ひなぶ",
        "ひねもす",
        "ひる",
        "ふうが",
        "ふすま",
        "ふりはへ(て)",
        "ふる",
        "まうづ",
        "まうでく",
        "まがふ",
        "まがまがし",
        "またし",
        "まだし",
        "またなし",
        "まゐらす",
        "みちみちし",
        "みゆき",
        "みる",
        "むず",
        "むすぶ",
        "むずらむ",
        "むつぶ",
        "むなしくなる",
        "めり",
        "もしるく",
        "もぞ・もこそ",
        "もどかし",
        "もどく",
        "ものがたりす",
        "ものから",
        "ものし",
        "やくと",
        "やまだち",
        "やらむ・やらん",
        "ゆふされば・ゆふさる",
        "ゆる",
        "ようせずは",
        "よし(〜とも)",
        "よばふ",
        "らうあり",
        "らうがはし",
        "らむ",
        "わくらばに",
        "ゐざる",
        "をし",
        "をりふし"
    ],
];
var indexes = [
    [...Array(words[0].length).keys()],
    [...Array(words[1].length).keys()],
    [],
    [...Array(words[2].length).keys()],
];

var wordIndexA = 0;
var wordIndexB = 0;
var wordIndexC = 0;
var wordIndexP = 0;
var isTitle = true;
var mode = 0;
var first = false;

var toDelete = [];


var word = document.getElementById("word");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var counter = document.getElementById("counter");
var pirikara = document.getElementById("pirikara");
var reverse = document.getElementById("reverse");
var back = document.getElementById("back");

var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonP = document.getElementById("buttonP");

var data = document.getElementById("data");
var usage = document.getElementById("usage");
var royal = document.getElementById("royal")

window.onload = function() {
    if (String(localStorage.getItem("indexesP")) == "null") {
        buttonP.textContent = "ピリ辛(0語)";
    }else {
        let indexesText = String(localStorage.getItem("indexesP"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[2][i] = Number(indexesString[i]);
        }
        let l = indexes[2].length
        if (indexes[2][0] == 0) {
            indexes[2] = [];
        }
        buttonP.textContent = "ピリ辛("+ String(l) + "語)";
    }
};

function toWordsScene() {
    title1.hidden = true;
    title2.hidden = true;
    buttonA.hidden = true;
    buttonB.hidden = true;
    buttonC.hidden = true;
    buttonP.hidden = true;
    data.hidden = true;
    usage.hidden = true;
    royal.hidden = true;
    pirikara.hidden = false;
    reverse.hidden = false;
    back.hidden = false;
    isTitle = false;

    first = true;

    pirikara.textContent = "辛";
    reverse.textContent = "逆";
    back.textContent = "戻";
}

buttonA.onclick = function() {
    if (String(localStorage.getItem("indexesA")) == "null") {
        shuffle(0);
    }else {
        let indexesText = String(localStorage.getItem("indexesA"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[0][i] = Number(indexesString[i]);
        }
        wordIndexA = Number(localStorage.getItem("wordIndexA"))
    }

    mode = 1;
    toWordsScene();
    
    word.textContent = words[0][indexes[0][wordIndexA]];
    counter.textContent = String(wordIndexA+1) + "/168";

    for(let i = 0; i < indexes[2].length; i++) {
        if (i < 1000 && indexes[2][i] == indexes[0][wordIndexA]) {
            pirikara.style.color = "red";
            console.log("red from buttona.onclick");
        }
    }

    localStorage.setItem("indexesA", indexes[0]);
    localStorage.setItem("wordIndexA", wordIndexA);
}

//indexesPが保存されない

buttonB.onclick = function() {
    if (String(localStorage.getItem("indexesB")) == "null") {
        shuffle(1);
    }else {
        let indexesText = String(localStorage.getItem("indexesB"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[1][i] = Number(indexesString[i]);
        }
        wordIndexB = Number(localStorage.getItem("wordIndexB"));
    }

    mode = 2;
    toWordsScene();

    word.textContent = words[1][indexes[1][wordIndexB]];
    counter.textContent = String(wordIndexB+1) + "/197";

    for(let i = 0; i < indexes[2].length; i++) {
        if (indexes[2][i] - 1000 == indexes[1][wordIndexB]) {
            pirikara.style.color = "red"
            console.log("red from buttonb.onclick")
        }
    }

    localStorage.setItem("indexesB", indexes[1])
    localStorage.setItem("wordIndexB", wordIndexB)
}

buttonC.onclick = function() {
    if (String(localStorage.getItem("indexesC")) == "null") {
        shuffle(3);
    }else {
        let indexesText = String(localStorage.getItem("indexesC"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[3][i] = Number(indexesString[i]);
        }
        wordIndexC = Number(localStorage.getItem("wordIndexC"))
    }
    
    mode = 4;
    toWordsScene();
    
    word.textContent = words[2][indexes[3][wordIndexC]];
    counter.textContent = String(wordIndexC+1) + "/199";


    for(let i = 0; i < indexes[2].length; i++) {
        if (indexes[2][i] - 2000 == indexes[3][wordIndexC]) {
            pirikara.style.color = "red"
            console.log("red from buttonc.onclick")
        }
    }

    localStorage.setItem("indexesC", indexes[3])
    localStorage.setItem("wordIndexC", wordIndexC)
}

buttonP.onclick = function() {
    toDelete = [];
    if (String(localStorage.getItem("indexesP")) == "null") {
        // shuffle(2);
    }else {
        let indexesText = String(localStorage.getItem("indexesP"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[2][i] = Number(indexesString[i]);
        }
        wordIndexP = Number(localStorage.getItem("wordIndexP"))
    }

    if (indexes[2].length > 0 && indexes[2][0] != 0) {
        
        mode = 3;
        toWordsScene();
    
        if (indexes[2][wordIndexP] > 1000) {
            word.textContent = words[0][indexes[1][wordIndexP - 1000]];
        }else {
            word.textContent = words[1][indexes[2][wordIndexP]];
        }
        
        counter.textContent = String(wordIndexP+1) + "/" + String(indexes[2].length);
    
        pirikara.style.color = "red"
        console.log("red from buttonp.onclick")

        localStorage.setItem("indexesP", indexes[2])
        localStorage.setItem("wordIndexP", wordIndexP)
    } 
}

data.onclick = function() {
    var result1 = confirm("Aのデータを消しますか？消したら最初からになります。");
    if (result1) {
        wordIndexA = 0;
        localStorage.removeItem("indexesA")
        localStorage.removeItem("wordIndexA")
    }
    var result2 = confirm("Bのデータを消しますか？消したら最初からになります。");
    if (result2) {
        wordIndexB = 0;
        localStorage.removeItem("indexesB")
        localStorage.removeItem("wordIndexB")
    }
    var result3 = confirm("Cのデータを消しますか？消したら最初からになります。");
    if (result3) {
        wordIndexC = 0;
        localStorage.removeItem("indexesC")
        localStorage.removeItem("wordIndexC")
    }
    var result4 = confirm("ピリ辛のデータを消しますか？ピリ辛に設定した単語が0語になります。");
    if (result4) {
        var result5 = confirm("本当にピリ辛のデータを消しますか？ピリ辛に設定した単語が0語になります。");
        if (result5) {
            wordIndexP = 0;
            localStorage.removeItem("indexesP")
            localStorage.removeItem("wordIndexP")

            indexes[2] = [];
            buttonP.textContent = "ピリ辛(0語)";

            // if (String(localStorage.getItem("indexesP")) == "null") {
            //     buttonP.textContent = "ピリ辛(0語)";
            // }else {
            //     let indexesText = String(localStorage.getItem("indexesP"));
            //     let indexesString = indexesText.split(",");
            //     for(let i = 0; i < indexesString.length; i++) {
            //         indexes[2][i] = Number(indexesString[i]);
            //     }
            //     let l = indexes[2].length
            //     if (indexes[2][0] == 0) {
            //         indexes[2] = [];
            //     }
            //     buttonP.textContent = "ピリ辛("+ String(l) + "語)";
            // }
        } 
    }
}

usage.onclick = function() {
    alert(`★★★★★使い方★★★★★
①すべての単語にイラストがついていて、ゴロ合わせで楽しく覚えられる古文単語帳をGETしよう！

②とりあえずパラパラめくってお気に入りのゴロ合わせを探してみよう！

③まずは重要単語から！Aと書いてある単語を単語帳で見ていこう！覚えようと意識しないで、ゴロとイラストを見たり、口ずさんだりするだけでOK！

④A(169語)を押して、画面をタップするとAの単語がランダムに出てくるので、「出てきた単語のゴロを”正確に”言えるか？」と「イラストを思い出せるか？」をチェックしていこう！完璧じゃなければすぐに単語帳で調べよう！

⑤「覚えにくい」「ややこしい」「何回も間違えている」そんな単語があれば、「辛」ボタンを押そう！すると「ピリ辛」にその単語が追加されるので、苦手な単語をまとめられる！

⑥B、Cもやってみよう！何人かで競い合ってゴロを素早く言う会を開催するのもGOOD！

⑦実際に古文を読んでみよう！自然とゴロが出てくるはず！ゴロは古文読解の潤滑油！「どんな内容の文章なのか」に集中できるようになる！

その他：「逆」を押すとひとつ前の単語に戻る　「戻」を押すとタイトル画面に戻る
途中までで中断してサイトを閉じてもデータが保存されるので続きから再開できます！
ブラウザ(Safari、Chromeなど)のメニューを開いて、「ホーム画面に追加」をすると、アプリのようにホーム画面に表示されるので便利です！

★★★★★現在の世界記録★★★★★
〇A単語最初の10語のゴロを言うタイムアタック
　14.73秒`);
}

pirikara.onclick = function(e) {
    e.stopPropagation();

    if (!isTitle) {
        if (mode == 1 && pirikara.style.color != "red") {
            indexes[2].push(indexes[0][wordIndexA])
            pirikara.style.color = "red"
        }else if (mode == 2 && pirikara.style.color != "red") {
            indexes[2].push(indexes[1][wordIndexB] + 1000)
            pirikara.style.color = "red"
        }else if (mode == 4 && pirikara.style.color != "red") {
            indexes[2].push(indexes[3][wordIndexC] + 2000)
            pirikara.style.color = "red"
        }else if (mode == 1 && pirikara.style.color == "red") {
            indexes[2].splice(indexes[2].findIndex(e => e === indexes[0][wordIndexA]), 1)
            pirikara.style.color = "black"
        }else if (mode == 2 && pirikara.style.color == "red") {
            indexes[2].splice(indexes[2].findIndex(e => e === indexes[1][wordIndexB] + 1000), 1)
            pirikara.style.color = "black"
        }else if (mode == 3 && pirikara.style.color == "red") {
            // indexes[2].delete(wordIndexP, 1);
            toDelete.push(indexes[2][wordIndexP])
            pirikara.style.color = "black";
        }else if (mode == 4 && pirikara.style.color == "red") {
            indexes[2].splice(indexes[2].findIndex(e => e === indexes[3][wordIndexC] + 2000), 1)
            pirikara.style.color = "black"
        }

        localStorage.setItem("indexesP", indexes[2])
    }
}

function toTitleScene() {
    title1.hidden = false;
    title2.hidden = false;
    buttonA.hidden = false;
    buttonB.hidden = false;
    buttonC.hidden = false;
    buttonP.hidden = false;
    data.hidden = false; 
    usage.hidden = false;
    royal.hidden = false;
    pirikara.hidden = true;
    reverse.hidden = true;
    back.hidden = true;
    isTitle = true;
    word.textContent = "";
    counter.textContent = "";
    mode = 0; 
}

back.onclick = function(e) {
    e.stopPropagation();
    if (!isTitle) {
        toTitleScene();

        for(let i = 0; i < toDelete.length; i++) {
            indexes[2].splice(indexes[2].findIndex(e => e === toDelete[i]), 1)
        }

        toDelete = [];

        localStorage.setItem("indexesP", indexes[2])

        let l = indexes[2].length
        if (indexes[2][0] == 0) {
            // l = 0
            indexes[2] = [];
        }
        buttonP.textContent = "ピリ辛("+ String(l) + "語)";

        // pirikara.style.color = "black";
    }
}


reverse.onclick = function(e) {
    e.stopPropagation();
    if (!isTitle) {
        if (mode == 1 && wordIndexA > 0) {    
            wordIndexA --;
            pirikara.style.color = "black"
            
            for(let i = 0; i < indexes[2].length; i++) {
                if (indexes[2][i] == indexes[0][wordIndexA]) {
                    pirikara.style.color = "red"
                }
            }
            
            word.textContent = words[0][indexes[0][wordIndexA]];
            counter.textContent = String(wordIndexA+1) + "/168";
            localStorage.setItem("wordIndexA", wordIndexA);
        }else if (mode == 2 && wordIndexB > 0) {    
            wordIndexB --;
            pirikara.style.color = "black"

            for(let i = 0; i < indexes[2].length; i++) {
                if (indexes[2][i] - 1000 == indexes[1][wordIndexB]) {
                    pirikara.style.color = "red"
                    console.log("red from reverse.onclick")
                }
            }

            word.textContent = words[1][indexes[1][wordIndexB]];
            counter.textContent = String(wordIndexB+1) + "/197";
            localStorage.setItem("wordIndexB", wordIndexB);
        }else if (mode == 4 && wordIndexC > 0) {    
            wordIndexC --;
            pirikara.style.color = "black"

            for(let i = 0; i < indexes[2].length; i++) {
                if (indexes[2][i] - 2000 == indexes[3][wordIndexC]) {
                    pirikara.style.color = "red"
                    console.log("red from reverse.onclick")
                }
            }

            word.textContent = words[2][indexes[3][wordIndexC]];
            counter.textContent = String(wordIndexC+1) + "/198";
            localStorage.setItem("wordIndexC", wordIndexC);
        }
        /*
        else if (mode == 3 && wordIndexP != 0) {  
            wordIndexP --;
            pirikara.style.color = "red"

            if (indexes[2][wordIndexP] > 1000) {
                word.textContent = words[1][indexes[2][wordIndexP] - 1000];
            }else if (indexes[2][wordIndexP] < 1000) {
                word.textContent = words[0][indexes[2][wordIndexP]];
            }

            counter.textContent = String(wordIndexP+1) + "/" + String(indexes[2].length);

            localStorage.setItem("wordIndexP", wordIndexP);
        }
        */
    }
}


document.onclick = function() {
    if (!isTitle) {
        if (mode == 1) {
            if (first) {
                first = false;
            }else {
                wordIndexA ++;
                pirikara.style.color = "black"
                for(let i = 0; i < indexes[2].length; i++) {
                    if (indexes[2][i] == indexes[0][wordIndexA]) {
                        pirikara.style.color = "red"
                        console.log("red from document.onclick a")
                    }
                }
            }
            word.textContent = words[0][indexes[0][wordIndexA]];
            counter.textContent = String(wordIndexA+1) + "/169";
            localStorage.setItem("wordIndexA", wordIndexA);

            if (wordIndexA >= words[0].length) {
                wordIndexA = 0;
                tiTitleScene();

                localStorage.removeItem("indexesA")
                localStorage.removeItem("wordIndexA")
            }
        }else if (mode == 2) {
            if (first) {
                first = false;
            }else {
                wordIndexB ++;
                pirikara.style.color = "black"
                for(let i = 0; i < indexes[2].length; i++) {
                    if (indexes[2][i] - 1000 == indexes[1][wordIndexB]) {
                        pirikara.style.color = "red"
                        console.log("red from document.onclick b")

                    }
                }
            }
            word.textContent = words[1][indexes[1][wordIndexB]];
            counter.textContent = String(wordIndexB+1) + "/197";
            localStorage.setItem("wordIndexB", wordIndexB);
            if (wordIndexB >= words[1].length) {
                wordIndexB = 0;
                toTitleScene();

                localStorage.removeItem("indexesB");
                localStorage.removeItem("wordIndexB");
            }
        }else if (mode == 3) {
            if (first) {
                first = false;
                shuffle(2);
                localStorage.setItem("indexesP", indexes[2]);
            }else {
                wordIndexP ++;
                pirikara.style.color = "red";
                console.log("red from document.onclick p");
            }

            if (indexes[2][wordIndexP] > 2000) {
                word.textContent = words[2][indexes[2][wordIndexP] - 2000];
            }else if (indexes[2][wordIndexP] > 1000) {
                word.textContent = words[1][indexes[2][wordIndexP] - 1000];
            }else if (indexes[2][wordIndexP] < 1000) {
                word.textContent = words[0][indexes[2][wordIndexP]];
            }

            counter.textContent = String(wordIndexP+1) + "/" + String(indexes[2].length);

            localStorage.setItem("wordIndexP", wordIndexP);
            if (wordIndexP >= indexes[2].length) {
                wordIndexP = 0;
                toTitleScene();

                // localStorage.removeItem("indexesP")
                localStorage.removeItem("wordIndexP");

                for(let i = 0; i < toDelete.length; i++) {
                    indexes[2].splice(indexes[2].findIndex(e => e === toDelete[i]), 1);
                }
        
                toDelete = [];
        
                localStorage.setItem("indexesP", indexes[2]);
        
        
                let l = indexes[2].length;
                if (indexes[2][0] == 0) {
                    indexes[2] = [];
                }
                buttonP.textContent = "ピリ辛("+ String(l) + "語)";

                pirikara.style.color = "black";
            }
        }else if (mode == 4) {
            if (first) {
                first = false;
            }else {
                wordIndexC ++;
                pirikara.style.color = "black";
                for(let i = 0; i < indexes[2].length; i++) {
                    if (indexes[2][i] - 2000 == indexes[3][wordIndexC]) {
                        pirikara.style.color = "red";
                        console.log("red from document.onclick c");
                    }
                }
            }
            word.textContent = words[2][indexes[3][wordIndexC]];
            counter.textContent = String(wordIndexC+1) + "/201";
            localStorage.setItem("wordIndexC", wordIndexC);
            if (wordIndexC >= words[2].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonC.hidden = false;
                buttonP.hidden = false;
                data.hidden = false; 
                usage.hidden = false;
                royal.hidden = false;
                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexC = 0;
                mode = 0;
                localStorage.removeItem("indexesC");
                localStorage.removeItem("wordIndexC");
            }
        }
    }

}

var shuffle = function(n) {
    for (var i = indexes[n].length - 1; i >= 0; i--) {
        // 0~iのランダムな数値を取得
        var rand = Math.floor(Math.random() * (i+1));
      
        // 配列の数値を入れ替える
        [indexes[n][i], indexes[n][rand]] = [indexes[n][rand], indexes[n][i]];
    }
}