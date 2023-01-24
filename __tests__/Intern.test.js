const Intern = require("../lib/Intern");

test("Can instantiate Engineer instance", () => {
    let emp = new Intern();
    expect(typeof(emp)).toBe("object");
  });


  test("getRole() should return \"Intern\"", () => {
    const expectedValue = "Intern";
    const emp = new Intern("John", 1, "john@mail.com");
    expect(emp.getRole()).toBe(expectedValue);
});


test("Can get GitHub username via getGithub()", () => {
    const expectedValue = "UCF";
    const emp = new Intern("John", 1, "john@mail.com", expectedValue);
    expect(emp.getSchool()).toBe(expectedValue);
  });