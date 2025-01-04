class Calculator {
    constructor() {
      this.currentInput = '0';
      this.previousInput = '';
      this.operator = null;
      this.shouldReset = false;
      this.history = [];
      this.output = document.getElementById('output');
      this.historyDisplay = document.getElementById('history');
      this.init();
    }

    init() {
      document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => this.handleButton(button));
      });
      document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    handleButton(button) {
      const action = button.dataset.action;
      const number = button.dataset.number;

      if (number) {
        this.appendNumber(number);
      } else if (action) {
        if (action === 'calculate') {
          this.calculate();
        } else if (action === 'clear') {
          this.clear();
        } else if (action === 'backspace') {
          this.backspace();
        } else {
          this.chooseOperation(action);
        }
      }
      this.updateDisplay();
    }

    appendNumber(number) {
      if (this.shouldReset) {
        this.currentInput = '';
        this.shouldReset = false;
      }
      if (number === '.' && this.currentInput.includes('.')) return;
      if (this.currentInput === '0' && number !== '.') {
        this.currentInput = number;
      } else {
        this.currentInput += number;
      }
    }

    chooseOperation(operation) {
      if (this.currentInput === '') return;
      if (this.previousInput !== '') {
        this.calculate();
      }
      this.operator = operation;
      this.previousInput = this.currentInput;
      this.currentInput = '';
    }

    calculate() {
      let computation;
      const prev = parseFloat(this.previousInput);
      const current = parseFloat(this.currentInput);

      if (isNaN(prev) || isNaN(current)) return;

      switch (this.operator) {
        case 'add':
          computation = prev + current;
          break;
        case 'subtract':
          computation = prev - current;
          break;
        case 'multiply':
          computation = prev * current;
          break;
        case 'divide':
          if (current === 0) {
            this.showError('Cannot divide by zero');
            return;
          }
          computation = prev / current;
          break;
        default:
          return;
      }

      const operationSymbol = {
        add: '+',
        subtract: '-',
        multiply: '×',
        divide: '÷'
      }[this.operator];

      const historyEntry = `${this.previousInput} ${operationSymbol} ${this.currentInput} = ${computation}`;
      this.history.unshift(historyEntry);
      if (this.history.length > 5) {
        this.history.pop();
      }
      this.updateHistory();

      this.currentInput = computation.toString();
      this.operator = null;
      this.previousInput = '';
      this.shouldReset = true;
    }

    updateHistory() {
      this.historyDisplay.innerHTML = this.history
        .map(entry => `<div>${entry}</div>`)
        .join('');
    }

    clear() {
      this.currentInput = '0';
      this.previousInput = '';
      this.operator = null;
      this.history = [];
      this.updateHistory();
    }

    backspace() {
      this.currentInput = this.currentInput.slice(0, -1) || '0';
    }

    showError(message) {
      this.output.textContent = message;
      this.output.style.color = 'var(--error)';
      setTimeout(() => {
        this.output.style.color = 'var(--text)';
        this.updateDisplay();
      }, 2000);
    }

    updateDisplay() {
      this.output.textContent = this.currentInput;
    }

    handleKeyboard(e) {
      const key = e.key;
      if (!isNaN(key) || key === '.') {
        this.appendNumber(key);
      } else if (key === 'Backspace') {
        this.backspace();
      } else if (key === 'Escape') {
        this.clear();
      } else if (key === 'Enter' || key === '=') {
        this.calculate();
      } else if (['+', '-', '*', '/'].includes(key)) {
        const operationMap = {
          '+': 'add',
          '-': 'subtract',
          '*': 'multiply',
          '/': 'divide'
        };
        this.chooseOperation(operationMap[key]);
      }
      this.updateDisplay();
    }
  }

  new Calculator();
