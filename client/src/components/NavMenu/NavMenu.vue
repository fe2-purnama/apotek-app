<style scoped>
@import './style.css';
</style>

<template>
    <section class="justify-content-center bg-white w-full">
        <nav class="navbar bg-body-white  navbar-expand-lg navbar-expand-md shadow-sm rounded p-2">
            <div class="container-fluid">
                <div class="d-flex">
                    <a class="navbar-brand">Logo Apotek</a>
                    <form class="d-flex" role="search" id="formsearch">
                        <input class="form-control me-2 w-200 " id="search" type="search" placeholder="Cari Obat-obatan"
                            aria-label="Search">
                        <button class="btn btn-dark " id="button" type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>

                <div class="d-flex justify-content-start gap-1" id="keranjang">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor"
                        class="bi bi-cart4" viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor"
                        class="bi bi-file-earmark-diff" viewBox="0 0 16 16">
                        <path
                            d="M8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5m-2.5 6.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
                        <path
                            d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>

                    <button class="btn btn-dark btn-sm">halo, user</button>
                </div>
            </div>
        </nav>
    </section>

</template>

<script>

</script>