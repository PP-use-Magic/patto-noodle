package com.example.patto_backend.models;

import com.example.patto_backend.utility.DBConnection;

import java.sql.*;
import java.util.ArrayList;

public class ProductOperation {
    private Connection connection;
    public void insertProduct(String title ,String imageUrl ,double price,int product_type,String description) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO  products (title,imageUrl,price,product_type,description ) VALUE (?,?,?,?,?)");
            preparedStatement.setString(1,title);
            preparedStatement.setString(2,imageUrl);
            preparedStatement.setDouble(3,price);
            preparedStatement.setInt(4,product_type);
            preparedStatement.setString(5,description);
            preparedStatement.execute();
        }
        finally {
            connection.close();
        }
    }
    public ArrayList<Product> getProduct() throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM products");
            ResultSet rs = preparedStatement.executeQuery();
            ArrayList<Product> products = new ArrayList<Product>();
            while (rs.next()){
                products.add(new Product(rs));
            }
            return products;
        }
        finally {
            connection.close();
        }

    }
    public double getPrice(int id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT price FROM products WHERE id = ?");
            preparedStatement.setInt(1, id);
            ResultSet rs = preparedStatement.executeQuery();
            if (rs.next()) {
                double price = rs.getDouble(1);
                return price;
            }else {
                return 0;
            }
        } finally {
            connection.close();
        }
    }
}
