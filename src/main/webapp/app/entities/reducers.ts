import product from 'app/entities/product/product.reducer';
import category from 'app/entities/category/category.reducer';
import customer from 'app/entities/customer/customer.reducer';
import order from 'app/entities/order/order.reducer';
import orderItem from 'app/entities/order-item/order-item.reducer';
import review from 'app/entities/review/review.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  product,
  category,
  customer,
  order,
  orderItem,
  review,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
