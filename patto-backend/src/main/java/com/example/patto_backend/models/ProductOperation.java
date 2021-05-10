package com.example.patto_backend.models;

import com.example.patto_backend.utility.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductOperation {
    private Connection connection;
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
}
