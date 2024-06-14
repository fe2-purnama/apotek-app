<script>
</script>

<template>

    <div id="container1">
        <!-- Banner 1 -->
        <div id="banner1">
            <p>
                Banner 1
            </p>
        </div>
        <!-- Banner 2 -->
        <div id="banner2">
            <p>
                Banner 2
            </p>
        </div>
        <!-- Banner 3 -->
        <div id="banner3">
            <p>
                Banner 3
            </p>
        </div>
        <!-- Banner End -->
    </div>
</template>

<style>
#container1 {
    display: flex;
    justify-content: center;
    align-items: center;
}

#banner1, #banner2, #banner3 {
    margin: 10px;
    width: 400px;
    height: 280px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        position: relative;
        font-size: 24px;
        font-weight: 600;
    }
}

#banner1 {
    background-color: #bbbbff;
}

#banner2 {
    background-color: #5ce7b9;
}

#banner3 {
    background-color: #ffbbff;
}
</style>