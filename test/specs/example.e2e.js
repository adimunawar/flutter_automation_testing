const Screen = require('../pageobjects/screens.page')
//onboarding screen
describe('Halaman onboarding', () => {
    it('Klik tombol selanjutnya 1', async () => {
        await Screen.clickGetStartedButton();
    });
    it('Klik tombol selanjutnya 2', async () => {
        await Screen.clickGetStartedButton();
    });
    it('Klik tombol mulai', async () => {
        await Screen.clickMulai();

    });
});

//login screen
describe('Halaman Login', () => {
    it('Klik lupa password', async () => {
        await Screen.clickForgotPassword();
    });
    it('Klik daftar', async () => {
        await Screen.clickRegister();
    });
    it('Login via email password', async () => {
        await Screen.clickLogin();
    });
});

//mpin screen
describe('Halaman Mpin', () => {
    it('input pin', async () => {
        await Screen.clickMpin();
    });
});
//dashboard screen
describe('Halaman Dashboard', () => {
    it('Tambah agregator', async () => {
        await Screen.clickAddagregator();
    });
});



