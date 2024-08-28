function submitQuiz() {
    const answers = {
        q1: "B",
        q2: "B",
        q3: "C",
        q4: "B",
        q5: "B",
        q6: "A",
        q7: "A",
        q8: "C",
        q9: "B",
        q10: "B"
    };

    let score = 0;
    const quizItems = document.querySelectorAll('.quiz-item');

    quizItems.forEach((item, index) => {
        const question = item.querySelector(`input[name="q${index + 1}"]:checked`);
        if (question && question.value === answers[`q${index + 1}`]) {
            score++;
            item.style.backgroundColor = '#d4edda'; // Green background for correct answers
        } else {
            item.style.backgroundColor = '#f8d7da'; // Red background for incorrect answers
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>You scored ${score} out of 10!</p>`;

    if (score === 10) {
        resultDiv.innerHTML += `<p>Excellent! You have a great understanding of tides.</p>`;
    } else if (score >= 7) {
        resultDiv.innerHTML += `<p>Good job! You have a good understanding of tides.</p>`;
    } else if (score >= 4) {
        resultDiv.innerHTML += `<p>Not bad! Keep learning to improve your knowledge about tides.</p>`;
    } else {
        resultDiv.innerHTML += `<p>Keep trying! Learn more about tides and try the quiz again.</p>`;
    }
}
