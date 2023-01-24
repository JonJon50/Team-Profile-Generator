const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    let emp = new Engineer();
    expect(typeof(emp)).toBe("object");
  });


  test("getRole() should return \"Engineer\"", () => {
    const expectedValue = "Engineer";
    const emp = new Engineer("John", 1, "john@mail.com");
    expect(emp.getRole()).toBe(expectedValue);
});