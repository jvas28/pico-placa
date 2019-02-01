import 'babel-polyfill'
import { describe, before, it } from 'mocha';
import assert from 'assert';
import Analizer from '../src/Analizer';
const analizer = new Analizer();
        
describe('Mocha Pico&Placa Test', () => {
    it('should return true', () => {
        assert.equal(analizer.picoPlaca("ABCD-129", "02-01-2019", "08:00"), true)
        assert.equal(analizer.picoPlaca("ABC-128", "01-31-2019", "18:00"), true)
    });
    it('should return false', () => {
        assert.equal(analizer.picoPlaca("ABC-129", "02-01-2019", "10:00"), false)
        assert.equal(analizer.picoPlaca("ABCD-125", "02-01-2019", "08:00"), false)
    });
});
