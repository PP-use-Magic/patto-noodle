package com.example.patto_backend.models;

import com.example.patto_backend.utility.DBConnection;

import java.sql.*;

public class UserOperation {
    private Connection connection;
    public User insertUser(String email, String password, String firstname, String surname, String gender, Date birthdate, String telephoneNumber) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO users (email,password,firstname,lastname,gender,birthdate,mobile_phone) VALUE (?,?,?,?,?,?,?)");
            preparedStatement.setString(1,email);
            preparedStatement.setString(2,password);
            preparedStatement.setString(3,firstname);
            preparedStatement.setString(4,surname);
            preparedStatement.setString(5,gender);
            preparedStatement.setDate(6, birthdate);
            preparedStatement.setString(7,telephoneNumber);
            preparedStatement.execute();
            return this.getUser(email);
        }
        finally {
            connection.close();
        }
    }
    public User getUser(String email) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE email = ?");
            preparedStatement.setString(1,email);
            ResultSet rs = preparedStatement.executeQuery();
            User user = null;
            if (rs.next()){
                user = new User(rs);
            }
            return user;
        }
        finally {
            connection.close();
        }

    }
    public User signInUser(String email,String password) throws SQLException{
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE email = ? AND password = ?");
            preparedStatement.setString(1,email);
            preparedStatement.setString(2,password);
            ResultSet rs = preparedStatement.executeQuery();
            User user = null;
            if (rs.next()){
                user = new User(rs);
            }
            return user;
        }
        finally {
            connection.close();
        }
    }
    public void updatephonenumber(int user_id, String mobile_phone) throws SQLException{
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("UPDATE users SET mobile_phone=? WHERE id=?");
            preparedStatement.setString(1,mobile_phone);
            preparedStatement.setInt(2,user_id);
            preparedStatement.execute();
        }
        finally {
            connection.close();
        }
    }

}
