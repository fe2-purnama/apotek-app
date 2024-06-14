<script setup>

</script>

<template>
  <div id="main">
    <h1>Welcome Back "Your_Name" !</h1>
    <p>check your team and employees here</p>
  </div>
  
  <div id="account">
    <p>Name : John Doe</p>
    <p>Status : Super Admin</p>
    <p>Position : Human Resource Development (HRD)</p>
    <p>Email : John_Doe123@example.org</p>
  </div>

  <div id="admincheck">
    <!-- cek tabel admin -->
    <div class="admintable">
      <button class="admintable">
        <a href="#table">
        check your admin
      </a>
    </button>
    </div>
    <!-- nambah admin -->
    <div class="adminadd">
      <button class="adminadd">
        add your admin
      </button>
    </div>
  </div>

  <div id="table">
    <table border="1">
  <tr>
    <td>Index</td>
    <td>Admin_ID</td>
    <td>Name</td>
    <td>Position</td>
    <td>Status</td>
    <td>Action</td>
  </tr>
  <tr>
    <td>Admin_index</td>
    <td>Admin_ID</td>
    <td>Admin Name</td>
    <td>Admin's Position</td>
    <td>Employed</td>
    <td>
      <button>
        remove admin
      </button>
    </td>
  </tr>
</table>
  </div>

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

button {
  background-color: #8b0000;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin: 10px;
  &:hover {
    background-color: #be0000;
  }
}

button.admintable{
    background-color: #005a5a;
    &:hover{
      background-color: #009494;
    }
    a{
          text-decoration: none;
          color: white;
    }
  }

button.adminadd{
  background-color: #005a5a;
  &:hover{
    background-color: #009494;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  #main, #account {
    width: 90%;
    margin: 20px auto;
  }
}
</style>