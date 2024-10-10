// write your JavaScript here
'use strict';

const questions = document.querySelectorAll('.qa-show');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        document.querySelectorAll('.qa-hide').forEach((item) => {
            item.style.display = 'none';
        });
        document.querySelectorAll('.qa-question').forEach((item) => {
            item.classList.remove('bold');
        });

        if(!isVisible) {
            answer.style.display = 'block';
            question.querySelector('.qa-question').classList.add('bold');
            question.querySelector('.plus').style.display = 'none';
            question.querySelector('.exit').style.display = 'block';
        }else {
            answer.style.display = 'none';
            question.querySelector('.qa-question').classList.remove('bold');
            question.querySelector('.plus').style.display = 'block';
            question.querySelector('.exit').style.display = 'none';
        }
    });
});