import { test, expect } from '@playwright/test';
import { formTest } from '../Pages/forms-page';

test('Form test', async ({ page }) => {

const form = new formTest(page);

await form.navigateToForm();
await form.fillTheForm('Stefan ', 'Stojanovski', 'stefan.nb', '022362623');
await form.selectGender('Male');
await form.selectDateOfBirth('Monday, October 21st');
await form.subjectFill('Subjecttt');
await form.selectHobbies();
await form.submitForm();
     

});