<template>
    <section class="container">
        <div class="container text-center my-3">
            <div class="row mx-auto my-auto justify-content-center">
                <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="col-md-3">
                                <div class="card mx-2"> <!-- Added mx-2 for margin -->
                                    <div class="card-img">
                                        <img src="@/assets/Card1.png" class="img-fluid" width="150px" alt="Card 1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card mx-2"> <!-- Added mx-2 for margin -->
                                    <div class="card-img">
                                        <img src="@/assets/Card2.png" class="img-fluid" width="150px" alt="Card 2">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card mx-2"> <!-- Added mx-2 for margin -->
                                    <div class="card-img">
                                        <img src="@/assets/Card1.png" class="img-fluid" width="150px" alt="Card 1">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card mx-2"> <!-- Added mx-2 for margin -->
                                    <div class="card-img">
                                        <img src="@/assets/Card4.png" class="img-fluid" width="150px" alt="Card 4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card mx-2"> <!-- Added mx-2 for margin -->
                                    <div class="card-img">
                                        <img src="@/assets/Card1.png" class="img-fluid" width="150px" alt="Card 1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button"
                        data-bs-slide="prev">
                        <i class="bi bi-caret-left-fill" aria-hidden="true"></i>
                    </a>
                    <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button"
                        data-bs-slide="next">
                        <i class="bi bi-caret-right-fill" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((el) => {
        const minPerSlide = 4;
        let next = el.nextElementSibling;
        for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
});
</script>

<style>
@media (max-width: 767px) {
    .carousel-inner .carousel-item>div {
        display: none;
    }

    .carousel-inner .carousel-item>div:first-child {
        display: block;
    }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
    display: flex;
}

/* medium and up screens */
@media (min-width: 768px) {

    .carousel-inner .carousel-item-end.active,
    .carousel-inner .carousel-item-next {
        transform: translateX(25%);
    }

    .carousel-inner .carousel-item-start.active,
    .carousel-inner .carousel-item-prev {
        transform: translateX(-25%);
    }
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start {
    transform: translateX(0);
}

/* Set arrow colors to black */
.carousel-control-prev-icon,
.carousel-control-next-icon {
    display: none;
}

.carousel-control-prev i,
.carousel-control-next i {
    font-size: 2rem;
    color: black;
}
</style>
