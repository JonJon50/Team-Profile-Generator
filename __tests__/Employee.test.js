const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    let emp = new Employee();
    expect(typeof(emp)).toBe("object");
  });


  test("getRole() should return \"Employee\"", () => {
    const expectedValue = "Employee";
    const emp = new Employee("John", 1, "john@mail.com");
    expect(emp.getRole()).toBe(expectedValue);
});