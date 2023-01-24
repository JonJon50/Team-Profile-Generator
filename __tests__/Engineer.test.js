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


test("Can get GitHub username via getGithub()", () => {
    const expectedValue = "myGitHubUserName";
    const emp = new Engineer("John", 1, "john@mail.com", expectedValue);
    expect(emp.getGithub()).toBe(expectedValue);
  });