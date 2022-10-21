"use strict";









const questions = [
  {
    id: 1,
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers: ['約28万人', '約79万人', '約183万人'],
    correctNumber: 1,
    reference: '経済産業省 2019年3月 － IT 人材需給に関する調査',
    img: '../assets-ph1-website-main/img/quiz/img-quiz01.png',
    option1: '約28万人',
    option2: '約79万人',
    option3: '約183万人',
  },
  {
    id: 2,
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctNumber: 2,
    img: '../assets-ph1-website-main/img/quiz/img-quiz02.png',
    option1: 'INTECH',
    option2: 'BIZZTECH',
    option3: 'X-TECH',
  },
  {
    id: 3,
    question: 'IoTとは何の略でしょう？',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNumber: 0,
    img: '../assets-ph1-website-main/img/quiz/img-quiz03.png',
    option1: 'Internet of Things',
    option2: 'Integrate into Technology',
    option3: 'Information  on Tool',
  },
  {
    id: 4,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNumber: 0,
    reference: 'Society5.0 - 科学技術政策 - 内閣府',
    img: '../assets-ph1-website-main/img/quiz/img-quiz04.png',
    option1: 'Society 5.0',
    option2: 'CyPhy',
    option3: 'SDGs',
  },
  {
    id: 5,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correctNumber: 0,
    img: '../assets-ph1-website-main/img/quiz/img-quiz05.png',
    option1: 'Web3.0',
    option2: 'NFT',
    option3: 'メタバース',
  },
  {
    id: 6,
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers: ['約2倍', '約5倍', '約11倍'],
    correctNumber: 1,
    reference: 'Accenture Technology Vision 2021',
    img: '../assets-ph1-website-main/img/quiz/img-quiz06.png',
    option1: '約2倍',
    option2: '約5倍',
    option3: '約11倍',
  }
];



// function createQuiz(i) {
for (let i = 0; i< questions.length; i++) {

  let element = document.getElementById('box');

  let text = `<div class="q1">
  <div class="q1-content js-quiz" data-quiz="0">
    <p class="q1-heading">Q${questions[i].index}</p>
    <div class="q1-heading-content">
      ${questions[i].question}
    </div>
    <div class="q1-image">
    <img
    src="${questions[i].img}" />
    </div>
    <div class="q1-answer">
      <p>A</p>
    </div>
    <div class="q1-button">
      <ul class="p-quiz-box__answer__list ">
        <li class="p-quiz-box__answer_item">
          <button class="p-quiz-box__answer__button js-answer" data-answer="0">
            ${questions[i].option1}
            <img src="../assets-ph1-website-main/img/icon/icon-arrow.svg"/>
          </button>
        </li>
        <li class="p-quiz-box__answer__button2">
        <button class="p-quiz-box__answer__button js-answer" data-answer="1">
        ${questions[i].option2}
          <img src="../assets-ph1-website-main/img/icon/icon-arrow.svg" />
        </button>
      </li>
        <li>
        <button class="p-quiz-box__answer__button js-answer" data-answer="2">
        ${questions[i].option3}
          <img src="../assets-ph1-website-main/img/icon/icon-arrow.svg" />
        </button>
      </li>
      </ul>
    </div>
  
    <div class="p-quiz-box__answer__correct js-answerBox">
      <p class="js-answerTitle"></p>
      <p class="js-answerText"></p>
    </div>
  
    <div class="q1-reference">  
      <img
        src="../assets-ph1-website-main/img/icon/icon-note.svg"
        alt=""
      />
      <p>${questions[i].reference}</p>
    
    </div>
  </div>
  </div>`;
  // };
  
  
 element.insertAdjacentHTML('beforebegin', text);
};

  
  // //実行結果
  // <p>Paragraph</p> //←ここに追加
  // <div id="box">
  //   <h1>Title</h1>
  // </div>

  
  // const shuffle = arrays => {
  //   const array = arrays.slice();
  //   for (let i = array.length - 1; i >= 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  //   }
  //   return array
  // }

const shuffleQuiz = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // const quizArray = shuffle(questions)


  // すべての問題を取得
  const allQuiz = document.querySelectorAll(".js-quiz");

  // buttonタグにdisabledを付与
  const setDisabled = (answers) => {
    answers.forEach((answer) => {
      answer.disabled = true;
    });
  };
  // trueかfalseで出力する文字列を出し分ける
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? "正解！" : "不正解...";
    if (isCorrect == true) {
      target.classList.add("js-answerTitle-correct");
    } else {
      target.classList.add("js-answerTitle-incorrect")
    }
  };

  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? "is-correct" : "is-incorrect");
  };

  // console.log(allQuiz);

  // 各問題の中での処理
  allQuiz.forEach((quiz) => {
    const answers = quiz.querySelectorAll(".js-answer");
    const selectedQuiz = Number(quiz.getAttribute("data-quiz"));
    const answerBox = quiz.querySelector(".js-answerBox");
    const answerTitle = quiz.querySelector(".js-answerTitle");
    const answerText = quiz.querySelector(".js-answerText");

    answers.forEach((answer) => {
      answer.addEventListener("click", () => {
        answer.classList.add("is-selected");
        const selectedAnswer = Number(answer.getAttribute("data-answer"));

        // console.log(selectedAnswer);

        // 全てのボタンを非活性化
        setDisabled(answers);

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const isCorrect =
          CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;

        // 回答欄にテキストやclass名を付与
        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      });
    });
  });

