"use strict";






let element = document.getElementById('box');

let text = `<div class="q1">
<div class="q1-content js-quiz" data-quiz="0">
  <p class="q1-heading">Q1</p>
  <div class="q1-heading-content">
    日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？
  </div>
  <div class="q1-image">
    <img src="../assets-ph1-website-main/img/quiz/img-quiz01.png" />
  </div>
  <div class="q1-answer">
    <p>A</p>
  </div>
  <div class="q1-button">
    <ul class="p-quiz-box__answer__list ">
      <li class="p-quiz-box__answer_item">
        <button class="p-quiz-box__answer__button js-answer" data-answer="0">
          約28万人
          <img src="../assets-ph1-website-main/img/icon/icon-arrow.svg"/>
        </button>
      </li>
      <li class="p-quiz-box__answer__button2">
      <button class="p-quiz-box__answer__button js-answer" data-answer="1">
        約79万人
        <img src="../assets-ph1-website-main/img/icon/icon-arrow.svg" />
      </button>
    </li>
      <li>
      <button class="p-quiz-box__answer__button js-answer" data-answer="2">
        約183万人
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
    <p>経済産業省 2019年3月 － IT 人材需給に関する調査</p>
  
  </div>
</div>
</div>`


element.insertAdjacentHTML('beforebegin', text);

// //実行結果
// <p>Paragraph</p> //←ここに追加
// <div id="box">
//   <h1>Title</h1>
// </div>





{


  let questions = [
    {
      index: 1,
      quesion: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
      img: '../assets-ph1-website-main/img/quiz/img-quiz01.png',
      option1: '約28万人',
      option2: '約79万人',
      option3: '約183万人',
      reference: '経済産業省 2019年3月 － IT 人材需給に関する調査',
    }


    {
      index: 2,
      quesion: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
      img: '../assets-ph1-website-main/img/quiz/img-quiz02.png',
      option1: 'INTECH',
      option2: 'BIZZTECH',
      option3: 'X-TECH',
    }


    {
      index: 3,
      quesion: 'IoTとは何の略でしょう？',
      img: '../assets-ph1-website-main/img/quiz/img-quiz03.png',
      option1: 'Internet of Things',
      option2: 'Integrate into Technology',
      option3: 'Information  on Tool',
    }

  ]
  // 回答一覧
  const CORRECT_ANSWERS = [
    {
      index: 1,
      value: "約79万人",
    },
    {
      index: 2,
      value: "X-TECH",
    },
    {
      index: 0,
      value: "Internet of Things",
    },
    {
      index: 0,
      value: "Society 5.0",
    },
    {
      index: 0,
      value: "Web3.0",
    },
    {
      index: 1,
      value: "約5倍",
    },
  ];

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

  console.log(allQuiz);

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

        console.log(selectedAnswer);

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
}
