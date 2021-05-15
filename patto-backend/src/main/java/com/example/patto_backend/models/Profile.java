package com.example.patto_backend.models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Profile {
    private String email;
    private String firstname;
    private String surname;
    private String gender;
    private String birthdate;
    private String telephoneNumber;

    public Profile(int id, String email, String firstname, String surname, String gender, String birthdate, String telephoneNumber) {
        this.email = email;
        this.firstname = firstname;
        this.surname = surname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.telephoneNumber = telephoneNumber;
    }

    public Profile(ResultSet resultSet) throws SQLException {
        this.email = resultSet.getString("email");
        this.firstname = resultSet.getString("firstname");
        this.surname = resultSet.getString("lastname");
        this.gender = resultSet.getString("gender");
        this.birthdate = resultSet.getString("birthdate");
        this.telephoneNumber = resultSet.getString("mobile_phone");
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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