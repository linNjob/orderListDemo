export function filterOrdersByStatus(orders, status) {
    return orders.filter((item) => {
        return item.status.code === status[0] || item.status.code === status[1]
    })
}