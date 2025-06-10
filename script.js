// 全新嘅廣東話課程內容！
const lessonData = {
  "title": "等差數列 (Arithmetic Sequence) 互動課程",
  "sections": [
    {
      "id": 1,
      "title": "咩係等差數列 (A.S.)?",
      "objective": "喺呢一節，我哋嘅目標係學識點樣分辨一個數列係咪等差數列，同埋搵出佢嘅首項 (a) 同公差 (d)。",
      "example": {
        "question": "<p><b>問題：</b>下面邊啲數列係等差數列？</p><p>S1: 1, 2, 3, 4, 5, ...</p><p>S2: 5, 4, 3, 2, 1, ...</p><p>S3: 1, 2, 4, 8, 16, ...</p>",
        "steps": [
          "<p><b>第一步：</b>記住定義！等差數列嘅重點係，後面個數減前面個數，個差（公差 d）係唔會變嘅。</p>",
          "<p><b>分析 S1：</b>首項 a = 1。我哋計下個差：2-1=1, 3-2=1, 4-3=1。個差全部都係1，所以 S1 係等差數列，公差 d = 1。</p>",
          "<p><b>分析 S2：</b>首項 a = 5。計下個差：4-5=-1, 3-4=-1, 2-3=-1。個差全部都係-1，所以 S2 都係等差數列，公差 d = -1。</p>",
          "<p><b>分析 S3：</b>首項 a = 1。計下個差：2-1=1, 但係 4-2=2。個差變咗！所以 S3 唔係等差數列。</p>"
        ]
      },
      "assessment": [
        { "question": "數列 7, 13, 19, 25, ... 嘅公差 (d) 係幾多？", "options": ["7", "-6", "6", "5"], "correctAnswerIndex": 2 },
        { "question": "邊一個係等差數列？", "options": ["1, 1, 2, 3, 5, ...", "10, 20, 40, 80, ...", "50, 45, 40, 35, ...", "1, 4, 9, 16, 25, ..."], "correctAnswerIndex": 2 },
        { "question": "一個等差數列嘅首項 (a) 係 10，公差 (d) 係 -3。咁第二項係幾多？", "options": ["-30", "13", "30", "7"], "correctAnswerIndex": 3 },
        { "question": "數列 2, 2.5, 3, 3.5, ... 係咪等差數列？如果係，公差係幾多？", "options": ["唔係", "係，公差係 2.5", "係，公差係 0.5", "係，公差係 2"], "correctAnswerIndex": 2 },
        { "question": "一個等差數列嘅第二項係 20，第三項係 15。佢嘅公差 (d) 係幾多？", "options": ["5", "-5", "15", "20"], "correctAnswerIndex": 1 }
      ]
    },
    {
      "id": 2,
      "title": "點樣用公式搵其中一項",
      "objective": "學識用通項公式 T(n) = a + (n - 1)d 嚟搵出數列裡面任何一項嘅數值，或者搵返條公式出嚟。",
      "example": {
        "question": "<p><b>問題：</b>搵出等差數列 2, 5, 8, ... 嘅通項 T(n)。</p>",
        "steps": [
          "<p><b>第一步：</b>喺數列度搵返啲基本資料。首項 a = 2。</p>",
          "<p><b>第二步：</b>計公差 d。 d = 5 - 2 = 3。</p>",
          "<p><b>第三步：</b>將 a 同 d 放入公式 T(n) = a + (n - 1)d。</p><p>T(n) = 2 + (n - 1) × 3</p>",
          "<p><b>第四步：</b>整理條式，拆個括號。</p><p>T(n) = 2 + 3n - 3</p><p>T(n) = 3n - 1</p>",
          "<p><b>第五步（檢查）：</b>試下搵第3項 (n=3)。T(3) = 3(3) - 1 = 9 - 1 = 8。同題目一樣，搞掂！</p>"
        ]
      },
      "assessment": [
        { "question": "數列 4, 11, 18, 25, ... 嘅第10項 T(10) 係幾多？", "options": ["70", "67", "74", "60"], "correctAnswerIndex": 1 },
        { "question": "一個等差數列嘅通項係 T(n) = 5n + 6。佢嘅頭三項係咩？", "options": ["5, 11, 17", "6, 11, 16", "11, 16, 21", "5, 6, 11"], "correctAnswerIndex": 2 },
        { "question": "一個等差數列嘅首項 (a) 係 -5，公差 (d) 係 4。佢嘅通項 T(n) 係咩？", "options": ["T(n) = -5n + 4", "T(n) = 4n - 1", "T(n) = 4n + 9", "T(n) = 4n - 9"], "correctAnswerIndex": 3 },
        { "question": "已知一個等差數列 T(n) = 25 - 3n。咁第5項 T(5) 係幾多？", "options": ["22", "15", "10", "40"], "correctAnswerIndex": 2 },
        { "question": "一個等差數列嘅 T(7) = 4，T(20) = -35。佢嘅公差 (d) 係幾多？ (提示: a+6d=4, a+19d=-35)", "options": ["3", "-39", "39", "-3"], "correctAnswerIndex": 3 }
      ]
    },
    {
      "id": 3,
      "title": "等差中項 (Arithmetic Mean)",
      "objective": "學識點樣搵出攝喺兩個數中間嘅一個或多個等差中項。",
      "example": {
        "question": "<p><b>問題：</b>如果 3, x, y, 12 係一個等差數列，搵出 x 同 y 嘅數值。</p>",
        "steps": [
          "<p><b>第一步：</b>理解題目。我哋要喺 3 同 12 中間，搵兩個數 x 同 y，令成個數列係等差。</p>",
          "<p><b>第二步：</b>分析已知條件。首項 a = 3。數列總共有4個數，所以第4項 T(4) = 12。</p>",
          "<p><b>第三步：</b>用通項公式 T(n) = a + (n-1)d 搵公差 d。</p><p>12 = 3 + (4 - 1)d</p><p>12 = 3 + 3d</p><p>9 = 3d  =>  d = 3</p>",
          "<p><b>第四步：</b>計返 x 同 y。x 係第二項，所以 x = a + d = 3 + 3 = 6。</p><p>y 係第三項，所以 y = x + d = 6 + 3 = 9。</p>",
          "<p><b>答案：</b> x = 6, y = 9。成個數列就係 3, 6, 9, 12。</p>"
        ]
      },
      "assessment": [
        { "question": "9 同 -1 嘅等差中項係幾多？", "options": ["8", "5", "4", "4.5"], "correctAnswerIndex": 2 },
        { "question": "如果 -2, k, 14 組成一個等差數列，k 嘅數值係幾多？", "options": ["12", "8", "6", "16"], "correctAnswerIndex": 2 },
        { "question": "喺 10 同 20 之間，攝入一個等差中項。嗰個數係幾多？", "options": ["12.5", "15", "17.5", "5"], "correctAnswerIndex": 1 },
        { "question": "喺 10 同 20 之間，攝入三個等差中項。咁公差 (d) 係幾多？", "options": ["2", "5", "3.33", "2.5"], "correctAnswerIndex": 3 },
        { "question": "如果 x, 2x+1, 11 係一個等差數列，x 嘅數值係幾多？ (提示: (2x+1)-x = 11-(2x+1))", "options": ["5", "3", "4", "10"], "correctAnswerIndex": 1 }
      ]
    },
    {
      "id": 4,
      "title": "等差級數嘅和 (Sum of A.S.)",
      "objective": "學識用求和公式 S(n) = n/2 * [2a + (n-1)d] 或者 S(n) = n/2 * (a+l) 嚟計等差數列頭 n 項嘅總和。",
      "example": {
        "question": "<p><b>問題：</b>搵出等差級數 100 + 102 + 104 + ... 頭 20 項嘅和。</p>",
        "steps": [
          "<p><b>第一步：</b>搵出重要嘅數值。首項 a = 100。公差 d = 102 - 100 = 2。項數 n = 20。</p>",
          "<p><b>第二步：</b>寫低求和公式。S(n) = n/2 * [2a + (n - 1)d]。</p>",
          "<p><b>第三步：</b>將 a, d, n 嘅數值放入公式。</p><p>S(20) = 20/2 * [2(100) + (20 - 1) × 2]</p>",
          "<p><b>第四步：</b>計數！</p><p>S(20) = 10 * [200 + 19 × 2]</p><p>S(20) = 10 * [200 + 38]</p><p>S(20) = 10 * [238] = 2380</p>",
          "<p><b>答案：</b>頭20項嘅總和係 2380。</p>"
        ]
      },
      "assessment": [
        { "question": "數列 2, 7, 12, 17, ... 頭 10 項嘅和係幾多？", "options": ["245", "49", "225", "510"], "correctAnswerIndex": 0 },
        { "question": "一個等差數列嘅 a=5, d=10。頭 30 項嘅和 S(30) 係幾多？", "options": ["4500", "295", "8850", "4425"], "correctAnswerIndex": 3 },
        { "question": "計級數嘅和：2 + 6 + 10 + ... + 34。(提示: 先用 T(n) 公式搵出總共有幾多項 n)", "options": ["162", "180", "36", "144"], "correctAnswerIndex": 0 },
        { "question": "搵出由 1 到 100 所有單數嘅和。(提示: 1,3,5...99, a=1, l=99, n=50)", "options": ["5050", "2500", "2525", "5000"], "correctAnswerIndex": 1 },
        { "question": "一個劇院有 20 排座位。第一排有 30 個位，之後每一排都比前一排多 2 個位。劇院總共有幾多個座位？", "options": ["980", "620", "790", "1000"], "correctAnswerIndex": 0 }
      ]
    }
  ]
};

// --- 以下係程式邏輯 ---

let currentSectionIndex = 0;
let currentQuestionIndex = 0;
let sectionScore = 0;
let lessonResults = []; // NEW: State variable to store results of each section

// Get references to all HTML elements
const lessonContainer = document.querySelector('.lesson-container');
const sectionCard = document.querySelector('.section-card');
const lessonTitleEl = document.getElementById('lesson-title');
const sectionTitleEl = document.getElementById('section-title');
const sectionObjectiveEl = document.getElementById('section-objective');
const exampleQuestionEl = document.getElementById('example-question');
const exampleStepsEl = document.getElementById('example-steps');
const assessmentContainerEl = document.querySelector('.assessment-container');
const questionAreaEl = document.getElementById('question-area');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const feedbackTextEl = document.getElementById('feedback-text');
const nextSectionBtn = document.getElementById('next-section-btn');


function loadSection(index) {
    const section = lessonData.sections[index];
    currentQuestionIndex = 0;
    sectionScore = 0;

    // Make sure the main card is visible and report is hidden
    sectionCard.classList.remove('hidden');
    
    lessonTitleEl.innerText = lessonData.title;
    sectionTitleEl.innerText = `第 ${section.id} 節：${section.title}`;
    sectionObjectiveEl.innerText = section.objective;
    exampleQuestionEl.innerHTML = section.example.question;
    
    exampleStepsEl.innerHTML = '';
    section.example.steps.forEach(step => {
        exampleStepsEl.innerHTML += step;
    });

    assessmentContainerEl.classList.remove('hidden');
    questionAreaEl.classList.remove('hidden');
    feedbackTextEl.innerText = '';
    feedbackTextEl.style.backgroundColor = '';
    nextSectionBtn.classList.add('hidden');

    loadQuestion();
}

function loadQuestion() {
    const section = lessonData.sections[currentSectionIndex];
    const question = section.assessment[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    questionTextEl.innerText = `問題 ${questionNumber}: ${question.question}`;
    optionsContainerEl.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainerEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const section = lessonData.sections[currentSectionIndex];
    const question = section.assessment[currentQuestionIndex];
    const correctIndex = question.correctAnswerIndex;
    const optionButtons = optionsContainerEl.querySelectorAll('.option-btn');
    
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        optionButtons[selectedIndex].classList.add('correct');
        feedbackTextEl.innerText = "答啱喇！做得好好！👍";
        feedbackTextEl.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
        sectionScore++;
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[correctIndex].classList.add('correct');
        feedbackTextEl.innerText = "唔緊要，差少少！正確答案已用綠色標示。";
        feedbackTextEl.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < section.assessment.length) {
            loadQuestion();
        } else {
            // End of section, save results and check for mastery
            const sectionResult = {
                title: section.title,
                score: sectionScore,
                total: section.assessment.length
            };
            lessonResults.push(sectionResult); // NEW: Save the result

            if (sectionScore === section.assessment.length) {
                feedbackTextEl.innerText = `恭喜你！你已完全掌握呢一節嘅內容！`;
            } else {
                feedbackTextEl.innerText = `你已經完成呢一節嘅問題。為咗達到「Mastery」，你可以重新溫習例子再試一次！`;
            }
            showNextSectionButton();
        }
    }, 2500);
}

function showNextSectionButton() {
    assessmentContainerEl.classList.add('hidden'); // Hide the assessment area
    if (currentSectionIndex < lessonData.sections.length - 1) {
        nextSectionBtn.innerText = `✅ 完成本節，前往下一節`;
        nextSectionBtn.classList.remove('hidden');
    } else {
        // This is the last section, show report instead
        displayReport();
    }
}

// NEW: Function to display the final report
function displayReport() {
    sectionCard.classList.add('hidden'); // Hide the main lesson card

    let reportHTML = `
        <div class="report-card">
            <h2>學習報告</h2>
            <p>做得好好！你已經完成咗整個課程，睇下你嘅成績啦：</p>
            <ul class="report-list">
    `;

    let totalScore = 0;
    let totalQuestions = 0;

    lessonResults.forEach((result, index) => {
        const mastery = result.score === result.total ? 'mastered' : '';
        reportHTML += `
            <li class="report-item ${mastery}">
                <span class="report-title">第 ${index + 1} 節：${result.title}</span>
                <span class="report-score">成績: ${result.score} / ${result.total}</span>
            </li>
        `;
        totalScore += result.score;
        totalQuestions += result.total;
    });
    
    const overallPercentage = Math.round((totalScore / totalQuestions) * 100);

    reportHTML += `
            </ul>
            <div class="report-summary">
                <strong>總成績: ${totalScore} / ${totalQuestions} (${overallPercentage}%)</strong>
            </div>
            <button id="restart-btn">重新挑戰</button>
        </div>
    `;

    lessonContainer.innerHTML += reportHTML;

    // Add event listener for the new restart button
    document.getElementById('restart-btn').addEventListener('click', restartLesson);
}

// NEW: Function to restart the lesson
function restartLesson() {
    // Reset all state variables
    currentSectionIndex = 0;
    lessonResults = [];
    
    // Remove the report card
    const reportCard = document.querySelector('.report-card');
    if (reportCard) {
        reportCard.remove();
    }

    // Load the first section again
    loadSection(0);
}


nextSectionBtn.addEventListener('click', () => {
    currentSectionIndex++;
    if (currentSectionIndex < lessonData.sections.length) {
        loadSection(currentSectionIndex);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadSection(currentSectionIndex);
});