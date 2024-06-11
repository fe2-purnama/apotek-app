<template>
    <section class="container-fluid" id="NavMenu2">
        <nav class="navbar navbar-expand-lg shadow bg-body-tertiary" id="Nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="Logo">
                    <img src="@/assets/logo.png" alt="Logo" width="65" class="d-inline-block align-top">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse space-between" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto justify-content-center">
                        <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                        <a class="nav-link" href="#tentangKami">Tentang Kami</a>
                        <a class="nav-link" href="#keunggulanKami">Keunggulan</a>
                    </div>
                    <div class="Button">
                        <button type="button" class="btn btn-dark"
                            onclick="window.location.href='/login'">Login</button>
                        <button type="button" class="btn btn-outline-dark ms-2"
                            onclick="window.location.href='/RegistUser'">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>

<style scoped>
#NavMenu2 {
    background-color: #f8f9fa;
    width: 100%;
    /* Set the width to 100% */
    position: fixed;
    /* Fix the position to the top */
    top: 0;
    /* Align to the top */
    left: 0;
    /* Align to the left */
    z-index: 1000;
    /* Ensure it stays on top of other content */
}

.navbar {
    padding: 0.5rem 1rem;
    /* Adjust padding for a more proportional look */
    width: 100%;
    /* Set the width to 100% */
    margin: 0 auto;
    /* Center the navbar */
}

.navbar-brand {
    font-weight: 600;
    font-size: 1.5rem;
}

.container-fluid {
    max-width: 100%;
    /* Ensure the container fills the width */
    padding-right: 0;
    /* Remove padding */
    padding-left: 0;
    /* Remove padding */
}


.navbar-nav .nav-link {
    position: relative;
    padding: 1rem 5rem;
    margin: 0px 7px;
    font-weight: 500;
    color: #343a40;
    transition: color 0.3s;
}

.navbar-nav .nav-link:hover {
    color:   #96db5b;
}

.navbar-nav .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #008036;
    transition: width 0.3s ease;
    -webkit-transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after {
    width: 100%;
    left: 0;
    background: #008036;
}
</style>
