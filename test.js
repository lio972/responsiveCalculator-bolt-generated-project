import assert from 'assert';

  class CalculatorTest {
    constructor() {
      this.calculator = new Calculator();
      this.runTests();
    }

    runTests() {
      this.testAddition();
      this.testSubtraction();
      this.testMultiplication();
      this.testDivision();
      this.testDivisionByZero();
      this.testDecimalOperations();
      this.testSequentialOperations();
      console.log('All tests passed!');
    }

    testAddition() {
      this.calculator.currentInput = '5';
      this.calculator.chooseOperation('add');
      this.calculator.currentInput = '3';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.currentInput, '8');
      this.calculator.clear();
    }

    testSubtraction() {
      this.calculator.currentInput = '10';
      this.calculator.chooseOperation('subtract');
      this.calculator.currentInput = '4';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.currentInput, '6');
      this.calculator.clear();
    }

    testMultiplication() {
      this.calculator.currentInput = '7';
      this.calculator.chooseOperation('multiply');
      this.calculator.currentInput = '3';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.currentInput, '21');
      this.calculator.clear();
    }

    testDivision() {
      this.calculator.currentInput = '15';
      this.calculator.chooseOperation('divide');
      this.calculator.currentInput = '3';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.currentInput, '5');
      this.calculator.clear();
    }

    testDivisionByZero() {
      this.calculator.currentInput = '10';
      this.calculator.chooseOperation('divide');
      this.calculator.currentInput = '0';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.output.textContent, 'Cannot divide by zero');
      this.calculator.clear();
    }

    testDecimalOperations() {
      this.calculator.currentInput = '0.1';
      this.calculator.chooseOperation('add');
      this.calculator.currentInput = '0.2';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.currentInput, '0.3');
      this.calculator.clear();
    }

    testSequentialOperations() {
      this.calculator.currentInput = '5';
      this.calculator.chooseOperation('add');
      this.calculator.currentInput = '3';
      this.calculator.chooseOperation('subtract');
      this.calculator.currentInput = '2';
      this.calculator.calculate();
      assert.strictEqual(this.calculator.currentInput, '6');
      this.calculator.clear();
    }
  }

  new CalculatorTest();
