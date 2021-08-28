import { 
    capitalize,  
    linkToName, 
    nameToLink, 
    filterByName } from '../utils.js';

describe('test capitalize function', () => {
    it('should make string first letter capitalized', () => {
        const str = 'test'
        const result = capitalize(str)
        expect(result).toBe('Test')
    })
    
    it('should return empty string when passing undefined', () => {
        let str;
        const result = capitalize(str)
        expect(result).toBe('')
    })

})

describe('test linkToName function', () => {
    it('should return formatted link name', () => {
        const linkName = 'rick-sanchez'
        const result = linkToName(linkName)
        expect(result).toBe('Rick Sanchez')
    })

    it('should return empty string when passing undefined', () => {
        const result = linkToName(undefined)
        expect(result).toBe('')
    })
})

describe('test nameToLink function', () => {
    it('should return formatted name', () => {
        const name = 'Rick Sanchez'
        const result = nameToLink(name)
        expect(result).toBe('rick-sanchez')
    })

    it('should return empty string when passing undefined', () => {
        const result = nameToLink(undefined)
        expect(result).toBe('')
    })
})

describe('test filterByName function', () => {
    it('should return only one character', () => {
        const characterName = 'Rick';
        let characters = [
            { name: 'Rick' },
            { name: 'Bella' },
        ]
        let result = filterByName(characters, characterName);
        expect(result).toEqual([{name: 'Rick'}]);
    })
})
