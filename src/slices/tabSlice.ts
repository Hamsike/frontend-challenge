import type { TabState, TabType } from "@/types/tab"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


const initialState: TabState = {
  activeTab: 'all'
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TabType>) => {
      state.activeTab = action.payload
    }
  }
})

export const { setActiveTab } = tabSlice.actions
export default tabSlice.reducer