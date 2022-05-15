import {render, fireEvent} from '@testing-library/vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('testing-library', () => {
  test('one', async () => {
    const r = render(HelloWorld)
    const h1 = await r.findByText('Welcome')
    fireEvent.click(h1)
  })
})
