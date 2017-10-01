import { foo } from '@/src'
import expect from 'expect'

describe('foo', () => {
  it('should work', () => {
    expect(foo(1)).toBe(2)
  })
})
