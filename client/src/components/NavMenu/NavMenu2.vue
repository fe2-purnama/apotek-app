<style>
@import 'style2.css';
</style>

<template>
    <section class="container-fluid" id="NavMenu2">
        <nav class="navbar navbar-expand-lg shadow bg-body-tertiary rounded" id="Nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="Logo">Apotek </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse space-beetwen" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto justify-content-center">
                        <a class="nav-link active" aria-current="page" href="#">Beranda</a>
                        <a class="nav-link" href="#">Tentang Kami</a>
                        <a class="nav-link" href="#">Keunggulan</a>
                    </div>
                    <div class="Button">
                        <button type="button" class="btn btn-dark "
                            onclick="window.location.href='/login'">Login</button>
                        <button type="button" class="btn btn-outline-dark ms-2"
                            onclick="window.location.href='/RegistUser'">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>