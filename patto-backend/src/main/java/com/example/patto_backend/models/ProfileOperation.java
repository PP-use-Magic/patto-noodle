package com.example.patto_backend.models;

import com.example.patto_backend.utility.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProfileOperation {
    private static Connection connection;
        public static ArrayList<Profile> getProfile(int id) throws SQLException {
        try {
            connection = DBConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT email,firstname,lastname,gender,birthdate,mobile_phone FROM users WHERE id = ?");
            preparedStatement.setInt(1,id);
            ResultSet rs = preparedStatement.executeQuery();
            ArrayList<Profile> profile = new ArrayList<Profile>();
            if (rs.next()){
                profile.add(new Profile(rs));
            }
            return profile;
        }
        finally {
            connection.close();
        }

    }
}
