package com.example.patto_backend.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.sql.Timestamp;

public class Order {
    int user_id;
    int address_id;
    double amount;
    Timestamp timestamp;

    public Order(int user_id, int address_id, double amount, Timestamp timestamp) {
        this.user_id = user_id;
        this.address_id = address_id;
        this.amount = amount;
        this.timestamp = timestamp;
    }

    public Order(ResultSet rs) throws SQLException {
        this.user_id = rs.getInt("user_id");
        this.address_id = rs.getInt("address_id");
        this.amount = rs.getDouble("amount");
        this.timestamp = rs.getTimestamp("timestamp");
    }

    public int getUser_id() {
        return user_id;
    }

    public int getAddress_id() {
        return address_id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
