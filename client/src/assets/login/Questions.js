export default function randomQuestions(python, javascript, html, css){
    const pythonQuestion = python[Math.floor(Math.random()*python.length)]
    const javaQuestion = javascript[Math.floor(Math.random()*javascript.length)]
    const htmlQuestion = html[Math.floor(Math.random()*html.length)]
    const cssQuestion = css[Math.floor(Math.random()*css.length)]
    const allQuestions = all[Math.floor(Math.random()*all.length)]
    return [pythonQuestion, javaQuestion, htmlQuestion, cssQuestion, allQuestions];
}

const python = [
    {
        question: 'Which is faster, tuples or lists?',
        answer: 'Tuples'
    },
    {
        question: 'Is Python case sensitive? Yes/No',
        answer: 'Yes' 
    },
    {
        question: 'In Python, lists can only hold one type of data. True/False',
        answer: 'False'
    },
    {
        question: 'What is the name of an anonymous function in Python?',
        answer: 'Lambda'
    }
]

const javascript = [
    {
        question: 'In JavaScript, the “==” operator is used to compare only values. True/False',
        answer: 'True'
    },
    {
        question: 'Is JavaScript a statically typed or a dynamically typed language?',
        answer: 'Dynamically'
    },
    {
        question: 'In JavaScript, will isNaN(1) return true or false?',
        answer: 'False'
    },
    {
        question: 'In JavaScript, what does BOM mean?',
        answer: 'Browser Object Model'
    }
]

const html = [
    {
        question: 'In HTML, elements like <br/> & <img/> are called void elements. True/False',
        answer: 'True'
    },
    {
        question: 'In HTML, what kind of formatting tag is used to highlight text?',
        answer: '<mark>'
    },
    {
        question: 'In HTML, the <body> provides the information about the document. True/False',
        answer: 'False'
    },
    {
        question: 'In HTML, is nesting of webpages possible? Yes/No',
        answer: 'Yes'
    }
]

const css = [
    {
        question: 'In CSS, which command is used for the selection of all the elements of a paragraph?',
        answer: 'p[lang]'
    },
    {
        question: 'In CSS, what is RWD??',
        answer: 'p[lang]'
    },
    {
        question: 'In CSS, an element with a higher z-index is always stacked above than a lower index. True/False',
        answer: 'True'
    },
    {
        question: 'Can CSS sprites combine multiple images into one single larger image? Yes/No',
        answer: 'Yes'
    }
]

const all = [
    {
        question: 'Which is faster, tuples or lists?',
        answer: 'Tuples'
    },
    {
        question: 'Is Python case sensitive? Yes/No',
        answer: 'Yes' 
    },
    {
        question: 'In Python, lists can only hold one type of data. True/False',
        answer: 'False'
    },
    {
        question: 'What is the name of an anonymous function in Python?',
        answer: 'Lambda'
    },
    {
        question: 'In JavaScript, the “==” operator is used to compare only values. True/False',
        answer: 'True'
    },
    {
        question: 'Is JavaScript a statically typed or a dynamically typed language?',
        answer: 'Dynamically'
    },
    {
        question: 'In JavaScript, will isNaN(1) return true or false?',
        answer: 'False'
    },
    {
        question: 'In JavaScript, what does BOM mean?',
        answer: 'Browser Object Model'
    },
    {
        question: 'In HTML, elements like <br/> & <img/> are called void elements. True/False',
        answer: 'True'
    },
    {
        question: 'In HTML, what kind of formatting tag is used to highlight text?',
        answer: '<mark>'
    },
    {
        question: 'In HTML, the <body> provides the information about the document. True/False',
        answer: 'False'
    },
    {
        question: 'In HTML, is nesting of webpages possible? Yes/No',
        answer: 'Yes'
    },
    {
        question: 'In CSS, which command is used for the selection of all the elements of a paragraph?',
        answer: 'p[lang]'
    },
    {
        question: 'In CSS, what is RWD??',
        answer: 'p[lang]'
    },
    {
        question: 'In CSS, an element with a higher z-index is always stacked above than a lower index. True/False',
        answer: 'True'
    },
    {
        question: 'Can CSS sprites combine multiple images into one single larger image? Yes/No',
        answer: 'Yes'
    }
]
console.log(randomQuestions(python, javascript, html, css, all))