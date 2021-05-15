package com.example.patto_backend.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Order_product {
    int product_id;
    int order_id;

    public Order_product(int product_id, int order_id) {
        this.product_id = product_id;
        this.order_id = order_id;
    }
    public Order_product(ResultSet rs) throws SQLException {
        this.product_id = rs.getInt("product_id");
        this.order_id = rs.getInt("order_id");
    }
}
