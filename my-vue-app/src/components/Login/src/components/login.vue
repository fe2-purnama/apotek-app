<script setup>
import { ref, computed } from 'vue';
</script>

<template>
    <form id="registration-form">
    <label for="username">Username:</label>
    <br>
    <input type="text" id="username" name="username" placeholder="eg. Jogn_Doe123">
    <br>
    <!-- PASSWORD START -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <!-- PASSWORD END -->

    <!-- ganti password -->
    <a class="RESET" href="#">
        <p>
            Reset Password
        </p>
    </a>
    <!-- ganti password end-->

    <!-- link to register -->
    <div class="Link-Register">
        <p>
            Don't have an account? <a href="#">Register</a> here.
        </p>
    </div>
    <!-- link to register end-->
    <input type="submit" value="Log in">
    </form>
</template>

<style scoped>
     form {
            max-width: 400px;
            margin: 0 auto;
            padding: 30px;
            background-color: #f8f8f8;
            border-radius: 8px;
            box-shadow: 10px 10px 17px -6px rgba(0,0,0,0.52);
            -webkit-box-shadow: 10px 10px 17px -6px rgba(0,0,0,0.52);
            -moz-box-shadow: 10px 10px 17px -6px rgba(0,0,0,0.52);
        }
        label {
            display: block;
            margin-bottom: 8px;
        }
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            background-color: #292929;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #5a5a5a;
        }

        .RESET {
            text-align: right;
            margin-right: 10px;
            color: #3b3bff;
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
        }

        .Link-Register {
            font-size: 18px;
            font-weight: 400;
        }

        .Link-Register a {
            color: #3b3bff;
            text-decoration: none;
            font-weight: 500;
        }
</style>