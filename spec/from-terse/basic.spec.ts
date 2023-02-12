import TerseCallback from '../../dist/terse/callback.js';
import FromTerse from '../../dist/from-terse.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

let argument : any[] = [];

const terse = new TerseCallback<[string, number, boolean]>(function (severities : string, string : string, number: number, boolean : boolean) {

    argument = new Array(...arguments);
});

const callback = new FromTerse(terse);

it('emergency', ()=>{
    const params : [string, number, boolean] = ['emergency', 1, true];
    callback.emergency(...params);
    expect(argument).toEqual(['emergency', ...params]);
});

it('alert', ()=>{
    const params : [string, number, boolean] = ['alert', 2, false];
    callback.alert(...params);
    expect(argument).toEqual(['alert', ...params]);
});

it('critical', ()=>{
    const params : [string, number, boolean] = ['critical', 3, true];
    callback.critical(...params);
    expect(argument).toEqual(['critical', ...params]);
});

it('error', ()=>{
    const params : [string, number, boolean] = ['error', 4, false];
    callback.error(...params);
    expect(argument).toEqual(['error', ...params]);
});

it('warning', ()=>{
    const params : [string, number, boolean] = ['warning', 5, true];
    callback.warning(...params);
    expect(argument).toEqual(['warning', ...params]);
});

it('notice', ()=>{
    const params : [string, number, boolean] = ['notice', 6, false];
    callback.notice(...params);
    expect(argument).toEqual(['notice', ...params]);
});

it('informational', ()=>{
    const params : [string, number, boolean] = ['informational', 7, true];
    callback.informational(...params);
    expect(argument).toEqual(['informational', ...params]);
});

it('debug', ()=>{
    const params : [string, number, boolean] = ['debug', 8, false];
    callback.debug(...params);
    expect(argument).toEqual(['debug', ...params]);
});

