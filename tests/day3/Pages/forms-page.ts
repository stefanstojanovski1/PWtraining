import { expect, type Locator, type Page } from '@playwright/test';

export class formTest {
  readonly page: Page;
  readonly firstNameL: Locator;
  readonly lastNameL: Locator;
  readonly emailL: Locator;
  readonly mobileNumberL: Locator;
  readonly genderSelect: Locator;
  readonly selectSubject: Locator;
  readonly fillSubject: Locator;
  readonly dateOfBirth: Locator;
  readonly hobbies: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameL = page.getByPlaceholder('First Name'); // Alternative: page.locator('input[placeholder="First Name"]')
    this.lastNameL = page.getByPlaceholder('Last Name'); // Alternative: page.locator('input[placeholder="Last Name"]')
    this.emailL = page.getByPlaceholder('name@example.com'); // Alternative: page.locator('input[placeholder="name@example.com"]')
    this.mobileNumberL = page.getByPlaceholder('Mobile Number'); // Alternative: page.locator('input[placeholder="Mobile Number"]')
    this.genderSelect = page.getByText('Male', { exact: true }); // Alternative: page.locator('label', { hasText: 'Male' })
    this.selectSubject = page.locator('.subjects-auto-complete__value-container'); // Alternative: page.locator('.subjects-auto-complete')
    this.fillSubject = page.locator('#subjectsInput'); // Alternative: page.locator('input#subjectsInput')
    this.dateOfBirth = page.locator('#dateOfBirthInput'); // Alternative: page.locator('input#dateOfBirthInput')
    this.hobbies = page.getByText('Sports'); // Alternative: page.locator('label', { hasText: 'Sports' })
    this.submit = page.getByRole('button', { name: 'Submit' }); // Alternative: page.locator('button[type="submit"]')
  }

  async navigateToForm() {
    await this.page.goto('https://demoqa.com/');
    await this.page.locator('div:nth-child(2) > div > .avatar > svg').click(); // Alternative: page.locator('div.avatar > svg').first().click()
    await this.page.getByText('Practice Form').click(); // Alternative: page.locator('text=Practice Form').click()
  }

  async fillTheForm(firstName: string, lastName: string, email: string, mobile: string) {
    await this.firstNameL.fill(firstName);
    await this.lastNameL.fill(lastName);
    await this.emailL.fill(email);
    await this.mobileNumberL.fill(mobile);
  }

  async selectGender(gender: 'Male' | 'Female' | 'Other') {
    await this.genderSelect.click();
  }

  async selectDateOfBirth(date: string) {
    await this.dateOfBirth.click();
    await this.page.getByLabel(`Choose ${date}`).click(); // Alternative: page.locator('label', { hasText: `Choose ${date}` }).click()
  }

  async subjectFill(subject: string) {
    await this.selectSubject.click();
    await this.fillSubject.fill(subject);
  }

  async selectHobbies() {
    await this.hobbies.click();
  }

  async submitForm() {
    await this.submit.click();
  }
}
