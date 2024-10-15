import { createSlice } from '@reduxjs/toolkit'
import { uploadOrderCsvFileAsync, fetchAllOrdersAsync, listOrderItemsAsync} from './thunks'
import { Order, OrderItems } from '../../api/types'
import { RequestStatus } from '../types'

interface OrdersState {
  orders: Order[] | []
  orderItems: OrderItems[] | [],
  orderItemRequestStatus: RequestStatus
}

const initialState: OrdersState = {
  orders: [],
  orderItems: [],
  orderItemRequestStatus: RequestStatus.Idle,
}

const OrdersSlice = createSlice({
  name: 'Orders',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchAllOrdersAsync.fulfilled, (state, action)=>{
      state.orders = [...action.payload]
      return state
    })
    builder.addCase(listOrderItemsAsync.pending, (state)=>{
      state.orderItemRequestStatus = RequestStatus.Pending
      return state
    })
    builder.addCase(listOrderItemsAsync.fulfilled, (state, action)=>{
      console.log(action)
      state.orderItems = action.payload
      state.orderItemRequestStatus = RequestStatus.Fulfilled
      return state
    })
    builder.addCase(listOrderItemsAsync.rejected, (state)=>{
      state.orderItemRequestStatus = RequestStatus.Error
      return state
    })
    builder.addCase(uploadOrderCsvFileAsync.fulfilled, (state, action)=>{
      return state
    })
  }
})

export const orderSlice = OrdersSlice.reducer