import { userReducer } from "./user-management/user-slices"
import { usersSlice } from "./users-management/slice"
import { organizationsSlice } from "./organizations-management/slice"
import { orderSlice } from "./order-management/slice"
import { productsSlice } from "./products-management/slice"
import { snackbarReducer } from "./snack-bar/slice"
import { alertDialogSlice } from "./alert-dialog/slice"
import { stockReducer } from "./stock-management/slice"
import { productMappingSlice } from "./product-mapping/slice"
import { stockLevelSlice } from "./admin-management/slice"
import { deliveriesSlice } from "./deliveries-management/slice"
import { billingSlice } from "./billing-management/slice"
import { stockReportsSlice } from "./stock-reports-management/slice"

export const rootReducer = {
 deliveries: deliveriesSlice,
 stockLevel: stockLevelSlice,
 user: userReducer,
 users: usersSlice,
 organizations: organizationsSlice,
 Orders: orderSlice,
 products: productsSlice,
 snackbar: snackbarReducer,
 alertDialog: alertDialogSlice,
 stocks: stockReducer,
 mapping: productMappingSlice,
 billing: billingSlice,
 stockReports: stockReportsSlice
}
