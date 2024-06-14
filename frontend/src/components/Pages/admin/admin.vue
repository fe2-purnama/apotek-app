<script setup>

</script>

<template>
  <div id="main">
    <h1>Welcome Back "Admin01" !</h1>
    <p>check your supplies and its availability here</p>
  </div>
  
  <div id="account">
    <p>Name : John Doe</p>
    <p>Status : Admin #01</p>
    <p>Position : Supplier Admin</p>
    <p>Email : John_Doe123@example.org</p>
  </div>

<table border="1">
  <tr>
    <td>Index</td>
    <td>Item ID</td>
    <td>Product Name</td>
    <td>Quantity</td>
    <td>Availability</td>
  </tr>
  <tr>
    <td>put your index here</td>
    <td>your item ID</td>
    <td>your product name</td>
    <td>product's quantity</td>
    <td>your products availability</td>
  </tr>
</table>

</template>

<style scoped>

/* Main container styling */
#main {
  padding: 20px;
  max-width: 800px;
  margin: 40px auto;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-radius: 10px;
  h1 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  }
  p {
    text-align: center;
  }
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

/* Account information styling */
#account {
  background: #fff;
  padding: 20px;
  max-width: 300px;
  margin: 20px auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-radius: 8px;
}

#account p {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

/* Table styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  text-align: center;
  padding: 8px;
}

th {
  background-color: #f8f8f8;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Responsive design */
@media (max-width: 768px) {
  #main, #account {
    width: 90%;
    margin: 20px auto;
  }
}
</style>