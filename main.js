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
];
var indexes = [
    [...Array(words[0].length).keys()],
    [...Array(words[1].length).keys()],
    [],
];

var wordIndexA = 0;
var wordIndexB = 0;
var wordIndexP = 0;
var isTitle = true;
var mode = 0;
var first = false;

var toDelete = false;


var word = document.getElementById("word");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var counter = document.getElementById("counter");
var pirikara = document.getElementById("pirikara");
var reverse = document.getElementById("reverse");
var back = document.getElementById("back");

var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonP = document.getElementById("buttonP");

window.onload = function() {
    if (String(localStorage.getItem("indexesP")) == "null") {
        buttonP.textContent = "ピリ辛(0語)";
    }else {
        let indexesText = String(localStorage.getItem("indexesP"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[2][i] = Number(indexesString[i]);
        }
        buttonP.textContent = "ピリ辛("+ String(indexesString.length) + "語)";
    }
};

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
    title1.hidden = true;
    title2.hidden = true;
    buttonA.hidden = true;
    buttonB.hidden = true;
    buttonP.hidden = true;
    pirikara.hidden = false;
    reverse.hidden = false;
    back.hidden = false;
    isTitle = false;
    mode = 1;
    first = true;
    word.textContent = words[0][indexes[0][wordIndexA]];
    counter.textContent = String(wordIndexA+1) + "/168";

    pirikara.textContent = "辛";
    reverse.textContent = "逆";
    back.textContent = "戻";

    for(let i = 0; i < indexes[2].length; i++) {
        if (i < 1000 && indexes[2][i] == indexes[0][wordIndexA]) {
            pirikara.style.color = "red"
        }
    }

    localStorage.setItem("indexesA", indexes[0])
    localStorage.setItem("wordIndexA", wordIndexA)
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
        wordIndexB = Number(localStorage.getItem("wordIndexB"))
    }
    title1.hidden = true;
    title2.hidden = true;
    buttonA.hidden = true;
    buttonB.hidden = true;
    buttonP.hidden = true;
    pirikara.hidden = false;
    reverse.hidden = false;
    back.hidden = false;
    isTitle = false;
    mode = 2;
    first = true;
    word.textContent = words[1][indexes[1][wordIndexB]];
    counter.textContent = String(wordIndexB+1) + "/197";

    pirikara.textContent = "辛";
    reverse.textContent = "逆";
    back.textContent = "戻";

    for(let i = 0; i < indexes[2].length; i++) {
        if (i > 1000 && indexes[2][i] == indexes[1][wordIndexB]) {
            pirikara.style.color = "red"
        }
    }

    localStorage.setItem("indexesB", indexes[1])
    localStorage.setItem("wordIndexB", wordIndexB)
}

buttonP.onclick = function() {
    toDelete = false
    if (String(localStorage.getItem("indexesP")) == "null") {
        shuffle(2);
    }else {
        let indexesText = String(localStorage.getItem("indexesP"));
        let indexesString = indexesText.split(",");
        for(let i = 0; i < indexesString.length; i++) {
            indexes[2][i] = Number(indexesString[i]);
        }
        wordIndexP = Number(localStorage.getItem("wordIndexP"))
    }
    if (indexes[2].length > 0) {
        title1.hidden = true;
        title2.hidden = true;
        buttonA.hidden = true;
        buttonB.hidden = true;
        buttonP.hidden = true;
        pirikara.hidden = false;
        reverse.hidden = false;
        back.hidden = false;
        isTitle = false;
        mode = 3;
        first = true;
    
        if (indexes[2][wordIndexP] > 1000) {
            word.textContent = words[0][indexes[1][wordIndexP - 1000]];
        }else {
            word.textContent = words[1][indexes[2][wordIndexP]];
        }
        
        counter.textContent = String(wordIndexP+1) + "/" + String(indexes[2].length);
    
        pirikara.textContent = "辛";
        reverse.textContent = "逆";
        back.textContent = "戻";
    
        pirikara.style.color = "red"

        localStorage.setItem("indexesP", indexes[2])
        localStorage.setItem("wordIndexP", wordIndexP)
    } 
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
        }else if (mode == 1 && pirikara.style.color == "red") {
            indexes[2].splice(indexes[2].findIndex(e => e === indexes[0][wordIndexA]), 1)
            pirikara.style.color = "black"
        }else if (mode == 2 && pirikara.style.color == "red") {
            indexes[2].splice(indexes[2].findIndex(e => e === indexes[1][wordIndexB] + 1000), 1)
            pirikara.style.color = "black"
        }else if (mode == 3 && pirikara.style.color == "red") {
            // indexes[2].delete(wordIndexP, 1);
            toDelete = true;
            pirikara.style.color = "black";
        }

        localStorage.setItem("indexesP", indexes[2])
    }
}

back.onclick = function(e) {
    e.stopPropagation();
    if (!isTitle) {
        title1.hidden = false;
        title2.hidden = false;
        buttonA.hidden = false;
        buttonB.hidden = false;
        buttonP.hidden = false;

        pirikara.hidden = true;
        reverse.hidden = true;
        back.hidden = true;
        isTitle = true;
        word.textContent = "";
        counter.textContent = "";
        mode = 0; 
        buttonP.textContent = "ピリ辛("+ String(indexes[2].length) + "語)";
    }
}

/*
reverse.onclick = function(e) {
    e.stopPropagation();
    if (!isTitle) {
        if (mode == 1 && wordIndexA != 0) {
            if (first) {
                first = false;
            }else {
                wordIndexA --;
                pirikara.style.color = "black"
                for(let i = 0; i < indexes[2].length; i++) {
                    if (indexes[2][i] == wordIndexA) {
                        pirikara.style.color = "red"
                    }
                }
            }
            console.log(wordIndexA)
            word.textContent = words[0][indexes[0][wordIndexA]];
            counter.textContent = String(wordIndexA+1) + "/168";
            localStorage.setItem("wordIndexA", wordIndexA);

            if (wordIndexA >= words[0].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonP.hidden = false;

                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexA = 0;
                mode = 0;
                localStorage.removeItem("indexesA")
                localStorage.removeItem("wordIndexA")
            }
        }else if (mode == 2 && wordIndexB != 0) {
            if (first) {
                first = false;
            }else {
                wordIndexB --;
                pirikara.style.color = "black"
                for(let i = 0; i < indexes[2].length; i++) {
                    if (i > 1000 && indexes[2][i] == wordIndexB) {
                        pirikara.style.color = "red"
                    }
                }
            }
            word.textContent = words[1][indexes[1][wordIndexB]];
            counter.textContent = String(wordIndexB+1) + "/197";
            localStorage.setItem("wordIndexB", wordIndexB);
            if (wordIndexB >= words[1].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonP.hidden = false;

                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexB = 0;
                mode = 0;
                localStorage.removeItem("indexesB")
                localStorage.removeItem("wordIndexB")
            }
        }else if (mode == 3 && wordIndexP != 0) {
            console.log(words[0][indexes[2][wordIndexP]])
            if (first) {
                first = false;
            }else {
                wordIndexP --;
                pirikara.style.color = "red"
            }
            if (indexes[2][wordIndexP] > 1000) {
                word.textContent = words[1][indexes[2][wordIndexP] - 1000];
            }else if (indexes[2][wordIndexP] < 1000) {
                word.textContent = words[0][indexes[2][wordIndexP]];
            }

            counter.textContent = String(wordIndexP+1) + "/" + String(indexes[2].length);

            localStorage.setItem("wordIndexP", wordIndexP);
            if (wordIndexP >= indexes[2].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonP.hidden = false;

                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexP = 0;
                mode = 0;
                // localStorage.removeItem("indexesP")
                localStorage.removeItem("wordIndexP")
            }
        }
    }


}
*/

document.onclick = function() {
    if (!isTitle) {
        if (mode == 1) {
            if (first) {
                first = false;
            }else {
                wordIndexA ++;
                pirikara.style.color = "black"
                for(let i = 0; i < indexes[2].length; i++) {
                    if (i < 1000 && indexes[2][i] == wordIndexA) {
                        pirikara.style.color = "red"
                    }
                }
            }
            word.textContent = words[0][indexes[0][wordIndexA]];
            counter.textContent = String(wordIndexA+1) + "/168";
            localStorage.setItem("wordIndexA", wordIndexA);

            if (wordIndexA >= words[0].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonP.hidden = false;

                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexA = 0;
                mode = 0;
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
                    if (i > 1000 && indexes[2][i] == wordIndexB) {
                        pirikara.style.color = "red"
                    }
                }
            }
            word.textContent = words[1][indexes[1][wordIndexB]];
            counter.textContent = String(wordIndexB+1) + "/197";
            localStorage.setItem("wordIndexB", wordIndexB);
            if (wordIndexB >= words[1].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonP.hidden = false;

                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexB = 0;
                mode = 0;
                localStorage.removeItem("indexesB")
                localStorage.removeItem("wordIndexB")
            }
        }else if (mode == 3) {
            if (first) {
                first = false;
                shuffle(2);
                localStorage.setItem("indexesP", indexes[2])
            }else {
                if (toDelete) {
                    indexes[2].splice(wordIndexP, 1);
                    localStorage.setItem("indexesP", indexes[2])
                }
                wordIndexP ++;
                pirikara.style.color = "red"
            }
            if (indexes[2][wordIndexP] > 1000) {
                word.textContent = words[1][indexes[2][wordIndexP] - 1000];
            }else if (indexes[2][wordIndexP] < 1000) {
                word.textContent = words[0][indexes[2][wordIndexP]];
            }

            counter.textContent = String(wordIndexP+1) + "/" + String(indexes[2].length);

            localStorage.setItem("wordIndexP", wordIndexP);
            if (wordIndexP >= indexes[2].length) {
                title1.hidden = false;
                title2.hidden = false;
                buttonA.hidden = false;
                buttonB.hidden = false;
                buttonP.hidden = false;

                pirikara.hidden = true;
                reverse.hidden = true;
                back.hidden = true;
                isTitle = true;
                word.textContent = "";
                counter.textContent = "";
                wordIndexP = 0;
                mode = 0;
                // localStorage.removeItem("indexesP")
                localStorage.removeItem("wordIndexP")
            }
        }
    }

}

var shuffle = function(n) {
    for (var i = indexes[n].length - 1; i >= 0; i--) {
        // 0~iのランダムな数値を取得
        var rand = Math.floor( Math.random() * ( i + 1 ) );
      
        // 配列の数値を入れ替える
        [indexes[n][i], indexes[n][rand]] = [indexes[n][rand], indexes[n][i]];
    }
}