import type { ApiResponse } from '@/types'
import type { MysteryBox } from './mysteryBox.types'
import { mockMysteryBoxes } from '@/mocks/mysteryBox.mock'

export type * from './mysteryBox.types'

export const mysteryBoxService = {
  async getForBuyer(): Promise<ApiResponse<MysteryBox[]>> {
    await new Promise((r) => setTimeout(r, 150))
    return { code: 200, result: [...mockMysteryBoxes] }
  },
}
