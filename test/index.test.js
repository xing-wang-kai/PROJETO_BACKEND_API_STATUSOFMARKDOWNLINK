import pegarArquivo from "..";

describe('Testes PegarArquivo::', () => {
    it("Deve ser uma Function: ", ()=>{
        expect(typeof pegarArquivo).toBe('function');
    })
    it('Deve Retonar um Array: ', ()=>{
        expect(pegarArquivo()).toEqual()
    })
    
});


test("Deverá ser uma Function", () => {
    expect(typeof pegarArquivo).toBe('function')
});