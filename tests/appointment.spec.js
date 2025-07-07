import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { AppointmentPage } from './pages/AppointmentPage';

test('Schedule a new appointment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const appointmentPage = new AppointmentPage(page);

  await loginPage.goto();
  await loginPage.login('amol.shete+TP@medarch.com', 'Test@123$');
  await appointmentPage.scheduleAppointment(
    'akshay',
    'New Patient Visit',
    'saddas',
    'bhus'
  );
}); 