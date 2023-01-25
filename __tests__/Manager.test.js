const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    let emp = new Manager();
    expect(typeof(emp)).toBe("object");
  });


  test("getRole() should return \"Manager\"", () => {
    const expectedValue = "Manager";
    const emp = new Manager("John", 1, "john@mail.com");
    expect(emp.getRole()).toBe(expectedValue);
});


test("Can get GitHub username via getGithub()", () => {
    const expectedValue = "UCF";
    const emp = new Manager("John", 1, "john@mail.com", expectedValue);
    expect(emp.getSchool()).toBe(expectedValue);
  });