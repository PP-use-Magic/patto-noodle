package com.example.patto_backend.models;

import com.example.patto_backend.utility.DBConnection;

import java.sql.*;
import java.util.ArrayList;

public class OrderOperation {
    private static Connection connection;
    public int insertOrder(int user_id,int address_id,double amount) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO orders (user_id,address_id,amount) VALUE (?,?,?)", Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setInt(1,user_id);
            preparedStatement.setInt(2,address_id);
            preparedStatement.setDouble(3,amount);
            preparedStatement.execute();
            ResultSet rs = preparedStatement.getGeneratedKeys();
            if (rs.next()){
                int id = rs.getInt(1);
                return id;
            }else {
                return -1;
            }
        }
        finally {
            connection.close();
        }
    }


    public void insertOrder_product(int product_id,int order_id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO ordered_products (product_id,order_id) VALUE (?,?)");
            preparedStatement.setInt(1,product_id);
            preparedStatement.setInt(2,order_id);
            preparedStatement.execute();
        }
        finally {
            connection.close();
        }
    }
    public ArrayList<Order> getOrderDisplay(int user_id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT timestamp, user_id, address_id, amount FROM orders WHERE user_id = ?");
            preparedStatement.setInt(1,user_id);
            ResultSet rs = preparedStatement.executeQuery();
            ArrayList<Order> orderdisplay = new ArrayList<Order>();
            while (rs.next()){
                orderdisplay.add(new Order(rs));
            }
            return orderdisplay;
        }
        finally {
            connection.close();
        }
    }
}
