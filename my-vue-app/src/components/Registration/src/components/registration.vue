<script setup>
import { ref, computed } from 'vue';
</script>

<template>
    <form id="registration-form">
    <label for="username">Username:</label>
    <br>
    <input type="text" id="username" name="username" placeholder="eg. Jogn_Doe123">
    <br>
    <label for="phone">Phone Number:</label>
    <br>
    <input type="tel" id="phone" name="phone" placeholder="eg. +1 234567890">
    <br>
    <label for="dob">Date of Birth:</label>
    <br>
    <input type="date" id="dob" name="dob">
    <br>
    <!-- PASSWORD START -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <br>
    <label for="confirm-password">Confirm Password:</label>
    <br>
    <input type="password" id="confirm-password" name="confirm-password">
    <br>
    <!-- PASSWORD END -->
    <input type="submit" value="Sign Up">
    </form>
</template>

<style scoped>
    #registration-form {
    width: 300px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    }

    #registration-form label {
    display: block;
    margin-top: 10px;
    }

    #registration-form input[type="text"],
    #registration-form input[type="tel"],
    #registration-form input[type="date"],
    #registration-form input[type="password"] {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    }

    #registration-form input[type="submit"] {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #1a1a1a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    #registration-form input[type="submit"]:hover {
    background-color: #464646;
    }

    /* PASSWORD */
    .password-wrapper {
    margin-bottom: 10px;
    }
</style>