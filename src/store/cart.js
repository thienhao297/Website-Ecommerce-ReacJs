import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  total: [],
};

const cartSlide = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addcart(state, action) {
      state.items.push(action.payload);
      localStorage.setItem("itemsArr", JSON.stringify(state.items));
    },
    update(state) {
      if (localStorage.getItem("itemsArr")) {
        state.items = JSON.parse(localStorage.getItem("itemsArr"));
      }
      let total = 0;
      const fixPrice = state.items.map((product) => {
        let priceArr = product.price.filter((p) => p !== ".");
        priceArr = priceArr.join("");
        priceArr = parseInt(priceArr) * product.amount;

        // tổng tiền chung toàn bộ sản phẩm vì lúc này giá sản phẩm đang ở dạng number nên cộng dồn được
        total = total + priceArr;

        // chuyển tổng tiền của sản phẩm riêng dựa theo số lượng thành dạng array có dấu chấm mỗi giá trị đơn vị
        const array = [];

        while (priceArr > 0) {
          const digit = priceArr % 10;
          array.unshift(digit);
          priceArr = Math.floor(priceArr / 10);
        }

        const length = array.length;
        const indexFix = [3, 6, 9, 12];
        for (const index of indexFix)
          if (index < length) array.splice(length - index, 0, ".");
        return { ...product, total: array };
      });
      state.items = fixPrice;
      // chuyển đổi tổng tiền toàn bộ sản phẩm thành string

      const totalArr = [];

      while (total > 0) {
        const digit = total % 10;
        totalArr.unshift(digit);
        total = Math.floor(total / 10);
      }

      const length = totalArr.length;
      const indexFix = [3, 6, 9, 12];
      for (const index of indexFix)
        if (index < length) totalArr.splice(length - index, 0, ".");

      state.total = totalArr;
    },
    delete(state) {},
  },
});

export const cartActions = cartSlide.actions;

export default cartSlide.reducer;
