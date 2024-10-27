new Vue({
    el: '#app',
    data: {
    question1Visible: true,
    question2Visible: false,
    yearsProgramming: '',
    programmingExperience: '',
    knownLanguages: '',
    languages: []
    },
    methods: {
    answerYes() {
        this.question1Visible = false;
        this.question2Visible = true;
    },
    answerNo() {
        alert('Gracias por participar en la encuesta.');
    },
    nextQuestion() {
        this.question2Visible = false;
        this.question3Visible = true;
    },
    addLanguages() {
        if (this.knownLanguages) {
        this.languages.push(this.knownLanguages);
        this.knownLanguages = '';
        }
    }
    }
});
