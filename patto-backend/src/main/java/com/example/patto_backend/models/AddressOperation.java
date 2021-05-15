package com.example.patto_backend.models;

import com.example.patto_backend.utility.DBConnection;

import java.sql.*;
import java.util.ArrayList;

public class AddressOperation {
    private static Connection connection;
    public Address insertAddress(String house_number, String road, String country, String district , String province , String postal_code, int user_id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO address (house_number,road,country,district,province,postal_code,user_id) VALUE (?,?,?,?,?,?,?)");
            preparedStatement.setString(1,house_number);
            preparedStatement.setString(2,road);
            preparedStatement.setString(3,country);
            preparedStatement.setString(4,district);
            preparedStatement.setString(5,province);
            preparedStatement.setString(6, postal_code);
            preparedStatement.setInt(7,user_id);
            preparedStatement.execute();
            return this.getAddress(user_id);
        }
        finally {
            connection.close();
        }
    }
    public static Address getAddress(int id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * from address where user_id = ?");
            preparedStatement.setInt(1, id);
            ResultSet rs = preparedStatement.executeQuery();
            Address address = null;
            if (rs.next()){
                address = new Address(rs);
            }
            return address;
        }
        finally {
            connection.close();
        }
    }
    public static int getIdAddress(int id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT id from address where user_id = ?");
            preparedStatement.setInt(1, id);
            ResultSet rs = preparedStatement.executeQuery();
            int addressid;
            if (rs.next()){
                addressid = rs.getInt(1);
                return addressid;
            }else {
                return -1;
            }
        }
        finally {
            connection.close();
        }
    }
    public void updateAddress(String house_number, String road, String country, String district , String province , String postal_code, int user_id, String id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE address SET house_number=? ,road=?,country=?,district=?,province=?,postal_code=? WHERE user_id = ? AND id = ?");
            preparedStatement.setString(1,house_number);
            preparedStatement.setString(2,road);
            preparedStatement.setString(3,country);
            preparedStatement.setString(4,district);
            preparedStatement.setString(5,province);
            preparedStatement.setString(6,postal_code);
            preparedStatement.setInt(7,user_id);
            preparedStatement.setString(8,id);
            preparedStatement.execute();
        } finally {
            connection.close();
        }
    }
}
