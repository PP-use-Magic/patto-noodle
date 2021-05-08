package com.example.patto_backend.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class User {
    private int id;
    private String email;
    private String password;
    private String firstname;
    private String surname;
    private String gender;
    private String birthdate;
    private String telephoneNumber;

    public User(int id, String email, String password, String firstname, String surname, String gender, String birthdate, String telephoneNumber) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.telephoneNumber = telephoneNumber;
    }

    public User(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public User(ResultSet resultSet) throws SQLException {
        this.id = resultSet.getInt("id");
        this.email = resultSet.getString("email");
        this.password = resultSet.getString("password");
        this.firstname = resultSet.getString("firstname");
        this.surname = resultSet.getString("lastname");
        this.gender = resultSet.getString("gender");
        this.birthdate = resultSet.getString("birthdate");
        this.telephoneNumber = resultSet.getString("mobile_phone");
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }
}