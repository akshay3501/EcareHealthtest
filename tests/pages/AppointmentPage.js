import { expect } from '@playwright/test';

export class AppointmentPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.schedulingTab = page.getByRole('tab', { name: 'Scheduling' });
    this.appointmentsText = page.getByText('Appointments');
    this.scheduleAppointmentButton = page.getByRole('button', { name: 'Schedule Appointment' });
    this.newAppointmentMenuItem = page.getByRole('menuitem', { name: 'New Appointment' });
    this.patientNameCombo = page.getByRole('combobox', { name: 'Patient Name *' });
    this.appointmentTypeCombo = page.getByRole('combobox', { name: 'Appointment Type *' });
    this.reasonForVisitTextbox = page.getByRole('textbox', { name: 'Reason For Visit *' });
    this.telehealthButton = page.getByRole('button', { name: 'Telehealth' });
    this.providerCombo = page.getByRole('combobox', { name: 'Provider *' });
    this.disabledInput = page.locator('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-disabled').first();
    this.viewAvailabilityButton = page.getByRole('button', { name: 'View availability' });
    this.ninthGridCell = page.getByRole('gridcell', { name: '9', exact: true });
    this.timeSlotButton = page.getByRole('button', { name: ':30 AM - 04:00 AM' });
    this.saveAndCloseButton = page.getByRole('button', { name: 'Save And Close' });
  }

  async scheduleAppointment(patientName, appointmentType, reason, provider) {
    await this.schedulingTab.click();
    await this.appointmentsText.click();
    await this.scheduleAppointmentButton.click();
    await this.newAppointmentMenuItem.click();
    await this.patientNameCombo.click();
    await this.patientNameCombo.fill(patientName);
    await this.page.getByRole('option', { name: 'Akshay Patil 20 Jan' }).click();
    await this.appointmentTypeCombo.click();
    await this.page.getByRole('option', { name: appointmentType }).click();
    await this.reasonForVisitTextbox.click();
    await this.reasonForVisitTextbox.fill(reason);
    await this.telehealthButton.click();
    await this.providerCombo.click();
    await this.providerCombo.fill(provider);
    await this.page.getByRole('option', { name: 'Bhushan Vanjari' }).click();
    await this.disabledInput.click();
    await this.viewAvailabilityButton.click();
    await this.ninthGridCell.click();
    await this.timeSlotButton.click();
    await this.saveAndCloseButton.click();
  }
} 