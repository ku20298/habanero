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

var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");

var life1 = document.getElementById("life1");
var life2 = document.getElementById("life2");


var player1 = document.getElementsByClassName("player1");
var player2 = document.getElementsByClassName("player2");

var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

var modoru = document.getElementById("modoru");

var passed1 = document.getElementById("passed1");
var passed2 = document.getElementById("passed2");

var pirikara1 = document.getElementById("pirikara1");
var pirikara2 = document.getElementById("pirikara2");

var level;
var isStart = false;
var tmpwords
var out = 0;
var is1 = false
var is2 = false
var isEnd = false
var counter = 0

window.onload = function() {
    word1.textContent = "6"
    word2.textContent = "6"

    life1.textContent = sessionStorage.getItem("time")
    life2.textContent = sessionStorage.getItem("time")

    level = Number(sessionStorage.getItem("level"));
    // word1.textContent = sessionStorage.getItem("level")
    // reduceLife();
    countDown();
};

player1[0].onclick = function() {
    if (isStart && word1.textContent != "アウト" && !isEnd) {
        console.log("Hello")
        life1.textContent = String(Number(life1.textContent) + 3);
        if (Number(life1.textContent) > 10) {
            life1.style.color = "white";
        }
        word1.textContent = tmpwords[Math.floor(Math.random() * tmpwords.length)]
    }
}
player2[0].onclick = function() {
    if (isStart && word2.textContent != "アウト" && !isEnd) {
        life2.textContent = String(Number(life2.textContent) + 3);
        if (Number(life2.textContent) > 10) {
            life2.style.color = "white";
        }
        word2.textContent = tmpwords[Math.floor(Math.random() * tmpwords.length)]
        console.log("Hello")
    }
}

modoru.onclick = function() {
    location.href='royal.html'
    out = 0
    isStart = false
    isEnd = false
    is1 = false
    is2 = false
}

pass1.onclick = function(e) {
    // console.log("KKKKKKKK")
    e.stopPropagation();
    if (isStart && !isEnd) {
        if (Number(life1.textContent) > 0) {
            passed1.textContent += word1.textContent + "　";
        }
        word1.textContent = tmpwords[Math.floor(Math.random() * tmpwords.length)]
        life1.textContent = String(Number(life1.textContent) - 2);
        if (Number(life1.textContent) <= 0) {
            // word2.style.color = "red";
            life1.textContent = "0";
            is1 = true;
            if (word1.textContent != "アウト") {
                out++;
                word1.textContent = "アウト";
                passed1.style.visibility = "visible";
                pirikara1.style.visibility = "visible";
            } 
        }
    }
    
}

pass2.onclick = function(e) {
    e.stopPropagation();
    if (isStart && !isEnd) {
        if (Number(life2.textContent) > 0) {
            passed2.textContent += word2.textContent + "　";
        }
        word2.textContent = tmpwords[Math.floor(Math.random() * tmpwords.length)]
        life2.textContent = String(Number(life2.textContent) - 2);
        if (Number(life2.textContent) <= 0) {
            // word2.style.color = "red";
            life2.textContent = "0";
            is2 = true;
            if (word2.textContent != "アウト") {
                out++;
                word2.textContent = "アウト";
                passed2.style.visibility = "visible";
                pirikara2.style.visibility = "visible";
            }
        }
    }
    
}

function countDown() {
    if (Number(word1.textContent) > 0) {
        word1.textContent = String(Number(word1.textContent) - 1);
        word2.textContent = String(Number(word2.textContent) - 1);
        if (Number(word1.textContent) == 0) {
            word1.textContent = "スタート";
            word2.textContent = "スタート";
        }
        setTimeout(countDown, 1000)
    }else {
        reduceLife();
        isStart = true;
        if (level < 3) {
            tmpwords = words[level]
        }else {
            tmpwords = words[0].concat(words[1]).concat(words[2])
            
            console.log(tmpwords.length)
        }
        word1.textContent = tmpwords[Math.floor(Math.random() * tmpwords.length)]
        word2.textContent = tmpwords[Math.floor(Math.random() * tmpwords.length)]
        
    }
}

function reduceLife() {

    life1.textContent = String(Number(life1.textContent) - 1)
    if (Number(life1.textContent) <= 10 && Number(life1.textContent) > 0) {
        life1.style.color = "red";
    }
    if (Number(life1.textContent) <= 0) {
        // word1.textContent = "アウト";
        // word1.style.color = "red";
        life1.textContent = "0";
        is1 = true;
        if (word1.textContent != "アウト") {
            out++;
            word1.textContent = "アウト";
            passed1.style.visibility = "visible";
            pirikara1.style.visibility = "visible";
        }
    }

    life2.textContent = String(Number(life2.textContent) - 1)
    if (Number(life2.textContent) <= 10 && Number(life2.textContent) > 0) {
        life2.style.color = "red";
    }
    if (Number(life2.textContent) <= 0) {
        // word2.style.color = "red";
        life2.textContent = "0";
        is2 = true;
        if (word2.textContent != "アウト") {
            out++;
            word2.textContent = "アウト";
            passed2.style.visibility = "visible";
            pirikara2.style.visibility = "visible";
        }
    }

    // if (life2.textContent = "0") {
    //     word2.textContent = "アウト";
    // }else {
    //     life2.textContent = String(Number(life2.textContent) - 1)
    // }
    // if (life3.textContent = "0") {
    //     word3.textContent = "アウト";
    // }else {
    //     life3.textContent = String(Number(life3.textContent) - 1)
    // }
    // if (life4.textContent = "0") {
    //     word4.textContent = "アウト";
    // }else {
    //     life4.textContent = String(Number(life4.textContent) - 1)
    // }

    if (out == 1) {
        if (!is1) {
            word1.textContent = "勝ち"
            word1.style.color = "red"
            passed1.style.visibility = "visible";
            pirikara1.style.visibility = "visible";
        }else if (!is2) {
            word2.textContent = "勝ち"
            word2.style.color = "red"
            passed2.style.visibility = "visible";
            pirikara2.style.visibility = "visible";
        }
        isEnd = true;
        modoru.hidden = false;
    }
    if (out == 2) {
        isEnd = true;
        modoru.hidden = false;
    }

    if (!isEnd) {
            
        let d = 1000
        if (counter < 30) {
            d = 1000
        }else if (counter < 60) {
            d = 900
        }else if (counter < 90) {
            d = 800
        }else if (counter < 120) {
            d = 700
        }else {
            d = 600
        }
        console.log(counter, d)
        setTimeout(reduceLife, d)
        counter++
    }
}