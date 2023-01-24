const find = require('appium-flutter-finder');
const assert = require('assert');

class ScreenPage {
    async clickGetStartedButton() {
        const button = find.byText('Selanjutnya')
        assert.strictEqual(await driver.getElementText(find.byText('Selanjutnya')), 'Selanjutnya')

        setTimeout(function () {
        }, 500);
        await driver.elementClick(button)

    }

    async clickMulai() {
        const buttonMulai = find.byText('Mulai')
        assert.strictEqual(await driver.getElementText(find.byText('Mulai')), 'Mulai')
        setTimeout(function () {
        }, 500);
        await driver.elementClick(buttonMulai)
    }
    async clickRegister() {
        const buttonDaftar = find.byText('Daftar')
        assert.strictEqual(await driver.getElementText(find.byText('Daftar')), 'Daftar')
        setTimeout(function () {
        }, 500);
        await driver.elementClick(buttonDaftar)
    }

    //method untuk klik forgot password
    async clickForgotPassword() {
        const btnForgot = find.byText('Lupa Kata Sandi?')
        assert.strictEqual(await driver.getElementText(find.byText('Lupa Kata Sandi?')), 'Lupa Kata Sandi?')
        setTimeout(function () {
        }, 500);
        await driver.elementClick(btnForgot)
        setTimeout(function () {
        }, 500);
        await driver.elementClick(find.byType('Icon'));
    }
    //method untuk klik daftar
    async clickRegister() {
        const btnRegister = find.byText('Daftar')
        assert.strictEqual(await driver.getElementText(find.byText('Daftar')), 'Daftar')
        setTimeout(function () {
        }, 500);
        await driver.elementClick(btnRegister)

        //untuk handle halaman back
        setTimeout(function () {
        }, 500);
        const btnBack = find.byText('Masuk')
        assert.strictEqual(await driver.getElementText(find.byText('Masuk')), 'Masuk')
        await driver.elementClick(btnBack)
    }

    //methode untuk login
    async clickLogin
        () {
        const textField1 = find.byValueKey('email')
        const textField2 = find.byValueKey('password')
        // const btnMsk = find.byValueKey('masuk')
        await driver.elementSendKeys(textField1, 'adimunawar19@yahoo.com')
        await driver.execute('flutter:waitFor', textField1)
        await driver.elementSendKeys(textField2, '7654321')
        await driver.execute('flutter:waitFor', textField2)
        // await driver.elementSendKeys(find.byType('TextFormField'), 'Jeans')
        const btnMasuk = find.byText('Masuk')
        assert.strictEqual(await driver.getElementText(find.byText('Masuk')), 'Masuk')
        setTimeout(function () {
        }, 500);
        await driver.elementClick(btnMasuk)
    }
    //methode untuk masukan pin
    async clickMpin() {
        const btn0 = find.byText('0')
        assert.strictEqual(await driver.getElementText(find.byText('0')), '0')
        const btn1 = find.byText('1')
        assert.strictEqual(await driver.getElementText(find.byText('1')), '1')
        const btn2 = find.byText('2')
        assert.strictEqual(await driver.getElementText(find.byText('2')), '2')
        const btn3 = find.byText('3')
        assert.strictEqual(await driver.getElementText(find.byText('3')), '3')
        const btn4 = find.byText('4')
        assert.strictEqual(await driver.getElementText(find.byText('4')), '4')
        const btn5 = find.byText('5')
        assert.strictEqual(await driver.getElementText(find.byText('5')), '5')
        const btn6 = find.byText('6')
        assert.strictEqual(await driver.getElementText(find.byText('6')), '6')
        const btn7 = find.byText('7')
        assert.strictEqual(await driver.getElementText(find.byText('7')), '7')
        const btn8 = find.byText('8')
        assert.strictEqual(await driver.getElementText(find.byText('8')), '8')
        const btn9 = find.byText('9')
        assert.strictEqual(await driver.getElementText(find.byText('9')), '9')

        setTimeout(function () {
        }, 500);
        await driver.elementClick(btn6)
        await driver.elementClick(btn5)
        await driver.elementClick(btn4)
        await driver.elementClick(btn3)
        await driver.elementClick(btn2)
        await driver.elementClick(btn1)
    }

    //method untuk  tambah agregator
    async clickAddagregator() {
        const btnAddEmiten = find.byText('Tambah Emiten')
        assert.strictEqual(await driver.getElementText(find.byText('Tambah Emiten')), 'Tambah Emiten')
        setTimeout(function () {
        }, 500);
        await driver.elementClick(btnAddEmiten)

    }


}
module.exports = new ScreenPage();