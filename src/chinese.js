const words = {
    '爸爸': 'папа',
    '妈妈': 'мама',
    '你好': 'привет',
    '树': 'дерево',
    '十': 'десять',
    '钱': 'деньги',
    '多少': 'сколько, как много',
    '请': 'пожалуйста',
    '语': 'язык',
    '汉语': 'китайский язык',
    '俄语': 'русский язык',
    '英语': 'английский язык',
    '法语': 'французский язык',
    '黄': 'жёлтый',
    '床': 'кровать',
    '住': 'жить, останавливаться',
    '这': 'это',
    '找': 'искать',
    '周': 'неделя',
    '正': 'правильный, прямой',
    '书': 'книга',
    '说': 'говорить',
    '人': 'человек',
    '热': 'горячий',
    '走': 'идти',
    '口': 'рот',
    '新': 'новый',
    '新年': 'Новый год',
    '年': 'год',
    '学习': 'учиться',
    '我': 'я',
    '家': 'семья',
    '姐姐': 'старшая сестра',
    '妹妹': 'младшая сестра',
    '哥哥': 'старший брат',
    '弟弟': 'младший брат',
    '有': 'иметь',
    '一': 'один',
    '二': 'два',
    '三': 'три',
    '四': 'четыре',
    '五': 'пять',
    '六': 'шесть',
    '七': 'семь',
    '八': 'восемь',
    '九': 'девять',
    '你': 'ты',
    '他': 'он',
    '她': 'она',
    '我们': 'мы',
    '你们': 'вы',
    '他们': 'они',
    '谢谢': 'спасибо',
    '学校': 'школа',
    '天': 'день, небо',
    '今天': 'сегодня',
    '明天': 'завтра',
    '昨天': 'вчера',
    '儿子': 'сын',
    '女儿': 'дочь',
    '买': 'покупать',
    '是': 'быть, есть, являться',
    '很': 'очень',
    '不': 'нет, не',
    '老师': 'учитель',
    '叫': 'зовут, звать',
    '漂亮': 'красивый',
    '医生': 'врач',
    '小': 'маленький',
    '高': 'высокий',
    '好': 'хороший',
    '对': 'да, правильно',
    '都': 'все, всё',
    '也': 'тоже, также',
    '中国': 'Китай',
    '中国人': 'китаец',
    '车': 'машина',
    '咖啡': 'кофе',
    '学院': 'институт',
    '同学': 'одноклассник',
    '学生': 'студент',
    '大': 'большой',

}

document.addEventListener('DOMContentLoaded', function() {
    const questionElement = document.querySelector('.question-chn');
    const answerButtons = [
        document.querySelector('.answer1'),
        document.querySelector('.answer2'),
        document.querySelector('.answer3'),
        document.querySelector('.answer4')
    ];
    const currentRecordElement = document.getElementById('current-record');
    const maxRecordElement = document.getElementById('max-record');
    
    let currentQuestion = null;
    let correctAnswer = null;
    let currentScore = 0;
    let maxScore = localStorage.getItem('maxChineseScore') || 0;
    
    // Инициализация рекордов
    updateRecordsDisplay();
    
    // Инициализация первого вопроса
    generateNewQuestion();
    
    // Добавление обработчиков событий для кнопок ответов
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === correctAnswer) {
                // Правильный ответ
                this.style.backgroundColor = '#4CAF50';
                this.style.color = 'white';
                currentScore++;
                if (currentScore > maxScore) {
                    maxScore = currentScore;
                    localStorage.setItem('maxChineseScore', maxScore);
                }
                updateRecordsDisplay();
                disableAllButtons();
                setTimeout(generateNewQuestion, 2000);
            } else {
                // Неправильный ответ
                this.style.backgroundColor = '#f44336';
                this.style.color = 'white';
                // Подсветка правильного ответа
                answerButtons.forEach(btn => {
                    if (btn.textContent === correctAnswer) {
                        btn.style.backgroundColor = '#4CAF50';
                        btn.style.color = 'white';
                    }
                });
                currentScore = 0;
                updateRecordsDisplay();
                disableAllButtons();
                setTimeout(generateNewQuestion, 2000);
            }
        });
    });
    
    function generateNewQuestion() {
        // Сброс стилей кнопок
        answerButtons.forEach(button => {
            button.style.backgroundColor = '';
            button.style.color = '';
            button.disabled = false;
        });
        
        // Выбор случайного вопроса
        const keys = Object.keys(words);
        currentQuestion = keys[Math.floor(Math.random() * keys.length)];
        correctAnswer = words[currentQuestion];
        
        // Отображение вопроса
        questionElement.textContent = currentQuestion;
        
        // Создание массива всех возможных ответов
        const allAnswers = Object.values(words);
        
        // Создание массива из 4 вариантов ответов
        const answers = [correctAnswer];
        while (answers.length < 4) {
            const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
            if (!answers.includes(randomAnswer)) {
                answers.push(randomAnswer);
            }
        }
        
        // Перемешивание ответов
        shuffleArray(answers);
        
        // Назначение текста кнопкам
        answerButtons.forEach((button, index) => {
            button.textContent = answers[index];
        });
    }
    
    function disableAllButtons() {
        answerButtons.forEach(button => {
            button.disabled = true;
        });
    }
    
    function updateRecordsDisplay() {
        currentRecordElement.textContent = `Текущий: ${currentScore}`;
        maxRecordElement.textContent = `Максимальный: ${maxScore}`;
    }
    
    // Функция для перемешивания массива
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});