import BMICalculator from "./BMICalculator";

describe("BMICalculator", () => {
  let bmiCalculator;

  beforeEach(() => {
    bmiCalculator = new BMICalculator();
  });

  describe("calculateBMI", () => {
    it("should return BMI when input is valid", () => {
      const weightInKg = 70;
      const heightInMeters = 1.75;
      const expectedBMI = 22.86;

      const bmi = bmiCalculator.calculateBMI(weightInKg, heightInMeters);

      expect(bmi).toBeCloseTo(expectedBMI, 2);
    });

    it("should return error message when weight is non-positive", () => {
      const weightInKg = -10;
      const heightInMeters = 1.75;

      const bmi = bmiCalculator.calculateBMI(weightInKg, heightInMeters);

      expect(bmi).toBe("Invalid input. Weight and height must be positive values.");
    });

    it("should return error message when height is non-positive", () => {
      const weightInKg = 70;
      const heightInMeters = -1.75;

      const bmi = bmiCalculator.calculateBMI(weightInKg, heightInMeters);

      expect(bmi).toBe("Invalid input. Weight and height must be positive values.");
    });
  });

  describe("interpretBMI", () => {
    it("should return 'Underweight' for BMI less than 18.5", () => {
      const bmi = 17.5;

      const interpretation = bmiCalculator.interpretBMI(bmi);

      expect(interpretation).toBe("Underweight");
    });

    it("should return 'Normal weight' for BMI between 18.5 and 24.9", () => {
      const bmi = 22.86;

      const interpretation = bmiCalculator.interpretBMI(bmi);

      expect(interpretation).toBe("Normal weight");
    });

    it("should return 'Overweight' for BMI between 25 and 29.9", () => {
      const bmi = 27.5;

      const interpretation = bmiCalculator.interpretBMI(bmi);

      expect(interpretation).toBe("Overweight");
    });

    it("should return 'Obese' for BMI 30 or higher", () => {
      const bmi = 32.1;

      const interpretation = bmiCalculator.interpretBMI(bmi);

      expect(interpretation).toBe("Obese");
    });
  });
});
