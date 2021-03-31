import {findWords} from './findWords';

describe('findWords', () => {
  it('finds english words and Chinese characters', () => {
    expect(findWords('中国abc, hello pre-defined,')).toEqual(['中', '国', 'abc', 'hello', 'pre', 'defined'])
    expect(findWords('词性还原：does，done，doing，did')).toEqual(['词', '性', '还', '原', '：', 'does', '，', 'done', '，', 'doing', '，', 'did'])
  })
})
