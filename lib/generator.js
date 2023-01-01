export default class Question {
    constructor (min = 0, max = 10) {
        this._question = '';
        this._answer = '';
        this.topTable = max;
        this.bottomTable = min;
    }

	random (min, max) {
		return Math.round(Math.random()*(max-min)) + min;
	};

	generate (operator = '+') {
		const operand1 = this.random(this.bottomTable, this.topTable);
		const operand2 = this.random(1, 10);

		this._question = operand1 + ' ' + operator + ' ' + operand2;
        switch(operator) {
            case '+': this._answer = operand1 + operand2; break;
            case '-': this._answer = operand1 - operand2; break;
            case '*': this._answer = operand1 * operand2; break;
            case '/': this._answer = Math.round(operand1 / operand2); break;
            default: break;
        }
        const fakeAnswers = [...this.fakeAnswers(), this._answer]
		return {    
            question: this._question,
            answer: this._answer,
            fakeAnswers: this.shuffle(fakeAnswers)
        }; 
	}

    shuffle (array) {
        return array.sort((a, b) => 0.5 - Math.random());
    }

    fakeAnswers () {
        const fakeAnswers = Array(3).fill(0).map(answer => {
            return this.random(1, 10) - this.random(1, 10) + this._answer
        })
        console.log(fakeAnswers)
        return fakeAnswers
    }

	get question () {
		return this._question;
	};

	get answer () {
		return this._answer;
	};
	
	show () {
		return this._question + ' = ' + this._answer;
	};

};