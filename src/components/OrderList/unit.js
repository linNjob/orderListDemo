export function filterOrdersByStatus(orders, status) {
    return orders.filter((item) => {
        return status.includes(item.status.code);
    })
}