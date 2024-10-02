/**
 * Это замена DB для просмотра заявок
 */

const store = {
  payments: new Map<string, object>(),
};

export const setPayment = (payload: { id: string }) => {
  store.payments.set(payload.id, payload);
};

export const getPayment = (id: string) => {
  return store.payments.get(id);
};

export const getPayments = () => {
  return Object.fromEntries(store.payments);
};
